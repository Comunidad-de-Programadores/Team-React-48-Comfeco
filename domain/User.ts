import bcrypt from 'bcrypt';
import Token from './Token';

class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  private password: string;

  constructor(
    { id, username,email,password } : 
    { id: string, username: string,email: string,password:string }
  ) 
  {
    this.id = id
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

  public generateResetPasswordToken(): Token {
    const token = new Token({ 
      userId: this.id, 
      type: 'passwordReset'
    });
    return token;
  }

  public toPersistence() {
    return {
      _id: this.id,
      username: this.username,
      email: this.email,
      password: this.password
    }
  }

  public toPresentation() {
    return {
      id: this.id,
      username: this.username,
      email: this.email
    }
  }
}

export default User;