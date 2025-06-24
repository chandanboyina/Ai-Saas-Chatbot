import { Router } from "express";
import { getAllUsers, userlogin, userlogout, userSignup, verifyUser } from "../controllers/user-controllers.js";
import { signupValidator, validate } from "../utils/validators.js";
import { loginValidator } from "../utils/validators.js";
import { verifytoken } from "../utils/token.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
//forlogin
userRoutes.post("/login", validate(loginValidator), userlogin);
userRoutes.get("/auth-status", verifytoken, verifyUser);
userRoutes.get("/logout", verifytoken, userlogout);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map