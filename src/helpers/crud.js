
// src/helpers/crud.js

export const criar = async (Method, req) => {
    try {
        const novoObjeto = await Method(req, req);
        return novoObjeto;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

export const atualizar = async (Method, req) => {
    try {
        // TODO: fazer validação postuais que não sejam regras de negócio
        const updatedObject = await Method(req.params.id, req);
        if (!updatedObject) {
            return { message: 'Objeto não encontrado' };
        }
        return updatedObject;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

export const deletar = async (Method, req) => {
    try {
        // TODO: fazer validação postuais que não sejam regras de negócio
        const deletedObject = await Method(req.params.id);
        if (!deletedObject) {
            return { message: 'Objeto não encontrado' };
        }
        return { message: 'Objeto deletado com sucesso' };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

export const listar = async (method, req) => {
    try {
        const { id } = req.params || null;

        if (id) {
            const objeto = await method(req);
            if (!objeto) {
                return null; // Retorna null se o objeto não for encontrado
            }
            return objeto; // Retorna o objeto encontrado
        }

        const objetos = await method(req);
        return objetos; // Retorna a lista de objetos
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};
