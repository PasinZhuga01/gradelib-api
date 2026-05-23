import { ApiProperty } from '@nestjs/swagger';

import { DATE_EXAMPLE } from '@common/constants/common.constants';

import { AppRequestMetaDto } from './app-request-meta.dto';

export abstract class BaseApiResponseDto {
  public abstract data: unknown;

  @ApiProperty({ example: DATE_EXAMPLE, description: 'Timestamp of when the response was generated' })
  public finishedAt!: Date;

  @ApiProperty({ type: () => AppRequestMetaDto })
  public requestMeta!: AppRequestMetaDto;
}
