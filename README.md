# Akshay Potdar – Portfolio

A recruiter-friendly portfolio site built with **Angular 18** and **Angular Material**, showcasing experience, projects, skills, and contact details.

---

## Push to GitHub & get your live URL

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `portfolio` (or any name you prefer)
   - Visibility: **Public**
   - Do **not** add a README, .gitignore, or license (the project already has them)
   - Click **Create repository**

2. **Push this project to GitHub** (run in the project folder):

   ```bash
   cd path/to/portfolio
   git remote add origin https://github.com/akshay280897/portfolio.git
   git push -u origin main
   ```
   Replace `path/to/portfolio` with the actual path to this project. (If you already added `origin`, just run `git push -u origin main`.)

3. **Turn on GitHub Pages**
   - In your repo: **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**
   - Save. The workflow will run on every push to `main`.

4. **Your live portfolio URL** (after the first successful deploy, in a few minutes):

   **https://akshay280897.github.io/portfolio/**

   Share this link with recruiters.

---

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Build for production

```bash
npm run build
```

Output is in `dist/portfolio`.

## Tech stack

- Angular 18 (standalone components)
- Angular Material (toolbar, cards, buttons, chips, icons)
- SCSS with CSS variables for theming
- Responsive, single-page layout with smooth scroll navigation

## Sections

- **Hero** – Headline and primary CTA
- **About** – Profile summary
- **Experience** – Vervotech & Bentley Systems
- **Key Projects** – Hotel Mapping Platform, iModelBridge, ProjectShare
- **Technical Skills** – Grouped by category
- **Education** – B.Tech, Rajarambapu Institute of Technology
- **Certifications & Achievements** – RHCSA, RHCE, awards, ATM Dubai 2024
- **Contact** – Email, phone, location, LinkedIn

Update content in the section components under `src/app/sections/`.
