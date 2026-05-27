import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { BaseApiResponseDto } from '../dto/base-api-response.dto';

export function createApiResponseDto<T>(dataClass: Type<T>): typeof BaseApiResponseDto {
  class ApiResponseDto extends BaseApiResponseDto {
    @ApiProperty({ type: () => dataClass })
    public override data!: T;
  }

  Object.defineProperty(ApiResponseDto, 'name', {
    value: `${dataClass.name}${ApiResponseDto.name}`,
  });

  return ApiResponseDto;
}
