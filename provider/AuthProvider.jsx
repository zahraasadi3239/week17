import { useRouter } from "next/router";
import { createContext,useContext, useEffect } from "react";
import { getCookie } from "../utils/cookie";

const AuthContext=createContext(null)

function AuthProvider({ children }) {
 
  const router=useRouter();
  let token=null
  useEffect(()=>{
     token=getCookie("token");
    
  },[token])
  useEffect(()=>{
    
   
     if(!token){
      router.push('/registration')
    
     }
  },[token,router])
 
  return(
    <AuthContext.Provider value={{token}}>
      {children}
    </AuthContext.Provider>
  )

}
export default AuthProvider;

export const useAuth=()=>useContext(AuthContext)
