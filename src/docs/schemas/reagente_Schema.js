const reagenteSchemas = {
    ReagenteFiltro: {
        type: "object",
        properties: {

            data_entrada: {
                type: "string",
                format: "date",
                description: "Data de entrada no formato DD/MM/YYYY"
            },
            forma_entrada: {
                type: "string",
                description: "Forma de entrada, ex: compra, doação, permuta"
            },
            cnpj_fornecedor: {
                type: "string",
                description: "CNPJ da empresa fornecedora"
            },
            nome_fornecedor: {
                type: "string",
                description: "Nome da empresa fornecedora"
            },
            cas_produto: {
                type: "string",
                description: "Identificação CAS do reagente"
            },
            nome_produto: {
                type: "string",
                description: "Nome do reagente"
            },
            formula_quimica: {
                type: "string",
                description: "Fórmula química do reagente"
            },
            controlado: {
                type: "boolean",
                description: "Indica se o reagente é controlado"
            },
            orgao_controle: {
                type: "string",
                description: "Órgão fiscalizador do reagente, ex: PF, PC, EB",
                orgao_controle: {
                    type: "selection",
                    validate: {
                        validator: function(value) {
                            // Valida se o valor está em orgaoControleValores
                            return orgaoControleValores.includes(value);
                        },
                        message: props => `${props.value} não é um órgão de controle válido!`
                    }
                }
            },
            fabricante: {
                type: "string",
                description:"Fabricante do reagente" 
            },
            data_validade: {
                type: "string",
                format: "date",
                description: "Data de validade no formato DD/MM/YYYY"
            },
            
            quantidade_adquirida: {
                type: "number",
                description: "CNPJ da empresa"
            },
            unidade_medida: {
                type: "string",
                description: "Unidade de medida"
            },
            observacoes:{
                type: "string",
                description: "Informações importantes sobre o reagente"
            }      
     // Alteração dos objetos, abaixo, em andamento!!!     

        }
    },
    ReagenteListagem: {
        type: "object",
        properties: {
            data_entrada:{type: "date", description: "Data de entrada do reagente"},
            forma_entrada:{type:"string", description: "Forma de entrada do reagente"},
            cnpj_fornecedor: {type: "string", description: "CNPJ do fornecedor"},
            nome_fornecedor: {type: "string", description: "Nome do Fornecedor"} ,
            cas_produto: {type: "string", description: "Número de registro do Chemical Abstracts Service"},
            nome_produto: {type: "string", description: "Nome do reagente"},
            formula_quimica: {type: "string", description: "Fórmula química do reagente"},
            controlado: {type: "boolean", description: "Informa se o produto é controlado ou não"},
            orgao_controle: {type: "string", description: "Informa qual é o órgão que controla o reagente"},
            fabricante: {type: "string", description: "Informa qual é o fabricante do reagente"},
            data_validade: {type: "date", description: "Informa o prazo de validade do reagente"},
            quantidade_adquirida: {type: "number", description: "Informa o quanto foi adquirido do reagente"},
            unidade_medida: {type: "string", description: "Informa a unidade de medida da quantidade adquirida do reagente"},
            observacoes:{type: "string", description: "Observações importantes sobre o reagente"}

        
        },
        example: {
            data_entrada: "2024-10-01",
            forma_entrada: "compra",
            cnpj_fornecedor: "12345678000199", // CNPJ como String
            nome_fornecedor: "Laboratórios Químicos SA",
            cas_produto: "7732185", // CAS como String
            nome_produto: "Água Destilada",
            formula_quimica: "H2O",
            controlado: false,
            orgao_controle: null,
            fabricante: "Anidrol",
            data_validade: "2024-07-10",
            quantidade_adquirida: "1000",
            unidade_medida: "mL",
            observacoes: "Produto não inflamável e seguro para manuseio."
    },
},

ReagenteDetalhes: {
    type: "object",
    properties: {
        data_entrada:{type: "date", description: "Data de entrada do reagente"},
        forma_entrada:{type:"string", description: "Forma de entrada do reagente"},
        cnpj_fornecedor: {type: "string", description: "CNPJ do fornecedor"},
        nome_fornecedor: {type: "string", description: "Nome do Fornecedor"} ,
        cas_produto: {type: "string", description: "Número de registro do Chemical Abstracts Service"},
        nome_produto: {type: "string", description: "Nome do reagente"},
        formula_quimica: {type: "string", description: "Fórmula química do reagente"},
        controlado: {type: "boolean", description: "Informa se o produto é controlado ou não"},
        orgao_controle: {type: "string", description: "Informa qual é o órgão que controla o reagente"},
        fabricante: {type: "string", description: "Informa qual é o fabricante do reagente"},
        data_validade: {type: "date", description: "Informa o prazo de validade do reagente"},
        quantidade_adquirida: {type: "number", description: "Informa o quanto foi adquirido do reagente"},
        unidade_medida: {type: "string", description: "Informa a unidade de medida da quantidade adquirida do reagente"},
        observacoes:{type: "string", description: "Observações importantes sobre o reagente"}
    },
    example: {
        data_entrada: "2024-10-01",
        forma_entrada: "compra",
        cnpj_fornecedor: "12345678000199", // CNPJ como String
        nome_fornecedor: "Laboratórios Químicos SA",
        cas_produto: "7732185", // CAS como String
        nome_produto: "Água Destilada",
        formula_quimica: "H2O",
        controlado: false,
        orgao_controle: null,
        fabricante: "Anidrol",
        data_validade: "2024-07-10",
        quantidade_adquirida: "1000",
        unidade_medida: "mL",
        observacoes: "Produto não inflamável e seguro para manuseio."
    },

},
ReagentePost: {
    type: "object",
    required: [],
    properties: {
        data_entrada:{type: "date", description: "Data de entrada do reagente"},
        forma_entrada:{type:"string", description: "Forma de entrada do reagente"},
        cnpj_fornecedor: {type: "string", description: "CNPJ do fornecedor"},
        nome_fornecedor: {type: "string", description: "Nome do Fornecedor"} ,
        cas_produto: {type: "string", description: "Número de registro do Chemical Abstracts Service"},
        nome_produto: {type: "string", description: "Nome do reagente"},
        formula_quimica: {type: "string", description: "Fórmula química do reagente"},
        controlado: {type: "boolean", description: "Informa se o produto é controlado ou não"},
        orgao_controle: {type: "string", description: "Informa qual é o órgão que controla o reagente"},
        fabricante: {type: "string", description: "Informa qual é o fabricante do reagente"},
        data_validade: {type: "date", description: "Informa o prazo de validade do reagente"},
        quantidade_adquirida: {type: "number", description: "Informa o quanto foi adquirido do reagente"},
        unidade_medida: {type: "string", description: "Informa a unidade de medida da quantidade adquirida do reagente"},
        observacoes:{type: "string", description: "Observações importantes sobre o reagente"}    },
    example: {
            data_entrada: "2024-10-01",
            forma_entrada: "compra",
            cnpj_fornecedor: "12345678000199", // CNPJ como String
            nome_fornecedor: "Laboratórios Químicos SA",
            cas_produto: "7732185", // CAS como String
            nome_produto: "Água Destilada",
            formula_quimica: "H2O",
            controlado: false,
            orgao_controle: null,
            fabricante: "Anidrol",
            data_validade: "2024-07-10",
            quantidade_adquirida: "1000",
            unidade_medida: "mL",
            observacoes: "Produto não inflamável e seguro para manuseio.",        },
    },

ReagentePostResposta: {
    type: "object",
    properties: {
        data_entrada:{type: "date", description: "Data de entrada do reagente"},
        forma_entrada:{type:"string", description: "Forma de entrada do reagente"},
        cnpj_fornecedor: {type: "string", description: "CNPJ do fornecedor"},
        nome_fornecedor: {type: "string", description: "Nome do Fornecedor"} ,
        cas_produto: {type: "string", description: "Número de registro do Chemical Abstracts Service"},
        nome_produto: {type: "string", description: "Nome do reagente"},
        formula_quimica: {type: "string", description: "Fórmula química do reagente"},
        controlado: {type: "boolean", description: "Informa se o produto é controlado ou não"},
        orgao_controle: {type: "string", description: "Informa qual é o órgão que controla o reagente"},
        fabricante: {type: "string", description: "Informa qual é o fabricante do reagente"},
        data_validade: {type: "date", description: "Informa o prazo de validade do reagente"},
        quantidade_adquirida: {type: "number", description: "Informa o quanto foi adquirido do reagente"},
        unidade_medida: {type: "string", description: "Informa a unidade de medida da quantidade adquirida do reagente"},
        observacoes:{type: "string", description: "Observações importantes sobre o reagente"}    
    },
    example: {
            data_entrada: "2024-10-01",
            forma_entrada: "compra",
            cnpj_fornecedor: "12345678000199", // CNPJ como String
            nome_fornecedor: "Laboratórios Químicos SA",
            cas_produto: "7732185", // CAS como String
            nome_produto: "Água Destilada",
            formula_quimica: "H2O",
            controlado: false,
            orgao_controle: null,
            fabricante: "Anidrol",
            data_validade: "2024-07-10",
            quantidade_adquirida: "1000",
            unidade_medida: "mL",
            observacoes: "Produto não inflamável e seguro para manuseio."
    },
}
};


export default reagenteSchemas;
