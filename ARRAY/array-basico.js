const nomes = ['Eduardo', 'Maria', 'Joana'];

const nomesUM = new Array('Eduardo')

nomes[2] = 'João';

delete nomes[2];

console.log(nomes);

nomesUM.pop();

const novo = [...nomes];

console.log(novo);

const novoArray = nomes.slice(0, 2);

console.log(novoArray);

const teste = ['GABRIEL', 'GAMELEIRA', 'DOS', 'SANTOS'];

console.log(teste.join(' '));