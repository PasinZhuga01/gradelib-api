import { AppRequest } from '@common/types/request.types';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  public use(req: AppRequest, _res: Response, next: NextFunction): void {
    req.context = {
      id: crypto.randomUUID(),
      ip: req.ip ?? req.socket.remoteAddress,
      method: req.method,
      path: req.originalUrl,
      startedAt: new Date(),
    };

    next();
  }
}
