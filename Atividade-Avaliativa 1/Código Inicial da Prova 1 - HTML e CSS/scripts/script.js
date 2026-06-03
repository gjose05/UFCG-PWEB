let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
let cartao = JSON.parse(sessionStorage.getItem('cartao')) || null;

function contador(){
    
}


function adicionaAoCarrinho(nomeProduto, precoProduto) {
    const produto = { nome: nomeProduto, preco: precoProduto };
    carrinho.push(produto);
    atualizaContagemCarrinho();
    salvarCarrinho();
    alert(`O produto ${nomeProduto} foi adicionado ao seu carrinho.`);
}

function atualizaContagemCarrinho() {
    document.getElementById('carrinho-contagem').textContent = carrinho.length;
}

function salvarCarrinho() {
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregaCarrinho() {
    carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    atualizaContagemCarrinho();
    mostrarItensCarrinho();
}

function salvarCartao() {
    sessionStorage.setItem('cartao', JSON.stringify(cartao));
}

function cadastraCartao(bandeira, nome, numero, data,digito) {
    const cartao_cadastrado = { bandeira: bandeira, nome_titular: nome, numero_cartao:numero, data_validade:data, digito_verificador:digito };
    cartao = cartao_cadastrado
    salvarCartao();
    alert(`O cartao de numero ${numero} foi adicionado`);
}

function mostrarItensCarrinho() {
    const containerCarrinho = document.getElementById('carrinho-container');
    const totalCarrinho = document.getElementById('carrinho-total');
    containerCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((produto, indice) => {
        const itemCarrinho = document.createElement('div');
        itemCarrinho.classList.add('carrinho-item');
        
        itemCarrinho.innerHTML = `
            <img src="./img/${produto.nome}.jpg" alt="${produto.nome}">
            <div class="carrinho-item-detalhes">
                <h3>${produto.nome}</h3>
                <p>${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <button onclick="removerItemCarrinho(${indice})">Remover</button>
        `;

        containerCarrinho.appendChild(itemCarrinho);
        total += produto.preco;
    });

    totalCarrinho.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function removerItemCarrinho(indice) {
    carrinho.splice(indice, 1);
    atualizaContagemCarrinho();
    salvarCarrinho();
    mostrarItensCarrinho();
}

function limpaCarrinho() {
    carrinho = [];
    atualizaContagemCarrinho();
    salvarCarrinho();
    mostrarItensCarrinho();
}

// Linha para carregar o carrinho ao carregar a página
window.onload = carregaCarrinho;
