import app from "./app.js";
import { connecToDatabase } from "./db/connection.js";
import dotenv from "dotenv"
import express from "express";
import session from "express-session";
import { Request } from "express";
dotenv.config()
//added one
// Extend Express Request type to include session
/*declare module "express-session" {
  interface SessionData {
    user?: { email: string; name: string };
  }
}

app.post('/user/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });
    res.json({ message: 'Login endpoint reached' });
})*/
//upto here it as add

//connections and listners
const PORT=process.env.PORT || 5000;
connecToDatabase()
.then(()=>{

    app.listen(PORT,()=>console.log("server open & connected to database"));
})
.catch((err)=>console.log(err));


 