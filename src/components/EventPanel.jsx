import React from 'react';
import { CategoryIllustration } from './illustrations';

export default function EventPanel({ item, level }) {
  const ev = item?.event;

  const getEmptyStateText = () => {
    if (!item) return { title: 'Select an item', desc: 'Navigate the timeline above.' };
    
    let label = item.label;
    if (level === 'century') label = `the ${label} century`;
    
    return {
      title: label,
      desc: 'No curated event for this entry yet. Click to drill down, or navigate to find curated events.'
    };
  };

  const emptyState = getEmptyStateText();

  return (
    <div className="flex-1 min-h-0 bg-warm-white border-t-2 border-gold-light/60 flex items-center justify-center px-8 md:px-16 py-6 relative overflow-hidden select-text">
      {/* Top soft gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-[#f5edda]/30 to-transparent pointer-events-none" />

      <div 
        key={item ? `${level}-${item.value}` : 'empty'} 
        className="flex flex-col items-center gap-6 max-w-4xl w-full animate-fade-slide-up"
      >
        {/* Category Illustration */}
        <div className="relative shrink-0 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-2xl bg-cream border-[1.5px] border-parchment-dark/70 shadow-[0_4px_12px_rgba(59,47,30,0.12)] overflow-hidden group">
          <CategoryIllustration 
            category={ev?.category || 'default'} 
            className="w-16 h-16 md:w-24 md:h-24 opacity-70 group-hover:opacity-100 transition-opacity duration-200" 
          />
          {ev && (
            <span 
              className="absolute bottom-2 left-1/2 -translate-x-1/2 font-body text-[10px] font-semibold text-warm-white px-2.5 py-0.5 rounded tracking-wider uppercase select-none"
              style={{ backgroundColor: `var(--cat-${ev.category})` }}
            >
              {ev.category}
            </span>
          )}
        </div>

        {/* Content Details */}
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink leading-tight">
            {ev ? ev.title : emptyState.title}
          </h2>
          <p className="font-body text-sm md:text-base text-ink-soft leading-relaxed max-w-xl mx-auto">
            {ev ? ev.description : emptyState.desc}
          </p>
          {ev?.wikiLink && (
            <a
              href={ev.wikiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-accent border-[1.5px] border-accent hover:bg-accent hover:text-warm-white rounded-lg px-4 py-1.5 mt-2 w-fit mx-auto transition-all duration-200 ease-out group"
            >
              Read more on Wikipedia
              <svg 
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
