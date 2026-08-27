import { test } from 'node:test';
import assert from 'node:assert/strict';
import { about, project, jams, club } from '../js/data.js';

test('about has required fields', () => {
  assert.equal(typeof about.positioning, 'string');
  assert.ok(about.bio.length >= 2);
  assert.ok(about.timeline.length >= 1);
  assert.ok(Array.isArray(about.skills.engines));
});

test('project has all case-study sections', () => {
  assert.equal(typeof project.hook, 'string');
  assert.ok(project.systems.length >= 4 && project.systems.length <= 6);
  assert.ok(project.hardProblems.length >= 1);
  for (const hp of project.hardProblems) {
    assert.ok(hp.title && hp.broke && hp.tried && hp.shipped && hp.tradeoff);
  }
  assert.ok(project.gallery.length >= 3 && project.gallery.length <= 5);
  assert.ok(project.tags.length <= 4);
});

test('jams entries are tagged and capped', () => {
  assert.ok(jams.length >= 3);
  for (const jam of jams) {
    assert.ok(jam.tags.length <= 4);
    assert.ok(jam.blurb.length > 0);
  }
});

test('club has five or six events with distinct roles', () => {
  assert.ok(club.events.length >= 5 && club.events.length <= 6);
  for (const ev of club.events) {
    assert.ok(ev.photos.length >= 1 && ev.photos.length <= 4);
    assert.equal(typeof ev.role, 'string');
  }
  assert.ok(club.logos.length >= 1);
});
