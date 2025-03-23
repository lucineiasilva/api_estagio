import { z } from 'zod';

// Expressão regular para validar ObjectId do MongoDB (24 caracteres hexadecimais)
const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");

const UsuarioSchema = z.object({
    nome: z.string(),
    email: z.string().email(),
    senha: z.string().min(8).optional(),  // A senha está marcada como opcional no select, então fazemos o mesmo aqui
    linkFoto: z.string().optional(),
    ativo: z.boolean(),
    rotas: z.array(z.object({
        _id: objectIdSchema,
        rota: z.string(),
        dominio: z.string(),
        ativo: z.boolean(),
        get: z.boolean(),
        post: z.boolean(),
        put: z.boolean(),
        patch: z.boolean(),
        delete: z.boolean(),
    })),
});


export default UsuarioSchema;
