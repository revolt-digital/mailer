import {MailerService} from '../src/index';

  const generalOptions = {
    transport: {
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: '13671c024964a4',
        pass: '2138443cf7d6af',
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
