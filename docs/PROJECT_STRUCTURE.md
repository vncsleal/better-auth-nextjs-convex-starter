# Project Structure

This document describes the standardized project structure for the Better Auth + Next.js + Convex monorepo.

## Overview

```
better-auth-nextjs-convex-starter/
├── apps/                       # Applications
│   └── web/                    # Next.js web application
├── packages/                   # Shared packages
│   ├── convex/                # Convex backend
│   ├── eslint-config/         # Shared ESLint configs
│   ├── tailwind-config/       # Shared Tailwind configs
│   └── typescript-config/     # Shared TypeScript configs
├── docs/                      # Documentation
├── .editorconfig             # Editor configuration
├── .gitignore               # Git ignore rules
├── .nvmrc                   # Node version
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
├── package.json             # Root package config
├── pnpm-workspace.yaml      # pnpm workspace config
├── turbo.json              # Turborepo configuration
├── tsconfig.json           # Root TypeScript config
├── CONTRIBUTING.md         # Contribution guidelines
└── README.md              # Project documentation
```

## Detailed Structure

### `/apps/web` - Next.js Application

```
apps/web/
├── public/                    # Static assets
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/             # API routes
│   │   ├── auth/            # Auth pages (sign-in, sign-up, etc.)
│   │   ├── demo/            # Demo pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── providers.tsx    # React context providers
│   ├── components/          # React components
│   │   └── ui/             # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utilities and configurations
│       ├── auth-client.ts  # Better Auth client
│       ├── ConvexClientProvider.tsx
│       ├── utils.ts        # Utility functions
│       └── localization/   # i18n translations
├── .env.example            # Environment variable template
├── components.json         # shadcn/ui configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Package dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json           # Vercel deployment config
```

### `/packages/convex` - Convex Backend

```
packages/convex/
├── convex/                   # Convex functions directory
│   ├── _generated/          # Auto-generated files
│   ├── betterAuth/          # Better Auth integration
│   ├── auth.config.ts       # Auth configuration
│   ├── auth.ts             # Auth functions
│   ├── convex.config.ts    # Convex configuration
│   ├── http.ts             # HTTP routes
│   ├── schema.ts           # Database schema
│   └── README.md           # Backend documentation
├── .env.example            # Environment variable template
├── convex.json            # Convex project config
├── package.json           # Package dependencies
└── tsconfig.tsbuildinfo   # TypeScript build info
```

### `/packages/eslint-config` - Shared ESLint Config

```
packages/eslint-config/
├── library.js            # Base library config
├── next.js              # Next.js config
├── react-internal.js    # React component config
└── package.json         # Package config
```

### `/packages/typescript-config` - Shared TypeScript Config

```
packages/typescript-config/
├── base.json            # Base TypeScript config
├── nextjs.json         # Next.js specific config
├── react-library.json  # React library config
└── package.json        # Package config
```

### `/packages/tailwind-config` - Shared Tailwind Config

```
packages/tailwind-config/
├── base.js             # Base Tailwind config
├── postcss.js         # PostCSS config
└── package.json       # Package config
```

### `/docs` - Documentation

```
docs/
├── DEPLOYMENT.md  # Deployment instructions
├── ENVIRONMENT_VARIABLES.md  # Environment variable documentation
└── PROJECT_STRUCTURE.md      # This file
```

## File Naming Conventions

### React Components
- **PascalCase**: `UserProfile.tsx`, `HeaderNav.tsx`
- **Collocate tests**: `UserProfile.test.tsx`
- **Collocate stories**: `UserProfile.stories.tsx`

### Utilities and Helpers
- **camelCase**: `authClient.ts`, `formatDate.ts`
- **kebab-case for multi-word**: `auth-client.ts`, `user-utils.ts`

### Configuration Files
- **kebab-case**: `next.config.ts`, `eslint.config.mjs`
- **dot files**: `.prettierrc`, `.editorconfig`

### Pages (Next.js App Router)
- **kebab-case directories**: `sign-in/`, `user-profile/`
- **Consistent naming**: `page.tsx`, `layout.tsx`, `loading.tsx`

