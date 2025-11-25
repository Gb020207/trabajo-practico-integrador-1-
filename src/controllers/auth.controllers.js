import jwt from 'jsonwebtoken';
import { User } from '../models/user.models.js';
import { Profile } from '../models/profile.models.js';
import { comparePasswords, hashPassword } from '../helpers/bcrypt.js';

export const register = async (req, res) => {
  const {first_name,last_name,biography,avatar_url,birth_date,username,email,password,role} = req.body;
    try {
       
        const hashed = await hashPassword(password)
        const user = await User.create({
            username: username,
            email: email,
            password: hashed,
            role:role,
        })
      await Profile.create({
      user_id: user.id,
      first_name: first_name,
      last_name: last_name,
      biography: biography,
      avatar_url: avatar_url,
      birth_date: birth_date,
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
        },
        include: {
            model: Profile,
            as:'Profile',
        }
    })
    if(!user){
      return res.status(401).json({message:"Credenciales incorrectas o invalidas"})
    };
    const isMatch = await comparePasswords(password,user.password)
    if(!isMatch){
      return res.status(401).json({message:"Contraseña incorrecta"})
    }

        const token = jwt.sign(
      {
        id: user.id,
        username:user.username,
        role:user.role,
      },
      "mysecret",
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
    
  try {
    console.log(req.userLogged)
    const userProfile = await Profile.findByPk(req.userLogged.id,{
      include:{
         model: User,
         as:"User",
         attributes:{exclude:["password"]}
      }
      
    } )
    console.log(userProfile)
    if(!userProfile){
      return res.status(404).json(userProfile)
    }
    
    res.status(200).json(
     userProfile
    );
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message:"Error interno del servidor",
    })
  }
};