// 'use strict';
import Express from "express";
import { Register } from "../controllers/register";

const router = Express.Router();

router.post('/register', Register);

export default router;

