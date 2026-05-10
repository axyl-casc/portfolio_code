# axyl-casc.github.io

A modern personal portfolio site for **Axyl Carefoot‑Schulz**, built with **React + TypeScript + Vite + Tailwind CSS + DaisyUI**.

This repository powers a multi-page portfolio experience (implemented as path-based rendering in a Vite SPA) with:

- A detailed home page (about, skills, projects, experience, education, hobbies)
- Dedicated pages for project and hobby details
- Tag-based browsing across portfolio content
- Light/dark theme support with persisted preference
- Accessibility-focused UX elements (skip link, semantic sections, scroll-to-top, hash navigation support)

---

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build tool:** Vite 5
- **Styling:** Tailwind CSS + DaisyUI
- **Package manager:** npm

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended)
- **npm** 9+

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

---

## Available Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check and build for production (`tsc -b && vite build`)
- `npm run preview` — Preview production build output

---

## Application Routing

This project uses **path detection in `App.tsx`** (instead of React Router) to render pages based on `window.location.pathname`.

Supported paths include:

- `/` → Home page
- `/other_projects` → Extended projects listing
- `/other_hobbies` → Extended hobbies listing
- `/projects/:slug` → Individual project details
- `/hobbies/:slug` → Individual hobby details
- `/tags/:tag` → Tag-focused content page

Additionally, hash fragments (for example `/#projects`) are supported for in-page section navigation and smooth scrolling.

---

## Project Structure

```text
.
├─ src/
│  ├─ assets/                 # Static images/icons
│  ├─ components/             # Reusable UI components (header, footer, grids, etc.)
│  ├─ layouts/                # Page layout shell
│  ├─ pages/                  # Page-level view components
│  ├─ utils/                  # Shared utilities (e.g., tag color mapping)
│  ├─ App.tsx                 # Main app entry and path-based routing logic
│  ├─ main.tsx                # React mount point
│  ├─ projects.ts             # Project content/data
│  ├─ projectsCards.tsx       # Featured project selection/cards
│  ├─ hobbies.tsx             # Hobby content/data
│  ├─ hobbiesCards.tsx        # Featured hobby selection/cards
│  ├─ experience.tsx          # Experience timeline/content
│  └─ education.tsx           # Education timeline/content
├─ index.html
├─ tailwind.config.ts
├─ vite.config.ts
└─ package.json
```

---

## Theming

The app includes a light/dark theme toggle.

- Theme value is stored in `localStorage` under `theme`
- `data-theme` is applied to `document.documentElement`
- Social icons in the header adapt to theme for visual contrast

---

## Content Updates

To update portfolio content, edit data/content files in `src/`:

- `src/projects.ts` and `src/projectsCards.tsx`
- `src/hobbies.tsx` and `src/hobbiesCards.tsx`
- `src/experience.tsx`
- `src/education.tsx`

If you add new tags in project/hobby content, they will automatically work with the tag page route (`/tags/:tag`) as long as naming remains consistent.

---

## Accessibility Notes

The app includes several accessibility-focused patterns:

- Skip link to jump directly to main content
- Semantic sectioning and heading hierarchy
- Keyboard-reachable interactive elements
- Smooth hash navigation to section IDs

---

## Deployment

This repository name suggests GitHub Pages hosting (`axyl-casc.github.io`).

Typical deployment flow:

1. Build the app with `npm run build`
2. Publish the `dist/` output to your hosting target (for GitHub Pages, this repository now includes `.github/workflows/deploy.yml` to automate that on every push to `main`)

> Important: GitHub Pages must publish the compiled `dist/` output, not the raw source files. If Pages serves `src/main.tsx` directly, browsers will reject it with a strict MIME-type module error.
>
> If you deploy under a subpath instead of the root domain, ensure Vite `base` and link/path handling are configured appropriately.

---

## Troubleshooting

### Styles are missing or look incorrect

- Confirm dependencies were installed: `npm install`
- Confirm Tailwind/PostCSS config files are present
- Restart dev server after config changes

### A route shows the wrong page

- Check `window.location.pathname` matching logic in `src/App.tsx`
- Verify slug values exist in the source data arrays for projects/hobbies

### Theme does not persist

- Confirm browser storage is enabled
- Check for errors related to `localStorage` access

---

## License

No license file is currently included in this repository.
If you intend this project to be open source, add a license (for example, MIT) in a `LICENSE` file.
