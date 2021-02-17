import crypto from 'crypto';

class Token {
  readonly token: string;
  readonly userId: string;
  private type: string;
  private expireAt: Date;

  constructor({userId,type, token, expireAt} : {userId: string,type: string, token?: string, expireAt?: Date}) {
    this.token = token ? token : this.generate();
    this.userId = userId;
    this.type = type;
    this.expireAt = expireAt ? expireAt : new Date(Date.now() + 1000 * 60 * 4);
  }

  private generate(): string {
    return crypto.randomBytes(32).toString('hex');
  }

  public toPersistence() {
    return {
      token: this.token,
      userId: this.userId,
      type: this.type,
      expireAt: this.expireAt
    }
  }
}

export default Token;