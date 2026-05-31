# DataLens Frontend

**"Your data, fully accounted for."**

Mobile-first marketing site for DataLens — a Nigerian data-usage tracker that lets users buy or log data/airtime purchases and see every megabyte broken down by app, site, and hour across MTN, Airtel, Glo, and 9mobile.

---

## Tech Stack

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16 (App Router) | Server Components by default; `"use client"` only where needed |
| React | 19 | |
| Tailwind CSS | v4 | Config via `@theme` in `globals.css`, no `tailwind.config.ts` |
| Framer Motion | 12 | Import from `"framer-motion"` — **not** `"motion/react"` |
| GSAP | 3 | Used for counter animations in `Stats.tsx` |
| TypeScript | 5 | Strict mode; `tsc --noEmit` must pass before shipping |

---

## Project Structure

```
src/
  app/
    globals.css          # Tailwind @theme tokens + keyframe animations + range input styles
    layout.tsx           # Poppins + JetBrains Mono fonts, metadata
    page.tsx             # Assembles all landing sections in order
  components/
    ui/
      DataLensLogo.tsx   # Aperture SVG mark (green→gold gradient)
      FadeIn.tsx         # FadeIn, StaggerContainer, StaggerItem — Framer Motion wrappers
    landing/
      Nav.tsx            # Sticky nav, scroll blur, mobile hamburger
      Hero.tsx           # Headline + phone mockup + floating stat cards
      Networks.tsx       # MTN / Airtel / Glo / 9mobile brand chips
      BeforeAfter.tsx    # "Flying blind" vs "Fully in control" split cards
      Problem.tsx        # "You bought 5GB. Where did it go?" card
      DataCalculator.tsx # Interactive slider: plan size × usage profile → days/cost/breakdown
      Features.tsx       # 5-card grid (wide + 2×2)
      ScreenshotCarousel.tsx  # 5 draggable phone mockup screens
      HowItWorks.tsx     # 3-step connector layout
      BuyInApp.tsx       # Feature list + receipt card
      Stats.tsx          # GSAP count-up: 12k+ / 4 / ₦2.1M / 4.8★
      SocialProof.tsx    # Dual infinite-scroll marquee of Nigerian tweets
      Testimonials.tsx   # 3 testimonial cards
      FAQ.tsx            # 8-item accordion with AnimatePresence
      FinalCTA.tsx       # App Store + Google Play download CTAs
      Footer.tsx         # 4-column link grid + "Built in Lagos 🇳🇬"
```

### Page section order (`page.tsx`)
`Hero → Networks → BeforeAfter → Problem → DataCalculator → Features → ScreenshotCarousel → HowItWorks → BuyInApp → Stats → SocialProof → Testimonials → FAQ → FinalCTA → Footer`

---

## Design Tokens

Defined in `globals.css` under `@theme` and usable as Tailwind classes (`bg-dl-green`, `text-dl-gold`, etc.):

| Token | Value | Usage |
|---|---|---|
| `dl-bg` | `#0D0D0D` | Page background |
| `dl-bg-deep` | `#070707` | Alternate dark sections |
| `dl-bg-green` | `#0A2C1A` | Green-tinted section bg |
| `dl-bg-green-2` | `#0F3D24` | Deeper green bg |
| `dl-surface` | `#141929` | Cards, panels |
| `dl-surface-2` | `#1A2030` | Elevated surface |
| `dl-border` | `#1E2A45` | Default borders |
| `dl-border-2` | `#2A3656` | Hover/active borders |
| `dl-green` | `#00E676` | Primary accent |
| `dl-green-2` | `#0BC97A` | Secondary green |
| `dl-green-d` | `#00A050` | Dark green |
| `dl-gold` | `#FFD700` | Naira / value cues |
| `dl-gold-d` | `#C9A800` | Dark gold |
| `dl-warning` | `#FFB800` | Amber alerts |
| `dl-danger` | `#FF4444` | Error / exhausted state |
| `dl-info` | `#5BC0EB` | Info accent |
| `dl-mtn` | `#FFCC00` | MTN brand |
| `dl-airtel` | `#FF0000` | Airtel brand |
| `dl-glo` | `#008000` | Glo brand |
| `dl-nine` | `#009999` | 9mobile brand |

---

## Typography

- **Heading + body:** `Poppins` (400/500/600/700/800) — loaded via `next/font/google`
- **Monospace / data:** `JetBrains Mono` (400/500/700) — loaded via `next/font/google`
- Font variables: `--font-poppins`, `--font-mono`

---

## Domain Conventions

- **Carrier IDs:** lowercase slugs — `"mtn"`, `"airtel"`, `"glo"`, `"9mobile"`
- **Naira:** symbol is `₦` (gold-coloured in UI), values stored as plain numbers, formatted as `₦1,500`
- **Data sizes:** stored as raw bytes/MB, formatted at render time — `< 1 GB` → MB, `≥ 1 GB` → GB
- **Persona name:** `Isaiah` (used in phone mockup greetings across Hero + ScreenshotCarousel)
- **USSD code:** `*323#` (used in BeforeAfter "before" copy)

---

## Key Patterns

### Scroll animations
All section-level reveals use `<FadeIn>` / `<StaggerContainer>` / `<StaggerItem>` from `components/ui/FadeIn.tsx`. These are client components wrapping Framer Motion `useInView`. Threshold: `once: true, margin: "-40px 0px"`.

### GSAP counters (`Stats.tsx`)
`useInView` triggers a `gsap.fromTo` tween on `textContent`. Integer targets use `Math.round`; decimal targets (e.g. 4.8) use `.toFixed(1)`. Thousands are formatted with commas.

### Phone mockup
The `PhoneMockup` in `Hero.tsx` and `PhoneFrame` in `ScreenshotCarousel.tsx` are pure JSX/SVG — no images. The screen content is inline JSX simulating the real app UI.

### Marquee (`SocialProof.tsx`)
Pure CSS `@keyframes marquee-scroll` — no library dependency. Two rows run at different speeds in opposite directions. Edge masks use inline gradient `background` on absolute-positioned divs.

### Framer Motion import
Always import from `"framer-motion"`. The `"motion/react"` sub-path does **not** exist in the installed version and will throw a module-not-found error.

---

## Dev Commands

```bash
npm run dev        # Start dev server — http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint
node node_modules/typescript/bin/tsc --noEmit   # Type check (npx tsc broken in this env)
```

> **Note:** `npx tsc` fails in this environment due to a broken `.bin/tsc` shim. Use the direct node path above.

---

## Coding Rules

- **Mobile-first:** design at 375px, add `md:` / `lg:` breakpoints only when needed
- **Tailwind only:** no CSS modules or styled-components; avoid arbitrary values where a token exists
- **Server Components default:** add `"use client"` only for hooks, browser APIs, or Framer Motion components
- **No `any`:** TypeScript strict mode is on
- **No inline comments** unless the WHY is non-obvious
- **Strings with inner quotes:** use curly/typographic quotes `"…"` inside double-quoted JSX strings, or switch to single-quoted strings — never unescaped ASCII `"` inside a `"…"` string
