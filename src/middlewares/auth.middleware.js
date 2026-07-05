import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token de autorización faltante" });
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({ message: "JWT_SECRET no está definido" });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido" });
  }
};
