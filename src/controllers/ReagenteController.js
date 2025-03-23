import { criar, atualizar, deletar, listar } from '../helpers/crud.js';
import ReagenteService from '../service/ReagenteService.js';

class ReagenteController {
    constructor() {
        this.service = new ReagenteService();
    }

    async criar(req, res) {
        try {
            console.log('Estou no criar em ReagenteController');
            const data = await criar(this.service.criar.bind(this.service), req);
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao criar reagente' });
        }
    }

    async listar(req, res) {
        try {
            console.log('Estou no listar em ReagenteController, enviando req para ReagenteService');
            const data = await listar(this.service.listar.bind(this.service), req);

            // TODO: Tratar a resposta para retornar no formato padrão common response
            console.log('Estou retornando os dados em ReagenteController');
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao listar reagentes' });
        }
    }

    async atualizar(req, res) {
        try {
            console.log('Estou no atualizar em ReagenteController');
            const data = await atualizar(this.service.atualizar.bind(this.service), req);
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao atualizar reagente' });
        }
    }

    async deletar(req, res) {
        try {
            console.log('Estou no deletar em ReagenteController');
            const data = await deletar(this.service.deletar.bind(this.service), req);
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao deletar reagente' });
        }
    }
}

export default ReagenteController;
