import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config();
import ACCESS_TOKEN_SECRET from "../config/secret_key.js";

export const login = async (req, res) => {
    //const { name, password } = req.body;
    const user = await User.findOne({ where: { password: req.body.password, name: req.body.name}});
    if (user) {
        const accessToken = jwt.sign(user.toJSON(), ACCESS_TOKEN_SECRET, {
            expiresIn: '30d',
        });
        res.status(200).json({msg: 'accessToken', accessToken});
    } else {
        res.send('Username or password incorrect');
    }
}