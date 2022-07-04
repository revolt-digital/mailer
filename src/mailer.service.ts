import { SentMessageInfo, Transporter } from 'nodemailer';

/** Interfaces **/
import { MailerOptions } from './interfaces/mailer-options.interface';
import { ISendMailOptions } from './interfaces/send-mail-options.interface';
import { MailerTransportFactory } from './mailer-transport.factory';

export class MailerService {
  private transporter!: Transporter;
  private transporters = new Map<string, Transporter>();

  constructor(private readonly mailerOptions: MailerOptions, private readonly transportFactory?: any) {
    if (!transportFactory) {
      this.transportFactory = new MailerTransportFactory(mailerOptions);
    }
    if ((!mailerOptions.transport || Object.keys(mailerOptions.transport).length <= 0) && !mailerOptions.transports) {
      throw new Error(
        'Make sure to provide a nodemailer transport configuration object, connection url or a transport plugin instance.',
      );
    }

    /** Transporters setup **/
    if (mailerOptions.transports) {
      Object.keys(mailerOptions.transports).forEach((name) => {
        this.transporters.set(name, this.transportFactory.createTransport(this.mailerOptions.transports![name]));
      });
    }

    /** Transporter setup **/
    if (mailerOptions.transport) {
      this.transporter = this.transportFactory.createTransport();
    }
  }

  public async sendMail(sendMailOptions: ISendMailOptions): Promise<SentMessageInfo> {
    if (sendMailOptions.transporterName) {
      if (this.transporters && this.transporters.get(sendMailOptions.transporterName)) {
        return await this.transporters.get(sendMailOptions.transporterName)!.sendMail(sendMailOptions);
      } else {
        throw new ReferenceError(`Transporters object doesn't have ${sendMailOptions.transporterName} key`);
      }
    } else {
      if (this.transporter) {
        return await this.transporter.sendMail(sendMailOptions);
      } else {
        throw new ReferenceError(`Transporter object undefined`);
      }
    }
  }
}
