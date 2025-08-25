import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";
import { refreshMiddleware } from "../middleware/authMiddleware.js";
import { createAccessToken } from "../utils/jwt.js";
import { loginValidation } from "../middleware/joiMiddleware.js";

const router = express.Router();

router.post("/login", loginValidation, loginUser);

router.post("/register", registerUser);

router.get("/refresh-token", refreshMiddleware, (req, res) => {
  let payload = {
    email: req.user.email,
  };

  let accessToken = createAccessToken(payload);

  return res.send({
    status: "success",
    message: "Refresh token generated",
    accessToken,
  });
});

export default router;
