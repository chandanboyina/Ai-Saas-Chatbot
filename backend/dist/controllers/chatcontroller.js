import User from "../models/User.js";
import { openaiconfig } from "../configuration/openAi-config.js";
import { OpenAI } from "openai";
export const generatechatcompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            res.status(401).json({ message: "user not registered or Token malfunctioned" });
            return;
        }
        //grab chats of user
        const chats = user.chats.map(({ role, content }) => ({ role, content }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        //send all the chats with new one to openAI api
        const config = openaiconfig();
        //@ts-ignore
        const openai = new OpenAI(config);
        const chatresponse = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: chats,
        });
        user.chats.push(chatresponse.choices[0].message);
        await user.save();
        res.status(200).json({ chats: user.chats });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
        return;
    }
};
export const sendchatstouser = async (req, res, next) => {
    try {
        //user login
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            res.status(401).send({ message: "User not found or Token malfunctioned" });
            return;
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            res.status(401).send("permission not matching...");
            return;
        }
        res.status(200).json({ message: "ok", chats: user.chats });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "error", cause: error.message });
    }
};
export const deletecharts = async (req, res, next) => {
    try {
        //user login
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            res.status(401).send({ message: "User not found or Token malfunctioned" });
            return;
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            res.status(401).send("permission not matching...");
            return;
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        res.status(200).json({ message: "ok" });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "error", cause: error.message });
    }
};
//# sourceMappingURL=chatcontroller.js.map