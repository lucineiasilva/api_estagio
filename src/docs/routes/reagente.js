import commonResponses from "../schemas/comnonResponses.js";
const reagenteRoutes = {
    "/reagentes": {
        get: {
            tags: ["Reagentes"],
            summary: "Lista todos os reagentes",
            security: [{ bearerAuth: [] }],
            parameters: [

                {
                    name: "data_entrada",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/data_entrada"
                    },
                    description: "Data de entrada do reagente no sistema"
                },
                {
                    name: "forma_entrada",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/forma_entrada"
                    },
                    description: "Como o reagente foi adquirido (ex. Compra, Doação, Permuta)"
                },
                {
                    name: "cnpj_fornecedor",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/cnpj_fornecedor"
                    },
                    description: "CNPJ da empresa ou da instituição fornecedora do reagente)"
                },
                {
                    name: "nome_fornecedor",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/nome_fornecedor"
                    },
                    description: "Nome da empresa ou da instituição fornecedora do reagente"
                },
                {
                    name: "cas_produto",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/cas_produto"
                    },
                    description: "Número de registro do Chemical Abstracts Service"
                },
                {
                    name: "nome_produto",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/nome_produto"
                    },
                    description: "Nome do reagente"
                },                
                {
                    name: "formula_quimica",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/formula_quimica"
                    },
                    description: "Fórmula química do reagente"
                },
                {
                    name: "controlado",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/controlado"
                    },
                    description: "Produto é controlado (Sim ou Não)"
                },
                {
                    name: "orgao_controle",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/orgao_controle"
                    },
                    description: "Se o produto é controlado, informar qual é o órgão de controle"
                },
                {
                    name: "fabricante",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/fabricante"
                    },
                    description: "Informar o fabricante do reagente"
                },
                {
                    name: "data_validade",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/data_validade"
                    },
                    description: "Informar a data de validade do reagente"
                },
                {
                    name: "quantidade_adquirida",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/quantidade_adquirida"
                    },
                    description: "Informar a quantidade adquirida do reagente"
                },
                {
                    name: "unidade_medida",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/unidade_medida"
                    },
                    description: "Informar a unidade de medida da quantidade adquirida do reagente"
                },
                {
                    name: "observacoes",
                    in: "query",
                    required: false,
                    schema: {
                        $ref: "#/components/schemas/ReagenteFiltro/properties/observacoes"
                    },
                    description: "Informações importantes sobre o reagente (ex. cuidado ao armazenar, inflamabilidade, incompatibilidade, ou outros)"
                }


                
                
            ],
            responses: {
                200: commonResponses[200]("#/components/schemas/ReagenteListagem"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                500: commonResponses[500]()
            }
        },
        post: {
            tags: ["Reagentes"],
            summary: "Cadastra um novo reagente",
            security: [{ bearerAuth: [] }],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ReagentePost"
                        }
                    }
                }
            },
            responses: {
                201: commonResponses[201]("#/components/schemas/ReagenteDetalhes"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                500: commonResponses[500]()
            }
        }
    },
    "/reagentes/{id}": {
        get: {
            tags: ["Reagentes"],
            summary: "Obtém detalhes de um reagente",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "string"
                    }
                }
            ],
            responses: {
                200: commonResponses[200]("#/components/schemas/ReagenteDetalhes"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                404: commonResponses[404](),
                500: commonResponses[500]()
            }
        },
        patch: {
            tags: ["Reagentes"],
            summary: "Atualiza um reagente",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "string"
                    }
                }
            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ReagenteDetalhes"
                        }
                    }
                }
            },
            responses: {
                200: commonResponses[200]("#/components/schemas/ReagenteDetalhes"),
                400: commonResponses[400](),
                401: commonResponses[401](),
                404: commonResponses[404](),
                500: commonResponses[500]()
            }
        },
        delete: {
            tags: ["Reagentes"],
            summary: "Deleta um reagente",
            security: [{ bearerAuth: [] }],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "string"
                    }
                }
            ],
            responses: {
                200: commonResponses[200](),
                400: commonResponses[400](),
                401: commonResponses[401](),
                404: commonResponses[404](),
                500: commonResponses[500]()
            }
        }
    }
};

export default reagenteRoutes;
