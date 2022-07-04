"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const index_1 = require("/Users/aaz/Workspace/Revolt/modules/mailer/lib/cjs/index");
const sender = new index_1.MailerService({
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
exports.sendMail = sender.sendMail;
