import { Router } from "express";
import { createArticle, deleteArticleById, getAllArticles, getArticleById, updateArticleById } from "../controllers/article.controllers.js";
import { ownerMiddleware } from "../middleware/validation/owner.middleware.js";
import { authMiddleware } from "../middleware/validation/auth.middleware.js";
import { validateArticle } from "../middleware/validation/article.validator.js";
validateArticle
const routerArticle = Router();

routerArticle.get("/article", authMiddleware,ownerMiddleware,getAllArticles);
routerArticle.post("/article", authMiddleware,validateArticle,createArticle);
routerArticle.get("/article/:id", authMiddleware,ownerMiddleware,getArticleById);
routerArticle.put("/article/:id", authMiddleware,ownerMiddleware,updateArticleById);
routerArticle.delete("/article/:id", authMiddleware,ownerMiddleware,deleteArticleById);

export default routerArticle;
