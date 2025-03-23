import UsuarioModel from "../models/usuarioModel.js";
import UsuarioFilterBuilder from './filters/UsuarioFilterBuilder.js';

class UsuarioRepository {
    constructor({
        usuarioModel = UsuarioModel,
    } = {}) {
        this.model = usuarioModel;
    }

    async listar(req, res) {
        try {
            console.log('Estou no listar em UsuarioRepository');
            const id = req.params.id ? req.params.id : null;

            // validar se é um id mongo válido usando regex
            if (id !== null) {
                const id = req.params.id.match(/^[0-9a-fA-F]{24}$/) ? req.params.id : null;
                if (id === null) {
                    console.log('Não é um id válido');
                    return { message: 'Não é um id válido' };
                }
            }

            if (id) {
                const data = await this.model.findById(id).populate();
                console.log('Estou retornando os dados em UsuarioRepository, após buscar por id');
                return data;
            }

            // Extrair os filtros da query
            const { nome, email, ativo = 'true', page = 1 } = req.query;

            // Garantir que o limite não ultrapasse 100
            const limite = Math.min(parseInt(req.query.limite, 10) || 10, 1000);

            const filterBuilder = new UsuarioFilterBuilder()
                .comNome(nome)
                .comEmail(email)
                .comAtivo(ativo);

            const filtros = filterBuilder.build();           

            const options = {
                page: parseInt(page, 1),
                limit: parseInt(limite, 30),
                sort: { nome: 1 },
            };

            const resultado = await this.model.paginate(filtros, options);

            return resultado;

        } catch (error) {
            console.error('Erro ao listar usuários:', error.message);
            throw error;  // Lança o erro para ser tratado no nível do controlador
        }
    }


    async criar(dadosUsuario) {
        console.log('Estou no criar em UsuarioRepository');
        try {
            const usuario = new this.model(dadosUsuario);
            return await usuario.save();
        } catch (error) {
            console.error('Erro ao criar usuário no repository:', error.message);
            throw error;  // Lança o erro para ser tratado no nível do controlador
        }
    }

    async atualizar(id, dadosAtualizados, res) {
        console.log('Estou no atualizar em UsuarioRepository');
        return await this.model.findByIdAndUpdate(id, dadosAtualizados, { new: true });
    }

    async deletar(id, res) {
        console.log('Estou no deletar em UsuarioRepository');
        return await this.model.findByIdAndDelete(id);
    }

   
}

export default UsuarioRepository;
