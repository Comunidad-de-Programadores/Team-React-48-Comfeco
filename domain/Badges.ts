export class Badges {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly ico: string;
  readonly howToWin: string;

  constructor({ id, name, description, howToWin, ico }: BadgeAttr) {
    this.id = id;
    this.howToWin = howToWin;
    this.name = name;
    this.description = description;
    this.ico = ico;
  }

  toPersistence() {
    return {
      _id: this.id,
      howToWin: this.howToWin,
      description: this.description,
      name: this.name,
      ico: this.ico,
    };
  }
}

interface BadgeAttr {
  id: string;
  name: string;
  howToWin: string;
  description: string;
  ico: string;
}
