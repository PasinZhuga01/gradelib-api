import { Request } from 'express';

export interface AppRequest extends Request {
  context: AppRequestContext;
}

export interface AppRequestContext {
  id: string;
  ip: string | undefined;
  method: string;
  path: string;
  startedAt: Date;
}
