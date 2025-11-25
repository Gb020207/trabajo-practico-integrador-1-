import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
} from '../controllers/auth.controllers.js'
import { authMiddleware } from "../middleware/validation/auth.middleware.js";


export const authRoutes = Router();
// rutas publicas
authRoutes.post("/auth/login", login);

authRoutes.post("/auth/register", register);

// rutas privadas
authRoutes.post("/auth/logout", logout);


authRoutes.get("/auth/userprofile", authMiddleware, profile);


