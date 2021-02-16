import bcrypt from 'bcrypt';

class User {
  private username: string;
  private email: string;
  private password: string;

  constructor(
    { username,email,password } : 
    { username: string,email: string,password:string }
  ) 
  {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  public hashPassword() : void {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  public isAuthenticate(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }

  public toPersistence() {
    return {
      username: this.username,
      email: this.email,
      password: this.password
    }
  }

  public toPresentation() {
    return {
      username: this.username,
      email: this.email
    }
  }
}

export default User;