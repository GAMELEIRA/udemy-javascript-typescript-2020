export class Colaborador {
    public readonly nome: string;
    protected readonly sobrenome: string;
  constructor(
    nome: string,
    sobrenome: string
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  static falaOI(): void {
    console.log('OI');
  }

  static criarPessoa(nome: string, sobrenome: string): Pessoa {
      return new Colaborador(nome
  }

}

export class Empresa {
  private readonly _nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this._nome = nome;
    this.cnpj = cnpj;
  }
  public get nome(): string {
    return this._nome;
  }
  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores() {
    for (let colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

const empresa = new Empresa('TOTVS', '47878655548');
const colaborador = new Colaborador('Gabs', 'Gameleira');
console.log(empresa);
empresa.adicionaColaborador(colaborador);
console.log(empresa);
empresa.mostrarColaboradores();
console.log(colaborador.nome);

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '111111111');
  }

  pop(): Colaborador | null {
    const colaborador: Colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

Colaborador.falaOI();
