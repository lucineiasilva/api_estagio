import DbConnect from "./src/config/DbConnect.js"
import Reagente from "./src/models/reagenteModel.js";

// Utilidades para gerar dados aleatórios
const nomesProdutos = [
  { nome: "Água Destilada", formula: "H2O", cas: "7732185", controlado: false },
  { nome: "Formaldeído", formula: "CH2O", cas: "50000", controlado: true },
  { nome: "Ácido Fosfórico", formula: "H3PO4", cas: "101252", controlado: false },
  { nome: "Glicerina", formula: "C3H8O3", cas: "231552", controlado: false },
  { nome: "Metanol", formula: "CH3OH", cas: "456789", controlado: true },
  { nome: "Benzeno", formula: "C6H6", cas: "100252", controlado: true }
];
const fabricantes = ["Anidrol", "PureChem", "BioTech", "EcoChem", "Indústria X"];
const unidades = ["mL", "g", "L"];
const formasEntrada = ["compra", "doacao", "permuta"];
const orgaos = [null, "PF", "PC", "Exército"];
const observacoes = [
  "Produto inflamável, evitar fontes de calor.",
  "Armazenar em local seco.",
  "Usar EPI completo.",
  "Produto não tóxico.",
  "Manusear com luvas e óculos."
];

// Função para gerar CNPJ aleatório
function gerarCNPJ() {
  return Array.from({ length: 14 }, () => Math.floor(Math.random() * 10)).join("");
}

// Função para gerar um reagente aleatório
function gerarReagente() {
  const produto = nomesProdutos[Math.floor(Math.random() * nomesProdutos.length)];
  const hoje = new Date();
  const validade = new Date(hoje.getTime() + Math.random() * (720 * 24 * 60 * 60 * 1000));

  return {
    data_entrada: hoje.toISOString().split("T")[0],
    forma_entrada: formasEntrada[Math.floor(Math.random() * formasEntrada.length)],
    cnpj_fornecedor: gerarCNPJ(),
    nome_fornecedor: `Fornecedor ${Math.floor(Math.random() * 1000)}`,
    cas_produto: produto.cas,
    nome_produto: produto.nome,
    formula_quimica: produto.formula,
    controlado: produto.controlado,
    orgao_controle: produto.controlado ? orgaos[Math.floor(Math.random() * orgaos.length)] : null,
    fabricante: fabricantes[Math.floor(Math.random() * fabricantes.length)],
    data_validade: validade.toISOString().split("T")[0],
    quantidade_adquirida: Math.floor(Math.random() * 1000) + 100,
    unidade_medida: unidades[Math.floor(Math.random() * unidades.length)],
    observacoes: observacoes[Math.floor(Math.random() * observacoes.length)],
  };
}

// Gera 30 reagentes aleatórios
const reagentes = Array.from({ length: 30 }, gerarReagente);

// Script para popular o banco
const seedDB = async () => {
  try {
    await DbConnect.conectar();
    console.log("Conectado ao MongoDB.");

    await Reagente.deleteMany({});
    console.log("Coleção de reagentes limpa.");

    await Reagente.insertMany(reagentes);
    console.log("Reagentes aleatórios inseridos com sucesso!");
  } catch (err) {
    console.error("Erro ao popular o banco de dados:", err);
  } finally {
    await DbConnect.desconectar();
    console.log("Conexão ao MongoDB encerrada.");
  }
};

seedDB();
