const gerarEmail = (cliente) => {
    if (cliente.ativo) {
        return `Para: ${cliente.email}

Olá, ${cliente.nome}!

Obrigado por ser um assinante do nosso plano ${cliente.plano}! Estamos felizes em tê-lo conosco.

Caso precise de suporte, estamos à disposição.

Atenciosamente,
Equipe StreamingWeb.`;
    } 
    else {
        return `Para: ${cliente.email}

Olá, ${cliente.nome}!

Notamos que sua assinatura do plano ${cliente.plano} está inativa. Que tal voltar e aproveitar nossos conteúdos exclusivos?

Reative agora e continue sua experiência conosco!

Atenciosamente,
Equipe StreamingWeb.`;
    }
};

const cliente1 = {
    nome: "Davi",
    email: "davi@email.com",
    plano: "Premium",
    ativo: true
};

const cliente2 = {
    nome: "Mariana",
    email: "mariana@email.com",
    plano: "Básico",
    ativo: false
};

console.log(gerarEmail(cliente1));
console.log("\n-----------------\n");
console.log(gerarEmail(cliente2));