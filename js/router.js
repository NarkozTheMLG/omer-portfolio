import { about, jams } from './data.js';

export const ROUTES = ['about', 'project', 'jams', 'club'];

const TITLES = {
  about: 'About',
  project: 'Project',
  jams: 'Game Jams',
  club: 'Club'
};

// Hashes look like `#/jams` or, for a single entry, `#/jams/cubinary`.
const HASH_PATTERN = /^#\/([a-z]+)(?:\/([a-z0-9-]+))?\/?$/;

// Full parse: the base route plus any detail slug that followed it.
export function parseRoute(hash) {
  const match = HASH_PATTERN.exec(hash || '');
  const key = match ? match[1] : '';
  if (!ROUTES.includes(key)) return { route: 'about', param: null };
  return { route: key, param: match[2] || null };
}

// Base route only — this is what drives which tab is highlighted.
export function parseHash(hash) {
  return parseRoute(hash).route;
}

// Resolve a detail slug to its entry. Only Game Jams have detail pages;
// an unknown slug resolves to null so the caller falls back to the index.
export function resolveDetail(route, param) {
  if (route !== 'jams' || !param) return null;
  return jams.find(jam => jam.slug === param) || null;
}

export function routeMeta(route, param) {
  const key = ROUTES.includes(route) ? route : 'about';
  const detail = resolveDetail(key, param);
  if (detail) return { title: `${detail.name} — ${about.name}` };
  return { title: `${TITLES[key]} — ${about.name}` };
}
