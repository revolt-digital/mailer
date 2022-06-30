import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';

import {
  MailerOptions,
  TransportType,
} from './interfaces/mailer-options.interface';
import { MailerTransportFactory as IMailerTransportFactory } from './interfaces/mailer-transport-factory.interface';

export class MailerTransportFactory implements IMailerTransportFactory {
  constructor(
    private readonly options: MailerOptions,
  ) {}

  public createTransport(opts?: TransportType): Mail {
    return createTransport(
      opts || this.options.transport,
      this.options.defaults,
    );
  }
}
