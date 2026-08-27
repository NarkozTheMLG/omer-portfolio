export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function mediaBlock({ src, poster, alt = '' }) {
  if (!src) {
    return `
    <div class="media-frame">
      <img src="${escapeHtml(poster)}" alt="${escapeHtml(alt)}">
    </div>`;
  }
  return `
    <div class="media-frame">
      <video class="loop-video" muted autoplay loop playsinline poster="${escapeHtml(poster)}" src="${escapeHtml(src)}">
        <img src="${escapeHtml(poster)}" alt="${escapeHtml(alt)}">
      </video>
      <button type="button" class="play-toggle" hidden aria-label="Play looping preview">▶</button>
    </div>`;
}

export function tagList(tags) {
  return `<ul class="tag-list">${tags.map(t => `<li class="tag">${escapeHtml(t)}</li>`).join('')}</ul>`;
}
