import { escapeHtml } from './helpers.js';

const ARROW_DOWN_RIGHT = `<svg class="hero-arrow" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7l10 10"/><path d="M17 7v10H7"/></svg>`;

// Hand-drawn Unity-style icons. Real Editor icons (Transform, Light, GameObject...)
// live packed inside Unity's binary resource bundles and aren't licensed for reuse
// outside the Editor, so these are silhouettes in the same visual language instead.
const ICON_GAMEOBJECT = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12v9M12 12l8-4.5M12 12L4 7.5"/></svg>`;
const ICON_INFO = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16" stroke-linecap="round"/><circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none"/></svg>`;
const ICON_LOCK = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`;
const ICON_KEBAB = `<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg>`;
const ICON_HELP = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.5v.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none"/></svg>`;
const ICON_GEAR = `<img src="assets/about/preset.png" width="13" height="13" alt="" aria-hidden="true">`;
const ICON_SCRIPT = `<svg viewBox="0 0 24 24" width="14" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 13h8M9 17h8"/></svg>`;
const ICON_CAMERA = `<svg viewBox="0 0 24 24" width="15" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><rect x="2" y="7" width="15" height="12" rx="2"/><path d="M17 10l5-3v10l-5-3"/><circle cx="9.5" cy="13" r="3"/></svg>`;
const ICON_PEOPLE = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="7" r="2.5"/><path d="M15 14.2c2.9.6 5 2.9 5 5.8"/></svg>`;
const ICON_GIZMO = `<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><line x1="12" y1="12" x2="12" y2="3" stroke="#4caf50" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="12" x2="20" y2="12" stroke="#e94b4b" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="12" x2="6" y2="18" stroke="#4b7bec" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>`;
const ICON_FOLDER = `<svg viewBox="0 0 24 24" width="15" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"/></svg>`;

function renderPhotoStack(photos, fallbackAlt) {
  if (!photos || photos.length === 0) return '';
  const cards = photos.map(photo => `
        <div class="photo-stack-item">
          <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || fallbackAlt)}" loading="lazy" draggable="false">
          ${photo.year ? `<span class="photo-stack-caption">${escapeHtml(photo.year)}</span>` : ''}
        </div>`).join('');

  return `
      <div class="photo-stack" role="button" tabindex="0" title="Click to cycle photos" aria-label="Photos over the years. Click to cycle photos.">${cards}
      </div>`;
}

export function initPhotoStack() {
  const stack = document.querySelector('.photo-stack');
  if (!stack || stack.dataset.initialized) return;
  stack.dataset.initialized = 'true';

  function cyclePhoto() {
    const items = stack.querySelectorAll('.photo-stack-item');
    if (items.length <= 1) return;

    const topCard = items[items.length - 1];
    if (topCard.classList.contains('is-cycling-out')) return;

    topCard.classList.add('is-cycling-out');
    setTimeout(() => {
      stack.prepend(topCard);
      topCard.classList.remove('is-cycling-out');
    }, 220);
  }

  stack.addEventListener('click', (e) => {
    e.preventDefault();
    cyclePhoto();
  });

  stack.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      cyclePhoto();
    }
  });
}

export function initInspector() {
  document.querySelectorAll('.inspector-component-header').forEach((header) => {
    if (header.dataset.initialized) return;
    header.dataset.initialized = 'true';
    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!expanded));
      header.closest('.inspector-component').classList.toggle('is-collapsed', expanded);
    });
  });

  document.querySelectorAll('.skill-array-header').forEach((header) => {
    if (header.dataset.initialized) return;
    header.dataset.initialized = 'true';
    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!expanded));
      header.closest('.skill-array').classList.toggle('is-collapsed', expanded);
    });
  });
}

// One organisation may hold several roles over time. Normalise both the
// single-role shape and the `roles: [...]` shape into one list so every
// entry renders the same way.
function rolesOf(item) {
  if (Array.isArray(item.roles) && item.roles.length > 0) return item.roles;
  return [{
    title: item.role || item.degree,
    dates: item.dates,
    points: item.points || [item.detail, item.gpa].filter(Boolean)
  }];
}

