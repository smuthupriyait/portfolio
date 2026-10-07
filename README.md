# Muthupriya Shankaran: portfolio

React + Vite single-page portfolio. Two runtime dependencies (react, react-dom). No fonts or images fetched from other sites.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs /dist
```

## What to edit
1. **`src/data.js`**: all content and links. Top of file has `links`. A link left as `""` is simply hidden (currently `ragDemo` and `ragCaseStudy`). Add a URL and the button appears.
2. **Case study and results**: written from your repo README. Update `results` and `caseStudy` whenever the project changes (for example when you add a UI).
3. **`index.html`**: set the canonical URL, add `og:url` and an `og:image` (1200x630) after deploying.
4. Put a real screenshot of the RAG app in `/public` and uncomment the `<img>` in `FeaturedProject.jsx` (write meaningful alt text).
5. To offer the CV, put the PDF in `/public` and set `links.cv` to its path.

## Deploy
Netlify, Vercel or GitHub Pages: build command `npm run build`, output directory `dist`.
Suggested title: `Muthupriya Shankaran | AI Engineer | M.Sc. Artificial Intelligence`. Suggested domain: `muthupriyashankaran.dev` or similar.

## Structure
```
index.html          meta, Open Graph
src/main.jsx        entry
src/App.jsx         mounts the page
src/render.js       page markup (shared by the React app and the standalone build)
src/data.js         content and links: edit this
src/styles.css      design tokens + styles
scripts/static.mjs  builds portfolio-standalone.html
```

## Quick preview without installing anything
Double-click `portfolio-standalone.html`. After editing `src/data.js`, regenerate it with `npm run standalone` (needs only Node, no install).
Note: `index.html` in this project is a Vite source file and shows a blank page if opened directly. Use `npm run dev` or the standalone file.
