import React, { useState } from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import styles from "./LoginForm.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useLogin } from "../services/mutations";
import { useRouter } from "next/router";
import { setCookie } from "../utils/cookie";



function LoginForm() {
  const router=useRouter();
  const { mutate } = useLogin();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
 

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };
  const loginHandler = (event) => {
    event.preventDefault();

    const { username, password } = form;
    if (!username || !password)
      return alert("User Name and Password is Necessary");
    mutate(form, {
      onSuccess: (data) => {
       console.log(data.token)
       setCookie("token",data.token)
       setCookie("username",username)
        router.push("/products");
      
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
  };

  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("نام کاربری الزامی است"),
    password: Yup.string()
      .required("رمزعبورالزامی است")
      .min(6, "رمزعبوربایدحداقل 6کارکترباشد"),
  });

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/Union.png" alt="Union" />
        <p>فرم ورود</p>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form onSubmit={loginHandler}>
          <div className={styles.form}>
            <div className={styles.formik}>
              <Field
                type="text"
                placeholder="نام کاربری"
                name="username"
                value={form.username}
                onChange={changeHandler}
                className={styles.input}
              />
              <ErrorMessage name="username" component="div" />
            </div>
            <div className={styles.formik}>
              <Field
                type="password"
                placeholder="رمز عبور"
                name="password"
                value={form.password}
                onChange={changeHandler}
                className={styles.input}
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">ورود</button>
            <Link href="/login">ایجاد حساب کاربری!</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
