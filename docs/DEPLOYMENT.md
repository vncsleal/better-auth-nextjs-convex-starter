# Deployment Guide

This guide covers deploying the Better Auth + Next.js + Convex monorepo to production.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Convex Backend](#convex-backend)
- [Next.js Frontend (Vercel)](#nextjs-frontend-vercel)
- [Alternative Deployments](#alternative-deployments)
- [Environment Variables](#environment-variables)
- [Post-Deployment](#post-deployment)

## Prerequisites

Before deploying:

1. ✅ All tests pass locally
2. ✅ Production build works: `pnpm build`
3. ✅ Environment variables documented
4. ✅ Database schema is finalized
5. ✅ OAuth apps configured (if using)

## Convex Backend

### 1. Create Production Deployment

```bash
# Navigate to convex package
cd packages/convex

# Login to Convex (first time only)
npx convex login

# Create production deployment
npx convex deploy --prod

# Note the deployment URL (e.g., https://your-app.convex.cloud)
```

### 2. Configure Production Environment

The Convex deployment will automatically use environment variables from your Vercel deployment. No separate configuration needed for Convex.

### 3. Deploy Schema

Schema is automatically deployed with `convex deploy`. Ensure your schema is production-ready before deploying.

```bash
# Review schema changes
cat convex/schema.ts

# Deploy
npx convex deploy --prod
```

## Next.js Frontend (Vercel)

### Method 1: Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect the monorepo

2. **Configure Project**
   - **Root Directory**: Leave as root (monorepo setup)
   - **Build Command**: `pnpm turbo build --filter=web` (already in vercel.json)
   - **Install Command**: `pnpm install` (already in vercel.json)
   - **Output Directory**: `apps/web/.next` (already in vercel.json)
   - **Framework Preset**: Next.js

3. **Add Environment Variables**
   ```
   CONVEX_DEPLOYMENT=your-prod-deployment
   NEXT_PUBLIC_CONVEX_URL=https://your-app.convex.cloud
   SITE_URL=https://your-domain.com
   NEXT_PUBLIC_CONVEX_SITE_URL=https://your-domain.com
   BETTER_AUTH_SECRET=your-production-secret
   BETTER_AUTH_URL=https://your-domain.com
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Vercel will provide a production URL

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
pnpm install -g vercel

# Login (first time only)
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Alternative Deployments

### Docker Deployment

```dockerfile
# Dockerfile at repository root
FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm@10.7.1

# Set working directory
WORKDIR /app

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY turbo.json ./

# Copy all packages and apps
COPY apps ./apps
COPY packages ./packages

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build
RUN pnpm build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy built application
COPY --from=base /app/apps/web/.next ./apps/web/.next
COPY --from=base /app/apps/web/public ./apps/web/public
COPY --from=base /app/apps/web/package.json ./apps/web/
COPY --from=base /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "apps/web/.next/standalone/server.js"]
```

### Build Commands

```bash
# Build for production
docker build -t better-auth-app .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_CONVEX_URL=your-url \
  -e CONVEX_DEPLOYMENT=your-deployment \
  better-auth-app
```

### Cloudflare Pages

1. **Configure Build**
   - Build command: `pnpm turbo build --filter=web`
   - Build output: `apps/web/.next`
   - Root directory: `/`

2. **Add Environment Variables** (same as Vercel)

3. **Deploy via Git** or CLI

### Railway / Render

1. **Configure as Monorepo**
   - Set build command: `pnpm turbo build --filter=web`
   - Set start command: `cd apps/web && pnpm start`

2. **Add Environment Variables**

3. **Deploy**

## Environment Variables

### Required for All Deployments

```bash
# Convex Configuration
CONVEX_DEPLOYMENT=your-production-deployment
NEXT_PUBLIC_CONVEX_URL=https://your-app.convex.cloud

# Site URLs
SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONVEX_SITE_URL=https://your-domain.com

# Better Auth
BETTER_AUTH_SECRET=<generate-strong-secret>
BETTER_AUTH_URL=https://your-domain.com
```

### Optional (OAuth)

```bash
# GitHub OAuth
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-client-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```

### Generating Production Secrets

```bash
# Generate BETTER_AUTH_SECRET
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Post-Deployment

### 1. Verify Deployment

```bash
# Check health
curl https://your-domain.com/api/health

# Test authentication
curl https://your-domain.com/api/auth/session
```

### 2. Configure OAuth Redirects

Update OAuth app settings with production URLs:

**GitHub:**
- Homepage URL: `https://your-domain.com`
- Authorization callback URL: `https://your-domain.com/api/auth/callback/github`

**Google:**
- Authorized JavaScript origins: `https://your-domain.com`
- Authorized redirect URIs: `https://your-domain.com/api/auth/callback/google`

### 3. Set Up Monitoring

- **Vercel Analytics**: Enable in project settings
- **Error Tracking**: Configure Sentry or similar
- **Performance**: Monitor Core Web Vitals

### 4. Configure Custom Domain

**On Vercel:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate to be issued

### 5. Enable HTTPS

Most platforms enable HTTPS automatically. Ensure:
- SSL certificate is active
- HTTP redirects to HTTPS
- HSTS headers are set

## Continuous Deployment

### Automatic Deployments

Most platforms support automatic deployments from Git:

1. **Production**: Deploys from `main` branch
2. **Preview**: Deploys from pull requests
3. **Development**: Optional branch deployments

### GitHub Actions (Optional)

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: pnpm/action-setup@v2
        with:
          version: 10.7.1
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      
      - run: pnpm install
      - run: pnpm build
      
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## Rollback Procedure

### Vercel

1. Go to Deployments tab
2. Find previous working deployment
3. Click "Promote to Production"

### Manual Rollback

```bash
# Revert to previous commit
git revert HEAD
git push

# Or checkout previous version
git checkout <previous-commit>
git push --force
```

## Troubleshooting

### Build Fails

```bash
# Check build locally
pnpm build

# Check specific package
pnpm --filter web build

# Clear cache
rm -rf .turbo node_modules
pnpm install
pnpm build
```

### Environment Variables Not Working

- Ensure `NEXT_PUBLIC_*` variables are set at build time
- Restart deployment after changing env vars
- Check for typos in variable names

### Convex Connection Issues

- Verify `NEXT_PUBLIC_CONVEX_URL` is correct
- Check Convex deployment status
- Ensure CORS is configured in Convex

### OAuth Not Working

- Check redirect URLs match exactly
- Verify client ID and secret
- Ensure callback URLs use HTTPS in production

## Performance Optimization

### Enable Caching

```javascript
// next.config.ts
const nextConfig = {
  // Enable SWC minification
  swcMinify: true,
  
  // Configure image optimization
  images: {
    domains: ['your-cdn.com'],
  },
  
  // Enable React strict mode
  reactStrictMode: true,
};
```

### CDN Configuration

- Use Vercel's Edge Network (automatic)
- Configure custom CDN for static assets
- Enable image optimization

### Database Performance

- Index frequently queried fields in Convex
- Use Convex's built-in caching
- Optimize query patterns

## Security Checklist

- [ ] All secrets are environment variables (not hardcoded)
- [ ] HTTPS is enforced
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled
- [ ] CSP headers are set
- [ ] Dependencies are up to date
- [ ] OAuth apps are production-ready
- [ ] Database has proper access controls

## Monitoring and Logs

### Vercel Logs

```bash
# View logs
vercel logs <deployment-url>

# Stream logs
vercel logs <deployment-url> --follow
```

### Convex Logs

```bash
# View function logs
npx convex logs --prod

# Filter by function
npx convex logs --prod --function myFunction
```

## Cost Estimation

### Vercel
- Free tier: Hobby projects
- Pro: $20/month + usage
- Enterprise: Custom pricing

### Convex
- Free tier: Development
- Pro: Pay as you grow
- Enterprise: Custom pricing

## Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Check [Convex Documentation](https://docs.convex.dev)
3. Check [Next.js Documentation](https://nextjs.org/docs)
4. Open an issue in the repository

---

*Happy deploying! 🚀*
