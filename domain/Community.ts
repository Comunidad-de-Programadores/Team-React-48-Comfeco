export class Community {
  readonly id: string;
  readonly profession: string;
  readonly createdAt: Date;
  readonly title: string;
  readonly description: string;
  readonly icon: string;

  constructor({id, profession, createdAt, title, description, icon } : CommunityAttr) {
    this.id = id;
    this.profession = profession;
    this.createdAt = createdAt;
    this.title = title;
    this.description = description;
    this.icon = icon
  }

  toPersistence() {
    return {
      _id : this.id,
      createdAt : this.createdAt,
      profession : this.profession,
      description : this.description,
      title: this.title,
      icon: this.icon
    }
  }
}


interface CommunityAttr {
  id: string;
  createdAt: Date;
  profession: string;
  title: string,
  description: string,
  icon: string
}