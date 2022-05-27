import User from "../models/User.js";


export const getUsers = async (req, res, next) => {
    let users =  await User.findAll({})
    res.status(200).send(users)

}

export const createUser = async (req, res, next) => {
    try {
        const userinfo = req.body;
        const user = await User.create(userinfo)
        res.status(201).send(`User ${req.body.name}  ${req.body.surname} added to DB`);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

export const getUser = async (req, res, next) => {
    const { id } = req.params;
    const userGet = await User.findOne({ where: { id: id }});
    if (userGet == null) {
        return res.status(404).send({ message: `Cannot find user with id ${id}`});
    }
    res.status(200).send(userGet);
}

export const deleteUser = async (req, res, next) => {
    try {
         const { id } = req.params;
         await User.destroy({where: {id: id}});
         res.status(200).send (`User with id:${id} deleted from DB`);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const updateUser = async (req, res, next) => {
   try {
       const { id } = req.params;
       const { name, surname, email, password } = req.body;
       let user = await User.update(req.body, { where: { id: id }});
       if (name) user.name = name;
       if (surname) user.surname = surname;
       if (email) user.email = email;
       if (password) user.password = password;
       res.send(`user ${name} ${surname} has been updated`);
   } catch (err) {
       res.status(400).send({ message: err.message });
   }
}