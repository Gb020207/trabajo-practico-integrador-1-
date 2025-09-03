import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/user.contollers.js";

const routerUser = Router();

routerUser.get("/:id", getUserById);
routerUser.post("/", createUser);
routerUser.get("/", getAllUsers);
routerUser.put("/:id", updateUserById);
routerUser.delete("/:id", deleteUserById);

export default routerUser;
