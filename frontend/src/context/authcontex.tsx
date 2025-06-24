import {createContext, useContext, useEffect, useState, type ReactNode} from "react"
import { checkauthstatus, loginUser, logoutuser, signupUser } from "../helper/apicommunicators"
type User={
    name:string
    email:string
    password:string
}
type Userauth={
    isLoggedIn:boolean
    user: User | null;
    login: (email:string, password:string)=>Promise<void>;
    signup:(name:string, email:string, password:string)=>Promise<void>
    logout:()=>Promise<void>
}
const Authcontext=createContext<Userauth | null>(null);
export const Authprovider=({children}: {children: ReactNode})=>{
    const [user, setUser]=useState<User | null>(null)
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    useEffect(()=>{
        //fetch if the user cookies are valid then skip
        async function checkstatus(){
            const data=await checkauthstatus()
            if (data) {
                setUser({email: data.email, name: data.name, password: data.password})
                setIsLoggedIn(true)
            }
        }
        checkauthstatus()
    }, [])
    const login= async (email:string, password:string)=>{
        const data = await loginUser(email, password)
        try {
            
            if (data) {
                setUser({email: data.email, name: data.name, password: data.password})
                setIsLoggedIn(true)
            }
        } catch (error) {
            console.error("Login failed:", error)
        }
    }
    const signup= async (name:string, email:string, password:string)=>{
        const data = await signupUser(name, email, password)
        try {
            
            if (data) {
                setUser({email: data.email, name: data.name, password: data.password})
                setIsLoggedIn(true)
            }
        } catch (error) {
            console.error("Login failed:", error)
        }
    }
    const logout= async ()=>{
        await logoutuser()
        setIsLoggedIn(false)
        setUser(null)
        window.location.reload()
    }
    const value={
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };
    return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>


};

export const useauth=()=> useContext(Authcontext);
/*
//added for 22nd line
interface LoginResponse {
    email: string;
    name: string;
    password: string;
}

async function loginUser(email: string, password: string): Promise<LoginResponse> {
    throw new Error("Function not implemented.")
}
    */
//up to here
