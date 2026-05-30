import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import Handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';

import { Injectable, OnModuleDestroy } from '@nestjs/common';

import config from '@config/app.config';

import { SendMailOptions } from './mail.types';

@Injectable()
export class MailService implements OnModuleDestroy {
  private readonly _transporter: Transporter = nodemailer.createTransport({
    host: config.mailpit.host,
    port: config.mailpit.ports.smtp,
    secure: false,
  });

  public async send({ receiver, topic, template }: SendMailOptions): Promise<void> {
    await this._transporter.sendMail({
      from: config.mail.from,
      to: receiver,
      subject: topic,
      html: await this._renderTemplate(template),
    });
  }

  public onModuleDestroy(): void {
    this._transporter.close();
  }

  private async _renderTemplate({ name, context }: SendMailOptions['template']): Promise<string> {
    const templatePath = resolve(config.mail.templates[name]);
    const templateSource = await readFile(templatePath, 'utf8');
    const template = Handlebars.compile(templateSource, { strict: true });

    return template(context);
  }
}
