/* ============================================================
   ON THIS DAY — Main Application Logic
   Zoomable timeline: Century → Year → Month → Day
   Game-map-style edge scrolling + keyboard + drag navigation
   ============================================================ */

(function () {
  'use strict';

  // ── State ───────────────────────────────────────────────────
  const LEVELS = ['century', 'year', 'month', 'day'];
  let currentLevel = 0;         // index into LEVELS
  let selectedIndex = 0;        // index of centered item in current items[]
  let items = [];                // array of item data for current zoom level
  let context = {};              // { century, year, month } — the locked-in ancestors

  // DOM refs
  const rail          = document.getElementById('timeline-rail');
  const contextLabel  = document.getElementById('context-label');
  const contextSub    = document.getElementById('context-sublabel');
  const backBtn       = document.getElementById('back-btn');
  const eventTitle    = document.getElementById('event-title');
  const eventDesc     = document.getElementById('event-description');
  const eventLink     = document.getElementById('event-link');
  const eventIllust   = document.getElementById('event-illustration');
  const viewport      = document.getElementById('timeline-viewport');
  const breadcrumbs   = document.querySelectorAll('.zoom-dot');

  // Scroll/drag state
  let edgeScrollRAF   = null;
  let edgeDirection   = 0;
  let isDragging      = false;
  let dragStartX      = 0;
  let dragStartIndex  = 0;

  // ── Initialization ─────────────────────────────────────────
  function init() {
    buildLevel('century', {});
    bindEvents();
  }

  // ── Build a zoom level ─────────────────────────────────────
  // startValue: optional value to snap to (e.g. the century/year/month you came from)
  function buildLevel(level, ctx, animDirection, startValue) {
    currentLevel = LEVELS.indexOf(level);
    context = { ...ctx };

    // Generate items for this level
    items = generateItems(level, ctx);

    // Determine starting position: prefer startValue, fall back to middle
    if (startValue != null) {
      const foundIdx = items.findIndex(it => it.value === startValue);
      selectedIndex = foundIdx >= 0 ? foundIdx : Math.min(Math.floor(items.length / 2), items.length - 1);
    } else {
      selectedIndex = Math.min(Math.floor(items.length / 2), items.length - 1);
    }

    // Clear & populate rail
    rail.innerHTML = '';
    rail.className = 'timeline-rail';
    if (animDirection) {
      rail.classList.add(animDirection === 'in' ? 'zoom-in' : 'zoom-out');
      setTimeout(() => rail.classList.remove('zoom-in', 'zoom-out'), 700);
    }

    items.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = 'timeline-item';
      if (item.event) {
        el.classList.add('has-event');
        el.dataset.category = item.event.category;
      }
      el.dataset.index = i;

      el.innerHTML = `
        <span class="item-dot"></span>
        <span class="item-label">${item.label}</span>
        <span class="item-sublabel">${item.sublabel || ''}</span>
      `;

      el.addEventListener('click', () => onItemClick(i));
      rail.appendChild(el);
    });

    // Update context box
    updateContext(level, ctx);

    // Update breadcrumbs
    updateBreadcrumbs(currentLevel);

    // Snap to selected
    requestAnimationFrame(() => {
      snapTo(selectedIndex, false);
      updateSelection();
    });
  }

  // ── Generate item list per level ───────────────────────────
  function generateItems(level, ctx) {
    switch (level) {
      case 'century':
        return Array.from({ length: 21 }, (_, i) => {
          const num = i + 1;
          const key = ordinalPlain(num);
          const ev = CURATED_EVENTS.centuries[key];
          return {
            label: key,
            sublabel: 'century',
            value: num,
            event: ev || null,
          };
        });

      case 'year': {
        const centuryNum = ctx.century; // e.g. 20
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
        const year = ctx.year;
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
        const year = ctx.year;
        const month = ctx.month;
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

  // ── Ordinal without the suffix for lookup key ──────────────
  function ordinalPlain(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  // ── Context box update ─────────────────────────────────────
  function updateContext(level, ctx) {
    backBtn.classList.toggle('visible', level !== 'century');

    switch (level) {
      case 'century':
        contextLabel.textContent = 'All Centuries';
        contextSub.textContent = '1st – 21st century';
        break;
      case 'year':
        contextLabel.textContent = `${ordinalPlain(ctx.century)} Century`;
        contextSub.textContent = 'Browse years';
        break;
      case 'month':
        contextLabel.textContent = String(ctx.year);
        contextSub.textContent = 'Browse months';
        break;
      case 'day':
        contextLabel.textContent = `${MONTH_NAMES[ctx.month]} ${ctx.year}`;
        contextSub.textContent = 'Browse days';
        break;
    }
  }

  // ── Breadcrumb dots ────────────────────────────────────────
  function updateBreadcrumbs(activeIdx) {
    breadcrumbs.forEach((dot, i) => {
      dot.classList.toggle('zoom-dot--active', i === activeIdx);
      dot.classList.toggle('zoom-dot--visited', i < activeIdx);
    });
  }

  // ── Snapping & Selection ───────────────────────────────────
  function snapTo(index, animate) {
    index = clamp(index, 0, items.length - 1);
    selectedIndex = index;

    const itemEls = rail.querySelectorAll('.timeline-item');
    if (!itemEls[index]) return;

    const itemRect = itemEls[index].getBoundingClientRect();
    const viewRect = viewport.getBoundingClientRect();
    const itemCenter = itemEls[index].offsetLeft + itemEls[index].offsetWidth / 2;

    // We use CSS transform for smooth scrolling
    const targetX = -(itemCenter - viewRect.width / 2);

    if (animate) {
      rail.classList.add('animating');
      rail.style.transform = `translateX(${targetX}px)`;
      setTimeout(() => rail.classList.remove('animating'), 700);
    } else {
      rail.style.transform = `translateX(${targetX}px)`;
    }

    updateSelection();
  }

  function updateSelection() {
    const itemEls = rail.querySelectorAll('.timeline-item');
    itemEls.forEach((el, i) => {
      const dist = Math.abs(i - selectedIndex);
      el.classList.toggle('selected', dist === 0);
      el.classList.remove('mid', 'far');
      if (dist >= 6) el.classList.add('far');
      else if (dist >= 3) el.classList.add('mid');
    });

    // Update event panel
    const item = items[selectedIndex];
    if (item && item.event) {
      showEvent(item);
    } else {
      showEmptyEvent(item);
    }
  }

  // ── Event panel ────────────────────────────────────────────
  function showEvent(item) {
    const ev = item.event;
    const content = document.getElementById('event-content');
    content.classList.remove('transitioning');
    void content.offsetWidth; // force reflow
    content.classList.add('transitioning');

    eventTitle.textContent = ev.title;
    eventDesc.textContent = ev.description;
    eventLink.href = ev.wikiLink;
    eventLink.style.display = 'inline-flex';

    eventIllust.innerHTML = getIllustration(ev.category) +
      `<span class="category-badge" data-cat="${ev.category}">${ev.category}</span>`;
  }

  function showEmptyEvent(item) {
    const content = document.getElementById('event-content');
    content.classList.remove('transitioning');
    void content.offsetWidth;
    content.classList.add('transitioning');

    const levelName = LEVELS[currentLevel];
    let label = item ? item.label : '';
    if (levelName === 'century') label = `the ${label} century`;

    eventTitle.textContent = item ? `${label}` : 'Select an item';
    eventDesc.textContent = 'No curated event for this entry yet. Click to drill down, or navigate to find curated events.';
    eventLink.style.display = 'none';
    eventIllust.innerHTML = getIllustration('default');
  }

  // ── Item click: drill down ─────────────────────────────────
  function onItemClick(index) {
    // First, select it
    if (index !== selectedIndex) {
      snapTo(index, true);
      return;
    }

    // Already selected — drill down
    const item = items[index];
    const level = LEVELS[currentLevel];

    if (level === 'century') {
      buildLevel('year', { century: item.value }, 'in');
    } else if (level === 'year') {
      buildLevel('month', { ...context, year: item.value }, 'in');
    } else if (level === 'month') {
      buildLevel('day', { ...context, month: item.value }, 'in');
    }
    // 'day' level — no further drill down
  }

  // ── Go back one level ──────────────────────────────────────
  function goBack() {
    const level = LEVELS[currentLevel];
    if (level === 'year') {
      // Return to century view, snapping to the century we came from
      buildLevel('century', {}, 'out', context.century);
    } else if (level === 'month') {
      // Return to year view, snapping to the year we came from
      buildLevel('year', { century: context.century }, 'out', context.year);
    } else if (level === 'day') {
      // Return to month view, snapping to the month we came from
      buildLevel('month', { century: context.century, year: context.year }, 'out', context.month);
    }
  }

  // ── Navigation helpers ─────────────────────────────────────
  function navigate(delta) {
    const newIndex = clamp(selectedIndex + delta, 0, items.length - 1);
    if (newIndex !== selectedIndex) {
      snapTo(newIndex, true);
    }
  }

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  // ── Edge-zone auto-scroll ──────────────────────────────────
  function startEdgeScroll(direction) {
    if (edgeScrollRAF) return;
    edgeDirection = direction;

    function tick() {
      navigate(edgeDirection);
      // Repeat with a delay via setTimeout + rAF
      edgeScrollRAF = setTimeout(() => {
        edgeScrollRAF = requestAnimationFrame(tick);
      }, 280);
    }

    edgeScrollRAF = requestAnimationFrame(tick);
  }

  function stopEdgeScroll() {
    if (edgeScrollRAF) {
      cancelAnimationFrame(edgeScrollRAF);
      clearTimeout(edgeScrollRAF);
      edgeScrollRAF = null;
    }
    edgeDirection = 0;
  }

  // ── Drag/slide handling ────────────────────────────────────
  function onPointerDown(e) {
    if (e.target.closest('.edge-zone') || e.target.closest('.context-box')) return;
    isDragging = true;
    dragStartX = e.clientX;
    dragStartIndex = selectedIndex;
    viewport.style.cursor = 'grabbing';
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const itemWidth = 120; // approximate
    const indexDelta = Math.round(-dx / itemWidth);
    const newIndex = clamp(dragStartIndex + indexDelta, 0, items.length - 1);
    if (newIndex !== selectedIndex) {
      snapTo(newIndex, false);
    }
  }

  function onPointerUp() {
    if (isDragging) {
      isDragging = false;
      viewport.style.cursor = '';
    }
  }

  // ── Bind all events ────────────────────────────────────────
  function bindEvents() {
    // Back button
    backBtn.addEventListener('click', goBack);

    // Keyboard
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          navigate(-1);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          navigate(1);
          break;
        case 'Enter':
          e.preventDefault();
          onItemClick(selectedIndex);
          break;
        case 'Escape':
        case 'Backspace':
          e.preventDefault();
          goBack();
          break;
      }
    });

    // Edge zones (mouse hover auto-scroll)
    document.querySelectorAll('.edge-zone').forEach(zone => {
      const dir = parseInt(zone.dataset.direction);
      zone.addEventListener('mouseenter', () => startEdgeScroll(dir));
      zone.addEventListener('mouseleave', stopEdgeScroll);
    });

    // Drag/slide on viewport
    viewport.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);

    // Mouse wheel
    viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY > 0 || e.deltaX > 0) navigate(1);
      else navigate(-1);
    }, { passive: false });

    // Fade keyboard hint after first interaction
    let hintFaded = false;
    document.addEventListener('keydown', () => {
      if (!hintFaded) {
        document.getElementById('keyboard-hint').style.opacity = '0';
        hintFaded = true;
      }
    });
  }

  // ── Start ──────────────────────────────────────────────────
  init();
})();
