const usuarioSchemas = {
    UsuarioFiltro: {
        type: "object",
        properties: {
            name: {
                type: "string",
                description: "Nome do usuário"
            },
            email: {
                type: "string",
                description: "Email do usuário"
            },
        }
    },
    UsuarioListagem: {
        type: "object",
        properties: {
            _id: { type: "string", description: "ID do usuário gerado automaticamente pelo MongoDB" },
            name: { type: "string", description: "Nome do usuário" },
            email: { type: "string", description: "Email do usuário" },
            login: { type: "string", description: "Login do usuário" },
            photo_path: { type: "string", description: "Caminho da foto do usuário" },
            active: { type: "string", description: "Status de atividade do usuário" },
            phone: { type: "string", description: "Telefone do usuário" },
            address: { type: "string", description: "Endereço do usuário" },
        },
        example: [
            {
                _id: "63f8c8b9a9d0bc4f6b7f8b99",
                name: "João da Silva",
                email: "joao.silva@example.com",
                login: "joao.silva",
                photo_path: "/fotos/joaosilva.jpg",
                active: "Y",
                phone: "123456789",
                address: "Rua Exemplo, 123",
            },
            {
                _id: "63f8c8b9a9d0bc4f6b7f8b9a",
                name: "Maria da Silva",
                email: "maria.silva@example.com",
                login: "maria.silva",
                photo_path: "/fotos/mariasilva.jpg",
                active: "Y",
                phone: "1987654321",
                address: "Rua Exemplo, 321",
            }
        ]
    },
    UsuarioDetalhes: {
        type: "object",
        properties: {
            _id: { type: "string", description: "ID do usuário gerado automaticamente pelo MongoDB" },
            name: { type: "string", description: "Nome do usuário" },
            email: { type: "string", description: "Email do usuário" },
            login: { type: "string", description: "Login do usuário" },
            photo_path: { type: "string", description: "Caminho da foto do usuário" },
            active: { type: "string", description: "Status de atividade do usuário" },
            phone: { type: "string", description: "Telefone do usuário" },
            address: { type: "string", description: "Endereço do usuário" },
        },
        example: {
            _id: "63f8c8b9a9d0bc4f6b7f8b99",
            name: "João da Silva",
            email: "joao.silva@example.com",
            login: "joao.silva",
            photo_path: "/fotos/joaosilva.jpg",
            active: "Y",
            phone: "123456789",
            address: "Rua Exemplo, 123",
        },
        example: {
            id: 2,
            name: "Maria da Silva",
            email: "maria.silva@example.com",
            login: "maria.silva",
            photo_path: "/fotos/mariasilva.jpg",
            active: "Y",
            phone: "1987654321",
            address: "Rua Exemplo, 321",
        }
    },
    UsuarioPost: {
        type: "object",
        required: ["name", "email", "login", "active", "phone"],
        properties: {
            name: { type: "string", description: "Nome do usuário" },
            email: { type: "string", description: "Email do usuário, deve ser único" },
            login: { type: "string", description: "Login do usuário" },
            photo_path: { type: "string", description: "Caminho da foto do usuário" },
            active: { type: "string", description: "Status de atividade do usuário" },
            phone: { type: "string", description: "Telefone do usuário" },
            address: { type: "string", description: "Endereço do usuário" },
        },
        example: {
            name: "Pedro da Silva",
            email: "pedro.silva@example.com",
            login: "pedro.silva",
            photo_path: "/fotos/pedrosilva.jpg",
            name: "Pedro da Silva",
            email: "pedro.silva@example.com",
            login: "pedro.silva",
            photo_path: "/fotos/pedrosilva.jpg",
            active: "Y",
            phone: "123456789",
            address: "Rua Exemplo, 987",
            address: "Rua Exemplo, 987",
        }
    },
    UsuarioPostResposta: {
        type: "object",
        properties: {
            _id: { type: "string", description: "ID do usuário gerado automaticamente pelo MongoDB" },
            name: { type: "string", description: "Nome do usuário" },
            email: { type: "string", description: "Email do usuário, deve ser único" },
            login: { type: "string", description: "Login do usuário" },
            photo_path: { type: "string", description: "Caminho da foto do usuário" },
            active: { type: "string", description: "Status de atividade do usuário" },
            phone: { type: "string", description: "Telefone do usuário" },
            address: { type: "string", description: "Endereço do usuário" },
        },
        example: {
            _id: "63f8c8b9a9d0bc4f6b7f8b99",
            name: "Pedro da Silva",
            email: "pedro.silva@example.com",
            login: "pedro.silva",
            photo_path: "/fotos/pedrosilva.jpg",
            active: "Y",
            phone: "123456789",
            address: "Rua Exemplo, 987",
            address: "Rua Exemplo, 987",
        }
    }
};

export default usuarioSchemas;
