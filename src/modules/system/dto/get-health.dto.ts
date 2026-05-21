import { ApiProperty } from '@nestjs/swagger';

export class GetHealthDto {
  @ApiProperty({ enum: [true], example: true, description: 'Server health status' })
  public isHealthy!: true;
}
