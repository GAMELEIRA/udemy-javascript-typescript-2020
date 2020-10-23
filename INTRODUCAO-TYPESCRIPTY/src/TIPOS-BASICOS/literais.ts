const p: number = 11;

console.log(p);

const pessoa = {
    nome: "Gabriel" as const
}

function escolhaCor(cor: "Vermelho" | "Amarelo"): string{
    return cor;
}

console.log(escolhaCor("Vermelh"));
