import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;
//para generar un token
export const generateToken = (userData) => {
  const payload = {
    id: userData.id,
  };

  return jwt.sign(payload, secret, { expiresIn: "1h" });
};