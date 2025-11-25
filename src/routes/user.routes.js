import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/user.contollers.js";
import { authMiddleware } from "../middleware/validation/auth.middleware.js";
import { adminMiddleware } from "../middleware/validation/admin.middleware.js";
import { UserIdValidation, validateUpdateUser } from "../middleware/validation/user.validator.js";

const routerUser = Router();

routerUser.get("/user/:id", authMiddleware,adminMiddleware,UserIdValidation,getUserById);
routerUser.get("/user", authMiddleware,adminMiddleware,getAllUsers);
routerUser.put("/user/:id", authMiddleware,adminMiddleware,validateUpdateUser,updateUserById);
routerUser.delete("/user/:id", authMiddleware,adminMiddleware,UserIdValidation,deleteUserById);

export default routerUser;
