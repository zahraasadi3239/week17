import styles from "./RegistrationForm.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useRegister } from "../services/mutations";


function RegistrationForm() {
  const router=useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
    comfirmPassword: "",
  });

 
 const{mutate}=useRegister()
  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };
  const registerHandler = (event) => {
   
    event.preventDefault();
    
    const { username, password, comfirmPassword } = form;

    if (!username || !password)
      alert("User Name and Password is Necessary.");

    if (password !== comfirmPassword)
      return alert("Passwords Is'nt The Same.");

    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          console.log(data)
          router.push("/login")
         
          console.log(data.data.message);
         
        },
        onError: (error) => {
          console.log(error.response.data.message);
        },
      }
    );
  };


  const initialValues = {
    username: "",
    password: "",
    comfirmPassword: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("نام کاربری الزامی است"),
    password: Yup.string()
      .required("رمزعبورالزامی است")
      .min(6, "رمزعبوربایدحداقل 6کارکترباشد"),
    comfirmPassword: Yup.string()
      .required("رمزعبورالزامی است")
      .min(6, "رمزعبوربایدحداقل 6کارکترباشد"),
  });

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/Union.png" alt="Union" />
        <h4>فرم ثبت نام</h4>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form onSubmit={registerHandler}>
          <div className={styles.form}>
            <div className={styles.formik}>
              <Field
                type="text"
                name="username"
                className={styles.input}
                placeholder="نام کاربری"
                value={form.username}
                onChange={changeHandler}
              />
              <ErrorMessage name="username" />
            </div>
            <div className={styles.formik}>
              <Field
                type="password"
                name="password"
                className={styles.input}
                placeholder="رمزعبور"
                value={form.password}
                onChange={changeHandler}
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className={styles.formik}>
              <Field
                type="password"
                name="comfirmPassword"
                className={styles.input}
                placeholder="تکراررمزعبور"
                value={form.comfirmPassword}
                onChange={changeHandler}
              />
              <ErrorMessage name="comfirmPassword" component="div" />
            </div>

            <button type="submit">ثبت نام</button>
            <Link href="/products">حساب کاربری دارید؟</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationForm;
