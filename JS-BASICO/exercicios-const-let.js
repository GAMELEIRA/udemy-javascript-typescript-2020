/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 27/10/2020
 * HORA: 23:53
 * FINALIDADE DO MODULO: UTILIZAR A DECLARACAO DE VARIAVEIS USANDO CONST
 */

const calcularImc = (peso, altura) => peso / Math.pow(altura, 2);

const montarFrase = (primeiroNome, segundoNome, dataNascimento, idade, peso, altura, imc) => `${primeiroNome} ${segundoNome} nascido em ${dataNascimento} têm ${idade} anos, pesa ${peso.toFixed(2)} kg têm ${altura} e seu IMC é ${imc.toFixed(2)}.`;

const primeiroNome = "Gabriel";

const segundoNome = "Gameleira";

const idade = 21;

const peso = 99;

const altura = 1.80;

const dataNascimento = (new Date()).getFullYear() - idade;

const imc = calcularImc(peso, altura);

const frase = montarFrase(primeiroNome, segundoNome, dataNascimento, idade, peso, altura, imc);

console.log(frase);