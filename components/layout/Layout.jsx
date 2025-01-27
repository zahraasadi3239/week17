import styles from "./Layout.module.css"
import Link from "next/link"

function Layout({children}) {
  return (
    <>
     <header className={styles.header}>
        <div>
             <Link href="/">Home</Link>
        <Link href="/products">Product</Link></div>
    
 <div>
    <Link href="/login">ورود</Link>
    <Link href="/registration">ثبت نام</Link>
 </div>

     </header>
     <div>{children}</div>
     </>
   
    
  )
}

export default Layout