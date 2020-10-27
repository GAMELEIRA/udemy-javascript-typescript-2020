const numerosUm = [1, 2, 3, 4, 5, 26, 37, 68, 90, 10];

const numerosDois = Math.max(...numerosUm, 11);

console.log(numerosDois);

const numerosTres = numerosUm.filter((valor, indice) => valor > 10);

console.log(numerosTres);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const getNomesCom5OuMais = (valorAtual, indice, array) => valorAtual.nome.length >= 5;

const getIdadeCom50AOuMais = (valorAtual, indice, array) => valorAtual.idade >= 50;

const getNomesTerminamLetraA = (valorAtual, indice, array) => valorAtual.nome.toLowerCase().endsWith('o');

const filtro = pessoas.filter(getNomesCom5OuMais).filter(getIdadeCom50AOuMais).filter(getNomesTerminamLetraA);

console.log(filtro);