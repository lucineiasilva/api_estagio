import express from "express";
import UsuarioController from '../controllers/UsuarioController.js';


const router = express.Router();

const usuarioController = new UsuarioController(); // Instância da classe

router
  .get("/usuarios", (req, res) => usuarioController.listar(req, res))
  .get("/usuarios/:id", (req, res) => usuarioController.listar(req, res))
  .post("/usuarios", (req, res) => usuarioController.criar(req, res))
  .patch("/usuarios/:id", (req, res) => usuarioController.atualizar(req, res))
  .put("/usuarios/:id", (req, res) => usuarioController.atualizar(req, res))
  .delete("/usuarios/:id", (req, res) => usuarioController.deletar(req, res))

export default router;