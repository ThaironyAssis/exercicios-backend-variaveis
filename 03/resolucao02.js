
let valorDisponivel = 80;

let valorOriginal = 129.99;

let porcentagemDesconto = (1 - (valorDisponivel / valorOriginal)) * 100;

console.log("Você precisa de um desconto de " + porcentagemDesconto.toFixed(2) + "% para comprar o tênis.");