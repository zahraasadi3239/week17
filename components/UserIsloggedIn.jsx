import React from "react";
import styles from "./UserIsloggedIn.module.css";
import { getCookie } from "../utils/cookie";
function UserIsloggedIn() {
  const token=getCookie("token");
  const username=getCookie("username")
 console.log(token)
 console.log(username)

  return (
    <div className={styles.container}>
      <img src="./user.png" />
      <div>
      <p className={styles.user}>{username}</p>
      <p className={styles.role}>مدیر</p>
      </div>
    </div>
  );
}

export default UserIsloggedIn;
