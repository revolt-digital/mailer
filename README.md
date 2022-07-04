# :email: revoltMailer

A package to handle email sending with nodemailer.

## Todo

- [] Enable compiler templates like pugjs, handlebars
- [] Tests

## Usage

- Install the package

```bash
  npm install @revolt-digital/mailer
  # or
  yarn add @revolt-digital/mailer
```

- Step 1, create one handler file check example in this case: sender.js file, where we can define the transport types we are going to use. import and create transport, Note: Define this transport in server.ts/app.ts (main expressjs file) is not a good practice.

```javascript
import { MailerService } from '@revolt-digital/mailer';
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
```

- Step 2, import and assign ref to your `div wrapper element`.

```javascript
import {sendMail} from './sender';

app.get('/email_smtp', async (req:Request, res: Response)=> {
  await sendMail({
    to: "email@gmail.com",
    subject: "Testing Revolt Mailer module",
    html: "<div>HTML EMAIL</div>",
    text: "text version of email"
  });
  res.send('success')
})
```

## Running the example app

Run `yarn install` then `yarn build` in the root folder (the one with this README file).

Then move into the example folder `cd example` and run `yarn install` and `yarn start`.

Then go to `http://localhost:8001/email_smtp`
