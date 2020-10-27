const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Gameleira',
    idade: 25
};

console.log(pessoa1.nome);

console.log(pessoa1.sobrenome);

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa = criarPessoa('Gabriel', 'Gameleira', 21);

console.log(pessoa1.nome);