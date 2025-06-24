import axios from 'axios'
export const loginUser=async (email:string, password:string)=>{
    const res=await axios.post("/user/login", {email, password})
    if(res.status !==200){
        throw new Error("Unable to login")
    }
    const data=await res.data
    return data;
}

export const signupUser=async (name:string, email:string, password:string)=>{
    const res=await axios.post("/user/signup", {name, email, password})
    if(res.status !==201){
        throw new Error("Unable to signup")
    }
    const data=await res.data
    return data;
}

export const checkauthstatus=async ()=>{
    const res=await axios.get("/user/auth-status")
    if(res.status!==200){
        throw new Error("Unable to authenticate");
    }
    const data=await res.data;
    return data;
}
export const sendchatrequest=async (message:string)=>{
    console.log("Sending:", { message }); // logging the payload being sent

    const res=await axios.post("/chat/new", {message})
    if(res.status!==200){
        throw new Error("Unable to send chat");
    }
    const data=await res.data;
    return data;
}

export const getuserchats=async ()=>{

    const res=await axios.get("/chat/all-chats")
    if(res.status!==200){
        throw new Error("Unable to send chat");
    }
    const data=await res.data;
    return data;
}

export const deleteuserchats=async ()=>{

    const res=await axios.delete("/chat/delete")
    if(res.status!==200){
        throw new Error("Unable to delete chat");
    }
    const data=await res.data;
    return data;
}

export const logoutuser=async ()=>{

    const res=await axios.get("/user/logout")
    if(res.status!==200){
        throw new Error("Unable to delete chat");
    }
    const data=await res.data;
    return data;
}