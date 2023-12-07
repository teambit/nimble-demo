import createCache from '@emotion/cache';

export function createEmotionCache() {
  const cache = createCache({ key: 'css' });
  return cache;
}
