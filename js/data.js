export const about = {
  name: 'Ömer Keskin',
  headline: 'GameObject: Ömer Keskin',
  subhead: '21-year-old Unity Game Developer & CTIS Student from Ankara, Turkey 🇹🇷',
  positioning: 'Unity Game Developer specializing in C#, modular gameplay systems architecture. President of Bilkent Game Dev Club (BOA).',
  bio: [
    'Unity Game Developer and CTIS student at Bilkent University, focused on performant game titles, zero-allocation C# systems architecture, and arcade idle mechanics.',
    'Former engineering intern at Gamelab Istanbul and current President of Bilkent Game Development & Animation Club (BOA), organizing university hackathons and studio dev talks.'
  ],
  work: [
    {
      company: 'Gamelab Istanbul',
      role: 'Game Engineering & Multiplayer Intern',
      dates: 'Summer 2026',
      location: 'Istanbul, Turkey',
      logo: 'assets/about/gamelabistanbuljpg.jpg',
      points: [
        'Built the full multiplayer stack for Game Martyr, a 3D tactical FPS on GlistEngine (C++20): 20 Hz fixed-tick state replication, hit registration, and real-time animation sync across clients.',
        'Designed a cloud Master Server for matchmaking with 6-character room codes and P2P UDP NAT hole punching, backed by a SQLite user database.',
        'Shipped a headless dedicated server binary with full CLI configuration (port, room name, master IP), and encapsulated all networking into a standalone plugin (gipMultiplayer) with zero low-level socket leaks into game code.',
        'Hardened account security with PBKDF2-HMAC-SHA256 password hashing (600,000 iterations, per-user salts) and hashed session tokens, so a database leak alone can\'t be turned into account takeover.'
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
      detail: 'Core coursework in Object-Oriented Programming (C/Java), Data Structures & Algorithms, Mobile Computing, and Database Systems.',
      gpa: 'GPA: 3.04 / 4.00',
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
          title: 'President',
          dates: 'Jun 2026 – Present',
          points: [
            'Directing Bilkent\'s 600+ member game development community across events, sponsorship and partnerships.',
            'Leading BOA Jam 5 & 6 hackathons end to end, from theme and judging to studio sponsorship.',
            'Hosting technical Dev Talks with Panteon, SciPlay and Loop Games.'
          ]
        },
        {
          title: 'Board Member',
          dates: 'Oct 2025 – Present',
          points: [
            'Contributed to club leadership and event organization ahead of taking on the presidency.'
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
          dates: 'Jan 2026 – Present',
          points: [
            'Coordinating technical workshops and student engineering outreach.'
          ]
        }
      ],
      tags: ['Organization', 'Technical Workshops']
    }
  ],
  timeline: [
    { dates: 'Summer 2026', org: 'Gamelab Istanbul', role: 'Game Engineering & Multiplayer Intern', detail: 'Engineered the multiplayer & online infrastructure for a 3D FPS on GlistEngine (C++20): tick-rate state replication, Master Server matchmaking, NAT hole punching, and PBKDF2-hashed SQLite authentication.' },
    { dates: 'Fall 2025 – Present', org: 'Bilkent Game Dev Club (BOA)', role: 'President & Board Member', detail: 'Directing university game dev operations, leading BOA Jam 5 & 6 hackathons, and hosting technical Dev Talks with Panteon, SciPlay, and Loop Games.' },
    { dates: '2024 – Present', org: 'İhsan Doğramacı Bilkent University', role: 'B.Sc. Computer Technology & Information Systems (CTIS)', detail: 'Rigorous academic focus on Object-Oriented Programming (C/Java), data structures, algorithms, mobile computing, and software engineering.' },
    { dates: 'Jan 2026 – Present', org: 'IEEE Bilkent', role: 'Organization Team Member', detail: 'Assisting event logistics, student outreach, and technical workshop coordination.' }
  ],
  skills: {
    engines: ['Unity Engine (2D & 3D)', 'Unity Mobile Pipeline', 'ScriptableObject Architecture'],
    languages: ['C# (Primary)', 'C++', 'C', 'Java (OOP)', 'SQL'],
    tools: ['Git / GitHub', 'Unity Profiler', 'Unity VCS', 'Visual Studio / Rider', 'Modern OpenGL'],
    areas: ['Mobile Game Development', 'Gameplay Systems & Mechanics', 'Zero-Allocation Object Pooling', 'Mobile Optimization (60 FPS)']
  },
  // Fanned photo stack in the hero. Newest last — it renders on top.
  photoStack: [
    { src: 'assets/about/photo-1.png', alt: 'Ömer Keskin', year: '2025' },
    { src: 'assets/about/photo-2.png', alt: 'Ömer Keskin', year: '2026' }
  ],
  // Short teaser that points into the deeper tabs.
  cta: {
    lead: 'Have a look at what I have been building.',
    label: 'See the project',
    href: '#/project'
  },
  // "featured projects" block on the home page — each links to a full tab.
  featured: [
    {
      title: 'Sprout King: Idle Arcade',
      blurb: 'A mobile base-builder where you chop, craft and hire villagers to automate a hex island, holding a locked 60 FPS on a budget Android phone.',
      href: '#/project'
    },
    {
      title: 'Game Jam Entries',
      blurb: 'Four jam builds, four different genres. Fast scoping, tight loops, shipped every time.',
      href: '#/jams'
    },
    {
      title: 'Bilkent Game Dev Club (BOA)',
      blurb: 'Leading a 600+ member community: BOA Jam hackathons and studio Dev Talks with Panteon, SciPlay and Loop Games.',
      href: '#/club'
    }
  ]
};

