import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createLightboxState } from '../js/lightbox.js';

const photos = [
  [{ src: 'a1.jpg', alt: 'a1' }, { src: 'a2.jpg', alt: 'a2' }],
  [{ src: 'b1.jpg', alt: 'b1' }, { src: 'b2.jpg', alt: 'b2' }, { src: 'b3.jpg', alt: 'b3' }]
];

test('starts closed', () => {
  const lb = createLightboxState(photos);
  assert.equal(lb.getState().isOpen, false);
});

test('open sets event/photo index and isOpen', () => {
  const lb = createLightboxState(photos);
  lb.open(1, 2);
  assert.deepEqual(lb.getState(), { isOpen: true, eventIndex: 1, photoIndex: 2, photo: { src: 'b3.jpg', alt: 'b3' } });
});

test('next wraps within the current event only', () => {
  const lb = createLightboxState(photos);
  lb.open(0, 1);
  lb.next();
  assert.equal(lb.getState().photoIndex, 0);
});

test('prev wraps within the current event only', () => {
  const lb = createLightboxState(photos);
  lb.open(1, 0);
  lb.prev();
  assert.equal(lb.getState().photoIndex, 2);
});

test('close resets isOpen but keeps last position', () => {
  const lb = createLightboxState(photos);
  lb.open(0, 0);
  lb.close();
  assert.equal(lb.getState().isOpen, false);
});
