export const about = {
  name: 'Ömer Keskin',
  headline: 'GameObject: Ömer Keskin',
  subhead: '21-year-old Unity Game Developer & CTIS Student from Ankara, Turkey 🇹🇷',
  positioning: 'Unity Game Developer specializing in C#, modular gameplay systems architecture. Vice President of Bilkent Game Dev Club (BOA).',
  bio: [
    'Unity Game Developer and CTIS student at Bilkent University. Builds performant games with zero-allocation C# systems and arcade idle mechanics.',
    'Former engineering intern at Gamelab Istanbul, current Vice President of Bilkent Game Development & Animation Club (BOA), organizing game jams and studio dev talks.'
  ],
  work: [
    {
      company: 'Gamelab Istanbul',
      role: 'Game Engineering & Multiplayer Intern',
      dates: 'Summer 2026',
      location: 'Istanbul, Turkey',
      logo: 'assets/about/gamelabistanbuljpg.jpg',
      points: [
        'Built Game Martyr\'s multiplayer stack (GlistEngine, C++20): 20 Hz fixed-tick state replication, hit registration, real-time animation sync.',
        'Designed a cloud Master Server for matchmaking: 6-character room codes, P2P UDP NAT hole punching, SQLite user database.',
        'Shipped a headless dedicated server binary with full CLI config, and encapsulated networking into a standalone plugin (gipMultiplayer) with zero socket leaks into game code.',
        'Hardened auth with PBKDF2-HMAC-SHA256 (600,000 iterations, per-user salts) and hashed session tokens, so a database leak alone can\'t become account takeover.'
      ],
      tags: ['C++20', 'Multiplayer Networking', 'GlistEngine', 'Cryptographic Security']
    }
  ],
  education: [
    {
      school: 'İhsan Doğramacı Bilkent University',
      degree: 'B.Sc. in Computer Technology & Information Systems (CTIS)',
      dates: '2024 – Present',
      location: 'Ankara, Turkey',
      logo: 'assets/about/bilkent.jpg',
      detail: 'Coursework: OOP (C/Java), Data Structures & Algorithms, Mobile Computing, Database Systems.',
      gpa: 'GPA: 3.16 / 4.00',
      tags: ['C', 'Java', 'Data Structures', 'OOP']
    }
  ],
  // Club and student-organisation roles, shown as their own timeline
  // under Education. An entry may list several roles at one organisation —
  // they stack under a single logo, LinkedIn-style.
  clubActivities: [
    {
      school: 'Bilkent Game Development & Animation Club (BOA)',
      logo: 'assets/club/logo.png',
      location: 'Ankara, Turkey',
      roles: [
        {
          title: 'Vice President',
          dates: 'Jun 2026 – Present',
          points: [
            'Directing Bilkent\'s 600+ member game dev community: events, sponsorship, partnerships.',
            'Directed BOA Jam 5 & 6, landing sponsorships from Game Design Academia, TaleWorlds (main sponsor) and Bifa, and organizing 7 industry mentors for Jam 6.',
            'Hosting technical Dev Talks with Panteon, SciPlay and Loop Games.',
            'Organizing a club visit to the TaleWorlds office.'
          ]
        },
        {
          title: 'Board Member',
          dates: 'Oct 2025 – Present',
          points: [
            'Supported club leadership and event organization before becoming Vice President.'
          ]
        }
      ],
      tags: ['Leadership', 'Game Jams', 'Studio Talks']
    },
    {
      school: 'IEEE Bilkent Student Branch',
      logo: 'assets/about/ieee.png',
      location: 'Ankara, Turkey',
      roles: [
        {
          title: 'Organization Team Member',
          dates: 'Jan 2026 – May 2026',
          points: [
            'Coordinated technical workshops and student engineering outreach.'
          ]
        }
      ],
      tags: ['Organization', 'Technical Workshops']
    }
  ],
  timeline: [
    { dates: 'Summer 2026', org: 'Gamelab Istanbul', role: 'Game Engineering & Multiplayer Intern', detail: 'Engineered multiplayer infrastructure for a 3D FPS on GlistEngine (C++20): tick-rate replication, Master Server matchmaking, NAT hole punching, PBKDF2-hashed SQLite auth.' },
    { dates: 'Fall 2025 – Present', org: 'Bilkent Game Dev Club (BOA)', role: 'Vice President & Board Member', detail: 'Directing university game dev operations, leading BOA Jam 5 & 6, hosting Dev Talks with Panteon, SciPlay, and Loop Games.' },
    { dates: '2024 – Present', org: 'İhsan Doğramacı Bilkent University', role: 'B.Sc. Computer Technology & Information Systems (CTIS)', detail: 'Coursework: Object-Oriented Programming (C/Java), data structures, algorithms, mobile computing, software engineering.' },
    { dates: 'Jan 2026 – May 2026', org: 'IEEE Bilkent', role: 'Organization Team Member', detail: 'Event logistics, student outreach, and technical workshop coordination.' }
  ],
  skills: {
    engines: ['Unity Engine (2D & 3D)', 'Unity Mobile Pipeline', 'ScriptableObject Architecture'],
    languages: ['C# (Primary)', 'C++', 'C', 'Java (OOP)', 'SQL'],
    tools: ['Git / GitHub', 'Unity Profiler', 'Unity VCS', 'Visual Studio / Rider'],
    areas: ['Mobile Game Development', 'Zero-Allocation Object Pooling', 'Mobile Optimization (60 FPS)']
  },
  // Fanned photo stack in the hero. Newest last — it renders on top.
  photoStack: [
    { src: 'assets/about/photo-1.png', alt: 'Ömer Keskin', year: '2025' },
    { src: 'assets/about/photo-2.png', alt: 'Ömer Keskin', year: '2026' }
  ],
  // Short teaser that points into the deeper tabs.
  cta: {
    lead: 'What I\'ve been building.',
    label: 'See the project',
    href: '#/project'
  },
  // "featured projects" block on the home page — each links to a full tab.
  featured: [
    {
      title: 'Sprout King: Idle Arcade',
      badge: 'Available now!',
      play: { label: 'Play on CrazyGames', href: 'https://www.crazygames.com/game/sprout-king-kmm' },
      blurb: 'A mobile base-builder: chop, craft, and hire villagers to automate a hex island, locked to 60 FPS on a budget Android phone.',
      href: '#/project'
    },
    {
      title: 'Game Jam Entries',
      blurb: 'Four jam builds, four different genres. Fast scoping, tight loops, shipped every time.',
      href: '#/jams'
    },
    {
      title: 'Bilkent Game Dev Club (BOA)',
      blurb: 'Leading a 600+ member community: BOA game jams and studio Dev Talks with Panteon, SciPlay and Loop Games.',
      href: '#/club'
    }
  ]
};

