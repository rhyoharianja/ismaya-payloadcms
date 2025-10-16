import * as migration_20251016_062308 from './20251016_062308';

export const migrations = [
  {
    up: migration_20251016_062308.up,
    down: migration_20251016_062308.down,
    name: '20251016_062308'
  },
];
