/** Interfaces **/
import { Transport, TransportOptions } from 'nodemailer';
import * as SMTPTransport from 'nodemailer/lib/smtp-transport';
import * as SMTPPool from 'nodemailer/lib/smtp-pool';
import * as SendmailTransport from 'nodemailer/lib/sendmail-transport';
import * as StreamTransport from 'nodemailer/lib/stream-transport';
import * as JSONTransport from 'nodemailer/lib/json-transport';
import * as SESTransport from 'nodemailer/lib/ses-transport';



export interface ISMTPSettings extends SMTPTransport.Options {
  host: string,
  port: number,
  auth: {
    user: string,
    pass: string
  }
}

export interface DefaultTypes {
  from: string
}

type Options =
  | ISMTPSettings
  | DefaultTypes
  | SMTPPool.Options
  | SendmailTransport.Options
  | StreamTransport.Options
  | JSONTransport.Options
  | SESTransport.Options
  | TransportOptions;

export type TransportType =
  | Options
  | SMTPTransport
  | SMTPPool
  | SendmailTransport
  | StreamTransport
  | JSONTransport
  | SESTransport
  | Transport
  | string;

export interface MailerOptions {
  defaults?: Options;
  transport?: TransportType;
  transports?: {
    [name: string]: SMTPTransport | SMTPTransport.Options | string;
  };
  options?: { [name: string]: any };
}

