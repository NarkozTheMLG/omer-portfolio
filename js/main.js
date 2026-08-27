import { ROUTES, parseRoute, resolveDetail, routeMeta } from './router.js';
import { about, project, jams, club } from './data.js';
import { renderAbout, initPhotoStack, initInspector } from './views/about.js';
import { renderProject, initProjectMedia } from './views/project.js';
import { renderJams } from './views/jams.js';
import { renderJamDetail } from './views/jam-detail.js';
import { renderClub } from './views/club.js';
import { initCardFocus, closeFocus, initClubInteractions } from './card-focus.js';
import './reduced-motion.js';
import './lightbox.js';

const RENDERERS = {
  about: () => renderAbout(about),
  project: () => renderProject(project),
  jams: () => renderJams(jams),
  club: () => renderClub(club)
};

const app = document.getElementById('app');
const liveRoute = document.getElementById('live-route');
const tabs = ROUTES.reduce((acc, r) => {
  acc[r] = document.getElementById(`tab-${r}`);
  return acc;
}, {});

function render(route, param) {
  closeFocus();
  const tablist = document.querySelector('.tablist');
  const focusWasInTablist = tablist.contains(document.activeElement);

  const detail = resolveDetail(route, param);
  app.innerHTML = detail ? renderJamDetail(detail) : RENDERERS[route]();
  document.title = routeMeta(route, param).title;

  for (const r of ROUTES) {
    const isActive = r === route;
    tabs[r].setAttribute('aria-selected', String(isActive));
    tabs[r].tabIndex = isActive ? 0 : -1;
  }

  if (liveRoute) liveRoute.textContent = `${routeMeta(route, param).title} loaded`;
  if (!focusWasInTablist) app.focus({ preventScroll: true });
  window.initReducedMotionMedia?.();
  window.initClubLightbox?.();
  if (route === 'about') {
    initPhotoStack();
    initInspector();
  }
  if (route === 'club') initClubInteractions();
  if (route === 'project') initProjectMedia();
}

function handleHashChange() {
  const { route, param } = parseRoute(window.location.hash);
  render(route, param);
}

function handleSkipLinkClick(event) {
  event.preventDefault();
  app.focus();
}

function handleTablistKeydown(event) {
  const currentIndex = ROUTES.indexOf(parseRoute(window.location.hash).route);
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  let nextIndex = currentIndex;
  if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + ROUTES.length) % ROUTES.length;
  if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % ROUTES.length;
  if (event.key === 'Home') nextIndex = 0;
  if (event.key === 'End') nextIndex = ROUTES.length - 1;
  const nextRoute = ROUTES[nextIndex];
  tabs[nextRoute].focus();
  window.location.hash = `#/${nextRoute}`;
}

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

window.addEventListener('hashchange', handleHashChange);
document.querySelector('.tablist').addEventListener('keydown', handleTablistKeydown);
document.querySelector('.skip-link')?.addEventListener('click', handleSkipLinkClick);
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCardFocus();
  window.initVideoLightbox?.();
  handleHashChange();
});
