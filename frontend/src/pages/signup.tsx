import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/customizedinput";
import {toast} from 'react-hot-toast'
import { useauth } from "../context/authcontex";
import { useNavigate } from "react-router-dom";

const signup=()=>{
    const auth=useauth();
    const navigate = useNavigate();
    const handlesubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        //console.log(name, email, password)
        try {
            toast.loading("signing up..", {id:"signup"})
            await auth?.signup(name, email, password)
            toast.success("signup successfully!", {id:"signup"})
        } catch (error) {
            console.log(error)
            toast.error("signup in failed!", {id:"signup"})
        }
 
    
    }

    useEffect(() => {
        if(auth?.user){
            navigate("/chat");
        }
    }, [auth])

    return (
        <Box sx={{justifyContent:"center"}} width={"100%"} height={"100%"} display="flex" flex={1}>
            <Box padding={2} mt={3} display={{md:"flex", sm:"none", xs:"none"}} sx={{justifyContent:"center"}}>
                <img src="Index-Robo.png" alt="0" width={"300px"}></img>
                <Box sx={{marginLeft:"120px"}} display={"flex"} flex={{xs:1, md:0.5}} justifyContent={"center"} padding={2} ml={"auto"} mt={16}>
                <form onSubmit={handlesubmit} style={{margin:"auto", padding:"30px", boxShadow:"0 0 20px 5px  white", borderRadius:"15px", border:"none" }}>
                    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center" }}>
                        <Typography variant="h4" textAlign="center" padding={2} >SignUp</Typography>
                        <CustomizedInput type="text" name="name" label="Name"></CustomizedInput>
                        <CustomizedInput type="email" name="email" label="Email"></CustomizedInput>
                        <CustomizedInput type="password" name="password" label="Password"></CustomizedInput>
                        <Button type="submit" sx={{px:2, py:1, mt:2, width:"400px",borderRadius:2, bgcolor:"white", ":hover":{bgcolor:"white", color:"black"}}}>SignUp</Button>
                    </Box>
                </form>
            </Box>
            </Box>
            

        </Box>
    );
}
export default signup;