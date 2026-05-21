import { ApiProperty } from '@nestjs/swagger';

import { AppRequestMetaDto } from './app-request-meta.dto';

export abstract class BaseApiResponseDto {
  public abstract data: unknown;

  @ApiProperty({ description: 'Timestamp of when the response was generated' })
  public finishedAt!: Date;

  @ApiProperty({ type: () => AppRequestMetaDto })
  public requestMeta!: AppRequestMetaDto;
}
