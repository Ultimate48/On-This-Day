import React from 'react';

const LEVELS = ['century', 'year', 'month', 'day'];
const LABELS = ['Centuries', 'Years', 'Months', 'Days'];

export default function ZoomBreadcrumbs({ currentLevel }) {
  const activeIdx = LEVELS.indexOf(currentLevel);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center bg-warm-white border-[1.5px] border-parchment-dark/70 rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(59,47,30,0.12)] select-none">
      {LEVELS.map((level, i) => (
        <React.Fragment key={level}>
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeIdx
                ? 'bg-gold scale-130 shadow-[0_0_0_3px_rgba(184,92,56,0.15)]'
                : i < activeIdx
                ? 'bg-gold-light/80'
                : 'bg-parchment-dark'
            }`}
            title={LABELS[i]}
          />
          {i < LEVELS.length - 1 && (
            <span className="w-4 h-[2px] bg-parchment-dark/60 mx-0.5" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
