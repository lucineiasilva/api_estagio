import bcrypt from 'bcryptjs';
import { randomBytes as _randomBytes } from 'crypto';
import faker from 'faker-br';
import usuarioModel from './src/models/usuarioModel.js'; 
import DbConnect from './src/config/DbConnect.js';

DbConnect.conectar();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const defaultSenhaCriptografada = bcrypt.hashSync('123456', 8);

function seedUsuario(qtdusuarios) {
    const usuarios = [];

    for (let i = 0; i < qtdusuarios; i++) {
        let nome = faker.name.firstName();
        let nome_meio = faker.name.lastName();
        let sobrenome = faker.name.lastName();
        let email = `${nome}.${sobrenome}${getRandomInt(9999999999)}@gmail.com`;

        usuarios.push({
            id: _randomBytes(16).toString("hex"), // <-- aqui está o fix
            nome: `${nome} ${nome_meio} ${sobrenome}`,
            email: email.toLowerCase(),
            senha: defaultSenhaCriptografada,
            ativo: true,
            linkFoto: faker.image.avatar(),
        });
    }

    return usuarios;
}

const seedDB = async () => {
    const usuariosData = seedUsuario(30);

    const usuarioFixo = {
        id: _randomBytes(16).toString("hex"),
        nome: 'Dev',
        email: 'dev@gmail.com',
        senha: defaultSenhaCriptografada,
        ativo: true,
        linkFoto: faker.image.avatar(),
    };

    usuariosData.push(usuarioFixo);

    try {
        await usuarioModel.deleteMany({});
        await usuarioModel.insertMany(usuariosData);
        console.log("Banco de dados populado com usuários de exemplo!");
    } catch (err) {
        console.error("Erro ao popular o banco de dados:", err);
    } finally {
        await DbConnect.desconectar();
        console.log("Conexão ao MongoDB encerrada.");
    }
};

seedDB();
