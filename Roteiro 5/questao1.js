const vendas = [
  { produto: "Notebook",       preco: 4500, quantidade: 3, vendedor: "Sara"    },
  { produto: "Smartphone",     preco: 2300, quantidade: 5, vendedor: "Matheus" },
  { produto: "Monitor",        preco: 1200, quantidade: 2, vendedor: "Gabriel" },
  { produto: "Teclado Mecânico", preco: 350, quantidade: 4, vendedor: "Sara"   },
  { produto: "Notebook",       preco: 4500, quantidade: 6, vendedor: "Gabriel" },
  { produto: "Monitor",        preco: 1200, quantidade: 3, vendedor: "Matheus" },
];

const formatarMoeda = (valor) => new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor);

const gerarRelatorio = (vendas) => {
    let relatorio = "Relatório de Vendas:\n\n";
    let totalGeral = 0;
    let comissoes = {};

    for (let i = 0; i < vendas.length; i++) {
        let venda = vendas[i];
        let totalVenda = venda.preco * venda.quantidade;

        totalGeral += totalVenda;

        if (!comissoes[venda.vendedor]) {
            comissoes[venda.vendedor] = 0;
        }

        comissoes[venda.vendedor] += totalVenda * 0.05;

        relatorio += `- Produto: ${venda.produto}
Quantidade: ${venda.quantidade}
Preço Unitário: ${formatarMoeda(venda.preco)}
Total: ${formatarMoeda(totalVenda)}
Vendedor: ${venda.vendedor}

`;
    }

    relatorio += `Total Geral: ${formatarMoeda(totalGeral)}

Total de comissão (5%):
`;

    for (let vendedor in comissoes) {
        relatorio += `${vendedor}: ${formatarMoeda(comissoes[vendedor])}
`;
    }

    return relatorio;
};

console.log(gerarRelatorio(vendas));