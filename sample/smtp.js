import {MailerService} from '../src/index';
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "us-east-1",
  defaultProvider,
});

exports.sendEmail = async () => {
  const sender = new MailerService();
  let senderOptions = {
    to: 'user@gmail.com', // List of receivers email address
    from: 'user@localhost', // Senders email address
    subject: 'Testing Revolt Mailer module',
    template: '<p>Hola</p>',
    transport: {
      SES: { ses, aws },
    }
  }

  sender.sendMail(senderOptions);
}