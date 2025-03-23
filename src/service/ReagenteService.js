import { criar, listar, atualizar, deletar } from '../helpers/crud.js';
import ReagenteRepository from '../repository/reagenteRepository.js';

class ReagenteService {
    constructor() {
        this.repository = new ReagenteRepository();
    }

    async criar(req) {
        console.log('Estou no criar em ReagenteService');
        console.log('Services', req);

        // TODO: Validação de dados e adaptação do req.body
        return await criar(this.repository.criar.bind(this.repository), req);
    }

    async listar(req) {
        console.log('Estou no listar em ReagenteService');
        const data = await listar(this.repository.listar.bind(this.repository), req);
        console.log('Estou retornando os dados em ReagenteService');
        return data;
    }

    async atualizar(req) {
        console.log('Estou no atualizar em ReagenteService');
        // TODO: Validação de dados dos campos que podem ser atualizados
        return await atualizar(this.repository.atualizar.bind(this.repository), req);
    }

    async deletar(req) {
        console.log('Estou no deletar em ReagenteService');
        return await deletar(this.repository.deletar.bind(this.repository), req);
    }

    // Métodos adicionais podem ser mantidos aqui
}

export default ReagenteService;
