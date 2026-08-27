import { escapeHtml, mediaBlock, tagList } from './helpers.js';

export function initProjectMedia() {
  document.querySelectorAll('.view-project .media-frame').forEach((frame) => {
    const video = frame.querySelector('.loop-video');
    if (!video || frame.dataset.toggleInitialized) return;
    frame.dataset.toggleInitialized = 'true';

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'video-center-toggle';
    toggleBtn.setAttribute('aria-label', 'Pause video');
    toggleBtn.innerHTML = '&#10074;&#10074;';
    frame.appendChild(toggleBtn);

    video.addEventListener('play', () => {
      toggleBtn.innerHTML = '&#10074;&#10074;';
      toggleBtn.setAttribute('aria-label', 'Pause video');
    });
    video.addEventListener('pause', () => {
      toggleBtn.innerHTML = '&#9654;';
      toggleBtn.setAttribute('aria-label', 'Play video');
    });

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.paused) video.play(); else video.pause();
    });

    frame.addEventListener('click', (e) => {
      if (e.target.closest('.video-center-toggle') || e.target.closest('.play-toggle')) return;
      const alt = frame.querySelector('img')?.getAttribute('alt') || '';
      window.openVideoInspect?.(video.currentSrc || video.getAttribute('src'), alt);
    });
  });
  window.initGalleryLightbox?.('.gallery-photo');
}

export function renderProject(data) {
  const facts = [
    ['Role', data.facts.role],
    ['Team', data.facts.team],
    ['Duration', data.facts.duration],
    ['Unity version', data.facts.unityVersion],
    ['Platform', data.facts.platform],
    ['Status', data.facts.status]
  ].map(([label, value]) => `
      <div class="fact">
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(value)}</dd>
      </div>`).join('');

  const systems = data.systems.map(s => `<li>${escapeHtml(s)}</li>`).join('');

  const galleryItems = data.gallery || [];
  const gallery = galleryItems.length === 3 ? `
    <div class="gallery-balanced-grid">
      <div class="gallery-tall-column">
        <figure class="gallery-item">
          <img class="gallery-photo" data-gallery-index="0" src="${escapeHtml(galleryItems[0].src)}" alt="${escapeHtml(galleryItems[0].alt)}" loading="lazy" tabindex="0" role="button" aria-label="Enlarge: ${escapeHtml(galleryItems[0].alt)}">
          <figcaption>${escapeHtml(galleryItems[0].caption)}</figcaption>
        </figure>
      </div>
      <div class="gallery-stacked-column">
        <figure class="gallery-item">
          <img class="gallery-photo" data-gallery-index="1" src="${escapeHtml(galleryItems[1].src)}" alt="${escapeHtml(galleryItems[1].alt)}" loading="lazy" tabindex="0" role="button" aria-label="Enlarge: ${escapeHtml(galleryItems[1].alt)}">
          <figcaption>${escapeHtml(galleryItems[1].caption)}</figcaption>
        </figure>
        <figure class="gallery-item">
          <img class="gallery-photo" data-gallery-index="2" src="${escapeHtml(galleryItems[2].src)}" alt="${escapeHtml(galleryItems[2].alt)}" loading="lazy" tabindex="0" role="button" aria-label="Enlarge: ${escapeHtml(galleryItems[2].alt)}">
          <figcaption>${escapeHtml(galleryItems[2].caption)}</figcaption>
        </figure>
      </div>
    </div>` : `
    <div class="gallery-grid">
      ${galleryItems.map((g, i) => `
        <figure class="gallery-item">
          <img class="gallery-photo" data-gallery-index="${i}" src="${escapeHtml(g.src)}" alt="${escapeHtml(g.alt)}" loading="lazy" tabindex="0" role="button" aria-label="Enlarge: ${escapeHtml(g.alt)}">
          <figcaption>${escapeHtml(g.caption)}</figcaption>
        </figure>`).join('')}
    </div>`;

  const sideClips = (data.sideClips || []).map(c => `
    <div class="side-clip">
      ${mediaBlock({ src: c.src, poster: c.poster, alt: c.caption })}
      <p class="side-clip-caption">${escapeHtml(c.caption)}</p>
    </div>`).join('');

  return `
    <section id="panel-project" class="view view-project" role="tabpanel" aria-labelledby="tab-project">
      ${data.banner ? `<img class="project-banner" src="${escapeHtml(data.banner)}" alt="${escapeHtml(data.title)}">` : ''}
      <h1>${escapeHtml(data.title)}</h1>
      <p class="hook">${escapeHtml(data.hook)}</p>

      <dl class="fact-strip">${facts}</dl>

      ${tagList(data.tags)}

      <div class="project-main-video-wrapper">
        ${mediaBlock({ src: data.video.src, poster: data.video.poster, alt: `${data.title} gameplay loop` })}
      </div>

      <h2>Performance</h2>
      <ul class="systems-list">${systems}</ul>

      ${sideClips.length > 0 ? `
      <h2>Core Systems & Gameplay</h2>
      <div class="project-side-clips-grid">${sideClips}</div>` : ''}

      <h2>Hard Problems</h2>
      ${(data.hardProblems || []).map(hp => `
      <div class="hard-problem">
        <h3>${escapeHtml(hp.title)}</h3>
        <p><strong>What broke:</strong> ${escapeHtml(hp.broke)}</p>
        <p><strong>What I tried:</strong> ${escapeHtml(hp.tried)}</p>
        <p><strong>What shipped:</strong> ${escapeHtml(hp.shipped)}</p>
        <p><strong>The tradeoff:</strong> ${escapeHtml(hp.tradeoff)}</p>
      </div>`).join('')}

      <h2>What I&#39;d change</h2>
      <p>${escapeHtml(data.retro)}</p>

      <h2>Gallery</h2>
      ${gallery}

      <h2>Links (Soon)</h2>
      <ul class="link-list project-links-soon">
        <li><span class="soon-badge-item"><strong>CrazyGames</strong> <span class="badge-tag">Soon</span></span></li>
        <li><span class="soon-badge-item"><strong>Google Play Store</strong> <span class="badge-tag">Soon</span></span></li>
        <li><span class="soon-badge-item"><strong>App Store</strong> <span class="badge-tag">Soon</span></span></li>
      </ul>
    </section>`;
}
