import { Profile } from "../models/profile.models.js";

export const createProfile = async (req, res) => {
    const { user_id, first_name, last_name, biography, avatar_url, birth_date } = req.body;
    if (!user_id || !first_name || !last_name) {
        return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }
    try {
        const newProfile = await Profile.create({ user_id, first_name, last_name, biography, avatar_url, birth_date });
        res.status(201).json({
            msg:"Perfil creado con exito"
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:"Error al crear el Perfil"
        })
    }
    
}
export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.findAll();
        res.json({
            count :profiles.length,
            data: profiles
        })
    } catch (error){
        console.error(error);
        res.status(500).json({
            msg:"Hubo un error al obtener los perfiles"
        })
    }
}
export const getProfilesById = async (req, res) => {
    const {id} = req.params;
    if(!id){
        return res.status(400).json({msg: 'Id invslido, por favor coloque un id existente'});
    }
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "El id debe ser un número positivo" });
      }
    try {
        const profile = await Profile.findByPk(id);
        if(!profile){
            return res.status(404).json({msg: 'Perfil no encontrado'});
        }
        res.status(200).json(profile);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:'Error al obtener el perfil'
        })
    }
    
}
export const updateProfile = async (req, res) => {
    const {id} = req.params;
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "El id debe ser un número positivo" });
      }
    const { first_name, last_name, biography, avatar_url, birth_date } = req.body;
    if(!id){
        return res.status(400).json({msg: 'Id invalido, por favor coloque un id existente'});
    }
    try {
        const profile = await Profile.findByPk(id);
        if(!profile){
            return res.status(404).json({msg: 'Perfil no encontrado'});
        }
        await profile.update({ first_name, last_name, biography, avatar_url, birth_date});
        res.status(200).json({msg: 'Perfil actualizado exitosamente'});

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el perfil'
        })
    }
}
export const deleteProfile = async (req, res) => {
    const {id} = req.params;
    if(!id){
        return res.status(400).json({msg: 'Id invalido, por favor coloque un id existente'});
    }
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "El id debe ser un número positivo" });
      }
    try {
        const profile = await Profile.findByPk(id);
        if(!profile){
            return res.status(404).json({msg: 'Perfil no encontrado'});
        }
        await profile.destroy();
        res.status(200).json({msg: 'Perfil eliminado exitosamente'});   
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al eliminar el perfil'
        })
    }    
}