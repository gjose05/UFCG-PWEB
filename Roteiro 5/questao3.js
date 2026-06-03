const normalizarUsuario = (usuario) => {
    let idade = null;
    let ativo = false;
    let saldo = 0.00;

    if (typeof usuario.idade === "number") {
        idade = Number.isInteger(usuario.idade) ? usuario.idade : null;
    } else if (typeof usuario.idade === "string") {
        if (/^\d+$/.test(usuario.idade)) {
            idade = parseInt(usuario.idade);
        }}
    if (usuario.ativo === true || usuario.ativo === "true" || usuario.ativo === 1) {
        ativo = true;
    } else {
        ativo = false;
    }
    let saldoConvertido = parseFloat(usuario.saldo);
    if (!isNaN(saldoConvertido)) {
        saldo = Number(saldoConvertido.toFixed(2));
    }
    return {
        nome: usuario.nome,
        idade: idade,
        ativo: ativo,
        saldo: saldo
    };
};

const processarUsuario = (lista) => {
    for (let i = 0; i < lista.length; i++) {
        let usuarioCorrigido = normalizarUsuario(lista[i]);
        console.log(usuarioCorrigido);
    }
};

const usuarios = [
    {
        nome: "João",
        idade: "25",
        ativo: "true",
        saldo: "150.756"
    },
    {
        nome: "Maria",
        idade: "22 anos",
        ativo: 0,
        saldo: undefined
    },
    {
        nome: "Pedro",
        idade: "NaN",
        ativo: 1,
        saldo: "350.5"
    }
];

processarUsuario(usuarios);