export const project = {
  title: 'Sprout King: Idle Arcade',
  hook: 'A mobile base-builder where you chop, craft and hire villagers to automate a hex island. You expand it region by region, 21 regions and 88 authored quests, holding a locked 60 FPS across two budget test phones.',
  banner: 'assets/project/banner.png',
  video: { src: 'assets/project/games_beginning.mp4', poster: 'assets/project/banner.png' },
  facts: {
    role: 'Solo Developer, owned every part end to end',
    team: 'Solo',
    duration: '~12 weeks · Summer 2026',
    unityVersion: 'Unity 6000.3.7f1 (URP 17.3.0)',
    platform: 'Android / iOS / WebGL',
    status: 'Not Yet Released'
  },
  systems: [
    'Regions stay off until you unlock them. Only 150 of 3,252 renderers are on at once, so the live triangle count is about 53k, not the full 454k. The scene also holds 68 particle systems for VFX, but only the ones near you ever play.',
    '23 distinct materials across every active renderer, kept low on purpose so the SRP Batcher can merge draw calls.',
    'SRP Batcher on, dynamic batching off, MSAA/HDR/main-light shadows off. Lands around 101 SetPass calls and 143 batches on a Galaxy A23.',
    'No real shadows: characters and buildings use a custom fake-blob shader instead of shadow casters.',
    'Post-processing deleted, not tuned: the Uber pass cost more than its two operators because it forced the frame out of tile memory on mobile.'
  ],
  hardProblems: [
    {
      title: 'Pooled drops breaking',
      broke: 'Reused drops came back half-sized, frozen, or stuck in the ground.',
      tried: 'The pooler reused objects but never reset scale, kinematic state, or colliders.',
      shipped: 'Captured each prefab\'s authored state at startup and restored it on every spawn. Added a guard against double-enqueueing the same object.',
      tradeoff: 'Every spawn costs three extra resets now. Worth it for correctness.'
    },
    {
      title: 'Trees shaking in lock-step',
      broke: 'A whole forest shook in perfect unison when hit.',
      tried: 'The damage-shake shader read one shared phase value for every instance.',
      shipped: 'Gave each object its own phase, derived from its world position. Also added the missing shadow-caster passes, since the shader cast no shadow at all.',
      tradeoff: 'One extra vector read per vertex. Cheap, compared to how fake the synced shake looked.'
    },
    {
      title: 'Villagers stuck at region borders',
      broke: 'Each hex region bakes its own NavMesh surface. Villagers could not walk from one region into the next.',
      tried: 'A single baked NavMesh does not work here, regions switch on and off as you unlock them.',
      shipped: 'Added a NavMeshLink at every region border, bridging the two surfaces like a road. Villagers cross it like normal ground.',
      tradeoff: '21 regions means dozens of links placed by hand. Cheap at runtime, hard to do manually.'
    }
  ],
  retro: 'My hex tile models do not line up perfectly, so NavMesh baking leaves gaps and odd detours. Next time I would learn NavMesh area costs and carving properly, and build roads that actually guide the pathing.',
  // Small looping clips next to the banner, each demonstrating one system from the Performance list above.
  sideClips: [
    { src: 'assets/project/axe_craft.mp4', poster: 'assets/project/banner.png', caption: 'Craft tools that villagers then use to automate the harvest.' },
    { src: 'assets/project/castle_destroy.mp4', poster: 'assets/project/banner.png', caption: 'Beat a castle to unlock the next region.' },
    { src: 'assets/project/region_unlock.mp4', poster: 'assets/project/banner.png', caption: 'Unlocking a region plays its own VFX burst, one of 68 particle systems in the scene.' }
  ],
  gallery: [
    { src: 'assets/project/phone_screenshot.jpg', alt: 'PerfHUD on-device overlay', caption: 'On-device frame-time overlay: median, hitches, GC.' },
    { src: 'assets/project/stats.png', alt: 'In-editor graphics stats overlay', caption: 'Batches, triangles, SetPass calls at a glance.' },
    { src: 'assets/project/frame_debugger.png', alt: 'Unity Frame Debugger', caption: 'Frame Debugger: draw calls, event by event.' }
  ],
  links: {
    crazygames: '#',
    googlePlay: '#',
    appStore: '#'
  },
  tags: ['Unity 6000 / URP', 'C# Systems Architecture', 'Solo Dev', 'Mobile Performance']
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
    tags: ['Unity', 'C#', 'Puzzle Mechanics', 'Game Jam'],
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
    event: 'BOA GameJam 4',
    duration: '48h',
    theme: 'Action / Comedy Side Scroller',
    team: '5 Developers',
    role: 'Unity Developer & Programmer',
    blurb: 'A 2D side-scroller for BOA GameJam 4. Fast combat, a small inventory, some dialogue, all in pixel art.',
    video: { poster: 'assets/jams/jam-4-poster.png' },
    itch: 'https://onat5896.itch.io/leech-of-joy',
    tags: ['Unity', 'C#', '2D Action', 'Game Jam'],
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
    tags: ['Unity', 'C#', 'Input Mechanics', 'Game Jam'],
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
    tags: ['Unity', 'C#', 'Atmospheric', 'Game Jam'],
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
    title: 'President & Board Member, Bilkent Game Dev Club (BOA)',
    term: 'Fall 2025 – Present',
    blurb: 'Directing overall operations for Bilkent University\'s premier game development community. Leading hackathons, establishing game studio partnerships, and coordinating technical seminars and studio visits.'
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
      title: 'BOA Jam 5: Flagship University Hackathon',
      date: 'Spring 2026',
      description: 'Organized Bilkent\'s premier game development hackathon, managing venue logistics, participant mentoring, hardware setups, and final project showcases.',
      role: 'Lead Organizer',
      platform: null,
      tags: ['Game Jam', 'Hackathon', 'Mentorship'],
      photos: [
        { src: 'assets/club/boa-jam-5/IMG_6440.jpg', alt: 'BOA Jam 5 hackathon venue and teams' },
        { src: 'assets/club/boa-jam-5/IMG_6443.jpg', alt: 'Participants building games during BOA Jam 5' },
        { src: 'assets/club/boa-jam-5/IMG_6464.jpg', alt: 'BOA Jam 5 showcase and closing ceremony' }
      ],
      link: null,
      details: [
        'Mentored 50+ participants across 12 teams through ideation, Unity architecture, and project polish phases.',
        'Managed on-campus lab venue logistics, hardware setups, and network infrastructure over a 48-hour continuous hackathon.',
        'Organized final project showcase, judging panel deliberations, and closing awards ceremony.'
      ]
    },
    {
      id: 'ev-2',
      title: 'BOA Dev Talks #1: Panteon Games Keynote',
      date: 'Spring 2026',
      description: 'Initiated the BOA Dev Talks series featuring senior game developers and engineering leads from Panteon Games, exploring mobile game production pipelines.',
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
        'Moderated interactive student Q&A on industry engineering culture and recruitment.'
      ]
    },
    {
      id: 'ev-3',
      title: 'BOA Dev Talks #2: SciPlay Game Art and Tech Seminar',
      date: 'Spring 2026',
      description: 'Organized the second technical seminar covering mobile live-ops infrastructure, game art pipelines, and scalable mobile systems with SciPlay developers.',
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
        'Organized seminar with senior technical artists and software engineers from SciPlay.',
        'Analyzed mobile live-ops infrastructure, game economy balance, and 3D asset optimization pipelines.',
        'Facilitated 1-on-1 student portfolio reviews and networking with industry guests.'
      ]
    },
    {
      id: 'ev-4',
      title: 'Loop Games Studio Headquarters Visit',
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
        'Coordinated an on-site visit to Loop Games headquarters in Ankara.',
        'Discussed architectural scaling for top-grossing mobile titles like Match 3D and Match Factory.',
        'Connected students with technical leads, gameplay programmers, and art directors.'
      ]
    },
    {
      id: 'ev-5',
      title: 'BOA Jam 6 Hackathon Planning and Direction',
      date: 'Fall 2026',
      description: 'Leading sponsorship acquisitions, venue logistics, and community coordination for Bilkent\'s next flagship game development hackathon.',
      role: 'Director and Lead Organizer',
      platform: 'instagram',
      tags: ['Game Jam', 'Hackathon', 'Planning'],
      photos: [
        { src: 'assets/club/banner-06.png', alt: 'BOA Jam 6 upcoming flagship hackathon banner' }
      ],
      link: 'https://instagram.com/bilkentoyun',
      details: [
        'Leading strategy, partner outreach, and venue reservations for Bilkent\'s upcoming major hackathon.',
        'Coordinating game studio mentors and jury panels from leading industry studios.',
        'Targeting 80+ university student game developers across multiple departments.'
      ]
    }
  ]
};

