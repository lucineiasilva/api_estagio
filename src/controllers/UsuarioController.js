import { criar, atualizar, deletar, listar } from '../helpers/crud.js';
import UsuarioService from '../service/UsuarioService.js';

class UsuarioController {
    constructor() {
        this.service = new UsuarioService();
    }

    async criar(req, res) {
        try {
            console.log('Estou no criar em UsuarioController');
            const data = await criar(this.service.criar.bind(this.service), req);
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao criar usuário' });
        }
    }

    async listar(req, res) {
        try {
            console.log('Estou no listar em UsuarioController, enviando req para UsuarioService');
            const data = await listar(this.service.listar.bind(this.service), req);

            // TODO: Tratar a resposta para retornar no formato padrão common response
            console.log('Estou retornando os dados em UsuarioController');
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao listar usuários' });
        }
    }

    async atualizar(req, res) {
        try {
            console.log('Estou no atualizar em UsuarioController');
            const data = await atualizar(this.service.atualizar.bind(this.service), req);
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao atualizar usuário' });
        }
    }

    async deletar(req, res) {
        try {
            console.log('Estou no deletar em UsuarioController');
            const data = await deletar(this.service.deletar.bind(this.service), req);
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao deletar usuário' });
        }
    }
}

export default UsuarioController;
