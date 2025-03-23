import express from "express";
import AuthController from "../controllers/AuthController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";


const router = express.Router();

router
  .get("/auth", AuthMiddleware, AuthController.authorization)
export default router;
