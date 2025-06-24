import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        ;
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        ;
        res.status(422).json({ errors: errors.array() });
    };
};
//forlogin
const loginValidator = [
    body("email").trim().isEmail().withMessage("Invalid email format"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
];
//for signup
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
export { validate, signupValidator as signupValidator };
export { loginValidator as loginValidator };
export default validate;
export const chatcompletionvalidator = [
    body("message").notEmpty().isString().withMessage("message is required"),
];
//# sourceMappingURL=validators.js.map