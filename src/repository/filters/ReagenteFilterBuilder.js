class ReagenteFilterBuilder {
  constructor() {
    this.filtros = {};
  }

  comDataEntrada(data_entrada) {
    if (data_entrada) {
      this.filtros.data_entrada = { $regex: this.escapeRegex(data_entrada), $options: 'i' };
    }
    return this;
  }

  comFormaEntrada(forma_entrada) {
    if (forma_entrada) {
      this.filtros.forma_entrada = { $regex: this.escapeRegex(forma_entrada), $options: 'i' };
    }
    return this;
  }

  comCnpjFornecedor(cnpj_fornecedor) {
    if (cnpj_fornecedor) {
      this.filtros.cnpj_fornecedor = { $regex: this.escapeRegex(cnpj_fornecedor) };
    }
    return this;
  }

  comNomeFornecedor(nome_fornecedor) {
    if (nome_fornecedor) {
      this.filtros.nome_fornecedor = { $regex: this.escapeRegex(nome_fornecedor), $options: 'i' };
    }
    return this;
  }

  comCasProduto(cas_produto) {
    if (cas_produto) {
      this.filtros.cas_produto = { $regex: this.escapeRegex(cas_produto) };
    }
    return this;
  }

  comNomeProduto(nome_produto) {
    if (nome_produto) {
      this.filtros.nome_produto = { $regex: this.escapeRegex(nome_produto), $options: 'i' };
    }
    return this;
  }

  comFormulaQuimica(formula_quimica) {
    if (formula_quimica) {
      this.filtros.formula_quimica = { $regex: this.escapeRegex(formula_quimica), $options: 'i' };
    }
    return this;
  }

  comControlado(controlado) {
    if (typeof controlado === 'boolean') {
      this.filtros.controlado = controlado;
    }
    return this;
  }

  comOrgaoControle(orgao_controle) {
    if (orgao_controle) {
      this.filtros.orgao_controle = { $regex: this.escapeRegex(orgao_controle), $options: 'i' };
    }
    return this;
  }

  comFabricante(fabricante) {
    if (fabricante) {
      this.filtros.fabricante = { $regex: this.escapeRegex(fabricante), $options: 'i' };
    }
    return this;
  }

  comDataValidade(data_validade) {
    if (data_validade) {
      this.filtros.data_validade = { $regex: this.escapeRegex(data_validade) };
    }
    return this;
  }

  comQuantidadeAdquirida(quantidade_adquirida) {
    if (quantidade_adquirida) {
      this.filtros.quantidade_adquirida = quantidade_adquirida;
    }
    return this;
  }

  comUnidadeMedida(unidade_medida) {
    if (unidade_medida) {
      this.filtros.unidade_medida = { $regex: this.escapeRegex(unidade_medida), $options: 'i' };
    }
    return this;
  }

  comObservacoes(observacoes) {
    if (observacoes) {
      this.filtros.observacoes = { $regex: this.escapeRegex(observacoes), $options: 'i' };
    }
    return this;
  }

  // Método de escape de regex para evitar injeção de código
  escapeRegex(texto) {
    return texto.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

  build() {
    return this.filtros;
  }
}

export default ReagenteFilterBuilder;
