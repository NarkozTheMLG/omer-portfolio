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
  const releaseOps = (data.releaseOps || []).map(s => `<li>${escapeHtml(s)}</li>`).join('');
  const aiUsage = data.aiUsage || { ai: [], handmade: [] };
  const aiItems = aiUsage.ai.map(item => `<li><strong>${escapeHtml(item.area)}:</strong> ${escapeHtml(item.detail)}</li>`).join('');
  const handmadeItems = aiUsage.handmade.map(s => `<li>${escapeHtml(s)}</li>`).join('');

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

  const stores = data.stores || [];
  const liveStore = stores.find(st => st.status === 'live' && st.href);
  const pendingStores = stores.filter(st => st !== liveStore);

  const releaseCta = liveStore ? `
      <div class="release-cta">
        <span class="available-pill"><span class="live-dot" aria-hidden="true"></span>Available now!</span>
        <a class="play-now-btn" href="${escapeHtml(liveStore.href)}" target="_blank" rel="noopener">
          <img src="${escapeHtml(liveStore.icon)}" alt="" aria-hidden="true">
          <span>Play now on ${escapeHtml(liveStore.name)}</span>
          <span class="play-now-arrow" aria-hidden="true">&#8594;</span>
        </a>
        ${pendingStores.length > 0 ? `
        <ul class="release-status">
          ${pendingStores.map(st => `
          <li><img src="${escapeHtml(st.icon)}" alt="" aria-hidden="true">${escapeHtml(st.name)} <span class="release-status-sep" aria-hidden="true">&middot;</span> <span class="release-status-label is-${escapeHtml(st.status)}">${escapeHtml(st.statusLabel)}</span></li>`).join('')}
        </ul>` : ''}
      </div>` : '';

  const storeBadges = stores.map(st => {
    const inner = `
          <img class="store-badge-icon" src="${escapeHtml(st.icon)}" alt="" aria-hidden="true">
          <span class="store-badge-text">
            <span class="store-badge-kicker">${st.href ? 'Play on' : 'Coming to'}</span>
            <span class="store-badge-name">${escapeHtml(st.name)}</span>
          </span>`;
    const badge = st.href
      ? `<a class="store-badge is-${escapeHtml(st.status)}" href="${escapeHtml(st.href)}" target="_blank" rel="noopener">${inner}</a>`
      : `<span class="store-badge is-${escapeHtml(st.status)}">${inner}</span>`;
    return `
      <li class="store-badge-item">
        ${badge}
        <span class="store-badge-status is-${escapeHtml(st.status)}">${escapeHtml(st.statusLabel)}</span>
      </li>`;
  }).join('');

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
      ${releaseCta}

      <dl class="fact-strip">${facts}</dl>

      ${tagList(data.tags)}

      <div class="project-main-video-wrapper">
        ${mediaBlock({ src: data.video.src, poster: data.video.poster, alt: `${data.title} gameplay loop` })}
      </div>

      <h2>Performance</h2>
      <ul class="systems-list">${systems}</ul>

      ${data.frameDebugger ? `
      <h3>Frame Debugger: Before &#8594; After</h3>
      <div class="gallery-grid">
        <figure class="gallery-item">
          <img class="gallery-photo" src="${escapeHtml(data.frameDebugger.before.src)}" alt="Frame Debugger before optimization" loading="lazy" tabindex="0" role="button" aria-label="Enlarge: Frame Debugger before optimization">
          <figcaption>${escapeHtml(data.frameDebugger.before.caption)}</figcaption>
        </figure>
        <figure class="gallery-item">
          <img class="gallery-photo" src="${escapeHtml(data.frameDebugger.after.src)}" alt="Frame Debugger after optimization" loading="lazy" tabindex="0" role="button" aria-label="Enlarge: Frame Debugger after optimization">
          <figcaption>${escapeHtml(data.frameDebugger.after.caption)}</figcaption>
        </figure>
      </div>` : ''}

      ${sideClips.length > 0 ? `
      <h2>Core Systems & Gameplay</h2>
      <div class="project-side-clips-grid">${sideClips}</div>` : ''}

      ${releaseOps ? `
      <h2>Release &amp; Live Ops</h2>
      <ul class="systems-list">${releaseOps}</ul>` : ''}

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

      ${aiItems ? `
      <h2>AI Usage</h2>
      <h3>Made with AI</h3>
      <ul class="systems-list">${aiItems}</ul>
      ${handmadeItems ? `
      <h3>Made by hand</h3>
      <ul class="systems-list">${handmadeItems}</ul>` : ''}` : ''}

      <h2>Gallery</h2>
      ${gallery}

      ${storeBadges ? `
      <h2>Links (Soon)</h2>
      <ul class="store-badges">${storeBadges}
      </ul>` : ''}
    </section>`;
}
