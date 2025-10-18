# Quick Reference Guide

## Common Commands

### 🚀 Development

```bash
# Start all apps
pnpm dev

# Start specific app
pnpm --filter web dev
pnpm --filter @repo/convex dev
```

### 🏗️ Build

```bash
# Build everything
pnpm build

# Build specific package
pnpm --filter web build
```

### ✅ Quality Checks

```bash
# Run all checks
pnpm lint
pnpm type-check

# Format code
pnpm format
```

### 🧹 Cleanup

```bash
# Clean all build artifacts
pnpm clean

# Deep clean (including node_modules)
rm -rf node_modules apps/*/node_modules packages/*/node_modules
pnpm install
```

---

## Project Structure

```
├── apps/               # Applications
│   └── web/           # Next.js app
├── packages/          # Shared packages
│   ├── convex/       # Convex backend
│   ├── eslint-config/       # ESLint configs
│   ├── tailwind-config/     # Tailwind configs
│   └── typescript-config/   # TypeScript configs
├── docs/             # Documentation
├── turbo.json       # Turborepo config
└── package.json     # Root config
```

---

## Package Naming

All internal packages use `@repo/` prefix:
- `@repo/convex`
- `@repo/eslint-config`
- `@repo/tailwind-config`
- `@repo/typescript-config`

---

## Adding Dependencies

### To a specific package
```bash
cd apps/web
pnpm add package-name

# Or from root
pnpm --filter web add package-name
```

### To root (dev dependencies only)
```bash
pnpm add -D -w package-name
```

### Add workspace dependency
```json
{
  "dependencies": {
    "@repo/convex": "workspace:*"
  }
}
```

---

## Environment Variables

### Required for web app
```bash
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
BETTER_AUTH_SECRET=
```

See `apps/web/.env.example` for full list.

---

## Turborepo Features

### Cache Information
```bash
# View cache status
pnpm turbo run build

# Force rebuild (ignore cache)
pnpm turbo run build --force

# View dependency graph
pnpm turbo run build --graph
```

### Filtering
```bash
# Run task for package and dependencies
pnpm turbo run build --filter=web...

# Run task for package only
pnpm turbo run build --filter=web
```

---

## Troubleshooting

### Build fails
```bash
pnpm clean
pnpm install
pnpm build
```

### Type errors
```bash
pnpm type-check
```

### Lint errors
```bash
pnpm lint
pnpm format
```

### Cache issues
```bash
rm -rf .turbo
pnpm turbo run build --force
```

---

## Documentation

- `README.md` - Project overview
- `CONTRIBUTING.md` - How to contribute
- `docs/PROJECT_STRUCTURE.md` - Detailed structure
- `docs/ENVIRONMENT_VARIABLES.md` - Env vars guide
- `docs/DEPLOYMENT.md` - Deployment instructions

---

## Useful Links

- [Turborepo Docs](https://turbo.build/repo/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Convex Docs](https://docs.convex.dev)
- [Better Auth Docs](https://www.better-auth.com/docs)
- [pnpm Docs](https://pnpm.io)

---

**Last Updated**: October 18, 2025
