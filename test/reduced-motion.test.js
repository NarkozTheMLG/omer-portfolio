import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shouldReduceMotion } from '../js/reduced-motion.js';

test('returns true when matchMedia reports reduce', () => {
  assert.equal(shouldReduceMotion({ matches: true }), true);
});

test('returns false when matchMedia reports no-preference', () => {
  assert.equal(shouldReduceMotion({ matches: false }), false);
});
