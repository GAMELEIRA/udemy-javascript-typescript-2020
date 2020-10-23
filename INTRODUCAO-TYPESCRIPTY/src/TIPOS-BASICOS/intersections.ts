type TemNome = {
  nome: string;
};

type TemSobrenome = { sobrenome: string };

type TemIdade = { idade: number };

type Pessoinha = TemIdade & TemNome & TemSobrenome;
