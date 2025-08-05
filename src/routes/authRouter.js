import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

//To create subroutes
const router = express.Router();
//register api
router.post("/register", registerUser);

//login api
router.post("/login", loginUser);

export default router;
