export class WorkShop {
  readonly id: string;
  readonly author: string;
  readonly profession: string;
  readonly emition_date: Date;
  readonly title: string;
  readonly description: string;
  readonly hour: string

  constructor({id, hour, author, profession, emition_date, title, description } : WorkShopAttr) {
    this.id = id;
    this.author = author;
    this.profession = profession;
    this.emition_date = emition_date;
    this.title = title;
    this.description = description;
    this.hour = hour
  }

  toPersistence() {
    return {
      _id : this.id,
      author : this.author,
      profession : this.profession,
      emition_date : this.emition_date,
      title : this.title,
      description : this.description,
      hour: this.hour
    }
  }
}


interface WorkShopAttr {
  id: string;
  author: string;
  profession: string;
  emition_date: Date;
  title: string,
  description: string,
  hour: string
}