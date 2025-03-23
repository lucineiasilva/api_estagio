/* eslint-disable no-undef */
import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import getSwaggerOptions from "../docs/config/head.js";
import logRoutes from "../middlewares/LogRoutesMiddleware.js";
import auth from "../routes/authRoutes.js";
import login from "../routes/loginRoutes.js";
import usuarios from '../routes/usuarioRoutes.js';
import reagentes from '../routes/reagenteRoutes.js';

import dotenv from "dotenv";

dotenv.config();

const routes = (app) => {
    if (process.env.DEBUGLOG) {
        app.use(logRoutes);
    }

    const swaggerDocs = swaggerJsDoc(getSwaggerOptions());
    app.use(swaggerUI.serve);
    app.get("/", (req, res, next) => {
        swaggerUI.setup(swaggerDocs)(req, res, next);
    });

    app.use(express.json(),
        /**
         * Rotas para o sistema de permissão
         */
        usuarios,
        reagentes,

        /**
         * Implementação obrigatória
         * Requisitos não funcionais
        */
        login,
        auth, //checagem da validação do token
        // alterarsenhausuario,
        // permissao,
        // recuperarsenha,
        // alterarsenha
        // cadastraconta,
        // confirmaemail,
        // minhaconta,

        /**
         * Impletação conforme regra de negócio
         */
        // reagentes
        // reagentes (definir os métodos)


    );

    // Se não é nenhuma rota válida, produz 404
    app.use((req, res) => {
        res.status(404).json({ message: "Rota não encontrada" });
    });
};

export default routes;
