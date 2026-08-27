import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ROUTES, parseHash, parseRoute, resolveDetail, routeMeta } from '../js/router.js';
import { about, jams } from '../js/data.js';

test('ROUTES lists the four tabs in header order', () => {
  assert.deepEqual(ROUTES, ['about', 'project', 'jams', 'club']);
});

test('parseHash resolves known hashes', () => {
  assert.equal(parseHash('#/about'), 'about');
  assert.equal(parseHash('#/project'), 'project');
  assert.equal(parseHash('#/jams'), 'jams');
  assert.equal(parseHash('#/club'), 'club');
});

test('parseHash falls back to about for empty or unknown hashes', () => {
  assert.equal(parseHash(''), 'about');
  assert.equal(parseHash('#'), 'about');
  assert.equal(parseHash('#/nope'), 'about');
  assert.equal(parseHash('#/about/extra'), 'about');
});

test('routeMeta returns a per-view title', () => {
  assert.equal(routeMeta('project').title, `Project — ${about.name}`);
  assert.equal(routeMeta('club').title, `Club — ${about.name}`);
});

test('parseRoute splits a detail slug off the base route', () => {
  assert.deepEqual(parseRoute('#/jams'), { route: 'jams', param: null });
  assert.deepEqual(parseRoute('#/jams/cubinary'), { route: 'jams', param: 'cubinary' });
  assert.deepEqual(parseRoute('#/jams/leech-of-joy'), { route: 'jams', param: 'leech-of-joy' });
});

test('a jam detail hash keeps the Game Jams tab selected', () => {
  assert.equal(parseHash('#/jams/cubinary'), 'jams');
  assert.equal(parseHash('#/jams/assylum'), 'jams');
});

test('parseRoute falls back to about for unknown base routes', () => {
  assert.deepEqual(parseRoute('#/nope/whatever'), { route: 'about', param: null });
  assert.deepEqual(parseRoute(''), { route: 'about', param: null });
});

test('resolveDetail finds a jam by slug and rejects anything else', () => {
  assert.equal(resolveDetail('jams', 'cubinary').name, 'Cubinary');
  assert.equal(resolveDetail('jams', 'no-such-jam'), null);
  assert.equal(resolveDetail('jams', null), null);
  assert.equal(resolveDetail('club', 'cubinary'), null);
});

test('every jam has a unique, URL-safe slug', () => {
  const slugs = jams.map(j => j.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) assert.match(slug, /^[a-z0-9-]+$/);
});

test('routeMeta titles a jam detail page with the jam name', () => {
  assert.equal(routeMeta('jams', 'cubinary').title, `Cubinary — ${about.name}`);
  assert.equal(routeMeta('jams', 'no-such-jam').title, `Game Jams — ${about.name}`);
});

