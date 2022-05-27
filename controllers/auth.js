import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config();

export const login = async (req, res) => {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { password: password, name: name}});
    if (user) {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '30d',
        });
        res.status(200).json({msg: 'accessToken', accessToken});
    } else {
        res.send('Username or password incorrect');
    }
}