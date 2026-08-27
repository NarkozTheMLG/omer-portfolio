import { escapeHtml, mediaBlock, tagList } from './helpers.js';

const ICON_CALENDAR = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;

const ICON_BACK = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`;

export function renderJamDetail(jam) {
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
    <section id="panel-jams" class="view view-jam-detail" role="tabpanel" aria-labelledby="tab-jams">
      <a class="detail-back" href="#/jams">${ICON_BACK}<span>All game jams</span></a>

      <div class="detail-media">
        ${mediaBlock({ src: jam.video.src, poster: jam.video.poster, alt: `${jam.name} gameplay loop` })}
      </div>

      <h1 class="detail-title">${escapeHtml(jam.name)}</h1>

      <div class="detail-meta">
        <span class="detail-meta-item">${ICON_CALENDAR}${escapeHtml(jam.event || 'Game Jam')}</span>
        ${jam.duration ? `<span class="detail-meta-item">${escapeHtml(jam.duration)}</span>` : ''}
        <a class="detail-meta-link" href="${escapeHtml(jam.itch)}" target="_blank" rel="noopener">Play on itch.io</a>
      </div>

      ${tagList(jam.tags || [])}

      <hr class="detail-rule">

      ${details.overview ? `
      <h2 class="detail-section-title">Overview</h2>
      <p>${escapeHtml(details.overview)}</p>` : ''}

      ${details.mechanics ? `
      <h2 class="detail-section-title">Mechanics</h2>
      <p>${escapeHtml(details.mechanics)}</p>` : ''}

      ${highlights.length > 0 ? `
      <h2 class="detail-section-title">Key Architecture &amp; Systems</h2>
      <ul class="detail-list">
        ${highlights.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>` : ''}

      ${facts.length > 0 ? `
      <h2 class="detail-section-title">Jam Facts</h2>
      <dl class="fact-strip">
        ${facts.map(([label, value]) => `
        <div class="fact">
          <dt>${escapeHtml(label)}</dt>
          <dd>${escapeHtml(value)}</dd>
        </div>`).join('')}
      </dl>` : ''}

      <p class="detail-actions">
        <a class="social-btn" href="${escapeHtml(jam.itch)}" target="_blank" rel="noopener">Play ${escapeHtml(jam.name)} on itch.io</a>
      </p>
    </section>`;
}
