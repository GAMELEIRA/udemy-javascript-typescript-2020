export abstract class Personagem {
  protected abstract emoji: string;
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

  public abstract bordao(): void;

}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}'
  public bordao(): void {
    console.log('Ao ataque!' + this.emoji);
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}'
  public bordao(): void {
    console.log('GRRRRRR!' + this.emoji);
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);

const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);

guerreira.atacar(monstro);

guerreira.atacar(monstro);

monstro.atacar(guerreira);
