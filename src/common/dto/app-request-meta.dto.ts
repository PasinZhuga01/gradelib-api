import { ApiProperty } from '@nestjs/swagger';

export class AppRequestMetaDto {
  @ApiProperty({ description: 'Unique request identifier' })
  public id!: string;

  @ApiProperty({ description: 'Request path' })
  public path!: string;

  @ApiProperty({ description: 'Timestamp of when request processing began' })
  public startedAt!: Date;
}
