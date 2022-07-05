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
    subject: "Testing Revolt Mailer module this hour",
    html: "<div>HTML EMAIL</div>",
    text: "text of email",
    attachments: [{
      content: "e1xydGYxXGFuc2lcYW5zaWNwZzEyNTJcY29jb2FydGYyNjM4Clxjb2NvYXRleHRzY2FsaW5nMFxjb2NvYXBsYXRmb3JtMHtcZm9udHRibFxmMFxmc3dpc3NcZmNoYXJzZXQwIEhlbHZldGljYTt9CntcY29sb3J0Ymw7XHJlZDI1NVxncmVlbjI1NVxibHVlMjU1O30Ke1wqXGV4cGFuZGVkY29sb3J0Ymw7O30KXG1hcmdsMTQ0MFxtYXJncjE0NDBcdmlld3cxMTUyMFx2aWV3aDg0MDBcdmlld2tpbmQwClxwYXJkXHR4NTY2XHR4MTEzM1x0eDE3MDBcdHgyMjY3XHR4MjgzNFx0eDM0MDFcdHgzOTY4XHR4NDUzNVx0eDUxMDJcdHg1NjY5XHR4NjIzNlx0eDY4MDNccGFyZGlybmF0dXJhbFxwYXJ0aWdodGVuZmFjdG9yMAoKXGYwXGZzMjQgXGNmMCBFc3RlIGVzIHVuIGFkanVudG8gZGUgcmV2b2x0fQ==",
      encoding: "base64",
      filename: "adjunto.rtf"
    }]
  });
  res.send('success')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});