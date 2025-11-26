# Netflix Inspired Portfolio

A Netflix-style single-page application that guides visitors through a cinematic intro, persona-based profile selector, and content-rich sections (experience, projects, skills, awards, etc.). Content now lives in Supabase, so you can tweak copy/media without redeploying the frontend.

![Preview](image.png)

## Features
- **Netflix intro + profile gate** that plays custom audio and routes visitors through persona tiles (Recruiter, Developer, Stalker, Adventurer).
- **Routed experience** powered by React Router with dedicated pages for work permits, experience, recommendations, skills, projects, music, blogs, reading, certifications, awards, and contact.
- **Supabase-backed content** (skills, timeline, banners, etc.) so you edit structured data in tables while the UI updates instantly.
- **Shared layout & navbar** to keep navigation consistent across every page.
- **Responsive styling** tuned for both recruiting teams on laptops and visitors on mobile.

## Tech Stack
- React 18 + TypeScript + React Router
- Custom CSS + Tailwind-inspired utility styles
- Supabase (official JS SDK) for content + storage
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
|-- queries/         # Supabase data helpers per page
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

1. Create a `.env` file and add your Supabase credentials:
   ```
   REACT_APP_SUPABASE_URL=https://<project>.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=<anon key>
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` to view the intro and browse the pages.

## Available Scripts
- `npm start` - run the dev server with hot reload.
- `npm run build` - create a production build in `build/`.
- `npm test` - launch CRA's Jest test runner.
- `npm run eject` - expose CRA config (irreversible).

## Deployment
1. Run `npm run build`.
2. Upload the `build/` directory to your hosting provider (e.g., AWS S3 + CloudFront).
3. Ensure the Supabase URL + anon key (and any analytics keys) are configured in the hosting environment.
4. (Optional) Wire up GitHub Actions to build on every push.

### Vercel
1. Install the [Vercel CLI](https://vercel.com/docs/cli) and log in:
   ```bash
   npm i -g vercel
   vercel login
   ```
2. Create secrets (or add env vars via dashboard):
   ```bash
   vercel secrets add supabase_url https://<project>.supabase.co
   vercel secrets add supabase_anon_key <REACT_APP_SUPABASE_ANON_KEY>
   ```
3. Deploy (the included `vercel.json` points to CRA defaults):
   ```bash
   vercel --prod
   ```
   Vercel will run `npm run build`, serve `build/`, and inject the Supabase env vars automatically.

## Supabase schema (sample)
Use the Supabase SQL editor to create tables and seed content. Example for the profile banner, skills, and timeline:

```sql
create table if not exists profile_banner (
  id uuid primary key default gen_random_uuid(),
  background_url text,
  headline text,
  resume_url text,
  linkedin_url text,
  profile_summary text
);

insert into profile_banner (background_url, headline, resume_url, linkedin_url, profile_summary)
values (
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  'Oludolapo Adegbesan',
  '/Adegbesan_Oludolapo_Resume__2_.pdf',
  'https://www.linkedin.com/in/oludolapo-adegbesan-3168a7218/',
  'Backend-focused CS student …'
);

create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  name text,
  category text,
  description text,
  icon text
);

create table if not exists timeline_items (
  id uuid primary key default gen_random_uuid(),
  timeline_type text,
  name text,
  title text,
  tech_stack text,
  summary_points text[],
  date_range text,
  sort_order int
);
```

Add more tables (projects, contact, work_permit, certifications, etc.) following the same pattern. The frontend falls back to bundled sample data if a table is empty, so you can migrate gradually.

## Contributing
Issues and pull requests are welcome for UI polish, accessibility improvements, and new Netflix-inspired interactions. Please open an issue describing the change before submitting larger features.

---
MIT License.
