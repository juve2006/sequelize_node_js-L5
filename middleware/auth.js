import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import ACCESS_TOKEN_SECRET from "../config/secret_key.js";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
};

