import authPaths from "../routes/auth.js";
import authSchemas from "../schemas/auth_Schema.js";
import usuarioPaths from "../routes/usuario.js";
import usuarioSchemas from "../schemas/usuario_Schema.js";
import reagentePaths from "../routes/reagente.js";
import reagenteSchemas from "../schemas/reagente_Schema.js";

// Função para definir as URLs do servidor dependendo do ambiente
const getServersInCorrectOrder = () => {
    const devUrl = { url: process.env.SWAGGER_DEV_URL || "http://localhost:3060" };
    const prodUrl = { url: process.env.SWAGGER_PROD_URL || "http://localhost:3060" };

    if (process.env.NODE_ENV === "production") return [prodUrl, devUrl];
    else return [devUrl, prodUrl];
};

const getSwaggerOptions = () => {
    return {
        swaggerDefinition: {
            openapi: "3.0.0",
            info: {
                title: "API para controle de produtos químicos do laboratório de química e biologia do campus Vilhena",
                version: "1.0-alpha",
                description: "API AUTH SGBD\n\nÉ necessário autenticar com token JWT antes de utilizar a maioria das rotas, faça isso na rota /login com um email e senha válido.",
                contact: {
                    name: "Lucineia",
                    email: "lucineia.pacheco@ifro.edu.br"
                },
            },
            servers: getServersInCorrectOrder(),

            tags: [
                {
                    name: "Auth",
                    description: "Rotas para autenticação"
                },
                {
                    name: "Usuários",
                    description: "Rotas para gestão de usuários"
                },
                                {
                    name: "Reagentes",
                    description: "Rotas para gestão de reagentes"
                }
            ],
            paths: {
                ...authPaths,
                ...usuarioPaths,
                ...reagentePaths,
            },
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT"
                    }
                },
                schemas: {
                    ...authSchemas,
                    ...usuarioSchemas,
                    ...reagenteSchemas,
                }
            },
            security: [{
                bearerAuth: []
            }]
        },
        apis: ["./src/routes/*.js"]
    };
};

export default getSwaggerOptions;
