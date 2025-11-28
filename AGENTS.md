# Technical Decisions & Architecture

## Tech Stack

- **Framework**: Nuxt 4
- **UI Library**: Vue 3
- **Styling**:
  - Custom CSS
  - CSS Variables for theming (Neon style)
  - Font: 'Orbitron' from Google Fonts
- **Package Manager**: pnpm

## Hosting & Infrastructure

- **Frontend Hosting**: Netlify
  - Configuration: `nitro.preset = 'netlify'` in `nuxt.config.ts`
- **Database**: PostgreSQL
  - Provider: Supabase (Planned)

## Project Structure

- **Pages**:
  - `index.vue`: Landing page with game cards.
  - `space-invaders.vue`: Game page for Space Invaders.
  - `missile-command.vue`: Game page for Missile Command.
- **Layouts**:
  - `game.vue`: Layout for individual game pages, includes `TopNav`.
- **Components**:
  - `TopNav.vue`: Navigation bar for game pages.
- **Assets**:
  - `main.css`: Global styles and reset.
  - Images: Organized by game in `assets/images/`.
