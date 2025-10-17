# Better Auth UI + Convex + Nextjs Starter + Demo

A comprehensive demo application showcasing Better Auth UI components with Next.js (App Router) and Convex backend.

## Features

- ✅ **Complete Authentication**: Sign up, sign in, password reset, email verification
- ✅ **Social Providers**: GitHub OAuth integration
- ✅ **User Management**: Profile updates, avatar uploads, account settings
- ✅ **Security Features**: Two-factor authentication, passkeys, session management
- ✅ **Organization Support**: Multi-tenant organizations with role-based access
- ✅ **API Keys**: Secure API key management for programmatic access
- ✅ **Modern UI**: shadcn/ui components with Tailwind CSS and Better Auth UI
- ✅ **Localization**: Complete Portuguese (Brazil) translations included
- ✅ **Type Safety**: Full TypeScript support with Convex's generated types
- ✅ **Demo Pages**: Comprehensive showcase of all Better Auth UI components

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up Convex:**
   ```bash
   cd packages/convex
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

# Optional: Email Service Configuration (for production)
# RESEND_API_KEY=your_resend_api_key_here
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
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/
│   │   │   │   └── auth/
│   │   │   │       └── [...all]/    # Catch-all auth API routes
│   │   │   ├── auth/             # Auth pages
│   │   │   │   ├── forgot-password/
│   │   │   │   ├── sign-in/
│   │   │   │   ├── sign-out/
│   │   │   │   └── sign-up/
│   │   │   ├── demo/             # Demo pages for Better Auth UI
│   │   │   │   ├── account/
│   │   │   │   ├── advanced/
│   │   │   │   ├── combined/
│   │   │   │   ├── hooks/
│   │   │   │   ├── organization/
│   │   │   │   ├── redirect-signup/
│   │   │   │   ├── security/
│   │   │   │   └── user/
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css       # Global styles
│   │   │   ├── layout.tsx        # Root layout with floating header
│   │   │   ├── page.tsx          # Home page with demo navigation
│   │   │   └── providers.tsx     # Auth and Convex providers
│   │   ├── components/
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── demo-layout.tsx   # Layout for demo pages
│   │   │   ├── header.tsx        # Floating header with dynamic back button
│   │   │   ├── mode-toggle.tsx   # Dark/light theme toggle
│   │   │   └── theme-provider.tsx
│   │   └── lib/
│   │       ├── auth-client.ts    # Better Auth client configuration
│   │       ├── ConvexClientProvider.tsx
│   │       ├── localization/
│   │       │   └── pt-br.ts      # Portuguese (Brazil) localization
│   │       └── utils.ts
│   ├── public/                   # Static assets
│   │   ├── better-auth-logo-dark.svg
│   │   ├── better-auth-logo-light.svg
│   │   └── favicon.ico
│   ├── components.json           # shadcn/ui configuration
│   ├── next.config.ts            # Next.js configuration
│   ├── package.json
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   └── tsconfig.json
├── packages/convex/              # Convex backend
│   ├── convex/
│   │   ├── _generated/           # Auto-generated Convex types
│   │   ├── auth.config.ts        # Better Auth configuration
│   │   ├── auth.ts               # Auth setup and handlers
│   │   ├── betterAuth/           # Better Auth integration
│   │   │   ├── _generated/
│   │   │   ├── adapter.ts
│   │   │   ├── auth.ts
│   │   │   ├── convex.config.ts
│   │   │   └── schema.ts
│   │   ├── convex.config.ts
│   │   ├── http.ts
│   │   ├── schema.ts             # Database schema
│   │   ├── tsconfig.json
│   │   └── README.md
│   ├── next-env.d.ts
│   ├── package.json
│   └── tsconfig.json
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment variables (gitignored)
├── package.json                 # Root package.json with workspace config
├── pnpm-lock.yaml               # pnpm lockfile
├── pnpm-workspace.yaml          # pnpm workspace configuration
├── turbo.json                   # Turborepo configuration
└── README.md                    # This file
```

## Available Routes

- `/` - Home page with demo navigation and Better Auth UI showcase
- `/auth/sign-in` - Sign in page
- `/auth/sign-up` - Sign up page
- `/auth/forgot-password` - Password reset page
- `/auth/sign-out` - Sign out page
- `/demo/account` - Account management demo
- `/demo/advanced` - Advanced authentication features demo
- `/demo/combined` - Combined auth flows demo
- `/demo/hooks` - Authentication hooks demo
- `/demo/organization` - Organization management demo
- `/demo/redirect-signup` - Redirect signup flow demo
- `/demo/security` - Security features demo
- `/demo/user` - User profile management demo

## Tech Stack

- **Frontend**: Next.js 15+, React 19, TypeScript, Tailwind CSS
- **Backend**: Convex (serverless backend)
- **Authentication**: Better Auth with Better Auth UI
- **UI Components**: shadcn/ui + Better Auth UI
- **Development**: Turborepo, pnpm

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Convex backend
cd packages/convex && pnpm convex dev

# Build for production
pnpm build
```

## Deployment

1. **Deploy Convex:**
   ```bash
   cd packages/convex
   pnpm convex deploy
   ```

2. **Deploy Next.js app:**
   ```bash
   cd apps/web
   pnpm build
   pnpm start
   ```

## Contributing

This is a demo application showcasing Better Auth UI. Feel free to explore the code, use it as a reference for implementing Better Auth UI in your projects, or contribute improvements!

## Resources

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Better Auth UI Documentation](https://better-auth-ui.com)
- [Convex Documentation](https://docs.convex.dev)
- [Next.js Documentation](https://nextjs.org/docs)
