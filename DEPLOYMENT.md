# Deployment Guide

This guide covers different deployment options for your portfolio website.

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended)

**One-Click Deploy:**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/portfolio)

**Manual Deploy:**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy!

### 2. Vercel

**One-Click Deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/portfolio)

**Manual Deploy:**
```bash
npm i -g vercel
vercel
```

### 3. GitHub Pages

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. The workflow will automatically deploy on push to main

### 4. AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
3. Deploy!

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t portfolio .
```

### Run Container
```bash
docker run -p 3000:3000 portfolio
```

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📝 Pre-deployment Checklist

- [ ] Update personal information in `app/page.tsx`
- [ ] Replace `public/CV.pdf` with your CV
- [ ] Replace `public/profile.jpg` with your photo
- [ ] Update social media links
- [ ] Test responsive design on different devices
- [ ] Run `npm run lint` to check for errors
- [ ] Run `npm run build` to ensure build succeeds

## 🚨 Troubleshooting

### Build Errors
- Check Node.js version (requires 18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

### Deployment Issues
- Verify build command and output directory
- Check environment variables
- Review deployment logs

### Performance Issues
- Optimize images
- Check bundle size
- Enable compression

## 📊 Performance Optimization

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Implement dynamic imports
3. **Caching**: Configure proper cache headers
4. **CDN**: Use a CDN for static assets

## 🔒 Security Considerations

- Keep dependencies updated
- Use environment variables for sensitive data
- Enable HTTPS
- Configure security headers

## 📈 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Add tracking ID to environment variables
3. Implement tracking code

### Other Analytics
- Plausible
- Fathom
- Mixpanel

## 🎯 SEO Optimization

1. Update meta tags in `app/layout.tsx`
2. Add structured data
3. Create sitemap
4. Submit to search engines

## 📱 Mobile Optimization

- Test on real devices
- Optimize touch interactions
- Check loading performance
- Validate responsive design

## 🔄 Continuous Deployment

The included GitHub Actions workflow automatically:
- Runs linter
- Builds the project
- Deploys to Netlify (if configured)

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review deployment logs
3. Open an issue on GitHub
4. Contact support for your hosting platform
