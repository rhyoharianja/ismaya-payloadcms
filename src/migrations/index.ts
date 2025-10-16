import * as migration_20251009_115839_initial from './20251009_115839_initial';
import * as migration_20251009_115918_initial from './20251009_115918_initial';

export const migrations = [
  {
    up: migration_20251009_115839_initial.up,
    down: migration_20251009_115839_initial.down,
    name: '20251009_115839_initial',
  },
  {
    up: migration_20251009_115918_initial.up,
    down: migration_20251009_115918_initial.down,
    name: '20251009_115918_initial',
  },
];
