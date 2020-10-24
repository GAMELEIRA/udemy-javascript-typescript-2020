type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida: CorPreferida;
};

type CorRgb = 'Vermelho' | 'Verde' | 'Azul';

type OutrasCores = 'Ciano' | 'Magenta' | 'Amarelo';

type CorPreferida = CorRgb | OutrasCores;

const pesso: Pessoa = {
  nome: "Fernando",
  idade: 21,
  salario: 222000,
  corPreferida: "Ciano"
};

type Numero = number | string;

type Numero2 = number & string;
