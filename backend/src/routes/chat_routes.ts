import { Router } from "express";
import { verifytoken } from "../utils/token.js";
import validate, { chatcompletionvalidator } from "../utils/validators.js";
import { deletecharts, generatechatcompletion, sendchatstouser } from "../controllers/chatcontroller.js";

const chatRoutes=Router();
chatRoutes.post("/new",validate(chatcompletionvalidator), verifytoken, generatechatcompletion)
chatRoutes.get("/all-chats", verifytoken, sendchatstouser)
chatRoutes.delete("/delete", verifytoken, deletecharts)
export default chatRoutes;
