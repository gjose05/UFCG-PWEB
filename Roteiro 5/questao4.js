const somar = (a, b) => a + b;

const somaCincoPares = (x, callback) => {
    let soma = 0;

    if (x % 2 !== 0) {
        x++;
    }

    for (let i = 0; i < 5; i++) {
        soma = callback(soma, x);
        x += 2;
    }

    return soma;
};

console.log(somaCincoPares(4, somar));  
console.log(somaCincoPares(11, somar)); 