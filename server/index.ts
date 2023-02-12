import path from "path";
// dotenv.config();
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import db from "./config/database";
import UserRoutes from "./routes/UsersRoute";
import GoalRoutes from "./routes/GoalsRoute";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// handle incoming requests and look to see if there is json and convert them to objects
app.use(express.json());
//cors
// app.use(cors());
// handles all routes starting with /users for example /users/register
app.use("/users", UserRoutes);
app.use("/goals", GoalRoutes);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', (req: Request, res: Response) => {
 res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
const PORT = process.env.PORT || 5000;
const Server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