export const project = {
  title: 'Sprout King: Idle Arcade',
  hook: 'A mobile base-builder: chop, craft, and hire villagers to automate a hex island across 22 regions and 89 quests, holding a locked 60 FPS on two budget test phones.',
  banner: 'assets/project/banner.png',
  video: { src: 'assets/project/games_beginning.mp4', poster: 'assets/project/banner.png' },
  facts: {
    role: 'Solo Developer — design, code and release, end to end (AI-assisted art and music)',
    team: 'Solo',
    duration: '~12 weeks · Summer 2026',
    unityVersion: 'Unity 6000.3.7f1 (URP 17.3.0, IL2CPP, Cinemachine)',
    platform: 'Android / iOS / WebGL',
    status: 'Live on CrazyGames (Full Launch)'
  },
  systems: [
    'Regions stay off until unlocked: only 150 of 3,252 renderers active at once, ~53k live triangles (not the full 454k). 68 particle systems total, only nearby ones play.',
    '23 distinct materials across every active renderer, kept low on purpose so the SRP Batcher can merge draw calls.',
    'SRP Batcher on, dynamic batching off, MSAA/HDR/main-light shadows off. Lands around 101 SetPass calls and 143 batches on a Galaxy A23.',
    'No real shadows: characters and buildings use a custom fake-blob shader instead of shadow casters.',
    'Post-processing deleted, not tuned: the Uber pass cost more than its two operators because it forced the frame out of tile memory on mobile.',
    'WebGL build trimmed to 18 MB (Brotli compression, IL2CPP stripping); event-driven core keeps quests, analytics, and audio decoupled as listeners on shared gameplay events.'
  ],
  frameDebugger: {
    before: {
      src: 'assets/project/frame_debugger.png',
      caption: 'Before — 114 draw events. Outline shader broke SRP batching, fake shadows drew one call each, UI textures fragmented across passes.'
    },
    after: {
      src: 'assets/project/frame_debugger_after.png',
      caption: 'After — 45 draw events. Outline pass retagged, shadows moved to GPU instancing, UI sprites atlased. Batching restored across the board.'
    }
  },
  hardProblems: [
    {
      title: 'Pooled drops breaking',
      broke: 'Reused drops came back half-sized, frozen, or stuck in the ground.',
      tried: 'The pooler reused objects but never reset scale, kinematic state, or colliders.',
      shipped: 'Captured each prefab\'s authored state at startup, restored it on every spawn, and guarded against double-enqueueing.',
      tradeoff: 'Every spawn costs three extra resets now. Worth it for correctness.'
    },
    {
      title: 'Trees shaking in lock-step',
      broke: 'A whole forest shook in perfect unison when hit.',
      tried: 'The damage-shake shader read one shared phase value for every instance.',
      shipped: 'Gave each object its own phase, derived from its world position. Also added the missing shadow-caster passes — the shader cast no shadow at all.',
      tradeoff: 'One extra vector read per vertex. Cheap, compared to how fake the synced shake looked.'
    },
    {
      title: 'Villagers stuck at region borders',
      broke: 'Each hex region bakes its own NavMesh surface. Villagers could not walk from one region into the next.',
      tried: 'A single baked NavMesh does not work here, regions switch on and off as you unlock them.',
      shipped: 'Added a NavMeshLink at every region border, bridging the two surfaces like a road. Villagers cross it like normal ground.',
      tradeoff: '22 regions means dozens of links placed by hand. Cheap at runtime, hard to do manually.'
    }
  ],
  retro: 'My hex tile models don\'t line up perfectly, so NavMesh baking leaves gaps and odd detours. Next time: learn NavMesh area costs and carving, and build roads that actually guide the pathing.',
  releaseOps: [
    'Rewarded-video ads via Yodo1 MAS, wired behind a provider interface so mobile (live ads) and web (instant rewards) swap without touching game code.',
    'GameAnalytics across economy flow, progression funnels, session length, and ad outcomes — fail-safe, so analytics faults can\'t affect gameplay.',
    'GDPR consent, Apple App Tracking Transparency, and COPPA configuration handled ahead of store submission.'
  ],
  // Which parts of the game used AI tools, and which were built by hand.
  aiUsage: {
    ai: [
      { area: '3D models', detail: 'Most base meshes were AI-generated, then cleaned up and edited by hand.' },
      { area: '3D texturing', detail: 'Textures were made with AI-assisted tools.' },
      { area: 'Music', detail: 'Music generated with Suno.' }
    ],
    handmade: [
      'All C# gameplay code and systems architecture: quests, worker AI, crafting, save system, event-driven core.',
      'Custom fake-blob shadow shader.',
      'Performance work: batching, region culling, build size.',
      'Ads, analytics and store release setup.'
    ]
  },
  // Small looping clips next to the banner, each demonstrating one system from the Performance list above.
  sideClips: [
    { src: 'assets/project/axe_craft.mp4', poster: 'assets/project/banner.png', caption: 'Craft tools that villagers then use to automate the harvest.' },
    { src: 'assets/project/castle_destroy.mp4', poster: 'assets/project/banner.png', caption: 'Beat a castle to unlock the next region.' },
    { src: 'assets/project/region_unlock.mp4', poster: 'assets/project/banner.png', caption: 'Unlocking a region plays its own VFX burst, one of 68 particle systems in the scene.' }
  ],
  gallery: [
    { src: 'assets/project/phone_screenshot.jpg', alt: 'PerfHUD on-device overlay', caption: 'On-device frame-time overlay: median, hitches, GC.' },
    { src: 'assets/project/stats.png', alt: 'In-editor graphics stats overlay', caption: 'Batches, triangles, SetPass calls at a glance.' }
  ],
  // Store availability. Only entries with an href are rendered as links.
  stores: [
    { name: 'CrazyGames', icon: 'assets/project/stores/crazygames.png', href: 'https://www.crazygames.com/game/sprout-king-kmm', status: 'live', statusLabel: 'Live now' },
    { name: 'App Store', icon: 'assets/project/stores/app-store.png', status: 'review', statusLabel: 'In review' },
    { name: 'Google Play', icon: 'assets/project/stores/google-play.png', status: 'testing', statusLabel: 'Closed testing' }
  ],
  tags: ['Unity 6000 / URP', 'C# Systems Architecture', 'Solo Dev', 'Mobile Performance', 'Monetization & Analytics']
};

