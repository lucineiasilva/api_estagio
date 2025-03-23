import mongoose from "mongoose";
import paginate from 'mongoose-paginate-v2';

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: { type: String, index: true },
        email: { type: String, unique: true, },
        senha: { type: String, select: false },
        linkFoto: { type: String },
        ativo: { type: Boolean },


    },
    { versionKey: "true" }
);

usuarioSchema.plugin(paginate);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;