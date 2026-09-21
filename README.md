# Amar Kumar — Portfolio

A responsive personal portfolio built with Vue 3, Vite, and plain CSS. All public content is centralized in `src/data/portfolio.js`.

## Local setup

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Update content

- Edit text, skills, projects, education, contact details, and links in `src/data/portfolio.js`.
- Replace `public/amar-kumar.jpeg` to update the portrait.
- Components are in `src/components/`; global presentation and responsive rules are in `src/styles.css`.

Every published project link points to a verified repository or live deployment.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository at Vercel.
3. Keep the detected framework preset as **Vite**.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy.

No environment variables are required.

## Deploy to GitHub Pages

1. Push the project to the `main` branch of a GitHub repository.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. The included `.github/workflows/deploy-pages.yml` workflow builds and publishes the site automatically.
4. Open the URL shown in the workflow’s deployment summary.

The site is a static single-page portfolio and requires no server-side runtime.
