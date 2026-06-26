# aksa-uerda-ldn-project

Static website for London Summer Camp, organized for GitHub and Vercel deployment.

## Project Structure

- `index.html` - home page served at `/`
- `about.html`, `activities.html`, `schedule.html`, `gallery.html`, `apply.html`, `learn-more.html` - secondary pages
- `css/` - page stylesheets
- `js/` - browser JavaScript
- `brand/`, `icons/`, `decorative/`, `photos/`, `staff/` - site image folders
- `2019/` through `2026/` - gallery photos by year
- `videos/` - local video assets
- `check-static-links.js` - local reference checker

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run check:links
```

## Deploying To Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Keep the default Vercel settings. No build command is required.
4. Vercel will use `vercel.json` to serve clean URLs like `/about` and `/gallery`.

## Deploying To GitHub Pages

Upload the project files to a GitHub repository and enable GitHub Pages from the repository settings. The site uses relative links, so it can also run directly from `index.html`.

Do not upload generated local folders such as `node_modules/` or `logs/`. Run `npm install` again if you need the local Express server.
