import bcrypt from "bcrypt";
import { Badges } from "./Badges";
import { Community } from "./Community";
import { Group } from "./Groups";
import Token from "./Token";
import { WorkShop } from "./WorkShop";

class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly genre: string;
  readonly country: string;
  readonly social: SocialMedia;
  readonly description: string;
  readonly photo: string;
  readonly communities: Community[];
  readonly groups: Group[];
  readonly badges: Badges[];
  readonly workshops: WorkShop[];
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
    communities,
    groups,
    badges,
    workshops,
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
    this.communities = communities;
    this.groups = groups;
    this.badges = badges;
    this.workshops = workshops;
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
      communities: this.communities,
      groups: this.groups,
      badges: this.badges,
      workshops: this.workshops,
    };
  }

  public toPresentation() {
    return {
      id: this.id,
      name: this.username,
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
  communities: Community[];
  groups: Group[];
  badges: Badges[];
  workshops: WorkShop[];
}

export default User;
