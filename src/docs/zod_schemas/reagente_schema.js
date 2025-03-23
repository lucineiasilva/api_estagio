import { z } from 'zod';

// Expressão regular para validar ObjectId do MongoDB (24 caracteres hexadecimais)
const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");

const ReagenteSchema = z.object({
    data_entrada: z.date(),
    forma_entrada: z.string(),    
    nome_fornecedor: z.string(),
    cnpj_fornecedor: z.string(),
    cas_produto: z.string(),
    nome_produto: z.string(),
    formula_quimica: z.number(),
    controlado: z.boolean(),
    orgao_controle: z.selection(),
    fabricante: z.string(),
    data_validade: z.date(),
    quantidade_adquirida: z.number(),
    unidade_medida: z.string(),
    observacoes:z.string()
    
    
});


export default ReagenteSchema;
