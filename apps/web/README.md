# Better Auth Next.js Convex Starter

A comprehensive starter template combining Better Auth, Next.js (App Router), and Convex for modern authentication and backend solutions.

## Features

- ✅ **Complete Authentication**: Sign up, sign in, password reset, email verification
- ✅ **Social Providers**: GitHub OAuth integration
- ✅ **User Management**: Profile updates, avatar uploads, account settings
- ✅ **Security Features**: Two-factor authentication, passkeys, session management
- ✅ **Organization Support**: Multi-tenant organizations with role-based access
- ✅ **API Keys**: Secure API key management for programmatic access
- ✅ **Modern UI**: shadcn/ui components with Tailwind CSS
- ✅ **Type Safety**: Full TypeScript support with Convex's generated types

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up Convex:**
   ```bash
   cd packages/backend
   pnpm convex dev
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Set up GitHub OAuth (optional but recommended):**
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Create a new OAuth App
   - Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
   - Copy Client ID and Client Secret to your `.env.local`

5. **Start the development server:**
   ```bash
   pnpm dev
   ```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
# Convex Configuration
CONVEX_DEPLOYMENT=dev:your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment-name.convex.cloud
NEXT_PUBLIC_CONVEX_SITE_URL=https://your-deployment-name.convex.site

# Better Auth Configuration
SITE_URL=http://localhost:3000

# GitHub OAuth (Get from https://github.com/settings/developers)
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
```

## GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: Your app name
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret to your `.env.local` file

## Project Structure

```
better-auth-nextjs-convex-starter/
├── apps/web/                    # Next.js frontend
│   ├── src/app/
│   │   ├── (auth)/             # Auth pages (sign-in, sign-up, etc.)
│   │   ├── account/            # Account settings
│   │   ├── organization/       # Organization management
│   │   ├── dashboard/          # Protected dashboard
│   │   └── api/                # API routes
│   └── components/ui/          # shadcn/ui components
├── packages/backend/           # Convex backend
│   └── convex/
│       ├── auth.ts             # Better Auth configuration
│       └── schema.ts           # Database schema
└── .env.example               # Environment variables template
```

## Available Routes

- `/` - Home page with auth links
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page
- `/forgot-password` - Password reset
- `/dashboard` - Protected dashboard (requires authentication)
- `/account/settings` - Account settings
- `/account/security` - Security settings
- `/account/api-keys` - API key management
- `/organization/*` - Organization management

## Tech Stack

- **Frontend**: Next.js 15+, React 19, TypeScript, Tailwind CSS
- **Backend**: Convex (serverless backend)
- **Authentication**: Better Auth with Better Auth UI
- **UI Components**: shadcn/ui
- **Development**: Turborepo, pnpm

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Convex backend
cd packages/backend && pnpm convex dev

# Build for production
pnpm build
```

## Deployment

1. **Deploy Convex:**
   ```bash
   cd packages/backend
   pnpm convex deploy
   ```

2. **Deploy Next.js app:**
   ```bash
   cd apps/web
   pnpm build
   pnpm start
   ```

## Contributing

This is a starter template. Feel free to customize it for your needs!

## Resources

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Better Auth UI Documentation](https://better-auth-ui.com)
- [Convex Documentation](https://docs.convex.dev)
- [Next.js Documentation](https://nextjs.org/docs)
