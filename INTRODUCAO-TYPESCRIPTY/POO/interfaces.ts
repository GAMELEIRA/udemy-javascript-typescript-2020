type TipoNome = {
  nomes: string;
};

export class Pessoa implements TipoNome {
  constructor(public nome: string) {}
}

const pessoa = new Pessoa('Gabriel');

console.log(pessoa.nome);

interface TipoLoko extends TipoNome {
    nome: string;
}

class Teste implements TipoLoko {
    nome: string;
    nomes: string;
 }

