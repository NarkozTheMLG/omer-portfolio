import { escapeHtml, mediaBlock, tagList } from './helpers.js';

export function renderJams(jams) {
  const cards = jams.map(jam => `
    <article class="jam-card card" data-jam-slug="${escapeHtml(jam.slug)}">
      <a class="jam-card-link" href="#/jams/${escapeHtml(jam.slug)}" data-jam-slug="${escapeHtml(jam.slug)}" aria-label="${escapeHtml(jam.name)} — read the full breakdown">
        <div class="jam-media-frame">
          ${mediaBlock({ src: jam.video.src, poster: jam.video.poster, alt: `${jam.name} gameplay loop` })}
        </div>
        <div class="jam-card-body">
          <h2>${escapeHtml(jam.name)}</h2>
          <p class="jam-meta">${escapeHtml(jam.event || 'Game Jam')} | ${escapeHtml(jam.duration || '48h')}</p>
          ${tagList(jam.tags)}
          <p>${escapeHtml(jam.blurb)}</p>
          <span class="jam-more">Read the breakdown →</span>
        </div>
      </a>
      <div class="jam-actions">
        <a class="play-link social-btn" href="${escapeHtml(jam.itch)}" target="_blank" rel="noopener">Play on itch.io</a>
      </div>
    </article>`).join('');

  return `
    <section id="panel-jams" class="view view-jams" role="tabpanel" aria-labelledby="tab-jams">
      <h1>Game Jams</h1>
      <div class="jam-grid">${cards}</div>
    </section>`;
}
