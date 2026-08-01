# 🚀 Deployment Guide — Step by Step

Follow these steps to get your portfolio **live on the internet**.

Estimated: ~10 minutes total.

---

## ✅ Prerequisites (one-time)

1. A **GitHub account** — you already have one: `hardik198`
2. **Git installed locally**
   - macOS: `brew install git`
   - Windows: download from https://git-scm.com/download/win
   - Linux: `sudo apt install git`
3. Configure Git once:
   ```bash
   git config --global user.name "Hardik Panchal"
   git config --global user.email "panchalhardik183@gmail.com"
   ```

---

## Option A — Deploy to GitHub Pages (recommended, free, easiest)

Because your GitHub username is `hardik198`, creating a repo named
**`hardik198.github.io`** gives you the URL **https://hardik198.github.io/** automatically.

### Step 1 — Create the repo on GitHub

1. Go to https://github.com/new
2. Repository name: **`hardik198.github.io`** ← must match this exactly
3. Visibility: **Public**
4. Do **NOT** initialize with README (you already have one).
5. Click **Create repository**.

### Step 2 — Push your code

Open a terminal inside the `portfolio/` folder and run:

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/hardik198/hardik198.github.io.git
git push -u origin main
```

> If prompted for a password, GitHub now needs a **Personal Access Token**:
> https://github.com/settings/tokens → *Generate new token (classic)* → tick `repo` → copy → paste as password.

### Step 3 — Enable GitHub Pages

1. Open the repo on GitHub → **Settings** tab → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose one:
   - **Deploy from a branch** → branch `main` → folder `/ (root)` → **Save**
   - *OR* **GitHub Actions** — the `.github/workflows/deploy.yml` in this repo will pick it up automatically.
3. Wait 30–60 seconds. Your site is live at **https://hardik198.github.io/**

### Step 4 — Verify

Open https://hardik198.github.io/ in a browser. You should see your portfolio.
Click **"Resume"** in the header — the PDF should download.

---

## Option B — Deploy to Vercel (fast + preview URLs on every push)

1. Push your repo to GitHub (steps 1–2 above).
2. Go to https://vercel.com/new
3. **Import** the `hardik198.github.io` repo.
4. Framework preset: **Other**
   - Build command: *(leave empty)*
   - Output directory: `.`
5. Click **Deploy**.
6. Your site is live in ~30s at a URL like `https://hardik198.vercel.app`.

The `vercel.json` in this project already applies smart caching + security headers.

---

## Option C — Deploy to Netlify (drag & drop, no Git needed)

1. Zip the contents of the `portfolio/` folder (files, not the folder itself).
2. Go to https://app.netlify.com/drop
3. Drag the zip in.
4. Netlify gives you a URL like `https://something-cool.netlify.app`.

For continuous deploy: Netlify → **New site from Git** → connect the GitHub repo.
The `netlify.toml` in this project handles headers + caching automatically.

---

## 🌐 Optional — Custom Domain (e.g., `hardikpanchal.dev`)

### On GitHub Pages
1. Buy a domain at Namecheap / GoDaddy / Cloudflare (~$10/year).
2. In your repo → **Settings → Pages → Custom domain** → enter your domain → **Save**.
3. At your registrar's DNS panel, add:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `hardik198.github.io`
4. Wait ~10 minutes for DNS to propagate.
5. Back on GitHub Pages, tick **Enforce HTTPS**.

### On Vercel
1. **Settings → Domains → Add** your domain.
2. Follow the DNS instructions Vercel shows you (usually one CNAME).
3. HTTPS is automatic.

---

## 🧪 Verify After Deployment

Open your live URL and check:

- [ ] Hero animations play
- [ ] Dark/Light toggle works and charts re-render
- [ ] Projects filter + search work
- [ ] Resume button downloads `Hardik_Panchal_Resume.pdf`
- [ ] Contact form opens mail client (`mailto:`)
- [ ] Mobile view (open on your phone!)
- [ ] Update the OG image + canonical URL in `index.html` if you use a custom domain

---

## 📈 Post-Deploy (recommended)

### Submit to Google Search Console
1. Go to https://search.google.com/search-console
2. Add your site (URL prefix property)
3. Verify via HTML tag → paste into `<head>` of `index.html` → redeploy
4. Submit `sitemap.xml`

### Add Google Analytics (GA4)
1. Create a GA4 property at https://analytics.google.com
2. Copy your Measurement ID (`G-XXXXXXXXXX`)
3. Add this snippet just before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Share your portfolio
- LinkedIn: pin the link to your profile's "Featured" section
- Twitter/X: tweet with your OG preview
- Resume: replace all "GitHub link" fields with the portfolio URL
- Email signature: `Portfolio: https://hardik198.github.io/`

---

## 🆘 Troubleshooting

| Problem | Fix |
|---------|-----|
| 404 on GitHub Pages | Wait 2 min; make sure the repo name is exactly `hardik198.github.io`; check Settings → Pages is enabled |
| Resume button broken | Ensure `Hardik_Panchal_Resume.pdf` is in the same folder as `index.html` |
| Fonts not loading | Google Fonts requires internet — hard-refresh the page (Ctrl+F5) |
| Charts blank | Open browser console (F12), check for ad-blocker blocking `cdn.jsdelivr.net` |
| Dark mode not persisting | This is by design (session-only). Ask me to add `localStorage` persistence if you want. |

---

You're ready to ship. 🎉
