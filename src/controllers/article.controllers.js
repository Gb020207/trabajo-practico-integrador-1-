import { Article } from "../models/article.models.js";

export const createArticle = async (req, res) => {
    const { title, content, excerpt, status } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }
    try {
        const article = await Article.create({ title, content, excerpt, status });
        res.status(201).json({
            msg: "Articulo creado con exito",
            data: article
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al crear el articulo'

        })
    }
    
}
export const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.json({
            count: articles.length,
            data: articles
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
}
export const getArticleById = async (req, res) => { 
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ msg: 'Id invalido, por favor coloque un id existente' });
    }
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "El id debe ser un número positivo" });
    }
    try {
        const article = await Article.findByPk(id);
        if (!article) {
            return res.status(404).json({ msg: 'Articulo no encontrado' });
        }
        res.status(200).json(article);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error del servidor'
        })
    }
}

export const updateArticleById = async (req, res) => {  
    const {id} = req.params;
    const { title, content, excerpt, status } = req.body;
 if (!id) {
        return res.status(400).json({ msg: 'Id invalido, por favor coloque un id existente' });
    }
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "El id debe ser un número positivo" });
    }
    try {
              const article = await Article.findByPk(id);
               if(!article){
                   return res.status(404).json({msg: 'Articulo no encontrado'});
               }
               await article.update({  title, content, excerpt, status});
               res.status(200).json({msg: 'Articulo actualizado exitosamente'});
       
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error del servidor'
        })
    }
}
export const deleteArticleById = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({ msg: 'Id invalido, por favor coloque un id existente' });
    }
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "El id debe ser un número positivo" });
    }
    try {
        const article = await Article.findByPk(id);
        if(!article){
            return res.status(404).json({msg: 'Articulo no encontrado'});
        }
        await article.destroy();
        res.status(200).json({msg: 'Articulo eliminado exitosamente'});
    }
        catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error del servidor'
        })
    }
}

