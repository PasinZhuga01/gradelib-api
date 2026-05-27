import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

import { BaseApiResponseDto } from '../dto/base-api-response.dto';
import { AppRequest } from '../types/request.types';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<BaseApiResponseDto> {
    const request = context.switchToHttp().getRequest<AppRequest>();
    const { id, path, startedAt } = request.context;

    return next.handle().pipe(
      map((data: unknown) => ({
        data,
        finishedAt: new Date().toISOString(),
        requestMeta: { id, path, startedAt: startedAt.toISOString() },
      })),
    );
  }
}
