import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
import OrgaoControle from "../utils/const.js";


const reagenteSchema = new mongoose.Schema(
    {
        data_entrada: { type: Date, required: true },
        forma_entrada: { type: String, required: true },
        cnpj_fornecedor: { type: String },
        nome_fornecedor: { type: String, required: true },
        cas_produto: { type: String },
        nome_produto: { type: String, required: true },
        formula_quimica: { type: String, required: true },
        controlado: { type: Boolean, required: true },
        orgao_controle: { type: String },
        fabricante: { type: String, required: true },
        data_validade: { type: Date, required: true },
        quantidade_adquirida: { type: Number, required: true },
        unidade_medida: { type: String, required: true },
        observacoes: { type: String }
    }
);

reagenteSchema.plugin(mongoosePaginate);

const reagentes = mongoose.model("reagentes", reagenteSchema);

export default reagentes;
