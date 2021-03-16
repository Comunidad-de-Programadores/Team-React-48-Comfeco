import bcrypt from "bcrypt";
import Token from "./Token";

class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly genre: string;
  readonly country: string;
  readonly social: SocialMedia;
  readonly description: string;
  readonly photo: string;
  public password: string;

  constructor({
    id,
    username,
    photo,
    email,
    password,
    genre,
    country,
    social,
    description,
  }: UserAttr) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.genre = genre;
    this.country = country;
    this.social = social;
    this.description = description;
    this.photo = photo;
  }

  public hashPassword(): void {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  public isAuthenticate(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }

  public generateResetPasswordToken(): Token {
    const token = new Token({
      userId: this.id,
      type: "passwordReset",
    });
    return token;
  }

  public toPersistence() {
    return {
      _id: this.id,
      username: this.username,
      email: this.email,
      password: this.password,
      genre: this.genre,
      country: this.country,
      social: this.social,
      description: this.description,
      photo: this.photo,
    };
  }

  public toPresentation() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      genre: this.genre,
      country: this.country,
      social: this.social,
      description: this.description,
      photo: this.photo,
    };
  }
}

interface SocialMedia {
  twitter: string;
  linkedin: string;
  facebook: string;
  github: string;
}

interface UserAttr {
  id: string;
  username: string;
  email: string;
  genre: string;
  country: string;
  social: SocialMedia;
  description: string;
  password: string;
  photo: string;
}

export default User;
