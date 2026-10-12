export const about = {
  name: 'Ömer Keskin',
  headline: 'GameObject: Ömer Keskin',
  subhead: '21-year-old Unity Game Developer & CTIS Student from Ankara, Turkey 🇹🇷',
  positioning: 'Unity Game Developer specializing in C#, modular gameplay systems architecture. Vice President of Bilkent Game Dev Club (BOA).',
  bio: [
    'Unity Game Developer and CTIS student at Bilkent University. Builds performant games with zero-allocation C# systems and arcade idle mechanics.',
    'Former engineering intern at Gamelab Istanbul, Vice President of Bilkent Game Dev Club (BOA), and Business Development & Event Specialist at GGOG, organizing game jams, studio dev talks, and industry events.'
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
        'Shipped a headless dedicated server with CLI config, encapsulating networking into a plugin (gipMultiplayer) with zero socket leaks.',
        'Hardened auth with PBKDF2-HMAC-SHA256 and hashed session tokens to prevent account takeovers from database leaks.'
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
  // under Education. An entry may list several roles at one organisation,
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
            'Directed BOA Jam 5 & 6, securing sponsorships from TaleWorlds, Bifa, and Game Design Academia while coordinating 7 industry mentors.',
            'Hosting technical Dev Talks with Panteon and SciPlay.',
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
      school: 'GGOG (Genç Girişimciler ve Oyun Geliştiricileri Derneği)',
      logo: 'assets/about/ggog.svg',
      location: 'Turkey',
      roles: [
        {
          title: 'Business Development & Event Specialist',
          dates: '2026 – Present',
          points: [
            'Leading studio relations, sponsor outreach, and end-to-end execution for gaming events and speaker programs.'
          ]
        }
      ],
      tags: ['Business Development', 'Events', 'Sponsorship']
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
            'Coordinated technical workshops and student engineering outreach.',
            'Independently organized a visit to Loop Games, including a meeting with the studio\'s CTO.'
          ]
        }
      ],
      tags: ['Organization', 'Technical Workshops']
    }
  ],
  timeline: [
    { dates: 'Summer 2026', org: 'Gamelab Istanbul', role: 'Game Engineering & Multiplayer Intern', detail: 'Engineered multiplayer infrastructure for a 3D FPS on GlistEngine (C++20): tick-rate replication, Master Server matchmaking, NAT hole punching, PBKDF2-hashed SQLite auth.' },
    { dates: 'Fall 2025 – Present', org: 'Bilkent Game Dev Club (BOA)', role: 'Vice President & Board Member', detail: 'Directing university game dev operations, leading BOA Jam 5 & 6, hosting Dev Talks with Panteon and SciPlay.' },
    { dates: '2026 – Present', org: 'GGOG', role: 'Business Development & Event Specialist', detail: 'Studio relations, sponsor outreach, and end-to-end execution for gaming events and speaker programs.' },
    { dates: '2024 – Present', org: 'İhsan Doğramacı Bilkent University', role: 'B.Sc. Computer Technology & Information Systems (CTIS)', detail: 'Coursework: Object-Oriented Programming (C/Java), data structures, algorithms, mobile computing, software engineering.' },
    { dates: 'Jan 2026 – May 2026', org: 'IEEE Bilkent', role: 'Organization Team Member', detail: 'Event logistics, student outreach, and technical workshop coordination. Organized a visit to Loop Games, including a meeting with the studio\'s CTO.' }
  ],
  skills: {
    engines: ['Unity Engine (2D & 3D)', 'Unity Mobile Pipeline', 'ScriptableObject Architecture'],
    languages: ['C# (Primary)', 'C++', 'C', 'Java (OOP)', 'SQL'],
    tools: ['Git / GitHub', 'Unity Profiler', 'Unity VCS', 'Visual Studio / Rider'],
    areas: ['Mobile Game Development', 'Zero-Allocation Object Pooling', 'Mobile Optimization (60 FPS)']
  },
  // Fanned photo stack in the hero. Newest last, rendering on top.
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
  // Featured projects block on the home page, linking to full tabs.
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
      blurb: 'Leading a 600+ member community: BOA game jams and studio Dev Talks with Panteon and SciPlay.',
      href: '#/club'
    }
  ]
};

