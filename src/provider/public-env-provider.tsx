import type { PropsWithChildren } from 'react';

import { getPublicEnv } from '../helpers/get-public-env';
import { EnvProvider } from './env-provider';
import { enableDynamicRendering } from './enable-dynamic-rendering';

type PublicEnvProviderProps = PropsWithChildren;

/**
 * Provides the public environment variables to the application. This component
 * is disables Next.js' caching mechanism to ensure that the environment
 * variables are always up-to-date.
 *
 * This component should be used in a server component.
 *
 * Usage:
 * ```ts
 * <PublicEnvProvider>
 *  <App />
 * </PublicEnvProvider>
 * ```
 */
export function PublicEnvProvider({ children }: PublicEnvProviderProps) {
  enableDynamicRendering();

  const publicEnv = getPublicEnv();

  return <EnvProvider env={publicEnv}>{children}</EnvProvider>;
}
