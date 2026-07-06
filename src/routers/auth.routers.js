import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  res.json({ message: "Ruta de login creada" });
});

export default router;
