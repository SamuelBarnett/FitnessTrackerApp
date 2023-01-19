"use strict";
import { Sequelize, DataTypes } from "sequelize";
import database from "../config/database";

const Goal = database.define("goal", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateAdded: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
  },
  endDate:{
    type: DataTypes.DATE,
  }
});

(async () => {
  await database.sync();
})();

console.log(Goal === database.models.Goal); // this must be true
