let numero1 = 1;

let numero2 = 2.5;

let numero3 = 4783984.323232323;

console.log(numero1.toString() + numero2);

console.log(numero1.toString(2));

console.log(typeof numero1);

console.log(numero3.toPrecision());

console.log(numero3.toFixed(2));

console.log(Number.isInteger(numero1));

let temp = numero3 * 'Ola';

console.log(Number.isNaN(temp));

let testeNumeroUm = 0.7;

let testeNumeroDois = 0.1;

let resultado = testeNumeroDois + testeNumeroUm;

resultado = parseFloat(resultado.toFixed(2));

console.log(resultado);