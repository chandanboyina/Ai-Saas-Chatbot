import User from '../models/User.js';
import { hash, compare } from 'bcrypt';
import { generateToken } from "../utils/token.js";
import { COOKIE_NAME } from "../utils/constants.js";
import { chatSchema } from "../models/User.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
//for user signup
export const userSignup = async (req, res, next) => {
    try {
        //user signup logic
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(401).send({ message: "User already exists" });
            return;
        }
        const hashedpassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedpassword });
        await user.save();
        //creating token and cookies
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        }); // Clear any existing auth token cookie
        const token = generateToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7); // Set expiration to 7 days from now
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires, httpOnly: true, signed: true });
        res.status(201).json({ message: "ok", name: user.name, email: user.email, id: user._id.toString() });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "error", cause: error.message });
        return;
    }
};
//for user login
export const userlogin = async (req, res, next) => {
    try {
        //user login
        const { email, password } = req.body;
        const { id } = req.params;
        // original one 
        //const user = await User.findOne({email});
        //below is modified
        const user = await User.findOne({ id });
        //added
        chatSchema.statics.findByEmail = function (email) {
            return this.findOne(email);
        };
        // or 
        // const user = await User.findById({User});
        if (!user) {
            res.status(401).send({ message: "User not found" });
            return;
        }
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
            res.status(403).send("Invalid password");
            return;
        }
        //creating token and cookies
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        }); // Clear any existing auth token cookie
        const token = generateToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7); // Set expiration to 7 days from now
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires, httpOnly: true, signed: true });
        res.status(200).json({ message: "ok", name: user.name, email: user.email, id: user._id.toString() });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "error", cause: error.message });
    }
};
//for user token verification
export const verifyUser = async (req, res, next) => {
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
        res.status(200).json({ message: "ok", name: user.name, email: user.email, id: user._id.toString() });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "error", cause: error.message });
    }
};
export const userlogout = async (req, res, next) => {
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
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });
        res.status(200).json({ message: "ok", name: user.name, email: user.email, id: user._id.toString() });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(200).json({ message: "error", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map