
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { URL } from 'url';

const AuthMiddleware = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      return res.status(498).json({ code: 498, message: "O token de autenticação não existe!" })
    }

    const [, token] = auth.split(' '); // desestruturação
    // promisify converte uma função de callback para uma função async/await
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
    
    if (!decoded) { // se não ocorrer a decodificação do token
      return res.status(498).json({ error: true, code: 498, message: "O token está expirado!" })
    } else { // se o token for válido
      req.user_id = decoded.id;
      next();
    }

  } catch (err) {
    return res.status(498).json({ error: true, code: 498, message: err.message });
  }
XMLDocument
}
export default AuthMiddleware;
