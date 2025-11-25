import { Router } from "express";
import { createTag, deleteTag, getAlltags, getTagById, updateTag } from "../controllers/tag.controllers.js";
import { authMiddleware } from "../middleware/validation/auth.middleware.js";
import { adminMiddleware } from "../middleware/validation/admin.middleware.js";
import { validatedeleteTag, validateTag, validateTagId, validateUpdateTag } from "../middleware/validation/tag.validator.js";
const routerTag = Router();

routerTag.post('/tag', authMiddleware,adminMiddleware,validateTag,createTag);
routerTag.get('/tag', authMiddleware,getAlltags);
routerTag.get('/tag/:id', authMiddleware,adminMiddleware,validateTagId,getTagById);
routerTag.put('/tag/:id', authMiddleware,adminMiddleware,validateUpdateTag,updateTag);
routerTag.delete('/tag/:id', authMiddleware,adminMiddleware,validatedeleteTag,deleteTag);

export default routerTag;

