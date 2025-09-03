import { User } from "../models/user.models.js";

export const createUser = async (req, res) => {
 
 try {
    const {username, email,password,role}= req.body;
    if(!username || !email || !password){
        return res.status(400).json({message: 'Faltan datos obligatorios'})
    };
    const newUser = await User.create({username, email, password, role})
    res.status(201).json({
        msg: 'Usuario creado exitosamente',
        data: newUser
    });
 } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Error del servidor' });
 }    
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.json({
            count: user.length,
            data: user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error del servidor' });
    }
    
}
export const getUserById = async (req, res) => {
          const {id} = req.params;
        if (isNaN(id) || Number(id) <= 0) {
    return res.status(400).json({ msg: "El id debe ser un número positivo" });
  }
    try {
 
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: 'Usuario no encontrado'});
        res.json({data: user});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error del servidor' });
    }
    
}
export const updateUserById = async (req, res ) => {
    const {id} = req.params;
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "Colocar un id valido"});
    }
    try {
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({message: 'Usuario no encontrado'});
        const {username, email, password, role} = req.body;
        await user.update({username, email, password, role});
        res.json({
            msg: 'Se actualizo con exito el usuario',
            data: user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error del servidor' });
    }
}
export const deleteUserById = async (req, res) => {
    const {id} = req.params;
    if (isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ msg: "Colocar un id valido"});
    }
    try {
        const user = await User.findByPk(id);
        if(!user) {
            return res.status(404).json({message: 'Usuario no encontrado'})
        };
        await user.destroy();
        res.json({
            msg: 'Usuario eliminado con exito'
        });
    } catch (error) {
        
    }
}