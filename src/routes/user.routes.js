import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/user.contollers.js";

const routerUser = Router();

routerUser.get("/user/:id", getUserById);
routerUser.post("/user", createUser);
routerUser.get("/user", getAllUsers);
routerUser.put("/user/:id", updateUserById);
routerUser.delete("/user/:id", deleteUserById);

export default routerUser;
