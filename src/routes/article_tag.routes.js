import { Router } from "express";
import { createArticleTag, deleteArticleTag } from "../controllers/article_tag.controllers.js";
import { authMiddleware } from "../middleware/validation/auth.middleware.js";

const routerArticleTag = Router();
routerArticleTag.post('/articletag', authMiddleware,createArticleTag);
routerArticleTag.delete('/articletag/:id', authMiddleware,deleteArticleTag);



export default routerArticleTag;