export const project = {
  title: 'Sprout King: Idle Arcade',
  hook: 'A mobile base-builder: chop, craft, and hire villagers to automate a hex island across 22 regions, locked at 60 FPS on budget devices.',
  banner: 'assets/project/banner.png',
  video: { src: 'assets/project/games_beginning.mp4', poster: 'assets/project/banner.png' },
  facts: {
    role: 'Solo Developer: design, code, and release end to end (AI-assisted art and music)',
    team: 'Solo',
    duration: '~12 weeks · Summer 2026',
    unityVersion: 'Unity 6000.3.7f1 (URP 17.3.0, IL2CPP, Cinemachine)',
    platform: 'Android / iOS / WebGL',
    status: 'Live on CrazyGames (Full Launch)'
  },
  systems: [
    'Regions stay off until unlocked: only 150 of 3,252 renderers active at once (~53k live triangles instead of 454k), with only nearby particle systems playing.',
    '23 distinct materials across active renderers, kept low so the SRP Batcher merges draw calls efficiently.',
    'SRP Batcher enabled with MSAA/HDR disabled, achieving ~101 SetPass calls and 143 batches on a Galaxy A23.',
    'No real shadows: characters and buildings use a custom fake-blob shader instead of expensive shadow casters.',
    'Post-processing removed rather than tuned: the Uber pass cost too much by forcing frames out of mobile tile memory.',
    'WebGL build trimmed to 18 MB via Brotli and IL2CPP stripping. An event-driven architecture keeps quests, analytics, and audio decoupled.'
  ],
  frameDebugger: {
    before: {
      src: 'assets/project/frame_debugger.png',
      caption: 'Before: 114 draw events. Outline shader broke SRP batching, fake shadows took extra calls, and UI textures fragmented passes.'
    },
    after: {
      src: 'assets/project/frame_debugger_after.png',
      caption: 'After: 45 draw events. Retagged outlines, GPU-instanced shadows, and atlased UI sprites to restore batching.'
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
      shipped: 'Gave each object an independent phase from world position, and added missing shadow-caster passes so trees cast shadows.',
      tradeoff: 'One extra vector read per vertex. Cheap compared to synced shaking.'
    },
    {
      title: 'Villagers stuck at region borders',
      broke: 'Each hex region bakes its own NavMesh surface. Villagers could not walk from one region into the next.',
      tried: 'A single baked NavMesh does not work here, regions switch on and off as you unlock them.',
      shipped: 'Added a NavMeshLink at each region border to bridge the surfaces, letting villagers cross seamlessly.',
      tradeoff: 'Dozens of links placed by hand across 22 regions. Cheap at runtime, but manual to configure.'
    }
  ],
  retro: 'Hex tile models did not align cleanly, causing NavMesh baking gaps. Next time: use NavMesh area costs and carving with designated road paths.',
  releaseOps: [
    'Rewarded-video ads via Yodo1 MAS, wired behind a provider interface so mobile and web swap without touching game code.',
    'GameAnalytics across economy flow, funnels, session length, and ad outcomes, built fail-safe so analytics issues never affect gameplay.',
    'GDPR consent, Apple ATT, and COPPA compliance configured prior to store submission.'
  ],
  launchMetrics: {
    title: 'Basic Launch Metrics',
    image: 'assets/project/launch_metrics.png',
    alt: 'CrazyGames developer dashboard showing Sprout King launch metrics and playtime tiers',
    caption: 'CrazyGames launch metrics tiers: Top 20% average playtime (12m 30s) across desktop and mobile.',
    takeaway: 'Marketing was clearly lacking because this was a rushed project and I could not spare time for promotion. However, average playtime reached the top 20% on CrazyGames (12m 30s average, 14m+ on mobile). That is a strong result for this genre and proves that the core arcade idle loop and 60 FPS performance keep players engaged.'
  },
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

