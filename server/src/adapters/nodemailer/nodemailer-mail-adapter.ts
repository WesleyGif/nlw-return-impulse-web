import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6278f703e401d1",
      pass: "433a4a571483ae"
    }
  });

export class NodemailerAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <po@feedget.com>',
        to: 'Wesley Gifoni <gifoniw@gmail.com>',
        subject,
        html: body,
    });
    }
}