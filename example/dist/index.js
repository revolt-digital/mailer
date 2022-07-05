"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8001;
const sender_1 = require("./sender");
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server Revolt');
});
app.get('/email_smtp', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sender_1.sendMail)({
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
    res.send('success');
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
