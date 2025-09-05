import { Tag } from "../models/tag.models.js";

export const createTag = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }
    try {
        const newTag = await Tag.create({name});
        res.status(201).json({
            msg: 'Tag creado con exito'
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ' Error del servidor' });
    }
    
}

export const getAlltags = async (req, res) => {
    try {
        const tags = await Tag.findAll();
        res.json({
            count: tags.length,
            data: tags
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ' Error del servidor' });
    }
    
}
export const getTagById = async (req, res) => {
    const {id} = req.params;
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "El id debe ser un número positivo" });
      }
    try {
        const tag = await Tag.findByPk(id);
        if(!tag) return res.status(404).json({message: 'Tag no encontrado'});
        res.status(200).json(tag);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error del servidor'
        })
    }
}

export const updateTag = async (req, res) => {
    const { id } = req.params;
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "Colocar un id valido" });
    }
    try {
        const tag = await Tag.findByPk(id);
        if (!tag) return res.status(404).json({ message: 'Tag no encontrado' });
        const { name } = req.body;
        await tag.update({ name });
        res.status(200).json({
            msg: 'Tag actualizado con exito',
            data: tag
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error del servidor'
        })
        
    }
    
}
export const deleteTag = async (req, res) => {
    const { id } = req.params;
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "Colocar un id valido" });
    }
    try {
        const tag = await Tag.findByPk(id);
        if (!tag) return res.status(404).json({ message: 'Tag no encontrado' });
        await tag.destroy();
        res.status(200).json({ msg: 'Tag eliminado con exito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error del servidor'
        })
    }
    
}