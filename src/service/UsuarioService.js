import { criar, listar, atualizar, deletar } from '../helpers/crud.js';
import UsuarioRepository from '../repository/usuarioRepository.js';

class UsuarioService {
    constructor() {
        this.repository = new UsuarioRepository();
    }

    async criar(req) {
        console.log('Estou no criar em UsuarioService');
        // TODO: Validação de dados e adaptação do req.body
        return await criar(this.repository.criar.bind(this.repository), req);
    }

    async listar(req) {
        console.log('Estou no listar em UsuarioService');
        const data = await listar(this.repository.listar.bind(this.repository), req);
        console.log('Estou retornando os dados em UsuarioService');
        return data;
    }

    async atualizar(req) {
        console.log('Estou no atualizar em UsuarioService');
        // TODO: Validação de dados dos campos que podem ser atualizados
        return await atualizar(this.repository.atualizar.bind(this.repository), req);
    }

    async deletar(req) {
        console.log('Estou no deletar em UsuarioService');
        return await deletar(this.repository.deletar.bind(this.repository), req);
    }

    // Métodos adicionais
    // async adicionarPermissao(id, novaPermissao) {
    //     console.log('Estou no adicionarPermissao em UsuarioService');
    //     return await this.repository.adicionarPermissao(id, novaPermissao);
    // }

    // async removerPermissao(id, rotaId) {
    //     console.log('Estou no removerPermissao em UsuarioService');
    //     return await this.repository.removerPermissao(id, rotaId);
    // }
}

export default UsuarioService;
