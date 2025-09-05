import jwt from 'jsonwebtoken';
import { User } from '../models/user.models.js';
import { Profile } from '../models/profile.models.js';

export const register = async (req, res) => {
    const {name, lastname, email, username, password} = req.body;
    try {
        const profile = await Profile.create({
            name: name,
            lastname:lastname,
        })
        await User.create({
            username: username,
            email: email,
            password: password,
            profileId: profile.id,
        })

        res.status(200).json({
            msg: "Usuario creado con exito"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg:"Error al crear el usuario"
        })
    }
    
}

export const login = async (req, res) => {
    const {username, password} = req.body;
try{
    const user = await User.findOne({
        where:{
            username: username,
            password: password,
        },
        include: {
            model: Profile,
            as:'Profile',
        }
    })
        const token = jwt.sign(
      {
        id: user.id,
        name: user.person.name,
        lastname: user.person.lastname,
      },
      "s3cr3t",
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      msg: "Logueado correctamente",
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
;
}
export const logout = async (req, res) => {
  res.clearCookie("token"); // Eliminar cookie del navegador
  return res.json({ message: "Logout exitoso" });
}
export const profile = async (req, res) => {
  const user = req.userLogged;

  try {
    res.status(200).json({
      name: user.name,
      lastname: user.lastname,
    });
  } catch (error) {}
};