# 🚀 GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Custom domain on Cloudflare
- Node.js 18+ installed locally

## Step 1: GitHub Repository Setup

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `GitHub Actions`
   - Save the settings

## Step 2: Configure Custom Domain

1. **Update CNAME file:**
   - Replace `your-domain.com` in `public/CNAME` with your actual domain
   - Example: `portfolio.serenaridany.com`

2. **Cloudflare Configuration:**
   - Log into your Cloudflare dashboard
   - Add your domain if not already added
   - Go to `DNS` settings
   - Add these records:

   ```
   Type: CNAME
   Name: @ (or your subdomain)
   Target: yourusername.github.io
   Proxy status: Proxied (orange cloud)
   ```

   ```
   Type: CNAME
   Name: www
   Target: yourusername.github.io
   Proxy status: Proxied (orange cloud)
   ```

3. **SSL/TLS Settings:**
   - Go to `SSL/TLS` → `Overview`
   - Set encryption mode to `Full (strict)`
   - Go to `SSL/TLS` → `Edge Certificates`
   - Enable `Always Use HTTPS`

## Step 3: Deploy

1. **Trigger deployment:**
   - Push any change to the `main` branch
   - GitHub Actions will automatically build and deploy

2. **Monitor deployment:**
   - Go to `Actions` tab in your repository
   - Watch the deployment progress
   - Your site will be available at your custom domain

## Step 4: Verify Deployment

1. **Check GitHub Pages settings:**
   - Go to `Settings` → `Pages`
   - Verify your custom domain is listed
   - Ensure "Enforce HTTPS" is checked

2. **Test your site:**
   - Visit your custom domain
   - Test all pages and functionality
   - Check that images and assets load correctly

## Troubleshooting

### Common Issues:

1. **404 Errors:**
   - Ensure `trailingSlash: true` is set in `next.config.ts`
   - Check that all internal links use relative paths

2. **Images not loading:**
   - Verify `images: { unoptimized: true }` is set
   - Check that all images are in the `public` folder

3. **Custom domain not working:**
   - Verify DNS records are correct
   - Check Cloudflare proxy status
   - Wait for DNS propagation (up to 24 hours)

4. **Build failures:**
   - Check GitHub Actions logs
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

## Local Testing

Test the static build locally:
```bash
npm run build:static
npx serve out
```

## File Structure After Build

The build will create an `out` folder with:
```
out/
├── index.html
├── _next/
├── images/
└── [other static assets]
```

## Environment Variables

For production builds, ensure any environment variables are properly configured in GitHub repository settings if needed.

## Security Headers

Consider adding security headers in Cloudflare:
- Go to `Security` → `Security Headers`
- Add recommended headers for better security
