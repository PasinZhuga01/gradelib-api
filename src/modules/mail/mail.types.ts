import config from '@config/app.config';

export interface SendMailOptions {
  receiver: string;
  topic: string;
  template: { name: keyof (typeof config)['mail']['templates']; context?: Record<string, unknown> };
}
