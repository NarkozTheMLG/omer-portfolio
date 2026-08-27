import { test } from 'node:test';
import assert from 'node:assert/strict';
import { about, project, jams, club } from '../js/data.js';
import { renderAbout } from '../js/views/about.js';
import { renderProject } from '../js/views/project.js';
import { renderJams } from '../js/views/jams.js';
import { renderJamDetail } from '../js/views/jam-detail.js';
import { renderClub } from '../js/views/club.js';

test('renderAbout includes positioning sentence and tabpanel semantics', () => {
  const html = renderAbout(about);
  assert.match(html, /role="tabpanel"/);
  assert.match(html, /id="panel-about"/);
  assert.ok(html.includes(about.positioning));
});

test('renderProject includes fact strip labels and hard-problem tradeoff', () => {
  const html = renderProject(project);
  for (const label of ['Role', 'Team', 'Duration', 'Unity version', 'Platform', 'Status']) {
    assert.ok(html.includes(label), `missing fact label: ${label}`);
  }
  for (const hp of project.hardProblems) assert.ok(html.includes(hp.tradeoff));
  assert.ok(html.includes('Performance'));
  assert.ok(html.includes('What I&#39;d change') || html.includes(project.retro));
});

test('renderJams renders all jam cards', () => {
  const html = renderJams(jams);
  const count = (html.match(/class="jam-card(?=["\s])/g) || []).length;
  assert.equal(count, jams.length);
});

test('renderClub renders scale figures and all events with alt text', () => {
  const html = renderClub(club);
  assert.ok(html.includes(String(club.stats.events)) || html.includes(club.stats.events));
  const eventCount = (html.match(/class="club-event(?=["\s])/g) || []).length;
  assert.equal(eventCount, club.events.length);
  for (const ev of club.events) {
    for (const photo of ev.photos) {
      assert.ok(html.includes(photo.alt));
    }
  }
});

test('renderJams links every card to its detail route', () => {
  const html = renderJams(jams);
  for (const jam of jams) {
    assert.ok(html.includes(`href="#/jams/${jam.slug}"`), `missing link for ${jam.slug}`);
  }
  // The inline accordion moved to the detail page.
  assert.ok(!html.includes('item-expandable'));
});

test('renderJamDetail renders the full breakdown', () => {
  const jam = jams[0];
  const html = renderJamDetail(jam);
  assert.match(html, /role="tabpanel"/);
  assert.match(html, /id="panel-jams"/);
  assert.ok(html.includes(jam.name));
  assert.ok(html.includes(jam.details.overview));
  assert.ok(html.includes(jam.details.mechanics));
  for (const tech of jam.details.techHighlights) assert.ok(html.includes(tech));
  assert.ok(html.includes('href="#/jams"'), 'needs a way back to the index');
  assert.ok(html.includes(jam.itch));
});