export const jams = [
  {
    id: 'jam-1',
    slug: 'cubinary',
    name: 'Cubinary',
    event: 'APPS GameJam',
    duration: '48h',
    theme: 'Spatial Puzzle Progression',
    team: 'Jam Project',
    role: 'Unity Developer & Designer',
    blurb: 'A portrait puzzle game for the APPS GameJam. Destroy cubes in the right shapes to match recipes.',
    video: { poster: 'assets/jams/jam-1-poster.png' },
    itch: 'https://omerkeskin.itch.io/cubinary',
    tags: ['Unity', 'C#', 'Puzzle Mechanics'],
    details: {
      overview: 'A spatial puzzle game built from scratch in 48 hours, designed for one-handed portrait play.',
      mechanics: 'Destroy cubes in the right shapes to match recipes inside 3x3 grids.',
      techHighlights: [
        'Custom 2D grid solver for real-time recipe detection',
        'Zero-allocation piece movement and particle feedback',
        'Portrait layout built for one-handed mobile play'
      ]
    }
  },
  {
    id: 'jam-2',
    slug: 'leech-of-joy',
    name: 'Leech of Joy',
    event: 'BOA Jam 4',
    duration: '48h',
    theme: 'Action / Comedy Side Scroller',
    team: '5 Developers',
    role: 'Unity Developer & Programmer',
    blurb: 'A 2D side-scroller for BOA Jam 4. Fast combat, a small inventory, some dialogue, all in pixel art.',
    video: { poster: 'assets/jams/jam-4-poster.png' },
    itch: 'https://onat5896.itch.io/leech-of-joy',
    tags: ['Unity', 'C#', '2D Action'],
    details: {
      overview: 'A fast-paced 2D action side-scroller with combat, item upgrades, and dialogue.',
      mechanics: 'Latch onto enemies to drain life, unlock item upgrades, and fight through dungeon stages.',
      techHighlights: [
        'Modular melee/ranged combat state machine with frame-perfect hitboxes',
        'ScriptableObject-based inventory and equipment system',
        'Custom dialogue sequencer with branching logic'
      ]
    }
  },
  {
    id: 'jam-3',
    slug: 'keyboard-magic',
    name: 'Keyboard Magic',
    event: 'UNOG Jam',
    duration: '48h',
    theme: 'Typing & Input Velocity Mechanics',
    team: '3 Developers',
    role: 'Gameplay Programmer',
    blurb: 'A typing game for UNOG Jam. Type words fast to cast spells before enemies get close.',
    video: { poster: 'assets/jams/jam-2-poster.png' },
    itch: 'https://omerkeskin.itch.io/keyboardmagic',
    tags: ['Unity', 'C#', 'Input Mechanics'],
    details: {
      overview: 'An arcade typing game that turns keystrokes into spell attacks.',
      mechanics: 'Type falling words before monsters reach you, chaining combos for a higher score.',
      techHighlights: [
        'Keystroke-to-spell matching with async text parsing',
        'Difficulty scales with the player\'s typing speed',
        'Instant visual and audio feedback per keystroke'
      ]
    }
  },
  {
    id: 'jam-4',
    slug: 'assylum',
    name: 'Assylum',
    event: 'BOA Jam 5',
    duration: '48h',
    theme: 'Atmospheric 3D & Environmental Storytelling',
    team: 'Developer & 3D Level Designer',
    role: 'Unity Programmer & Level Designer',
    blurb: 'A 3D atmospheric game for BOA Jam 5. Mood lighting and a quiet story.',
    video: { poster: 'assets/jams/jam-3-poster.png' },
    itch: 'https://omerkeskin.itch.io/assylum',
    tags: ['Unity', 'C#', 'Atmospheric'],
    details: {
      overview: 'A 3D exploration game built around mood lighting, sound, and quiet environmental storytelling.',
      mechanics: 'Walk through eerie corridors, solve physics puzzles, and piece the story together from the environment.',
      techHighlights: [
        'Baked lightmaps tuned to hold a steady 60 FPS',
        'Physics-based interaction and sound occlusion',
        'Modular level kit'
      ]
    }
  }
];

