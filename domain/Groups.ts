export class Group {
  readonly id: string;
  readonly title: string;
  readonly discord: string;
  readonly image: string;
  readonly type: string[];

  constructor({ id, title, discord, type, image }: GroupAttr) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.discord = discord;
    this.image = image;
  }

  toPersistence() {
    return {
      _id: this.id,
      type: this.type,
      discord: this.discord,
      title: this.title,
      image: this.image,
    };
  }
}

interface GroupAttr {
  id: string;
  title: string;
  type: string[];
  discord: string;
  image: string;
}
