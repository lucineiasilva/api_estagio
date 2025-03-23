import express from "express";
import ReagenteController from '../controllers/ReagenteController.js'


const router = express.Router();

const reagenteController = new ReagenteController(); // Instância da classe

router
  .get("/reagentes", (req, res) => reagenteController.listar(req, res))
  .get("/reagentes/:id", (req, res) => reagenteController.listar(req, res))
  .post("/reagentes", (req, res) => reagenteController.criar(req, res))
  .patch("/reagentes/:id", (req, res) => reagenteController.atualizar(req, res))
  .put("/reagentes/:id", (req, res) => reagenteController.atualizar(req, res))
  .delete("/reagentes/:id", (req, res) => reagenteController.deletar(req, res))
  
export default router;