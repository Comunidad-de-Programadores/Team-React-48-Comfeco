export class Group {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly type: string[];

  constructor({ id, name, description, type, image }: BadgeAttr) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.description = description;
    this.image = image;
  }

  toPersistence() {
    return {
      _id: this.id,
      type: this.type,
      description: this.description,
      name: this.name,
      image: this.image,
    };
  }
}

interface BadgeAttr {
  id: string;
  name: string;
  type: string[];
  description: string;
  image: string;
}
