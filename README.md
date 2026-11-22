# Mekbul Kelifa — Holistic Digital Ecosystem

A personal digital platform connecting public health and health diplomacy, digital innovation, adult Islamic reflections, and a separately branded Islamic children's learning studio.

## Current milestone

**Milestone 1 — Starter architecture and responsive homepage.** The repository was empty when inspected. The existing `my-portfo` repository contains an unrelated portfolio identity and is not being modified.

This project uses Next.js App Router, strict TypeScript, Tailwind CSS, and a design system with editorial typography, forest/teal accents, warm neutral surfaces, accessibility-conscious motion, and responsive layouts.

## Planned divisions

- **Public Health & Health Diplomacy** — clinical and TB program experience, research, policy and governance.
- **Digital Innovation & Software** — digital health systems, software projects, technical case studies.
- **Islamic Reflections** — adult reflections, Quran contemplation, ethics and spirituality; source integrity is mandatory.
- **Children's Learning Studio** — separately branded, age-aware Islamic educational stories and learning materials with child privacy and safeguarding requirements.

## Development

Requirements: Node.js 20.9+ (use a currently supported LTS release), npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

Netlify is the primary target; the code remains portable to Vercel. Netlify's current Next.js support uses its OpenNext adapter and supports App Router. Do not pin the adapter unless there is a documented reason.

Set `NEXT_PUBLIC_SITE_URL` after the final domain is chosen. Until then, canonical URLs and social URLs are intentionally not invented.

## Accuracy, privacy and safety

- Unknown professional details, publication records, project links and contact information are marked TODO.
- No patient data, private workplace details, credentials or analytics are included.
- Quran and Hadith references must be verified before publication; uncertain narrations must be labelled and reviewed.
- Never depict Allah. Avoid visual depictions of Prophets and sacred figures in children's content.
- Children's content must be age-appropriate, correctly classified as Made for Kids where applicable, and must not solicit personal data.
- Respect WCAG 2.2 AA targets, keyboard use, visible focus and reduced-motion preferences.

## Starter architecture

```
src/
  app/
    public-health-diplomacy/
    digital-innovation/
    reflections/
    kids-learning/
    layout.tsx
    page.tsx
    globals.css
  components/
    site-header.tsx
    site-footer.tsx
    division-card.tsx
    track-page.tsx
  data/
    profile.ts
    divisions.ts
public/
docs/
```

The next milestone is content verification and expansion of the division routes into full portfolio/media pages.
