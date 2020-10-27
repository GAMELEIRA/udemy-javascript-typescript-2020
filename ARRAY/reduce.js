const numerosUm = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const total = (valorAntigo, valorAtual, indice, array) => {

    console.log(indice, valorAntigo);

    return valorAtual + valorAntigo;

}
const totalValor = numerosUm.reduce(total, 0);

console.log(totalValor);