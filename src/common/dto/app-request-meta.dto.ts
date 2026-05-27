import { createZodDto } from 'nestjs-zod';
import z from 'zod';

import { DATETIME_ISO_EXAMPLE, PATH_EXAMPLE, UUID_EXAMPLE } from '@common/constants/common.constants';
import { describeApiTarget } from '@common/utils/zod.utils';

export const appRequestMetaDtoSchema = z.object({
  id: describeApiTarget(z.uuid(), { example: UUID_EXAMPLE, description: 'Unique request identifier' }),
  path: describeApiTarget(z.string(), { example: PATH_EXAMPLE, description: 'Request path' }),
  startedAt: describeApiTarget(z.iso.datetime(), {
    example: DATETIME_ISO_EXAMPLE,
    description: 'Timestamp of when request processing began',
  }),
});

export class AppRequestMetaDto extends createZodDto(appRequestMetaDtoSchema) {}
