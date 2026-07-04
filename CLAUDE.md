# "On This Day" History Timeline — Project Summary

## Core Concept

An interactive website for exploring history through a zoomable timeline. Start
at a century-level view and drill down — century → year → month → day — with a
consistent, game-map-like navigation feel. Paired with a small, hand-picked
library of stylized illustrations (not real/photoreal images) that make
browsing feel alive without pretending to depict actual historical scenes.

---

## Interface Design

**Layout**

- A horizontal timeline sits below a top line. Below it, individual years (or
  months, or days, depending on zoom level) are laid out in a row.
- A fixed box in the top-left corner always shows the current "locked-in"
  context — e.g. the century while browsing years, or the year while browsing
  months, or the month+year while browsing days.
- Only ~10–15 units are visible on screen at once; the rest live off-screen to
  either side.
- The center position is highlighted — whatever year/month/day sits in the
  middle is the "selected" one, and its event is shown below.

**Navigation**

- Move the cursor to the left/right edge of the screen (near the timeline) to
  auto-scroll, the same way panning works on a map in a game.
- Also supports arrow keys, A/D keys, and click-and-drag/slide.
- Clicking a year drills down: the timeline switches to showing months within
  that year, and the box updates to show the year. Clicking a month drills
  further into days, with the box updating to show month + year.

**Visual style**

- Color palette: light golden-yellow and white/cream tones — meant to evoke
  something warm and parchment-like rather than a cold tech dashboard.
- Serif type for large year/date numbers likely pairs well with this palette;
  general aesthetic direction is "aged and warm," not sterile.

**Content per event**

- When a year/month/day is selected, its associated event is displayed below
  the timeline (~25% of the page), including:
  - A stylized illustration (see below)
  - Short context/description
  - A link to learn more (e.g. the relevant Wikipedia article)
- At the year and month zoom levels, the "most important" event for that
  year/month is surfaced — this requires manual curation/ranking, since
  Wikipedia's raw data doesn't rank importance.

---

## Image Strategy

Rather than generating a unique AI image per historical event (expensive, slow,
and prone to presenting confidently wrong historical details as if factual),
the plan is a **small, reusable, hand-picked image library**:

- Images are generated **by category**, not by specific event — e.g. "war,"
  "birth," "death," "invention/discovery," "political," "disaster,"
  "exploration," "cultural." A handful of categories, expandable over time.
- Visual style: **isolated figures with drop shadows, no background or
  frame** — closer to character/icon art than a historical painting. E.g. for
  a war event: two figures with era-appropriate weapons, shadow beneath them,
  nothing else. This style is easy to keep visually consistent across wildly
  different eras and is inherently non-literal, so it can't be mistaken for a
  documentary depiction of the actual event.
- **3–5 variants per category** to avoid visual repetition when browsing many
  events of the same type.
- Optional refinement: rough era-matching within a category (e.g. a medieval
  war image vs. a WWII-era war image) so images feel period-appropriate
  without needing per-event precision.
- **Curation is manual.** This is treated as a feature, not a limitation — it
  keeps the project personal and hand-built rather than automated, and avoids
  the accuracy problems of trying to auto-generate "the right" image per
  event.

---

## Data Plan

**Historical event data**

- Source under consideration: Wikipedia's own REST endpoint
  (`en.wikipedia.org/api/rest_v1/feed/onthisday/events/MM/DD`) — free, no API
  key required, maintained directly by Wikimedia. This is the same underlying
  data used by several existing "on this day" tools and apps.
- Known limitation: coverage varies by date and by topic — some dates/eras
  (especially outside major Western history) will have thinner data. This is
  expected, not a bug to fix.
- Decision made: **the site will only display events that have been
  manually curated and added**, not the full raw Wikipedia feed for every
  date. This keeps the scope of "what's on the site" fully intentional and
  tied to the image library, rather than trying to cover all dates from day
  one.

**Storage design (simplified)**

- A single `events` table, roughly:
  - `id`
  - `date` (month/day)
  - `year`
  - `category` (assigned manually — war, birth, death, invention, etc.)
  - `description`
  - `wiki_link`
  - `image_key` — a filename/reference pointing directly to a file in a
    storage bucket (e.g. `war_medieval_2.png`)
  - optionally `importance_rank` / `is_featured` for the "most important
    event" feature
- Images live in a storage bucket; the DB just stores the filename/key. No
  separate image-metadata table or automatic era-matching logic — the mapping
  between an event and its image is decided once, by hand, at the time the
  event is curated and tagged.
- This intentionally trades full date coverage for simplicity and control: the
  site becomes a **growing, hand-picked collection**, not a live mirror of all
  of Wikipedia's "on this day" data.

---

## Status

The project is now fully implemented as a web application prototype:

- **Stack**: Built with **React 19**, **Vite 8**, and **Tailwind CSS v4**.
- **Aesthetic**: Warm, parchment-themed layout utilizing serif fonts (`Playfair Display`), textured backgrounds, and custom muted category colors.
- **Engine**: A custom GPU-accelerated `transform`-based translation slider that centers selected dates, responds dynamically to keyboard arrow keys, mouse wheel, click-and-drag, and edge-hover scrolling.
- **Visuals**: Conversion of the stylized category SVGs into reusable React components (`illustrations.jsx`).
- **Zoom Flow**: Fully interactive Century → Year → Month → Day drilling with back-track index selection preservation and fade transitions.
- **Data**: A set of manually curated sample historical events across all zoom levels is stored in `src/data/events.js`.
- **Refinements**: 
  - Massive, highly readable typography for the timeline elements (`text-6xl` for selected dates).
  - A tightened and space-optimized timeline rail layout.
  - A stacked event panel design ensuring the category illustration is always prominently displayed directly above the event text.

**Next Steps & Iterations:**
- Integration of actual hand-picked images (using PNG character art format) to complement or replace the placeholder category SVGs.
- Transitioning the static curated JSON data structure to a database layer (e.g. Supabase, SQLite, or simple JSON api) if server-side persistence is desired.
- Velocity-based ramping for edge-hover auto-scrolling to feel more tactile.
- Adding comprehensive multi-touch swipe gesture handling for mobile browsers.