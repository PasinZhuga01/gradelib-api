import { ApiProperty } from '@nestjs/swagger';

import { DATE_EXAMPLE, PATH_EXAMPLE, UUID_EXAMPLE } from '@common/constants/common.constants';

export class AppRequestMetaDto {
  @ApiProperty({ example: UUID_EXAMPLE, description: 'Unique request identifier' })
  public id!: string;

  @ApiProperty({ example: PATH_EXAMPLE, description: 'Request path' })
  public path!: string;

  @ApiProperty({ example: DATE_EXAMPLE, description: 'Timestamp of when request processing began' })
  public startedAt!: Date;
}
