# Hardik Panchal — Data Scientist Portfolio

> Turning data into meaningful insights with Python and Machine Learning.

[![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)]()
[![Charts: ApexCharts](https://img.shields.io/badge/Charts-ApexCharts-blue?style=flat)]()
[![Deploy: GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?style=flat&logo=github)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A premium, single-page, recruiter-friendly portfolio for a Data Scientist / ML Engineer role.
Built with **Tailwind CSS + Vanilla JavaScript + ApexCharts** — no build step, deploys anywhere.

**Live demo:** https://hardik198.github.io/

---

## ✨ Features

- Premium hero with typing effect, animated counters, floating tech chips
- Dark / Light theme toggle (charts re-render on switch)
- 6 tabbed skill categories with animated proficiency bars
- Project cards with search, category filter, and drill-down modal
- Education timeline · Certifications · Achievements · Services
- Mock GitHub contribution graph + repo cards
- Mini live analytics dashboard (ApexCharts)
- Testimonials · Contact form (mailto) · Visitor counter
- SEO: meta tags, Open Graph, Twitter Cards, JSON-LD Person schema
- Fully responsive · Accessible · Fast (< 200 KB gzipped, no build)

---

## 🧰 Tech Stack

| Layer         | Tech |
|---------------|------|
| Markup        | Semantic HTML5 |
| Styling       | Tailwind CSS (CDN) + custom CSS |
| Interactivity | Vanilla JavaScript (ES6+) |
| Charts        | ApexCharts |
| Icons         | Remix Icon |
| Fonts         | Inter, Space Grotesk, JetBrains Mono (Google Fonts) |
| Hosting       | GitHub Pages / Vercel / Netlify |

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── app.js                  # Interactivity + data
├── Hardik_Panchal_Resume.pdf   # (drop your resume here)
├── README.md
├── LICENSE
├── .gitignore
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages auto-deploy
```

---

## 🚀 Quick Start (Local)

No build step. Just serve the folder:

```bash
# Option 1 — Python
python3 -m http.server 3000

# Option 2 — Node
npx serve .
```

Then open http://localhost:3000

---

## 🌍 Deploy to GitHub Pages

### Method A — One-click (recommended)

1. Create a new repo on GitHub named `hardik198.github.io` (this makes it your root portfolio URL).
2. Push this folder:

   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "feat: initial portfolio"
   git branch -M main
   git remote add origin https://github.com/hardik198/hardik198.github.io.git
   git push -u origin main
   ```

3. On GitHub → **Settings → Pages → Source: `Deploy from a branch`** → Branch: `main` / root → **Save**.
4. Wait ~1 minute. Your site goes live at **https://hardik198.github.io/**

### Method B — GitHub Actions (already configured)

The workflow at `.github/workflows/deploy.yml` will auto-deploy on every push to `main`.

1. In your repo → **Settings → Pages → Source: `GitHub Actions`**.
2. Push to `main` — the site builds and publishes automatically.

---

## ▲ Deploy to Vercel (alternative)

1. Push the repo to GitHub.
2. Go to https://vercel.com/new → **Import** the repo.
3. Framework preset: **Other** · Build command: *(leave empty)* · Output dir: `.`
4. Click **Deploy** — done in ~30 seconds.

---

## 🖇️ Deploy to Netlify (alternative)

1. Drag & drop the `portfolio/` folder onto https://app.netlify.com/drop
2. Or connect GitHub → **New site from Git** → build command empty, publish dir `.`

---

## 🎨 Customization

All content lives in **two files**:

- `index.html` — page structure, hero copy, contact info
- `app.js` — data arrays at the top: `SKILLS`, `PROJECTS`, `CERTS`, `ACHIEVEMENTS`, `SERVICES`, `REPOS`, `TESTIMONIALS`

Update those arrays to make the site fully yours.

---

## 🔍 SEO Checklist

- [x] `<title>` and `<meta description>`
- [x] Open Graph + Twitter Cards
- [x] Canonical URL (update in `index.html` if you use a custom domain)
- [x] JSON-LD `Person` schema
- [x] Semantic HTML5 landmarks
- [x] `robots.txt` and `sitemap.xml`
- [ ] Google Search Console — verify ownership after deploy
- [ ] Google Analytics — paste your GA4 ID in `index.html` (see comment)

---

## 🔐 License

MIT © Hardik Panchal — see [LICENSE](LICENSE).

---

## 📬 Contact

- Email: **panchalhardik183@gmail.com**
- Phone: **+91 96626 35171**
- GitHub: **[@hardik198](https://github.com/hardik198)**
- LinkedIn: **[hardik-panchal-154631292](https://linkedin.com/in/hardik-panchal-154631292)**
- Location: **Vadodara, Gujarat, India**

## 🗺️ Roadmap

- [ ] Wire live GitHub API for real contribution graph + top repos
- [ ] Add Kaggle / LeetCode / HackerRank stat cards
- [ ] Blog section (Markdown-driven)
- [ ] Optional 3D hero with Three.js
- [ ] i18n (English + Hindi)
