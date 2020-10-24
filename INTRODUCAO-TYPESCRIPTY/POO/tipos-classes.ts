export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
}

class Pessoa extends TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {
    super();
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');

console.log(pessoa.nomeCompleto());
