# Environment Variables Configuration

This document describes all environment variables used across the monorepo.

## Root Level

No environment variables needed at root level.

## Apps

### web (Next.js Application)

Create a `.env.local` file in `apps/web/`:

```bash
# Convex Configuration
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Site Configuration
SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONVEX_SITE_URL=http://localhost:3000

# OAuth Providers (Optional)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Better Auth Configuration
BETTER_AUTH_SECRET=generate-a-random-secret
BETTER_AUTH_URL=http://localhost:3000
```

**Required Variables:**
- `CONVEX_DEPLOYMENT` - Your Convex deployment name
- `NEXT_PUBLIC_CONVEX_URL` - Public URL to your Convex backend
- `BETTER_AUTH_SECRET` - Random secret for auth (use openssl rand -base64 32)

**Optional Variables:**
- `GITHUB_CLIENT_ID` - For GitHub OAuth
- `GITHUB_CLIENT_SECRET` - For GitHub OAuth
- `SITE_URL` - Base URL of your application
- `BETTER_AUTH_URL` - URL for Better Auth callbacks

## Packages

### @repo/convex

Create a `.env.local` file in `packages/convex/`:

```bash
# Convex Deployment
CONVEX_DEPLOYMENT=your-deployment-name

# Auth Configuration
SITE_URL=http://localhost:3000
```

**Note:** Convex backend runs using the Convex CLI and primarily uses environment variables from the Next.js app.

## Production Deployment

### Vercel

When deploying to Vercel, add these environment variables in the Vercel dashboard:

1. Go to Project Settings → Environment Variables
2. Add all variables from the `.env.local` file
3. Make sure `NEXT_PUBLIC_*` variables are marked as public

### Other Platforms

Ensure all environment variables are set according to your platform's requirements. Variables prefixed with `NEXT_PUBLIC_` must be available at build time.

## Security Notes

1. **Never commit `.env.local` files** - They are gitignored by default
2. **Use strong secrets** - Generate with `openssl rand -base64 32`
3. **Rotate secrets regularly** - Especially in production
4. **Limit access** - Only give necessary team members access to production secrets

## Getting Convex Deployment URL

1. Install Convex CLI: `npm install -g convex`
2. Run `npx convex dev` in the `packages/convex` directory
3. Copy the deployment URL from the output
4. Add it to your `.env.local` files

## Generating Secrets

```bash
# Generate a random secret for BETTER_AUTH_SECRET
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Troubleshooting

### "CONVEX_DEPLOYMENT not found"
- Make sure you've created a `.env.local` file
- Verify the file is in the correct directory
- Restart your development server

### "Invalid Convex URL"
- Check that the URL starts with `https://`
- Ensure you're using the correct deployment URL
- Run `npx convex dev` to get the correct URL

### OAuth Not Working
- Verify OAuth app is configured correctly
- Check that redirect URLs match your app URL
- Ensure client ID and secret are correct
