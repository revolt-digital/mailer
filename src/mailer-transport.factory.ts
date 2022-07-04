import { createTransport } from 'nodemailer';

import { MailerOptions, TransportType } from './interfaces/mailer-options.interface';
import { MailerTransportFactory as IMailerTransportFactory } from './interfaces/mailer-transport-factory.interface';

export class MailerTransportFactory implements IMailerTransportFactory {
  constructor(private readonly options: MailerOptions) {}

  public createTransport(opts?: TransportType): any {
    return createTransport(opts || this.options.transport, this.options.defaults);
  }
}
