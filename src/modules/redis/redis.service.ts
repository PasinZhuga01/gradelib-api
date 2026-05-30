import Redis from 'ioredis';

import { Injectable, OnModuleDestroy } from '@nestjs/common';

import config from '@config/app.config';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly _client = new Redis(config.redis);

  public async get(key: string): Promise<string | null> {
    return this._client.get(key);
  }

  public async set(key: string, value: string, ttl: number): Promise<void> {
    await this._client.set(key, value, 'EX', ttl);
  }

  public async delete(key: string): Promise<number> {
    return this._client.del(key);
  }

  public async onModuleDestroy(): Promise<void> {
    this._client.disconnect();
  }
}
