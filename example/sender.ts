import { MailerService } from '/Users/aaz/Workspace/Revolt/modules/mailer/lib/cjs/index';

const sender = new MailerService({
  transport: {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: "13671c024964a4",
      pass: "2138443cf7d6af"
    },
  },
  defaults: {
    from: "info@revolt.digital"
  }
});

export const sendMail = sender.sendMail;