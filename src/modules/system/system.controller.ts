import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { createApiResponseDto } from '@common/utils/response.utils';

import { GetHealthDto } from './dto/get-health.dto';

@Controller('system')
export class SystemController {
  @Get('health')
  @ApiOperation({ summary: 'Get server health status' })
  @ApiResponse({ type: createApiResponseDto(GetHealthDto) })
  public getHealth(): GetHealthDto {
    return { isHealthy: true };
  }
}
