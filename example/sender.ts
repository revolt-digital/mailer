import { MailerService, ISendMailOptions } from '@revolt-digital/mailer';

export const sendMail = async (options:ISendMailOptions) => {
  try {
    const sender = new MailerService({
      transport: {
        host: process.env.HOST,
        port: process.env.PORT,
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD
        },
      },
      defaults: {
        from: process.env.FROM
      }
    });
    await sender.sendMail(options);
    return;
  } catch (err) {
    throw err;
  }
}