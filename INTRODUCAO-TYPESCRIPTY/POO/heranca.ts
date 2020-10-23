export class Pessoa {
  protected readonly nome: string;
  protected readonly sobrenome: string;
  protected readonly idade: number;
  protected readonly cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  public getNome(): string {
    return this.nome;
  }

  public getSobrenome(): string {
    return this.sobrenome;
  }

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return this.nome.concat(' ').concat(this.sobrenome);
  }
}

export class Aluno extends Pessoa {
  private sala;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  public getCpf(): string {
    return super.getCpf();
  }
}

export class Cliente extends Pessoa {
  public getCpf(): string {
    return 'Cliente: '.concat(this.cpf);
  }
}

const alunoUm = new Aluno('Gabriel', 'Gameleira', 21, '47878663890', '00001');

const clienteUm = new Cliente('Gabriel', 'Gameleira', 21, '47878663890');

console.log(alunoUm);

console.log(clienteUm);

console.log(alunoUm.getCpf());

console.log(clienteUm.getCpf());
