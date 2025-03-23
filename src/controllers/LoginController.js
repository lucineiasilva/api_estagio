/* eslint-disable no-undef */
import User from "../models/usuarioModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { URL } from "url";

class LoginController {
  static logar = async (req, res) => {
    try {
      const { email, senha } = req.body;

      // Busca o usuário pelo e-mail e inclui o campo senha explicitamente
      const userExist = await User.findOne({ email }).select("+senha").lean();

      // Se o usuário não existir ou a senha estiver incorreta
      if (!userExist || !(await bcrypt.compare(senha, userExist.senha))) {
        return res
          .status(400)
          .json({ code: 400, message: "Usuário ou Senha inválida!" });
      }

      // Gerar o token JWT
      const token = jwt.sign(
        {
          id: userExist._id,
        },
        process.env.SECRET,
        { expiresIn: process.env.EXPIREIN }
      );

      // Retornar resposta com sucesso
      return res.status(200).json({
        token,
        user: {
          id: userExist._id,
          nome: userExist.nome,
          email: userExist.email,
          linkFoto: userExist.linkFoto,
          ativo: userExist.ativo,
          rotas: userExist.rotas,
        },
      });
    } catch (err) {
      // Envia e-mail em caso de erro e retorna mensagem genérica
      SendMail.enviaEmailError(err, new URL(import.meta.url).pathname, new Date(), req);
      return res.status(500).json({
        error: true,
        code: 500,
        message: "Erro interno do Servidor",
      });
    }
  };
}


export default LoginController;
