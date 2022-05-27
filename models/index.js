import dbConfig from "../config/dbConfig.js";

import { Sequelize } from "sequelize";

import User from "./User.js"

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      operatorsAliases: false,
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
    });
//
// sequelize.authenticate().then(()=>{
//   console.log('Connected...');
// }).catch((err) => {
//   console.log (err.message);
// });
//
// const db = {};
//
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.users = require("./User.js")(sequelize, DataTypes);
// db.sequelize.sync({ force: false})
// .then(()=> {
//     console.log('re-sync done');
// });

export default sequelize;