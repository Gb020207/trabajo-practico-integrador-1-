import { Router } from "express";
import { createTag, deleteTag, getAlltags, getTagById, updateTag } from "../controllers/tag.controllers.js";
import { authMiddleware } from "../middleware/validation/auth.middleware.js";
import { adminMiddleware } from "../middleware/validation/admin.middleware.js";

const routerTag = Router();

routerTag.post('/tag', authMiddleware,adminMiddleware,createTag);
routerTag.get('/tag', authMiddleware,getAlltags);
routerTag.get('/tag/:id', authMiddleware,adminMiddleware,getTagById);
routerTag.put('/tag/:id', authMiddleware,adminMiddleware,updateTag);
routerTag.delete('/tag/:id', authMiddleware,adminMiddleware,deleteTag);

export default routerTag;

