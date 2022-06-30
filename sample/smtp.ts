import {MailerService} from '../src/index';

  const generalOptions = {
    transport: {
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user:process.env.USER,
        pass: process.env.PASS,
      },
    },
    defaults: {
      from: '"revolt" <revolt@outlook.com>',
    },
  }
  const sender = new MailerService(generalOptions);
  let senderOptions = {
    to: 'aazcast@gmail.com',
    subject: 'Testing Revolt Mailer module',
    html: '<p>Hola</p>'
  }

  sender.sendMail(senderOptions).then((val)=> {
    //result of sending
  }).catch((err) => {
    //handle error
  });