## Package Naming

All internal packages use the `@repo/` prefix:
- `@repo/convex` - Convex backend
- `@repo/eslint-config` - ESLint configurations
- `@repo/typescript-config` - TypeScript configurations
- `@repo/tailwind-config` - Tailwind configurations

## Import Aliases

### Web Application (`apps/web`)

```typescript
import { Component } from "@/components/Component";
import { utility } from "@/lib/utils";
import { useCustomHook } from "@/hooks/useCustomHook";
```

Configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Configuration File Locations

### Root Level (Monorepo)
- `turbo.json` - Turborepo configuration
- `pnpm-workspace.yaml` - Workspace configuration
- `tsconfig.json` - Project references
- `.prettierrc` - Code formatting
- `.editorconfig` - Editor settings
- `.gitignore` - Git ignore patterns

### App Level (`apps/web`)
- `next.config.ts` - Next.js configuration
- `eslint.config.mjs` - ESLint rules
- `tsconfig.json` - TypeScript settings
- `postcss.config.mjs` - PostCSS/Tailwind
- `components.json` - shadcn/ui config
- `vercel.json` - Deployment config

### Package Level
- Each package has its own `package.json`
- Shared configs extend from `packages/*/`

## Best Practices

### 1. Single Source of Truth
- Configuration in packages, not duplicated
- Extend shared configs instead of copying
- Centralize environment variable docs

### 2. Separation of Concerns
- `apps/` for runnable applications
- `packages/` for shared code and configs
- `docs/` for documentation

### 3. Explicit Dependencies
- Use `workspace:*` for internal packages
- Lock external versions for consistency
- Document required peer dependencies

### 4. Type Safety
- All packages have TypeScript enabled
- Shared types can be added to a `@repo/types` package
- Use `tsc --noEmit` for type checking

### 5. No Build Artifacts in Git
- `.gitignore` excludes all build outputs
- `_generated/` folders are never committed
- `.turbo/` cache is local only

## Adding New Packages

### New Application
```bash
mkdir -p apps/my-app
cd apps/my-app
pnpm init
```

Update `package.json`:
```json
{
  "name": "my-app",
  "private": true,
  "scripts": {
    "dev": "...",
    "build": "...",
    "lint": "eslint"
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "@repo/typescript-config": "workspace:*"
  }
}
```

### New Shared Package
```bash
mkdir -p packages/my-package
cd packages/my-package
pnpm init
```

Update `package.json`:
```json
{
  "name": "@repo/my-package",
  "version": "0.0.0",
  "private": true,
  "main": "./index.ts",
  "types": "./index.ts"
}
```

## File Organization Tips

1. **Group by feature, not by type**
   - ✅ `user-profile/UserProfile.tsx`, `user-profile/useUserProfile.ts`
   - ❌ `components/UserProfile.tsx`, `hooks/useUserProfile.ts`

2. **Keep related files together**
   - Tests next to source files
   - Types next to implementations
   - Styles in component directories

3. **Use barrel exports**
   ```typescript
   // components/index.ts
   export { Button } from "./Button";
   export { Card } from "./Card";
   ```

4. **Avoid deep nesting**
   - Maximum 3-4 levels deep
   - Use barrel exports to flatten structure
   - Consider splitting into separate packages

## Migration from Old Structure

If migrating from a different structure:

1. **Audit existing files** - Identify what can be shared
2. **Create shared packages** - Start with TypeScript and ESLint configs
3. **Update imports** - Use workspace protocol
4. **Remove duplicates** - Delete duplicate config files
5. **Test thoroughly** - Ensure all apps still work
6. **Document changes** - Update this file

## Tools and Commands

```bash
# View project structure
tree -L 3 -I 'node_modules|.next|.turbo|dist'

# Find duplicate files
find . -name "tsconfig.json" -not -path "*/node_modules/*"

# Check workspace dependencies
pnpm list --depth=0 -r

# Verify package links
pnpm why @repo/eslint-config
```

