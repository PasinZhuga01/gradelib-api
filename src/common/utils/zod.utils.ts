import z from 'zod';

export function describeApiTarget<T extends z.ZodType>(
  target: T,
  docs: { example?: z.output<T>; description: string },
): T {
  return target.meta(docs);
}
