![GitHub branch checks state][build-url] [![codecov][cov-img]][cov-url] [![Known Vulnerabilities][snyk-img]][snyk-url]

> **Note:** This library (`next-envs`) is a fork of [`next-runtime-env`](https://github.com/expatfile/next-runtime-env).

# 🌐 Next.js Runtime Environment Configuration

**Effortlessly populate your environment at runtime, not just at build time, with `next-envs`.**

🌟 **Highlights:**
- **Isomorphic Design:** Works seamlessly on both server and browser, and even in middleware.
- **Next.js 13 & 14 Ready:** Fully compatible with the latest Next.js features.
- **`.env` Friendly:** Use `.env` files during development, just like standard Next.js.

### 🤔 Why `next-envs`?

In the modern software development landscape, the "[Build once, deploy many][build-once-deploy-many-link]" philosophy is key. This principle, essential for easy deployment and testability, is a [cornerstone of continuous delivery][fundamental-principle-link] and is embraced by the [twelve-factor methodology][twelve-factor-link]. However, front-end development, particularly with Next.js, often lacks support for this - requiring separate builds for different environments. `next-envs` is our solution to bridge this gap in Next.js.

### 📦 Introducing `next-envs`

`next-envs` dynamically injects environment variables into your Next.js application at runtime. This approach adheres to the "build once, deploy many" principle, allowing the same build to be used across various environments without rebuilds.

### 🤝 Compatibility Notes

- **Next.js 15:** Use `next-envs@4.x` for optimal caching support.
- **Next.js 14:** Use `next-runtime-env@3.x` for optimal caching support.
- **Next.js 13:** Opt for [`next-runtime-env@2.x`][app-router-branch-link], tailored for the App Router.
- **Next.js 12/13 Page Router:** Stick with [`next-runtime-env@1.x`][pages-router-branch-link].

### 🔖 Version Guide

- **1.x:** Next.js 12/13 Page Router
- **2.x:** Next.js 13 App Router
- **3.x:** Next.js 14 with advanced caching

### 🚀 Getting Started

In your `app/layout.tsx`, add:

```js
// app/layout.tsx
import { PublicEnvScript } from 'next-envs';

export default function RootLayout({ children }) {
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

The `PublicEnvScript` component automatically exposes all environment variables prefixed with `NEXT_PUBLIC_` to the browser. For custom variable exposure, refer to [EXPOSING_CUSTOM_ENV.md](docs/EXPOSING_CUSTOM_ENV.md).

### 🧑‍💻 Usage

Access your environment variables easily:

```tsx
// app/client-page.tsx
'use client';
import { env } from 'next-envs';

export default function SomePage() {
  const NEXT_PUBLIC_FOO = env('NEXT_PUBLIC_FOO');
  return <main>NEXT_PUBLIC_FOO: {NEXT_PUBLIC_FOO}</main>;
}
```

### 🛠 Utilities

Need to expose non-prefixed environment variables to the browser? Check out [MAKING_ENV_PUBLIC.md](docs/MAKING_ENV_PUBLIC.md).