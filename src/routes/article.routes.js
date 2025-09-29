import { Router } from "express";
import { createArticle, deleteArticleById, getAllArticles, getArticleById, updateArticleById } from "../controllers/article.controllers.js";

const routerArticle = Router();

routerArticle.get("/article", getAllArticles);
routerArticle.post("/article", createArticle);
routerArticle.get("/article/:id", getArticleById);
routerArticle.put("/article/:id", updateArticleById);
routerArticle.delete("/article/:id", deleteArticleById);

export default routerArticle;
