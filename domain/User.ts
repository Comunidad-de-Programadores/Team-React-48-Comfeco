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
    this.password = this.hashPassword(password);
  }

  private hashPassword(password: string) : string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }

  public toPersistence() {
    return {
      username: this.username,
      email: this.email,
      password: this.password
    }
  }
}

export default User;