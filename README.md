# Netflix Inspired Portfolio

A Netflix-style single-page application that guides visitors through a cinematic intro, persona-based profile selector, and content-rich sections (experience, projects, skills, awards, etc.). Content is fetched from DatoCMS so updates happen without redeploying the frontend.

![Preview](image.png)

## Features
- **Netflix intro + profile gate** that plays custom audio and routes visitors through persona tiles (Recruiter, Developer, Stalker, Adventurer).
- **Routed experience** powered by React Router with dedicated pages for work permits, experience, recommendations, skills, projects, music, blogs, reading, certifications, awards, and contact.
- **CMS-driven data** via typed GraphQL queries so copy, media, and CTAs can be managed in DatoCMS.
- **Shared layout & navbar** to keep navigation consistent across every page.
- **Responsive styling** tuned for both recruiting teams on laptops and visitors on mobile.

## Tech Stack
- React 18 + TypeScript + React Router
- Custom CSS + Tailwind-inspired utility styles
- GraphQL + `graphql-request` for DatoCMS
- Create React App toolchain (`react-scripts`)
- Jest + React Testing Library (default CRA setup)

## Project Structure
```
src/
|-- App.tsx          # Route map for every Netflix-style page
|-- NetflixTitle.tsx # Intro animation + sound
|-- browse/          # Persona selector
|-- components/      # Reusable UI (navbar, profile card, etc.)
|-- pages/           # Individual content pages
|-- profilePage/     # Dynamic profile entry
|-- queries/         # GraphQL clients + typed queries
`-- types.ts         # Shared TypeScript interfaces
```

## Getting Started
```bash
git clone <repo>
cd netflix_portfolio
nvm install 18
nvm use 18
npm install
```

1. Create a `.env` file and add your DatoCMS API token:
   ```
   REACT_APP_DATO_CMS_TOKEN=<token>
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` to view the intro and browse the pages.

## Available Scripts
- `npm start` – run the dev server with hot reload.
- `npm run build` – create a production build in `build/`.
- `npm test` – launch CRA’s Jest test runner.
- `npm run eject` – expose CRA config (irreversible).

## Deployment
1. Run `npm run build`.
2. Upload the `build/` directory to your hosting provider (e.g., AWS S3 + CloudFront).
3. Ensure the DatoCMS token and any analytics keys are configured in the hosting environment.
4. (Optional) Wire up GitHub Actions to build on every push.

## Contributing
Issues and pull requests are welcome for UI polish, accessibility improvements, and new Netflix-inspired interactions. Please open an issue describing the change before submitting larger features.

---
MIT License.
