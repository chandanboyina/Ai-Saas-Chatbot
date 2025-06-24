import jwt from 'jsonwebtoken';
import { COOKIE_NAME } from './constants.js';
export const generateToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
export const verifytoken = async (req, res, next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    return new Promise((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if (err) {
                reject(err.message);
                return res.status(401).json({ message: "TOKEN expired" });
            }
            else {
                console.log("Token verification is successful");
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        });
    });
};
/*
export const token = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.signedCookies[`${COOKIE_NAME}`];
  if(!token || token.trim()===""){
    return res.status(401).json({ message: "token not received" });
  }
  return new Promise<void>((resolve, reject) => {
    return jwt.verify(token, process.env.JWT_SECRET as string, (err, success) => {
      if (err) {
        reject(err);
        return res.status(401).json({ message: "token verification failed", cause: err.message });
      } else {
        resolve();
        res.locals.jwtData= success;
      }
    });
  });
}
  */ 
//# sourceMappingURL=token.js.map