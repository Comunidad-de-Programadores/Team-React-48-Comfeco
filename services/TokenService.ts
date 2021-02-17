import Token from '../domain/Token';
import TokenModel from '../utils/db/models/Token';

class TokenService {
  async create(token: Token): Promise<void> {
    const tokenDB = new TokenModel(token.toPersistence());
    await tokenDB.save();
  }

  async getPasswordResetToken(token: string): Promise<Token | null> {
    const tokenDB = await TokenModel.findOne(
      { 
        token,
        type: 'passwordReset'
      }
    );
    if(!tokenDB) return null;
    const domainToken = new Token({
      userId: tokenDB.userId, 
      type: 'passwordReset', 
      token: tokenDB.token,
      expireAt: tokenDB.expireAt
    });

    return domainToken;
  }
}

export default TokenService;
