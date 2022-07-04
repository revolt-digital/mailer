import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 8001;
import {sendMail} from './sender';


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server Revolt');
});

app.get('/email_smtp', async (req:Request, res: Response)=> {
  await sendMail({
    to: "aazcast@gmail.com",
    subject: "Testing Revolt Mailer module",
    html: "<div>HTML EMAIL</div>",
    text: "text of email"
  });
  res.send('success')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});