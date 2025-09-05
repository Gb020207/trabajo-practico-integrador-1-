import { Router } from "express";
import { createArticle, deleteArticleById, getAllArticles, getArticleById, updateArticleById } from "../controllers/article.controllers.js";

const routerArticle = Router();

routerArticle.get("/", getAllArticles);
routerArticle.post("/", createArticle);
routerArticle.get("/:id", getArticleById);
routerArticle.put("/:id", updateArticleById);
routerArticle.delete("/:id", deleteArticleById);

export default routerArticle;
