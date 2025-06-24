import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/customizedinput";
import {toast} from 'react-hot-toast'
import { useauth } from "../context/authcontex";
import { useNavigate } from "react-router-dom";
import type { BsJustifyRight } from "react-icons/bs";

const Login=()=>{
    const auth=useauth();
    const navigate = useNavigate();
    const handlesubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const email=formData.get("email") as string;
        const password=formData.get("password") as string;
        //console.log(email, password)
        try {
            toast.loading("loging in..", {id:"login"})
            await auth?.login(email, password)
            toast.success("login successfully..", {id:"login"})
        } catch (error) {
            console.log(error)
            toast.error("loging in failed!", {id:"login"})
        }
 
    
    }

    useEffect(() => {
        if(auth?.user){
            navigate("/chat");
        }
    }, [auth])

    return (
        <Box sx={{justifyContent:"center"}} width={"100%"} height={"100%"} display="flex" flex={1}>
            <Box  padding={2} mt={3} display={{md:"flex", sm:"none", xs:"none"}  }>
                <img src="Index-Robo.png" alt="0" width={"300px"}></img>
                <Box display={"flex"} flex={{xs:1, md:0.5}} justifyContent={"center"} padding={2} ml={"auto"} mt={16}>
                <Box sx={{marginLeft:"120px", marginBottom:"150px"}}></Box>
                <form onSubmit={handlesubmit} style={{margin:"auto", padding:"30px", boxShadow:"0 0 20px 5px  white", borderRadius:"15px", border:"none" }}>
                    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center" }}>
                        <Typography variant="h4" textAlign="center" padding={2} >Login</Typography>
                        <CustomizedInput type="email" name="email" label="Email"></CustomizedInput>
                        <CustomizedInput type="password" name="password" label="Password"></CustomizedInput>
                        <Button type="submit" sx={{px:2, py:1, mt:2, width:"400px",borderRadius:2, bgcolor:"white", ":hover":{bgcolor:"white", color:"black"}}}>Login</Button>
                    </Box>
                </form>
            </Box>
            </Box>
            

        </Box>
    );
}
export default Login;