export class WorkShop {
  readonly id: string;
  readonly author: string;
  readonly profession: string;
  readonly emition_date: Date;

  constructor({id, author, profession, emition_date } : WorkShopAttr) {
    this.id = id;
    this.author = author;
    this.profession = profession;
    this.emition_date = emition_date;
  }

  toPersistence() {
    return {
      _id : this.id,
      author : this.author,
      profession : this.profession,
      emition_date : this.emition_date,
    }
  }
}


interface WorkShopAttr {
  id: string;
  author: string;
  profession: string;
  emition_date: Date;
}