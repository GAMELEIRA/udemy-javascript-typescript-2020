const numerosUm = [1, 2, 3, 4, 5, 26, 37, 68, 90, 10];

const dobrarNumeros = (valor, indice, array) => valor * 2;

const numerosUmAlterados = numerosUm.map(dobrarNumeros);

console.table(numerosUmAlterados);