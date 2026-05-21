import { ApiProperty } from '@nestjs/swagger';

export class GetHealthDto {
  @ApiProperty({ example: true, description: 'Server health status' })
  public isHealthy!: true;
}
