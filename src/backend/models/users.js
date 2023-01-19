"use strict";
import { Sequelize, DataTypes } from "sequelize";
import database from "../config/database";

const USERS = database.define("users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
});

(async () => {
  await database.sync();
})();

console.log(USERS === database.models.USERS); // this must be true

export default USERS;
