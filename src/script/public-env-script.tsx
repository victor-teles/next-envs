import { type FC } from 'react';
import { type ScriptProps } from 'next/script';

import { getPublicEnv } from '../helpers/get-public-env';
import { type NonceConfig } from '../typings/nonce';
import { EnvScript } from './env-script';
import { enableDynamicRendering } from '../provider/enable-dynamic-rendering';

type PublicEnvScriptProps = {
  nonce?: string | NonceConfig;
  disableNextScript?: boolean;
  nextScriptProps?: ScriptProps;
};

/**
 * Sets the public environment variables in the browser. If an nonce is
 * available, it will be set on the script tag.
 *
 * This component is disables Next.js' caching mechanism to ensure that the
 * environment variables are always up-to-date.
 *
 * Usage:
 * ```ts
 * <head>
 *   <PublicEnvScript />
 * </head>
 * ```
 */
export const PublicEnvScript: FC<PublicEnvScriptProps> = ({
  nonce,
  disableNextScript,
  nextScriptProps,
}) => {
  enableDynamicRendering()

  // This value will be evaluated at runtime
  const publicEnv = getPublicEnv();

  return (
    <EnvScript
      env={publicEnv}
      nonce={nonce}
      disableNextScript={disableNextScript}
      nextScriptProps={nextScriptProps}
    />
  );
};
