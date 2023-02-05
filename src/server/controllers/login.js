"use strict";
import { LoginUser } from "../models/users.models";

const Login = async (req, res, next) => {
  const user = LoginUser(req.name)
};

export default Login;
