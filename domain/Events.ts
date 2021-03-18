export class Events {
  readonly id: string;
  readonly category: string;
  readonly createdAt: Date;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;

  constructor({
    id,
    category,
    slug,
    createdAt,
    title,
    description,
    image,
  }: EventsAttr) {
    this.id = id;
    this.category = category;
    this.slug = slug;
    this.createdAt = createdAt;
    this.title = title;
    this.description = description;
    this.image = image;
  }

  toPersistence() {
    return {
      _id: this.id,
      createdAt: this.createdAt,
      category: this.category,
      slug: this.slug,
      description: this.description,
      title: this.title,
      image: this.image,
    };
  }
}

interface EventsAttr {
  id: string;
  createdAt: Date;
  category: string;
  slug: string;
  title: string;
  description: string;
  image: string;
}
