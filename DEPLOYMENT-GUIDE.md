# GitHub Pages Deployment Fix for Nomad V Growth

## 🚨 THE PROBLEM
Your site shows a blank page on GitHub Pages but works locally because:
1. Vite builds assets with `/` paths (root)
2. GitHub Pages serves from `/nomad-v-growth/` (subdirectory)
3. Browser can't find your JS/CSS files

---

## ✅ THE SOLUTION (3 Options)

### **OPTION 1: Quick Fix (5 minutes) - RECOMMENDED**

1. **Update `vite.config.ts`:**
```typescript
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/nomad-v-growth/',  // 👈 ADD THIS LINE
      // ... rest of config
    };
});
```

2. **Rebuild and push:**
```bash
npm run build
git add .
git commit -m "fix: add base path for GitHub Pages"
git push
```

3. **Wait 2-3 minutes** for GitHub Pages to rebuild

---

### **OPTION 2: Automated Deployment (10 minutes) - BEST PRACTICE**

This sets up automatic deployment whenever you push to GitHub.

1. **Create `.github/workflows/deploy.yml`** (I've provided this file)

2. **Enable GitHub Pages in your repo settings:**
   - Go to: Settings > Pages
   - Source: **GitHub Actions** (not "Deploy from a branch")
   - Click Save

3. **Update `vite.config.ts`** (add the `base` line from Option 1)

4. **Push to GitHub:**
```bash
git add .
git commit -m "feat: add automated GitHub Pages deployment"
git push
```

5. **Watch it deploy:**
   - Go to Actions tab in your repo
   - See the workflow run
   - Site will be live in ~2 minutes

---

### **OPTION 3: Custom Domain (15 minutes) - PRODUCTION READY**

If you have a custom domain (like `growth.nomadv.com`):

1. **Update `vite.config.ts`:**
```typescript
base: '/',  // Use root path for custom domain
```

2. **Add CNAME file to `/public/CNAME`:**
```
growth.nomadv.com
```

3. **Configure DNS:**
   - Add CNAME record pointing to `yourusername.github.io`
   - Or use A records for apex domain

4. **Enable custom domain in GitHub settings:**
   - Settings > Pages > Custom domain
   - Enter your domain
   - Enable HTTPS

---

## 🛠️ FILES PROVIDED

1. **vite.config-FIXED.ts** - Updated Vite config with base path
2. **deploy.yml** - GitHub Actions workflow for auto-deployment
3. **DEPLOYMENT-GUIDE.md** - This file

---

## 📋 STEP-BY-STEP: OPTION 1 (QUICKEST)

```bash
# 1. Replace your vite.config.ts with vite.config-FIXED.ts
cp vite.config-FIXED.ts vite.config.ts

# 2. Rebuild
npm run build

# 3. Check the dist folder - paths should now include /nomad-v-growth/
# Look at dist/index.html - script tags should be:
# <script src="/nomad-v-growth/assets/index-abc123.js">

# 4. Commit and push
git add .
git commit -m "fix: configure base path for GitHub Pages"
git push

# 5. Wait 2-3 minutes, then check your site
# https://yourusername.github.io/nomad-v-growth/
```

---

## 🔍 HOW TO VERIFY IT WORKED

1. **Open browser DevTools** (F12)
2. **Go to Console tab**
3. **Check for errors:**
   - ❌ Before fix: `Failed to load resource: 404 /assets/index-abc.js`
   - ✅ After fix: No 404 errors

4. **Check Network tab:**
   - All assets should load with `200` status
   - Assets should be from `/nomad-v-growth/assets/...`

---

## 🚀 OPTION 2 SETUP (AUTOMATED DEPLOYMENT)

### 1. Create GitHub Actions Workflow:
```bash
# In your project root:
mkdir -p .github/workflows
cp deploy.yml .github/workflows/deploy.yml
```

### 2. Update vite.config.ts:
```typescript
base: '/nomad-v-growth/',
```

### 3. Enable GitHub Actions for Pages:
- Go to: `https://github.com/yourusername/nomad-v-growth/settings/pages`
- Under "Build and deployment"
- Source: Select **"GitHub Actions"** (not "Deploy from a branch")
- Save

### 4. Push to GitHub:
```bash
git add .
git commit -m "feat: add GitHub Actions deployment"
git push
```

### 5. Monitor Deployment:
- Go to: `https://github.com/yourusername/nomad-v-growth/actions`
- Click the latest workflow run
- Watch it build and deploy (takes ~2-3 minutes)

---

## 🐛 TROUBLESHOOTING

### Issue: Still seeing blank page after changes
**Solution:**
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Try incognito/private mode
4. Check GitHub Actions didn't fail (Actions tab)

### Issue: 404 on GitHub Pages
**Solution:**
1. Check repo settings: Settings > Pages
2. Make sure source is set correctly
3. Verify `gh-pages` branch exists (if using branch deployment)
4. Wait 5 minutes - GitHub Pages can be slow to update

### Issue: CSS not loading
**Solution:**
1. Check `dist/index.html` - CSS link should include base path
2. Rebuild: `npm run build`
3. Verify `base` in vite.config.ts is correct

### Issue: GitHub Actions failing
**Solution:**
1. Check Actions tab for error messages
2. Common fixes:
   - Enable Pages in repo settings
   - Check permissions in workflow file
   - Verify `package-lock.json` is committed

---

## 🎯 RECOMMENDED WORKFLOW

1. **For now:** Use Option 1 (Quick Fix) to get it working
2. **Next:** Set up Option 2 (Automated Deployment) for convenience
3. **Later:** Move to Option 3 (Custom Domain) for production

---

## 📝 DEVELOPMENT vs PRODUCTION

### Local Development:
```bash
npm run dev
# Site runs at: http://localhost:3000
# Base path: / (root)
```

### Production (GitHub Pages):
```bash
npm run build
# Builds to: ./dist
# Base path: /nomad-v-growth/
# Deployed to: https://yourusername.github.io/nomad-v-growth/
```

---

## ✅ FINAL CHECKLIST

Before pushing to GitHub:
- [ ] Updated `vite.config.ts` with correct `base` path
- [ ] Ran `npm run build` successfully
- [ ] Checked `dist/index.html` has correct asset paths
- [ ] Committed all changes
- [ ] Pushed to GitHub
- [ ] Waited 2-3 minutes for deployment
- [ ] Hard refreshed browser (Ctrl + Shift + R)
- [ ] Checked DevTools console for errors

---

## 🆘 STILL NOT WORKING?

1. **Share your GitHub repo URL** so I can check settings
2. **Share the Console errors** from DevTools
3. **Check if GitHub Actions is enabled** in your repo

---

## 💡 PRO TIPS

1. **Always rebuild before pushing:**
   ```bash
   npm run build && git add dist && git commit -m "chore: rebuild for deployment" && git push
   ```

2. **Test production build locally:**
   ```bash
   npm run build
   npm run preview
   # Opens at localhost:4173 with production settings
   ```

3. **Keep dist folder in Git:**
   - Make sure `dist/` is NOT in `.gitignore`
   - GitHub Pages deploys from the dist folder

4. **Use GitHub Actions:**
   - Automated deployments
   - No manual building
   - Easier team collaboration

---

## 📞 NEED HELP?

If you're still stuck, provide:
1. Your GitHub repo URL
2. Screenshot of DevTools Console errors
3. Your `vite.config.ts` file
4. Output of `npm run build`

Let's get this deployed! 🚀
