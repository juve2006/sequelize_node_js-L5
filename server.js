import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import sequelize from "./models/index.js";

sequelize.sync({force: true}).then(() => console.log ('DB is ready!'));

const app = express();

const PORT = 8080;

app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.use('/login', authRoutes);

app.get('/', (req, res) => {
    res.send('HOMEPAGE');
});

app.listen(PORT, ()=> {
    console.log (`server start on port: ${PORT}`);
});