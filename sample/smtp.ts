import {MailerService} from '../src/index';

exports.sendEmail = async () => {
  const generalOptions = {
    transport: {
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
      },
    },
    defaults: {
      from: '"revolt" <revolt@outlook.com>',
    },
  }
  const sender = new MailerService(generalOptions, false);
  let senderOptions = {
    to: 'user@gmail.com',
    subject: 'Testing Revolt Mailer module',
    template: '<p>Hola</p>'
  }

  await sender.sendMail(senderOptions);
}