export const club = {
  role: {
    title: 'Vice President & Board Member, Bilkent Game Dev Club (BOA)',
    term: 'Fall 2025 – Present',
    blurb: 'Directing Bilkent\'s game dev community: game jams, studio partnerships, technical seminars, studio visits.'
  },
  social: {
    instagram: 'https://instagram.com/bilkentoyun',
    linkedin: 'https://www.linkedin.com/company/bilkent-game-development-and-animation-society-boa/'
  },
  stats: {
    events: '8+',
    attendees: '450+',
    companies: '10+ studios',
    community: '600+ members',
    sponsorship: '10+ Game Studios Reached'
  },
  logos: [
    { name: 'BOA - Bilkent Game Development Club', src: 'assets/club/logo.png', alt: 'BOA Logo' }
  ],
  events: [
    {
      id: 'ev-1',
      title: 'BOA Jam 5',
      date: 'Spring 2026',
      description: 'Organized Bilkent\'s 48-hour game jam: venue logistics, participant mentoring, hardware setup, final showcase.',
      role: 'Lead Organizer',
      platform: null,
      tags: ['Game Jam', 'Mentorship'],
      photos: [
        { src: 'assets/club/boa-jam-5/IMG_6440.jpg', alt: 'BOA Jam 5 game jam venue and teams' },
        { src: 'assets/club/boa-jam-5/IMG_6443.jpg', alt: 'Participants building games during BOA Jam 5' },
        { src: 'assets/club/boa-jam-5/IMG_6464.jpg', alt: 'BOA Jam 5 showcase and closing ceremony' }
      ],
      link: null,
      details: [
        'Mentored 50+ participants across 12 teams through ideation, Unity architecture, and project polish phases.',
        'Managed on-campus venue logistics, hardware setup, and network infrastructure for the 48-hour game jam.',
        'Organized final project showcase, judging panel deliberations, and closing awards ceremony.',
        'Landed a sponsorship with Game Design Academia.'
      ]
    },
    {
      id: 'ev-2',
      title: 'BOA Dev Talks #1: Panteon Games Keynote',
      date: 'Spring 2026',
      description: 'Launched the BOA Dev Talks series with senior developers and engineering leads from Panteon Games on mobile production pipelines.',
      role: 'Host and Speaker Liaison',
      platform: 'linkedin',
      tags: ['Dev Talks', 'Panteon', 'Mobile Pipelines'],
      photos: [
        { src: 'assets/club/dev-talks-1-panteon/1775677263495.jpg', alt: 'Panteon Games Dev Talk speaker presenting' },
        { src: 'assets/club/dev-talks-1-panteon/1775677263503.jpg', alt: 'Dev talk auditorium and audience discussion' },
        { src: 'assets/club/dev-talks-1-panteon/1775677278358.jpg', alt: 'Audience discussion with Panteon developers' }
      ],
      link: 'https://www.linkedin.com/posts/bilkent-game-development-and-animation-society-boa_bilkentboa-boadevtalks-gamedev-ugcPost-7447730317089710081-XDq8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADqwzFYB1fgCSvHy3UNgUOT5ICSBmgAs80c',
      details: [
        'Hosted lead game developers and engineering directors from Panteon Games on campus.',
        'Explored production pipelines, hyper-casual to hybrid-casual design transitions, and Unity performance profiling.',
        'Moderated student Q&A on industry engineering culture and recruitment.'
      ]
    },
    {
      id: 'ev-3',
      title: 'BOA Dev Talks #2: SciPlay Game Art and Tech Seminar',
      date: 'Spring 2026',
      description: 'Organized a technical seminar with SciPlay developers on live-ops infrastructure, art pipelines, and scalable mobile systems.',
      role: 'Moderator and Organizer',
      platform: 'linkedin',
      tags: ['Dev Talks', 'SciPlay', 'Live-Ops'],
      photos: [
        { src: 'assets/club/dev-talks-2-sciplay/1777574321250.jpg', alt: 'SciPlay speaker presenting at BOA Dev Talks' },
        { src: 'assets/club/dev-talks-2-sciplay/1777574324694.jpg', alt: 'Student attendees at SciPlay seminar' },
        { src: 'assets/club/dev-talks-2-sciplay/1777574325605.jpg', alt: 'Group discussion with SciPlay guests' },
        { src: 'assets/club/dev-talks-2-sciplay/1777574328988.jpg', alt: 'SciPlay technical seminar audience and Q and A session' }
      ],
      link: 'https://www.linkedin.com/posts/bilkent-game-development-and-animation-society-boa_bilkentboa-boadevtalks-gameart-ugcPost-7455687125464850432-mtHc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADqwzFYB1fgCSvHy3UNgUOT5ICSBmgAs80c',
      details: [
        'Hosted senior technical artists and software engineers from SciPlay.',
        'Analyzed mobile live-ops infrastructure, game economy balance, and 3D asset optimization pipelines.',
        'Facilitated 1-on-1 student portfolio reviews and networking with industry guests.'
      ]
    },
    {
      id: 'ev-4',
      title: 'Loop Games HQ Visit',
      date: 'Spring 2026',
      description: 'Coordinated an on-site visit to Loop Games headquarters in Ankara, connecting club members with studio founders, leads, and technical artists.',
      role: 'Visit Coordinator',
      platform: 'linkedin',
      tags: ['Studio Visit', 'Loop Games', 'HQ Tour'],
      photos: [
        { src: 'assets/club/loop-games/1778086123965.jpg', alt: 'Loop Games office tour and presentation' },
        { src: 'assets/club/loop-games/1778086124676.jpg', alt: 'Group photo at Loop Games headquarters' }
      ],
      link: 'https://www.linkedin.com/posts/keskin-omer_loopgames-gamedevelopment-gamedev-activity-7457833751645978625-SOmG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADqwzFYB1fgCSvHy3UNgUOT5ICSBmgAs80c',
      details: [
        'Visited Loop Games HQ in Ankara.',
        'Discussed architectural scaling for top-grossing mobile titles like Match 3D and Match Factory.',
        'Connected students with technical leads, gameplay programmers, and art directors.'
      ]
    },
    {
      id: 'ev-5',
      title: 'BOA Jam 6',
      date: 'Fall 2026',
      description: 'Directed Bilkent\'s 48-hour game jam for 50+ participants: sponsorships, industry mentors, venue logistics and community coordination.',
      role: 'Director and Lead Organizer',
      platform: 'instagram',
      tags: ['Game Jam', 'Sponsorship', 'Mentorship'],
      photos: [
        { src: 'assets/club/boa-jam-6/closing.jpg', alt: 'BOA Jam 6 participants and mentors in the closing group photo' },
        { src: 'assets/club/boa-jam-6/in-jam.jpg', alt: 'A BOA Jam 6 team presenting their game to the room' },
        { src: 'assets/club/boa-jam-6/mentors.jpg', alt: 'BOA Jam 6 mentors and organizers' }
      ],
      link: 'https://instagram.com/bilkentoyun',
      details: [
        'Owned sponsorships and mentor recruitment for the jam.',
        'Ran the TaleWorlds (main sponsor) and Bifa sponsorships end to end.',
        'Organized 7 industry mentors and a jury panel: 4 from TaleWorlds, Utku Çelik, Pelin Su Pişkin and [Barış Erdem](https://www.linkedin.com/in/bariserdem/).',
        'Hosted 50+ student developers over 48 hours.'
      ]
    },
    {
      id: 'ev-6',
      title: 'TaleWorlds Studio Visit',
      date: 'Spring 2027',
      description: 'Organizing an on-site visit to TaleWorlds, connecting club members with the studio behind Mount & Blade.',
      role: 'Visit Coordinator',
      platform: null,
      tags: ['Studio Visit', 'TaleWorlds', 'Upcoming'],
      photos: [
        { src: 'assets/club/logo.png', alt: 'BOA logo' }
      ],
      link: null,
      details: [
        'Organizing an on-site visit to TaleWorlds, following their sponsorship of BOA Jam 6.',
        'Coordinating logistics with the studio for a club member tour and technical Q&A.'
      ]
    }
  ]
};

