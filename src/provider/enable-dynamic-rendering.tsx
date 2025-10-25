export async function enableDynamicRendering(): Promise<void> {
  const nextServerModule = await import('next/server').catch(() => null);
  const connectionFn = nextServerModule && (nextServerModule as Record<string, unknown>).connection;
  if (typeof connectionFn === 'function') {
    await (connectionFn as () => Promise<void>)();
    return;
  }
  
  const nextCacheModule = await import('next/cache').catch(() => null);
  const noStoreFn = nextCacheModule && (nextCacheModule as Record<string, unknown>).unstable_noStore;
  if (typeof noStoreFn === 'function') {
    (noStoreFn as () => void)();
  }
}
