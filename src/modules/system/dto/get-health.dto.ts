import { createZodDto } from 'nestjs-zod';
import z from 'zod';

import { describeApiTarget } from '@common/utils/zod.utils';

export const getHealthDtoSchema = z.object({
  isHealthy: describeApiTarget(z.literal(true), { description: 'Server health status', example: true }),
});

export class GetHealthDto extends createZodDto(getHealthDtoSchema) {}
