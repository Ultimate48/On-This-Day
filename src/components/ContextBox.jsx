import React from 'react';
import { ordinal } from '../data/events';

export default function ContextBox({ level, context, onBack }) {
  const getContextInfo = () => {
    switch (level) {
      case 'century':
        return {
          title: 'All Centuries',
          subtitle: '34th Century BC – 21st Century AD'
        };
      case 'year':
        return {
          title: context.century < 0 ? `${ordinal(context.century)} Century BC` : `${ordinal(context.century)} Century`,
          subtitle: 'Browse years'
        };
      case 'month':
        return {
          title: context.year < 0 ? `${Math.abs(context.year)} BC` : String(context.year),
          subtitle: 'Browse months'
        };
      case 'day':
        const monthName = [
          '', 'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ][context.month];
        return {
          title: context.year < 0 ? `${monthName} ${Math.abs(context.year)} BC` : `${monthName} ${context.year}`,
          subtitle: 'Browse days'
        };
      default:
        return { title: '', subtitle: '' };
    }
  };

  const { title, subtitle } = getContextInfo();

  return (
    <div className="fixed top-6 left-6 z-50 flex items-center gap-3 bg-warm-white border-[1.5px] border-gold-light/50 rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(59,47,30,0.12)] hover:shadow-[0_4px_16px_rgba(59,47,30,0.16)] hover:-translate-y-[1px] transition-all duration-200 ease-out">
      {level !== 'century' && (
        <button
          onClick={onBack}
          className="flex items-center justify-center w-8 h-8 border-[1.5px] border-gold-light/40 rounded-lg bg-cream text-gold-dark hover:bg-gold hover:text-warm-white hover:border-gold cursor-pointer transition-all duration-200 ease-out shrink-0"
          title="Go back one level"
          aria-label="Go back one level"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}
      <div className="flex flex-col gap-0.5 select-none">
        <span className="font-display text-lg font-bold text-ink leading-tight">
          {title}
        </span>
        <span className="font-body text-[10px] font-semibold text-ink-faint tracking-wider uppercase">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
