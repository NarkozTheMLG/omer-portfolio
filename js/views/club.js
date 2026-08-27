import { escapeHtml, tagList } from './helpers.js';

const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z"/></svg>`
};

export function renderClub(data) {
  const stats = [
    ['Events organized', data.stats.events],
    ['Total attendees', data.stats.attendees],
    ['Game studios reached', data.stats.companies],
    ['Community size', data.stats.community]
  ].map(([label, value]) => `
      <div class="stat">
        <span class="stat-value">${escapeHtml(String(value))}</span>
        <span class="stat-label">${escapeHtml(label)}</span>
      </div>`).join('');

  const events = data.events.map((ev) => {
    const isLinkedIn = ev.link && (ev.link.includes('linkedin.com') || ev.platform === 'linkedin');
    const icon = isLinkedIn ? ICONS.linkedin : ICONS.instagram;
    const label = isLinkedIn ? 'View on LinkedIn' : 'View on Instagram';

    const linkButton = ev.link ? `
      <a class="event-post-link social-btn" href="${escapeHtml(ev.link)}" target="_blank" rel="noopener">
        ${icon}
        <span>${label}</span>
      </a>` : '';

    const mainPhoto = ev.photos[0];
    const subPhotos = ev.photos.slice(1);
    const categoryTag = (ev.tags && ev.tags[0]) || 'Event';
    const tagString = (ev.tags || []).join(' ');

    return `
    <article class="club-event club-event-interactive card" id="${escapeHtml(ev.id)}" data-club-id="${escapeHtml(ev.id)}" data-categories="${escapeHtml(tagString)}">
      <div class="event-photos-showcase">
        <div class="main-photo-frame">
          <span class="event-category-badge">${escapeHtml(categoryTag)}</span>
          <span class="event-photo-count">📸 ${ev.photos.length}</span>
          <img class="event-main-img" src="${escapeHtml(mainPhoto.src)}" alt="${escapeHtml(mainPhoto.alt)}" loading="lazy">
        </div>
        ${subPhotos.length > 0 ? `
        <div class="event-subphotos-row">
          ${subPhotos.map((p) => `
            <div class="sub-photo-frame">
              <img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.alt)}" loading="lazy">
            </div>`).join('')}
        </div>` : ''}
      </div>

      <div class="event-card-body">
        <h2>${escapeHtml(ev.title)}</h2>
        <p class="event-meta">${escapeHtml(ev.date)} · ${escapeHtml(ev.role)}</p>
        ${ev.tags ? tagList(ev.tags) : ''}
        <p class="event-description">${escapeHtml(ev.description)}</p>
        <span class="jam-more">View full event &amp; gallery →</span>
      </div>

      ${linkButton ? `<div class="event-card-footer">${linkButton}</div>` : ''}
    </article>`;
  }).join('');

  const socialLinks = data.social ? `
    <div class="club-social-links">
      <a class="social-btn" href="${escapeHtml(data.social.instagram)}" target="_blank" rel="noopener">
        ${ICONS.instagram}
        <span>BOA Instagram (@bilkentoyun)</span>
      </a>
      <a class="social-btn" href="${escapeHtml(data.social.linkedin)}" target="_blank" rel="noopener">
        ${ICONS.linkedin}
        <span>BOA LinkedIn</span>
      </a>
    </div>` : '';

  return `
    <section id="panel-club" class="view view-club" role="tabpanel" aria-labelledby="tab-club">
      <div class="club-hero card">
        <div class="club-hero-banner-wrapper">
          <img class="club-banner-img" src="assets/club/banner-06.png" alt="Bilkent Oyun Geliştirme ve Animasyon Topluluğu Banner" loading="lazy">
        </div>

        <div class="club-hero-main">
          <div class="club-hero-text">
            <div class="club-hero-header">
              <h1>${escapeHtml(data.role.title)}</h1>
              <p class="event-meta">${escapeHtml(data.role.term)}</p>
            </div>
            <p class="club-hero-blurb">${escapeHtml(data.role.blurb)}</p>
            ${socialLinks}
          </div>
          <div class="club-hero-logo-wrap">
            <img class="club-hero-floating-logo" src="assets/club/logo.png" alt="BOA Logo" loading="lazy">
          </div>
        </div>
      </div>

      <div class="stats-row">${stats}</div>

      <div class="club-events-header">
        <h2>Events &amp; Highlights</h2>
        <div class="club-filter-row" role="tablist" aria-label="Filter events by category">
          <button type="button" class="club-filter-btn is-active" data-filter="all">All Events (${data.events.length})</button>
          <button type="button" class="club-filter-btn" data-filter="Game Jam">🎮 Game Jams</button>
          <button type="button" class="club-filter-btn" data-filter="Dev Talks">🎤 Dev Talks</button>
          <button type="button" class="club-filter-btn" data-filter="Studio Visit">🏢 Studio Visits</button>
        </div>
      </div>

      <div class="events-list">${events}</div>

      <div id="club-lightbox" class="lightbox" hidden></div>
    </section>`;
}

