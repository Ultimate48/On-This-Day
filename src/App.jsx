import React, { useState, useEffect } from 'react';
import { MONTH_ABBR, ordinal, getEventsForSlot } from './data/events';
import ContextBox from './components/ContextBox';
import ZoomBreadcrumbs from './components/ZoomBreadcrumbs';
import EventPanel from './components/EventPanel';
import Timeline from './components/Timeline';

const LEVELS = ['century', 'year', 'month', 'day'];

function getItems(level, ctx) {
  switch (level) {
    case 'century': {
      const bcCenturies = Array.from({ length: 34 }, (_, i) => -(34 - i)); // -34 to -1
      const adCenturies = Array.from({ length: 21 }, (_, i) => i + 1);     // 1 to 21
      const allCenturies = [...bcCenturies, ...adCenturies];
      return allCenturies.map(num => {
        const events = getEventsForSlot('century', num, ctx);
        return {
          label: ordinal(Math.abs(num)),
          sublabel: num < 0 ? 'century BC' : 'century',
          value: num,
          events,
        };
      });
    }

    case 'year': {
      const centuryNum = ctx.century || 20;
      // BC centuries: century -1 = years -100..-1, century -2 = years -200..-101, etc.
      // AD centuries: century 1 = years 1..100, century 20 = years 1901..2000
      const startYear = centuryNum < 0
        ? centuryNum * 100
        : (centuryNum - 1) * 100 + 1;
      return Array.from({ length: 100 }, (_, i) => {
        const year = startYear + i;
        const events = getEventsForSlot('year', year, { ...ctx, year });
        return {
          label: year < 0 ? String(Math.abs(year)) : String(year),
          sublabel: year < 0 ? 'BC' : '',
          value: year,
          events,
        };
      });
    }


    case 'month': {
      return Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const events = getEventsForSlot('month', month, ctx);
        return {
          label: MONTH_ABBR[month],
          sublabel: '',
          value: month,
          events,
        };
      });
    }

    case 'day': {
      const year = ctx.year || 1969;
      const month = ctx.month || 7;
      const absYear = Math.abs(year);
      const safeYear = absYear > 99 ? absYear : (absYear % 4 === 0 ? 2000 : 2001);
      const daysInMonth = new Date(safeYear, month, 0).getDate();
      return Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        const events = getEventsForSlot('day', day, ctx);
        return {
          label: String(day),
          sublabel: '',
          value: day,
          events,
        };
      });
    }

    default:
      return [];
  }
}

export default function App() {
  const [level, setLevel] = useState('century');
  const [context, setContext] = useState({});
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomAnim, setZoomAnim] = useState('');
  const [showHint, setShowHint] = useState(true);

  // Initialize century view centered on 20th century
  useEffect(() => {
    const initialItems = getItems('century', {});
    setItems(initialItems);
    const idx = initialItems.findIndex(it => it.value === 20);
    setSelectedIndex(idx >= 0 ? idx : Math.floor(initialItems.length / 2));
  }, []);

  const changeLevel = (nextLevel, nextContext, startValue = null) => {
    const isZoomIn = LEVELS.indexOf(nextLevel) > LEVELS.indexOf(level);
    setZoomAnim(isZoomIn ? 'zoom-in-active' : 'zoom-out-active');
    setTimeout(() => setZoomAnim(''), 500);

    const nextItems = getItems(nextLevel, nextContext);
    let nextIndex = 0;

    if (startValue !== null) {
      const foundIdx = nextItems.findIndex(it => it.value === startValue);
      nextIndex = foundIdx >= 0 ? foundIdx : Math.floor(nextItems.length / 2);
    } else {
      nextIndex = Math.floor(nextItems.length / 2);
    }

    setLevel(nextLevel);
    setContext(nextContext);
    setItems(nextItems);
    setSelectedIndex(nextIndex);
  };

  const handleDrillDown = (index) => {
    const item = items[index];
    if (!item) return;

    if (level === 'century') {
      changeLevel('year', { century: item.value });
    } else if (level === 'year') {
      changeLevel('month', { ...context, year: item.value });
    } else if (level === 'month') {
      changeLevel('day', { ...context, month: item.value });
    }
  };

  const handleBack = () => {
    if (level === 'year') {
      changeLevel('century', {}, context.century);
    } else if (level === 'month') {
      changeLevel('year', { century: context.century }, context.year);
    } else if (level === 'day') {
      changeLevel('month', { century: context.century, year: context.year }, context.month);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showHint) setShowHint(false);

      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(0, prev - 1));
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(items.length - 1, prev + 1));
          break;
        case 'Enter':
          e.preventDefault();
          handleDrillDown(selectedIndex);
          break;
        case 'Escape':
        case 'Backspace':
          e.preventDefault();
          handleBack();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, level, context, items, showHint]);

  return (
    <div className="flex flex-col h-screen w-screen bg-parchment relative overflow-hidden">

      {/* Context box at top-left */}
      <ContextBox
        level={level}
        context={context}
        onBack={handleBack}
      />

      {/* Keyboard hints at top-right */}
      {showHint && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-1.5 text-[10px] text-ink-faint tracking-wider select-none transition-opacity duration-300">
          <span className="px-1.5 py-0.5 bg-warm-white border border-parchment-dark rounded text-[9px] font-semibold text-ink-soft shadow-xs">←</span>
          <span className="px-1.5 py-0.5 bg-warm-white border border-parchment-dark rounded text-[9px] font-semibold text-ink-soft shadow-xs">→</span>
          <span className="ml-1">scroll</span>
          <span className="opacity-40 mx-1">·</span>
          <span className="px-1.5 py-0.5 bg-warm-white border border-parchment-dark rounded text-[9px] font-semibold text-ink-soft shadow-xs">Enter</span>
          <span className="ml-1">zoom in</span>
          <span className="opacity-40 mx-1">·</span>
          <span className="px-1.5 py-0.5 bg-warm-white border border-parchment-dark rounded text-[9px] font-semibold text-ink-soft shadow-xs">Esc</span>
          <span className="ml-1">zoom out</span>
        </div>
      )}

      {/* Flex container holding layout */}
      <div className="flex-1 flex flex-col min-h-0 pt-4">

        {/* Zoom animating wrapper for Timeline — fixed height, never scrolls */}
        <div className={`w-full shrink-0 ${zoomAnim}`}>
          <Timeline
            items={items}
            selectedIndex={selectedIndex}
            onSelectedIndexChange={setSelectedIndex}
            onItemDrillDown={handleDrillDown}
            level={level}
          />
        </div>

        {/* Selected Event Display Panel */}
        <EventPanel
          events={items[selectedIndex]?.events || []}
          level={level}
          item={items[selectedIndex]}
        />

      </div>

      {/* Zoom indicator breadcrumbs bottom-right */}
      <ZoomBreadcrumbs currentLevel={level} />
    </div>
  );
}
