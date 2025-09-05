import { Router } from "express";
import { createArticleTag, deleteArticleTag } from "../controllers/article_tag.controllers.js";

const routerArticleTag = Router();
routerArticleTag.post('/articletag', createArticleTag);
routerArticleTag.delete('/articletag/:id', deleteArticleTag);

export default routerArticleTag;