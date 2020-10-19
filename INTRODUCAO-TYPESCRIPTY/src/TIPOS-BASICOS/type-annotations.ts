let nome: string = 'Gabriel';

let idade: number = 30;

let adulto: boolean = true;

let simbolo: symbol = Symbol('Qualquer-simbol');

// let big: bigint = 10;

let arrayDeNumeros: Array<number> = [1, 2, 3];

let arrayDeLetras: Array<string> = ['a', 'b', 'c'];

let arrayDeNumeros2: string[] = ['a', 'b'];

let pessoa: {
  nome: string;
  idade: number;
  adulto?: boolean;
} = {
  idade: 30,
  nome: 'Gabriel',
};

console.log(pessoa.nome);

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
