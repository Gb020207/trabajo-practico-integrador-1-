import { Article } from "../../models/article.models.js";


export const ownerMiddleware = async (req, res, next) => {
  try {
    const article = await Article.findByPk(req.params.id);

    if (req.userLogged.role !== "admin" && req.userLogged.id !== article.user_id)
      return res.status(403).json({
        message: "No eres el autor",
      });
    next();
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
