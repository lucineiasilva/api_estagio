import express from "express";
import LoginController from "../controllers/LoginController.js";

const router = express.Router();

router
  .post("/login", LoginController.logar)

export default router;
