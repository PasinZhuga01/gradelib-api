import { createZodDto } from 'nestjs-zod';
import z from 'zod';

import { DATETIME_ISO_EXAMPLE } from '@common/constants/common.constants';
import { describeApiTarget } from '@common/utils/zod.utils';

import { appRequestMetaDtoSchema } from './app-request-meta.dto';

export const baseApiResponseDtoSchema = z.object({
  data: z.unknown(),
  finishedAt: describeApiTarget(z.iso.datetime(), {
    example: DATETIME_ISO_EXAMPLE,
    description: 'Timestamp of when the response was generated',
  }),
  requestMeta: describeApiTarget(appRequestMetaDtoSchema, { description: 'Request meta' }),
});

export class BaseApiResponseDto extends createZodDto(baseApiResponseDtoSchema) {}
