// Variáveis
let Po = 1000; // População inicial de pessoas infectadas
let x = 4; // Quantidade de pessoas para as quais um paciente infectado pode transmitir
let t = 100; // Tempo percorrido

// Cálculo da quantidade de pessoas infectadas
let Pt = Po * Math.pow(x, (t / 7));

// Exibindo o resultado
console.log("Após " + t + " dias, a quantidade de pessoas infectadas é: " + Pt);