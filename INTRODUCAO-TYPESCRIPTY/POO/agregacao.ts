export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => {
      return soma + produto.preco;
    }, 0);
  }
}

export class Produto {
  constructor(private _nome: string, public preco: number) {}

  get nome(): string {
    return this._nome;
  }
}

const prod1 = new Produto('Camisa', 49.9);

const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProduto(prod1);

console.log(carrinhoDeCompras);
