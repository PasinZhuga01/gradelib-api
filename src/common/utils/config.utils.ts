import fs from 'node:fs';

export function ensureMailTemplatesExist<T extends Record<string, string>>(templates: T): T {
  for (const [name, path] of Object.entries(templates)) {
    if (!fs.existsSync(path)) {
      throw new Error(`[Mail] Template missing: ${name} -> ${path}`);
    }
  }

  return templates;
}
