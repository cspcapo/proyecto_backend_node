import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const err = new Error("Token de autorización faltante");
    err.status = 401;
    return next(err);
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    const err = new Error("JWT_SECRET no está definido");
    err.status = 500;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (error) {
    const err = new Error("Token inválido");
    err.status = 403;
    next(err);
  }
};