function renderRole(role) {
  const bullets = role.points || (role.detail ? [role.detail] : []);
  return `
              <div class="role-block">
                <div class="role-header">
                  <span class="role-title">${escapeHtml(role.title)}</span>
                  <time class="role-dates">${escapeHtml(role.dates)}</time>
                </div>
                ${bullets.length > 0 ? `
                <ul class="role-bullets">
                  ${bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
                </ul>` : ''}
              </div>`;
}

function renderTimelineStream(items) {
  return `
    <div class="timeline-box">
      <ul class="timeline-stream">
        ${items.map(item => {
          const org = item.company || item.school;
          return `
          <li class="timeline-item">
            <div class="timeline-avatar">
              <img src="${escapeHtml(item.logo)}" alt="${escapeHtml(org)} logo" loading="lazy">
            </div>
            <div class="timeline-body">
              <h3 class="org-name">${escapeHtml(org)}</h3>
              ${item.location ? `<p class="org-location">${escapeHtml(item.location)}</p>` : ''}
              <div class="role-list">
                ${rolesOf(item).map(renderRole).join('')}
              </div>
            </div>
          </li>`;
        }).join('')}
      </ul>
    </div>`;
}

function inspectorComponent(id, title, iconSvg, bodyHtml) {
  return `
    <div class="inspector-component">
      <button type="button" class="inspector-component-header" aria-expanded="true" aria-controls="inspector-body-${id}">
        <span class="inspector-component-label">
          <span class="inspector-triangle" aria-hidden="true">&#9662;</span>
          <span class="inspector-component-icon" aria-hidden="true">${iconSvg}</span>
          <span class="inspector-component-title">${escapeHtml(title)}</span>
        </span>
        <span class="inspector-component-actions" aria-hidden="true">${ICON_HELP}${ICON_GEAR}${ICON_KEBAB}</span>
      </button>
      <div id="inspector-body-${id}" class="inspector-component-body">
        ${bodyHtml}
      </div>
    </div>`;
}

export function renderAbout(data) {
  // Unity array-editor style: the whole Skills stack is itself an array,
  // so each category (Unity Engine, Programming Languages...) is a
  // collapsible Element whose label is its own title, not "Element N".
  // Each category then holds its own row-per-item array underneath.
  const skillArrayGroup = (label, items, id) => `
    <div class="skill-group card skill-array">
      <button type="button" class="skill-array-header" aria-expanded="true" aria-controls="skill-elements-${id}">
        <span class="skill-array-drag" aria-hidden="true">&#9776;</span>
        <span class="skill-array-foldout" aria-hidden="true">&#9662;</span>
        <h3>${escapeHtml(label)}</h3>
        <span class="skill-array-size">${items.length}</span>
      </button>
      <div id="skill-elements-${id}" class="skill-array-elements">
        ${items.map((item, i) => `
        <div class="skill-array-element">
          <span class="skill-array-drag" aria-hidden="true">&#9776;</span>
          <span class="skill-array-element-label">Element ${i}</span>
          <span class="skill-array-item-value">${escapeHtml(item)}</span>
        </div>`).join('')}
      </div>
    </div>`;

  const cta = data.cta;
  const featured = data.featured || [];

  const workBody = renderTimelineStream(data.work || []);
  const educationBody = renderTimelineStream(data.education || []);
  const clubBody = (data.clubActivities || []).length > 0 ? renderTimelineStream(data.clubActivities) : '<p class="inspector-empty">No entries.</p>';
  const skillsBody = `
    <div class="skills-grid">
      ${skillArrayGroup('Unity Engine (Core Focus)', data.skills.engines, 'engines')}
      ${skillArrayGroup('Programming Languages', data.skills.languages, 'languages')}
      ${skillArrayGroup('Gameplay & Systems', data.skills.areas, 'areas')}
      ${skillArrayGroup('Tools & Workflows', data.skills.tools, 'tools')}
    </div>`;
  const featuredBody = featured.length > 0 ? `
    <div class="home-projects">
      ${featured.map(item => `
      <a class="home-project-card" href="${escapeHtml(item.href)}">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.blurb)}</p>
      </a>`).join('')}
    </div>` : '<p class="inspector-empty">No entries.</p>';

  return `
    <section id="panel-about" class="view view-about" role="tabpanel" aria-labelledby="tab-about">
      <div class="inspector-panel">
        <div class="inspector-titlebar">
          <span class="inspector-titlebar-left">${ICON_INFO}<span>Inspector</span></span>
          <span class="inspector-titlebar-right" aria-hidden="true">${ICON_LOCK}${ICON_KEBAB}</span>
        </div>

        <div class="inspector-body">
          <div class="inspector-header">
            <div class="inspector-header-row1">
              <span class="inspector-object-icon" aria-hidden="true">${ICON_GAMEOBJECT}</span>
              <input type="checkbox" class="inspector-checkbox" checked disabled aria-hidden="true" tabindex="-1">
              <span class="inspector-name-field">About Me</span>
              <label class="inspector-static-pill">
                <input type="checkbox" checked disabled aria-hidden="true" tabindex="-1">
                Available for Hire
                <span class="inspector-caret" aria-hidden="true">&#9662;</span>
              </label>
            </div>
            <div class="inspector-header-row2">
              <span class="inspector-field"><span class="inspector-field-label">Tag</span><span class="inspector-field-value">Game Developer <span class="inspector-caret" aria-hidden="true">&#9662;</span></span></span>
              <span class="inspector-field"><span class="inspector-field-label">Layer</span><span class="inspector-field-value">Bilkent CTIS <span class="inspector-caret" aria-hidden="true">&#9662;</span></span></span>
            </div>
          </div>

          <div class="inspector-preview">
            <div class="about-hero">
              ${renderPhotoStack(data.photoStack, data.name)}
              <div class="hero-text">
                <h1 class="hero-title">${escapeHtml(data.headline || data.name)}</h1>
                <p class="hero-subhead">${escapeHtml(data.subhead)}</p>
                <p class="positioning">${escapeHtml(data.positioning)}</p>
                ${cta ? `
                <p class="hero-cta">
                  ${escapeHtml(cta.lead)}
                  <a href="${escapeHtml(cta.href)}">${escapeHtml(cta.label)}</a>
                  ${ARROW_DOWN_RIGHT}
                </p>` : ''}
              </div>
            </div>
          </div>

          <div class="inspector-components">
            ${inspectorComponent('work', 'Work', ICON_SCRIPT, workBody)}
            ${inspectorComponent('education', 'Education', ICON_CAMERA, educationBody)}
            ${inspectorComponent('club', 'Club Activities', ICON_PEOPLE, clubBody)}
            ${inspectorComponent('skills', 'Skills', ICON_GIZMO, skillsBody)}
            ${inspectorComponent('featured', 'Featured Projects', ICON_FOLDER, featuredBody)}
          </div>

          <a class="inspector-add-component" href="mailto:omerkeskin980@gmail.com">Add Component</a>
          <p class="inspector-add-component-hint">(Mail me)</p>
        </div>
      </div>
    </section>`;
}
