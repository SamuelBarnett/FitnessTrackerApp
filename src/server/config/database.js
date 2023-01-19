import { Sequelize } from "sequelize";
const database = new Sequelize('mysql://localhost:3306/database',{})
export default database;