# Personal Portfolio

Portfolio website built with **Next.js (App Router), React, TypeScript and Tailwind CSS**.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Make it yours
- All text (name, about, skills, experience, projects, links) is in `lib/data.ts`.
- Put your resume at `public/resume.pdf` so the Download Resume buttons work.
- Replace the initials block in `app/page.tsx` with `<img src="/profile.jpg" />` after adding your photo to `public/`.
- Replace each `#` in `live` and `github` links in `lib/data.ts` with real URLs.

## Deploy
Push to GitHub, then import the repo on https://vercel.com (framework is detected automatically).
