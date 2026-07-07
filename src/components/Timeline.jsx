import React, { useRef, useEffect, useCallback } from 'react';

const ITEM_WIDTH = 120; // px per item (wider for larger text)

export default function Timeline({
  items,
  selectedIndex,
  onSelectedIndexChange,
  onItemDrillDown,
  level,
}) {
  const railRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartIndexRef = useRef(0);
  const edgeScrollRef = useRef(null); // RAF id for edge scrolling
  const containerWidth = typeof window !== 'undefined' ? window.innerWidth : 1536;

  // ── Compute the translateX that centers `selectedIndex` ──────────
  const getTranslate = useCallback((idx) => {
    const center = containerWidth / 2;
    return center - idx * ITEM_WIDTH - ITEM_WIDTH / 2;
  }, [containerWidth]);

  // ── Apply transform instantly or with transition ─────────────────
  const setRailTransform = useCallback((tx, animated = true) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.style.transition = animated
      ? 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      : 'none';
    rail.style.transform = `translateX(${tx}px)`;
  }, []);

  // ── Snap to selectedIndex whenever it changes ────────────────────
  useEffect(() => {
    setRailTransform(getTranslate(selectedIndex), true);
  }, [selectedIndex, items, getTranslate, setRailTransform]);

  // ── Mouse drag ───────────────────────────────────────────────────
  const handleMouseDown = (e) => {
    if (e.target.closest('button')) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartIndexRef.current = selectedIndex;
    // Freeze current transform (no animation during drag)
    setRailTransform(getTranslate(selectedIndex), false);
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    // Drag: shift rail by dx from start position
    const baseTx = getTranslate(dragStartIndexRef.current);
    const rail = railRef.current;
    if (!rail) return;
    rail.style.transition = 'none';
    rail.style.transform = `translateX(${baseTx + dx}px)`;
  }, [getTranslate]);

  const handleMouseUp = useCallback((e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Compute new index from how far we dragged
    const dx = e.clientX - dragStartXRef.current;
    const indexDelta = -Math.round(dx / ITEM_WIDTH);
    const newIndex = Math.max(
      0,
      Math.min(items.length - 1, dragStartIndexRef.current + indexDelta)
    );
    onSelectedIndexChange(newIndex);
    // Snap with animation
    setRailTransform(getTranslate(newIndex), true);
  }, [items.length, onSelectedIndexChange, getTranslate, setRailTransform]);

  // Bind move/up to window so drag continues outside container
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // ── Wheel scroll: one item per tick ────────────────────────────
  const handleWheel = (e) => {
    e.preventDefault();
    const dir = e.deltaY > 0 ? 1 : -1;
    onSelectedIndexChange(prev =>
      Math.max(0, Math.min(items.length - 1, prev + dir))
    );
  };

  // ── Edge hover auto-scroll ───────────────────────────────────────
  const startEdgeScroll = (dir) => {
    if (edgeScrollRef.current) return;
    let last = performance.now();
    const tick = (now) => {
      const elapsed = now - last;
      if (elapsed > 300) { // scroll roughly every 300ms
        last = now;
        onSelectedIndexChange(prev =>
          Math.max(0, Math.min(items.length - 1, prev + dir))
        );
      }
      edgeScrollRef.current = requestAnimationFrame(tick);
    };
    edgeScrollRef.current = requestAnimationFrame(tick);
  };

  const stopEdgeScroll = () => {
    if (edgeScrollRef.current) {
      cancelAnimationFrame(edgeScrollRef.current);
      edgeScrollRef.current = null;
    }
  };

  useEffect(() => stopEdgeScroll, []); // cleanup on unmount

  // ── Click handler ────────────────────────────────────────────────
  const handleItemClick = (index) => {
    if (index === selectedIndex) {
      onItemDrillDown(index);
    } else {
      onSelectedIndexChange(index);
    }
  };

  return (
    <div
      className="relative w-full h-[160px] md:h-[180px] flex items-center overflow-hidden shrink-0 select-none"
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      style={{ cursor: isDraggingRef.current ? 'grabbing' : 'grab' }}
    >
      {/* Top decorative gradient line */}
      <div className="absolute top-[25%] inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/50 to-transparent z-10 pointer-events-none" />

      {/* Center selection vertical line */}
      <div className="absolute left-1/2 top-[25%] bottom-[15%] w-[2px] bg-gold/35 -translate-x-1/2 z-10 pointer-events-none" />

      {/* Edge zones for hover auto-scroll */}
      <div
        onMouseEnter={() => startEdgeScroll(-1)}
        onMouseLeave={stopEdgeScroll}
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-parchment to-transparent z-20 cursor-w-resize"
        aria-hidden="true"
      />
      <div
        onMouseEnter={() => startEdgeScroll(1)}
        onMouseLeave={stopEdgeScroll}
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-parchment to-transparent z-20 cursor-e-resize"
        aria-hidden="true"
      />

      {/* The rail — translated to center the selection */}
      <div
        ref={railRef}
        className="absolute flex items-center will-change-transform"
        style={{ left: 0, top: 0, bottom: 0, alignItems: 'center' }}
      >
        {items.map((item, i) => {
          const dist = Math.abs(i - selectedIndex);
          const isSelected = dist === 0;

          // Distance-based opacity + scale
          let opacity = 1;
          let scale = 1;
          if (dist >= 7) { opacity = 0.22; scale = 0.82; }
          else if (dist >= 4) { opacity = 0.55; scale = 0.90; }
          else if (dist >= 2) { opacity = 0.80; scale = 0.95; }

          const heroEvent = item.events?.[0] || null;
          const hasEvent = !!heroEvent;
          const extraCount = (item.events?.length || 0) - 1;
          const dotColor = hasEvent
            ? `var(--cat-${heroEvent.category})`
            : 'var(--color-gold)';

          return (
            <div
              key={`${level}-${item.value}-${i}`}
              onClick={() => handleItemClick(i)}
              className="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer"
              style={{
                width: `${ITEM_WIDTH}px`,
                opacity,
                transform: `scale(${scale})`,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                paddingTop: '12px',
                paddingBottom: '12px',
              }}
            >
              {/* Tick mark */}
              <div
                className={`rounded-full transition-all duration-300 ${isSelected
                  ? 'w-[2.5px] h-8 bg-gold'
                  : 'w-[1.5px] h-5 bg-gold-light/60'
                  }`}
              />

              {/* Event dot */}
              <div className="relative flex items-center justify-center w-5 h-5">
                {hasEvent && (
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${isSelected ? 'scale-110 opacity-100' : 'opacity-60'}`}
                    style={{ backgroundColor: dotColor }}
                  />
                )}
                {!hasEvent && <span className="w-2 h-2" />}
              </div>

              {/* Main label */}
              <span
                className={`font-display font-bold leading-none tracking-tight transition-all duration-300 ${isSelected
                  ? 'text-4xl text-ink'
                  : 'text-4xl text-ink-soft'
                  }`}
              >
                {item.label}
              </span>

              {/* Sublabel */}
              {item.sublabel && (
                <span className="font-body text-[11px] font-semibold text-ink-faint tracking-widest uppercase leading-none mt-0.5">
                  {item.sublabel}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
