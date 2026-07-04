import React, { useState, useEffect } from 'react';
import { CURATED_EVENTS, MONTH_ABBR, ordinal } from './data/events';
import ContextBox from './components/ContextBox';
import ZoomBreadcrumbs from './components/ZoomBreadcrumbs';
import EventPanel from './components/EventPanel';
import Timeline from './components/Timeline';

const LEVELS = ['century', 'year', 'month', 'day'];

function getItems(level, ctx) {
  switch (level) {
    case 'century':
      return Array.from({ length: 21 }, (_, i) => {
        const num = i + 1;
        const key = ordinal(num);
        const ev = CURATED_EVENTS.centuries[key];
        return {
          label: key,
          sublabel: 'century',
          value: num,
          event: ev || null,
        };
      });

    case 'year': {
      const centuryNum = ctx.century || 20;
      const startYear = (centuryNum - 1) * 100;
      return Array.from({ length: 100 }, (_, i) => {
        const year = startYear + i;
        const ev = CURATED_EVENTS.years[year];
        return {
          label: String(year),
          sublabel: '',
          value: year,
          event: ev || null,
        };
      });
    }

    case 'month': {
      const year = ctx.year || 1969;
      return Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const key = `${year}-${month}`;
        const ev = CURATED_EVENTS.months[key];
        return {
          label: MONTH_ABBR[month],
          sublabel: '',
          value: month,
          event: ev || null,
        };
      });
    }

    case 'day': {
      const year = ctx.year || 1969;
      const month = ctx.month || 7;
      const daysInMonth = new Date(year, month, 0).getDate();
      return Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        const key = `${year}-${month}-${day}`;
        const ev = CURATED_EVENTS.days[key];
        return {
          label: String(day),
          sublabel: '',
          value: day,
          event: ev || null,
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

  // Initialize century view
  useEffect(() => {
    const initialItems = getItems('century', {});
    setItems(initialItems);
    setSelectedIndex(Math.floor(initialItems.length / 2));
  }, []);

  const changeLevel = (nextLevel, nextContext, startValue = null) => {
    const isZoomIn = LEVELS.indexOf(nextLevel) > LEVELS.indexOf(level);
    setZoomAnim(isZoomIn ? 'zoom-in-active' : 'zoom-out-active');
    
    // Clear animation class after transition is done (500ms match css)
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
      // Fade hint on first interaction
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
      <div className="flex-1 flex flex-col justify-between pt-4 pb-4">
        
        {/* Zoom animating wrapper for Timeline */}
        <div className={`w-full ${zoomAnim}`}>
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
          item={items[selectedIndex]} 
          level={level} 
        />
        
      </div>

      {/* Zoom indicator breadcrumbs bottom-right */}
      <ZoomBreadcrumbs currentLevel={level} />
    </div>
  );
}
