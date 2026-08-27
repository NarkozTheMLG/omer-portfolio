export function createLightboxState(eventsPhotos) {
  let isOpen = false;
  let eventIndex = 0;
  let photoIndex = 0;

  function currentPhoto() {
    return eventsPhotos[eventIndex]?.[photoIndex] ?? null;
  }

  return {
    open(evIdx, phIdx) {
      eventIndex = evIdx;
      photoIndex = phIdx;
      isOpen = true;
    },
    close() {
      isOpen = false;
    },
    next() {
      const len = eventsPhotos[eventIndex].length;
      photoIndex = (photoIndex + 1) % len;
    },
    prev() {
      const len = eventsPhotos[eventIndex].length;
      photoIndex = (photoIndex - 1 + len) % len;
    },
    getState() {
      return { isOpen, eventIndex, photoIndex, photo: currentPhoto() };
    }
  };
}

// --- Browser-only DOM binding below. Not exercised by node --test. ---

export function initClubLightbox() {
  const triggers = document.querySelectorAll('.event-photo-trigger');
  if (!triggers.length) return;

  const eventsPhotos = [];
  document.querySelectorAll('.club-event').forEach((eventEl, i) => {
    eventsPhotos[i] = Array.from(eventEl.querySelectorAll('.event-photo-trigger img')).map(img => ({
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt')
    }));
  });

  const state = createLightboxState(eventsPhotos);
  const root = document.getElementById('club-lightbox');
  let lastTrigger = null;

  function render() {
    const s = state.getState();
    if (!s.isOpen) {
      root.hidden = true;
      root.innerHTML = '';
      return;
    }
    root.hidden = false;
    root.innerHTML = `
      <div class="lightbox-backdrop">
        <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Event photo">
          <button type="button" class="lightbox-close" aria-label="Close">×</button>
          <button type="button" class="lightbox-prev" aria-label="Previous photo">‹</button>
          <img src="${s.photo.src}" alt="${s.photo.alt}">
          <button type="button" class="lightbox-next" aria-label="Next photo">›</button>
        </div>
      </div>`;
    root.querySelector('.lightbox-close').focus();
  }

  function close() {
    state.close();
    render();
    lastTrigger?.focus();
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      lastTrigger = trigger;
      state.open(Number(trigger.dataset.eventIndex), Number(trigger.dataset.photoIndex));
      render();
    });
  });

  root.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-close')) close();
    if (e.target.classList.contains('lightbox-next')) { state.next(); render(); }
    if (e.target.classList.contains('lightbox-prev')) { state.prev(); render(); }
  });

  document.addEventListener('keydown', (e) => {
    if (!state.getState().isOpen) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') { state.next(); render(); }
    if (e.key === 'ArrowLeft') { state.prev(); render(); }
    if (e.key === 'Tab') {
      const focusables = root.querySelectorAll('button');
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

// A simpler flat-list lightbox for a single gallery (no per-event grouping).
// Builds its own overlay on first use instead of requiring a static root in HTML.
export function initGalleryLightbox(triggerSelector) {
  const triggers = document.querySelectorAll(triggerSelector);
  if (!triggers.length) return;

  const photos = Array.from(triggers).map(img => ({ src: img.getAttribute('src'), alt: img.getAttribute('alt') }));
  let index = 0;
  let isOpen = false;
  let lastTrigger = null;
  let root = document.getElementById('gallery-lightbox');
  if (!root) {
    root = document.createElement('div');
    root.id = 'gallery-lightbox';
    root.hidden = true;
    document.body.appendChild(root);
  }

  function render() {
    if (!isOpen) {
      root.hidden = true;
      root.innerHTML = '';
      return;
    }
    root.hidden = false;
    const photo = photos[index];
    root.innerHTML = `
      <div class="lightbox-backdrop">
        <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="${photo.alt}">
          <button type="button" class="lightbox-close" aria-label="Close">×</button>
          <button type="button" class="lightbox-prev" aria-label="Previous image">‹</button>
          <img src="${photo.src}" alt="${photo.alt}">
          <button type="button" class="lightbox-next" aria-label="Next image">›</button>
        </div>
      </div>`;
    root.querySelector('.lightbox-close').focus();
  }

  function open(i) {
    index = i;
    isOpen = true;
    render();
  }

  function close() {
    isOpen = false;
    render();
    lastTrigger?.focus();
  }

  function next() { index = (index + 1) % photos.length; render(); }
  function prev() { index = (index - 1 + photos.length) % photos.length; render(); }

  triggers.forEach((trigger, i) => {
    trigger.addEventListener('click', () => { lastTrigger = trigger; open(i); });
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lastTrigger = trigger; open(i); }
    });
  });

  root.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-close')) close();
    if (e.target.classList.contains('lightbox-next')) next();
    if (e.target.classList.contains('lightbox-prev')) prev();
  });

  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });
}

// A one-off modal for "inspecting" a single video at a larger size, with
// native controls for scrubbing. Reuses the same lightbox-* CSS classes.
export function initVideoLightbox() {
  let root = document.getElementById('video-lightbox');
  if (!root) {
    root = document.createElement('div');
    root.id = 'video-lightbox';
    root.hidden = true;
    document.body.appendChild(root);
  }

  function close() {
    root.hidden = true;
    const video = root.querySelector('video');
    video?.pause();
    root.innerHTML = '';
  }

  window.openVideoInspect = function (src, alt) {
    root.hidden = false;
    root.innerHTML = `
      <div class="lightbox-backdrop">
        <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="${alt}">
          <button type="button" class="lightbox-close" aria-label="Close">×</button>
          <video src="${src}" autoplay loop muted playsinline controls></video>
        </div>
      </div>`;
    root.querySelector('.lightbox-close').focus();
  };

  root.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-close')) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!root.hidden && e.key === 'Escape') close();
  });
}

if (typeof window !== 'undefined') {
  window.initClubLightbox = initClubLightbox;
  window.initGalleryLightbox = initGalleryLightbox;
  window.initVideoLightbox = initVideoLightbox;
}
