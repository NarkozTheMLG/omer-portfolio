import { jams, club } from './data.js';
import { escapeHtml, mediaBlock, tagList } from './views/helpers.js';

let overlayElement = null;
let lastFocusedElement = null;

function getOverlay() {
  if (!overlayElement) {
    overlayElement = document.getElementById('card-focus-overlay');
    if (!overlayElement) {
      overlayElement = document.createElement('div');
      overlayElement.id = 'card-focus-overlay';
      overlayElement.className = 'card-focus-overlay';
      overlayElement.setAttribute('role', 'dialog');
      overlayElement.setAttribute('aria-modal', 'true');
      overlayElement.hidden = true;
      document.body.appendChild(overlayElement);

      overlayElement.addEventListener('click', (event) => {
        if (event.target === overlayElement || event.target.closest('.card-focus-close')) {
          closeFocus();
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !overlayElement.hidden) {
          closeFocus();
        }
      });
    }
  }
  return overlayElement;
}

function renderJamFocusContent(jam) {
  const details = jam.details || {};
  const highlights = details.techHighlights || [];
  const facts = [
    ['Event', jam.event],
    ['Duration', jam.duration],
    ['Theme', jam.theme],
    ['Team', jam.team],
    ['Role', jam.role]
  ].filter(([, value]) => Boolean(value));

  return `
    <div class="card-focus-dialog card" role="document">
      <button type="button" class="card-focus-close" aria-label="Close dialog">&times;</button>
      
      <div class="card-focus-media">
        ${mediaBlock({ src: jam.video.src, poster: jam.video.poster, alt: `${jam.name} gameplay preview` })}
      </div>

      <div class="card-focus-body">
        <div class="card-focus-header">
          <div>
            <h2 class="card-focus-title">${escapeHtml(jam.name)}</h2>
            <p class="card-focus-meta">${escapeHtml(jam.event || 'Game Jam')} | ${escapeHtml(jam.duration || '48h')}</p>
          </div>
          <a class="social-btn card-focus-action" href="${escapeHtml(jam.itch)}" target="_blank" rel="noopener">Play on itch.io</a>
        </div>

        ${jam.tags ? tagList(jam.tags) : ''}
        <hr class="card-focus-rule">

        ${details.overview ? `
          <div class="card-focus-section">
            <h3>Overview</h3>
            <p>${escapeHtml(details.overview)}</p>
          </div>` : ''}

        ${details.mechanics ? `
          <div class="card-focus-section">
            <h3>Mechanics</h3>
            <p>${escapeHtml(details.mechanics)}</p>
          </div>` : ''}

        ${highlights.length > 0 ? `
          <div class="card-focus-section">
            <h3>Key Architecture &amp; Systems</h3>
            <ul class="card-focus-bullets">
              ${highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
            </ul>
          </div>` : ''}

        ${facts.length > 0 ? `
          <div class="card-focus-section">
            <h3>Jam Facts</h3>
            <dl class="fact-strip">
              ${facts.map(([label, value]) => `
                <div class="fact">
                  <dt>${escapeHtml(label)}</dt>
                  <dd>${escapeHtml(value)}</dd>
                </div>`).join('')}
            </dl>
          </div>` : ''}
      </div>
    </div>`;
}

function renderClubFocusContent(ev) {
  const isLinkedIn = ev.link && (ev.link.includes('linkedin.com') || ev.platform === 'linkedin');
  const linkLabel = isLinkedIn ? 'View on LinkedIn' : 'View on Instagram';

  return `
    <div class="card-focus-dialog card" role="document">
      <button type="button" class="card-focus-close" aria-label="Close dialog">&times;</button>
      
      <div class="card-focus-gallery">
        <div class="card-focus-main-frame">
          <img id="club-focus-main-img" class="card-focus-main-img" src="${escapeHtml(ev.photos[0].src)}" alt="${escapeHtml(ev.photos[0].alt)}">
        </div>
        ${ev.photos.length > 1 ? `
          <div class="card-focus-thumbnails">
            ${ev.photos.map((p, idx) => `
              <button type="button" class="card-focus-thumb-btn ${idx === 0 ? 'is-active' : ''}" data-thumb-src="${escapeHtml(p.src)}" data-thumb-alt="${escapeHtml(p.alt)}" aria-label="View photo ${idx + 1}">
                <img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.alt)}" class="card-focus-thumb-img" loading="lazy">
              </button>
            `).join('')}
          </div>` : ''}
      </div>

      <div class="card-focus-body">
        <div class="card-focus-header">
          <div>
            <h2 class="card-focus-title">${escapeHtml(ev.title)}</h2>
            <p class="card-focus-meta">${escapeHtml(ev.date)} · ${escapeHtml(ev.role)}</p>
          </div>
          ${ev.link ? `
            <a class="social-btn card-focus-action" href="${escapeHtml(ev.link)}" target="_blank" rel="noopener">${linkLabel}</a>` : ''}
        </div>

        ${ev.tags ? tagList(ev.tags) : ''}
        <hr class="card-focus-rule">

        <div class="card-focus-section">
          <p>${escapeHtml(ev.description)}</p>
        </div>
      </div>
    </div>`;
}

export function openJamFocus(slug, triggerElement = null) {
  const jam = jams.find(j => j.slug === slug);
  if (!jam) return;
  lastFocusedElement = triggerElement || document.activeElement;
  const overlay = getOverlay();
  overlay.innerHTML = renderJamFocusContent(jam);
  overlay.hidden = false;
  // Trigger smooth entrance
  requestAnimationFrame(() => {
    overlay.classList.add('is-active');
  });
  window.initReducedMotionMedia?.();
  const closeBtn = overlay.querySelector('.card-focus-close');
  if (closeBtn) closeBtn.focus();
}

export function openClubFocus(eventId, triggerElement = null) {
  const ev = club.events.find(e => e.id === eventId);
  if (!ev) return;
  lastFocusedElement = triggerElement || document.activeElement;
  const overlay = getOverlay();
  overlay.innerHTML = renderClubFocusContent(ev);
  overlay.hidden = false;
  
  // Attach thumbnail switching handlers
  overlay.querySelectorAll('.card-focus-thumb-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mainImg = overlay.querySelector('#club-focus-main-img');
      if (mainImg) {
        mainImg.src = btn.dataset.thumbSrc;
        mainImg.alt = btn.dataset.thumbAlt;
      }
      overlay.querySelectorAll('.card-focus-thumb-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  // Trigger smooth entrance
  requestAnimationFrame(() => {
    overlay.classList.add('is-active');
  });
  const closeBtn = overlay.querySelector('.card-focus-close');
  if (closeBtn) closeBtn.focus();
}

let closeTimeout = null;

export function closeFocus() {
  if (!overlayElement || overlayElement.hidden) return;
  clearTimeout(closeTimeout);
  overlayElement.classList.remove('is-active');

  const onEnd = () => {
    if (!overlayElement.classList.contains('is-active')) {
      overlayElement.hidden = true;
      overlayElement.innerHTML = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }
  };

  const isReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  if (isReduced) {
    onEnd();
  } else {
    closeTimeout = setTimeout(onEnd, 200);
  }
}

export function initClubInteractions() {
  // Category filter buttons
  const filterBtns = document.querySelectorAll('.club-filter-btn');
  const clubCards = document.querySelectorAll('.club-event');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      clubCards.forEach(card => {
        const categories = card.dataset.categories || '';
        if (filter === 'all' || categories.toLowerCase().includes(filter.toLowerCase())) {
          card.style.display = 'flex';
          card.style.animation = 'viewFadeIn 0.22s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

export function initCardFocus() {
  document.addEventListener('click', (event) => {
    // 1. Game Jam card click
    const jamTrigger = event.target.closest('[data-jam-slug], .jam-card-link');
    if (jamTrigger && !event.target.closest('.play-link')) {
      const slug = jamTrigger.dataset.jamSlug || (jamTrigger.getAttribute('href') || '').replace('#/jams/', '');
      if (slug && jams.some(j => j.slug === slug)) {
        event.preventDefault();
        openJamFocus(slug, jamTrigger);
        return;
      }
    }

    // 2. Club Event card click
    const clubTrigger = event.target.closest('[data-club-id], .club-event-interactive');
    if (clubTrigger && !event.target.closest('.social-btn, .event-photo-trigger, .club-filter-btn')) {
      const eventId = clubTrigger.dataset.clubId || clubTrigger.id;
      if (eventId && club.events.some(e => e.id === eventId)) {
        event.preventDefault();
        openClubFocus(eventId, clubTrigger);
      }
    }
  });
}
