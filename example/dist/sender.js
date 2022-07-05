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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const mailer_1 = require("@revolt-digital/mailer");
const sendMail = (options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sender = new mailer_1.MailerService({
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
        yield sender.sendMail(options);
        return;
    }
    catch (err) {
        throw err;
    }
});
exports.sendMail = sendMail;
