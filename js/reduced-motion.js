export function shouldReduceMotion(matchMediaResult) {
  return Boolean(matchMediaResult && matchMediaResult.matches);
}

export function applyReducedMotion(videos, reduce) {
  videos.forEach(video => {
    const toggle = video.parentElement.querySelector('.play-toggle');
    let posterImg = video.parentElement.querySelector('.reduced-motion-poster');
    if (reduce) {
      video.pause();
      video.hidden = true;
      if (!posterImg) {
        posterImg = document.createElement('img');
        posterImg.className = 'reduced-motion-poster';
        posterImg.src = video.getAttribute('poster') || '';
        const fallbackImg = video.querySelector('img');
        posterImg.alt = fallbackImg ? fallbackImg.getAttribute('alt') || '' : '';
        video.parentElement.insertBefore(posterImg, video);
      }
      posterImg.hidden = false;
      if (toggle) toggle.hidden = false;
    } else {
      video.hidden = false;
      if (posterImg) posterImg.hidden = true;
      video.play?.().catch(() => {});
      if (toggle) toggle.hidden = true;
    }
  });
}

export function initReducedMotionMedia() {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const videos = document.querySelectorAll('.loop-video');
  applyReducedMotion(videos, shouldReduceMotion(mq));

  document.querySelectorAll('.play-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const video = btn.parentElement.querySelector('.loop-video');
      const posterImg = btn.parentElement.querySelector('.reduced-motion-poster');
      video.hidden = false;
      if (posterImg) posterImg.hidden = true;
      btn.hidden = true;
      video.play?.().catch(() => {});
    });
  });
}

if (typeof window !== 'undefined') {
  window.initReducedMotionMedia = initReducedMotionMedia;
}
