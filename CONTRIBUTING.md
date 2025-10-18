# Contributing to Better Auth Next.js Convex Starter

Thank you for your interest in contributing! This document provides guidelines for working with this Turborepo monorepo.

## Development Setup

### Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher
- Git

### Initial Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   ```

4. Start development:
   ```bash
   pnpm dev
   ```

## Monorepo Structure

This project uses Turborepo to manage the monorepo. Understanding the structure is important:

```
├── apps/               # Application packages
│   └── web/           # Next.js frontend
├── packages/          # Shared packages
│   ├── convex/       # Convex backend
│   ├── eslint-config/ # Shared ESLint configs
│   └── typescript-config/ # Shared TS configs
```

## Working with Packages

### Adding Dependencies

**To a specific package:**
```bash
# Navigate to the package directory
cd apps/web
pnpm add <package-name>

# Or from root
pnpm --filter web add <package-name>
```

**To the root (dev dependencies only):**
```bash
pnpm add -D -w <package-name>
```

### Creating a New Package

1. Create directory in `packages/` or `apps/`
2. Add `package.json` with appropriate name (`@repo/package-name`)
3. Add to `pnpm-workspace.yaml` if needed (usually automatic)
4. Reference in other packages using `workspace:*` protocol

### Workspace Dependencies

When one package depends on another in the monorepo:

```json
{
  "dependencies": {
    "@repo/convex": "workspace:*"
  }
}
```

## Code Quality

### Linting

```bash
# Lint all packages
pnpm lint

# Lint specific package
pnpm --filter web lint
```

### Type Checking

```bash
# Type check all packages
pnpm type-check

# Type check specific package
pnpm --filter web type-check
```

### Formatting

```bash
# Format all code
pnpm format

# Check formatting
pnpm format --check
```

## Building

### Development

```bash
# Start all apps in dev mode
pnpm dev

# Start specific app
pnpm --filter web dev
```

### Production Build

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter web build
```

## Turborepo Tasks

Tasks are defined in `turbo.json` and run in the optimal order:

- **`build`**: Builds depend on dependencies being built first (`^build`)
- **`dev`**: Runs in persistent mode, no caching
- **`lint`**: Depends on builds being complete
- **`type-check`**: Checks TypeScript types

### Task Caching

Turborepo caches task outputs. To clear cache:

```bash
# Clear local cache
pnpm turbo run build --force

# Or manually delete
rm -rf .turbo
```

## Commit Guidelines

Follow conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat(web): add user profile page
fix(convex): resolve auth session issue
docs: update README with deployment steps
```

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in specific package
pnpm --filter web test
```

### Writing Tests

- Place tests next to source files: `component.test.tsx`
- Use descriptive test names
- Follow AAA pattern: Arrange, Act, Assert

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Run `pnpm lint` and `pnpm type-check`
4. Commit with conventional commit messages
5. Push and create a pull request
6. Wait for CI checks to pass
7. Request review from maintainers

## Common Tasks

### Adding a New Shared Package

```bash
# Create package structure
mkdir -p packages/my-package
cd packages/my-package

# Initialize package.json
pnpm init

# Update name to use @repo/ prefix
# Add to workspace in pnpm-workspace.yaml if needed
```

### Using Shared Configs

**TypeScript:**
```json
{
  "extends": "@repo/typescript-config/nextjs.json"
}
```

**ESLint:**
```javascript
import baseConfig from "@repo/eslint-config/next.js";
export default baseConfig;
```

### Debugging Turborepo

```bash
# Verbose output
pnpm turbo run build --verbose

# Dry run to see what would execute
pnpm turbo run build --dry-run

# Force re-run (ignore cache)
pnpm turbo run build --force
```

## Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Workspace Guide](https://pnpm.io/workspaces)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Questions?

If you have questions, please:
1. Check existing issues
2. Review documentation
3. Open a new issue with the `question` label

Thank you for contributing! 🎉
