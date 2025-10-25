# Getting started 🚀

- [Getting started 🚀](#getting-started-)
  - [Using the script approach (recommend)](#using-the-script-approach-recommend)
  - [Using the context approach](#using-the-context-approach)

We recommend using the script approach, because you can use the environment variables outside the React context. If you intend to stay withing the react context you can use the context approach.

## Using the script approach (recommend)

1. First, install the package into your project:

```bash
npm install next-envs
# or
yarn add next-envs
# or
pnpm install next-envs
```

1. Then add the script to your head in the root layout:

```tsx
// src/app/layout.tsx
import { PublicEnvScript } from 'next-envs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

1. Finally, use `env` utility to access the runtime environment variables any where in your app:

```tsx
import { env } from 'next-envs';

export function MyComponent() {
  const NEXT_PUBLIC_FOO = env('NEXT_PUBLIC_FOO');
  const NEXT_PUBLIC_BAZ = env('NEXT_PUBLIC_BAZ');

  useEffect(() => {
    // some api call using NEXT_PUBLIC_BAZ
  }, [NEXT_PUBLIC_BAZ]);

  return <div>{NEXT_PUBLIC_FOO}</div>;
}
```

That's it! You can now use the next-runtime-env package to access runtime environment variables in your Next.js app.

## Using the context approach

1. First, install the package into your project:

```bash
npm install next-envs
# or
yarn add next-envs
# or
pnpm install next-envs
```

2. Then wrap your component with RuntimeEnvProvider, for example in the root layout:

```tsx
// src/app/layout.tsx
import { PublicEnvProvider } from 'next-envs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PublicEnvProvider>{children}</PublicEnvProvider>
      </body>
    </html>
  );
}
```

> Keep in mind that the RuntimeEnvProvider must be added in a Server Component.

3. Finally, use `useEnvContext` hook to access the runtime environment variables in your components:

```tsx
import { useEnvContext } from 'next-envs';

export function MyComponent() {
  const { NEXT_PUBLIC_FOO, NEXT_PUBLIC_BAZ } = useEnvContext();

  useEffect(() => {
    // some api call using NEXT_PUBLIC_BAZ
  }, [NEXT_PUBLIC_BAZ]);

  return <div>{NEXT_PUBLIC_FOO}</div>;
}
```

That's it! You can now use the next-runtime-env package to access runtime environment variables in your Next.js app.