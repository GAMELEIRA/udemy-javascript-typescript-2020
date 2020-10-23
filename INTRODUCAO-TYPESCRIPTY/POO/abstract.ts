export class Personagem {
  constructor(
    protected name: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  public atacar(personagem: Personagem): void {
    console.log(`${this.name} está atacando...`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  private perderVida(forcaAtaque: number): void {
    console.log(`${this.name} agora têm ${this.vida} de vida ...`);
    this.vida -= forcaAtaque;
  }

  public bordao(): void {
    console.log('BORDAO');
  }
}

export class Guerreira extends Personagem {
  public bordao(): void {
    console.log('Ao ataque!');
  }
}

export class Monstro extends Personagem {
  public bordao(): void {
    console.log('GRRRRRR!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);

const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);

guerreira.atacar(monstro);

guerreira.atacar(monstro);

monstro.atacar(guerreira);
