import ReagenteModel from "../models/reagenteModel.js"
class ReagenteRepository {
    constructor({
        reagenteModel = ReagenteModel,
    } = {}) {
        this.model = reagenteModel;
    }

    async listar(req) {
        try {
            console.log('Estou no listar em ReagenteRepository');
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
                console.log('Estou retornando os dados em ReagenteRepository, após buscar por id');
                return data;
            }

            const pagina = req.query.pagina || 1;
            const limite = req.query.limite || 30;
            const options = {
                page: pagina,
                limit: limite
            };
            return await this.model.paginate({}, options);
        } catch (error) {
            console.error('Erro ao listar reagentes:', error.message);
            throw error;  // Lança o erro para ser tratado no nível do controlador
        }
    }


    async criar(req) {
        console.log('Estou no criar em ReagenteRepository');
        try {
            const data = req.body;
            console.log("Repo" + data);

            const reagente = new this.model(data);
            return await reagente.save();
        } catch (error) {
            console.error('Erro ao criar reagente no repository:', error.message);
            throw error;  // Lança o erro para ser tratado no nível do controlador
        }
    }

    async atualizar(id, dadosAtualizados) {
        console.log('Estou no atualizar em ReagenteRepository');
        return await this.model.findByIdAndUpdate(id, dadosAtualizados, { new: true });
    }

    async deletar(id) {
        console.log('Estou no deletar em ReagenteRepository');
        return await this.model.findByIdAndDelete(id);
    }

    
}

export default ReagenteRepository;
