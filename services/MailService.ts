import sgMail from '@sendgrid/mail';
import User from '../domain/User';

class MailService {
  private from: string;

  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || ''); 
    this.from = process.env.EMAIL_FROM || '';
  }

  public async send(user: User, subject: string, text: string) {
    const msg = {
      to: user.email,
      from: this.from,
      subject: subject,
      text: text,
      html: `<strong>${text}</strong>`
    };

    await sgMail.send(msg);
  }
}

export default MailService;