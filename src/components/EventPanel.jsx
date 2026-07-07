import React from 'react';
import { CategoryIllustration } from './illustrations';

// External link icon
function ExternalLinkIcon() {
  return (
    <svg
      width="10" height="10" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// Compact auxiliary event card (one of up to 6 in the 2×3 grid)
function AuxCard({ event }) {
  const primaryLink = event.wiki_links?.[0];
  const extraLinks = event.wiki_links?.slice(1) || [];

  return (
    <div
      className="aux-card"
      style={{ borderLeftColor: `var(--cat-${event.category})` }}
    >
      {/* Category pill */}
      <span
        className="aux-card-pill"
        style={{ backgroundColor: `var(--cat-${event.category})` }}
      >
        {event.category}
      </span>

      {/* Description */}
      <p className="aux-card-desc">{event.description}</p>

      {/* Wiki links */}
      {primaryLink && (
        <div className="aux-card-links">
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="aux-card-link"
          >
            <ExternalLinkIcon />
            <span>Wikipedia</span>
          </a>
          {extraLinks.map((url, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="aux-card-link"
            >
              <ExternalLinkIcon />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function EventPanel({ events, item, level }) {
  const hero = events?.[0] || null;
  const auxiliaries = events?.slice(1, 7) || []; // max 6 aux cards (2×3)

  const getEmptyStateText = () => {
    if (!item) return { desc: 'Navigate the timeline above.' };

    let label = item.label;
    if (level === 'century') {
      label = item.value < 0 ? `the ${label} century BC` : `the ${label} century`;
    } else if (level === 'year' && item.value < 0) {
      label = `${Math.abs(item.value)} BC`;
    }

    return {
      desc: `No curated events for ${label} yet. Click to drill down, or navigate to find curated events.`
    };
  };

  const emptyState = getEmptyStateText();

  return (
    <div className="event-panel-container flex-1 w-full min-h-0 bg-warm-white border-t-2 border-gold-light/60 flex flex-col items-center px-6 md:px-12 pb-10 relative overflow-y-auto select-text" style={{ paddingTop: '160px' }}>
      {/* Top soft gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#f5edda]/30 to-transparent pointer-events-none z-10" />

      <div
        key={item ? `${level}-${item.value}` : 'empty'}
        className="flex flex-col items-center gap-16 max-w-5xl w-full animate-fade-slide-up"
      >

        {/* ── HERO EVENT ─────────────────────────────────────────── */}
        {hero ? (
          <div className="flex flex-col items-center gap-4 text-center w-full">

            {/* Category Illustration */}
            <div className="relative shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl bg-cream border-[1.5px] border-parchment-dark/70 shadow-[0_4px_12px_rgba(59,47,30,0.12)] overflow-hidden group">
              <CategoryIllustration
                category={hero.category || 'default'}
                className="w-14 h-14 md:w-20 md:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span
                className="absolute bottom-2 left-1/2 -translate-x-1/2 font-body text-[9px] font-semibold text-warm-white px-2 py-0.5 rounded tracking-wider uppercase select-none"
                style={{ backgroundColor: `var(--cat-${hero.category})` }}
              >
                {hero.category}
              </span>
            </div>

            {/* Description + links */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-display text-xl md:text-2xl font-bold text-ink leading-snug max-w-2xl">
                {hero.description}
              </p>

              {/* Wiki links row */}
              {hero.wiki_links?.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
                  {hero.wiki_links.map((url, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-accent border-[1.5px] border-accent hover:bg-accent hover:text-warm-white rounded-lg px-3 py-1 transition-all duration-200 group"
                    >
                      {i === 0 ? 'Read more on Wikipedia' : 'Also on Wikipedia'}
                      <svg
                        width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ── EMPTY STATE ──────────────────────────────────────── */
          <div className="flex flex-col items-center gap-3 text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-cream border-[1.5px] border-parchment-dark/50 flex items-center justify-center opacity-40">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <p className="font-body text-sm text-ink-faint leading-relaxed max-w-sm">
              {emptyState.desc}
            </p>
          </div>
        )}

        {/* ── AUXILIARY EVENTS GRID (2×3) ────────────────────────── */}
        {auxiliaries.length > 0 && (
          <div className="w-full" style={{ marginTop: '40px' }}>
            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-parchment-dark/50" />
              <span className="font-body text-[10px] font-semibold tracking-widest uppercase text-ink-faint">
                Also notable
              </span>
              <div className="flex-1 h-px bg-parchment-dark/50" />
            </div>

            <div className="aux-grid" style={{ gap: '20px' }}>
              {auxiliaries.map((ev, i) => (
                <AuxCard key={i} event={ev} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
