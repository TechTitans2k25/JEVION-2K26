import { Event } from '../types';

export const events: Event[] = [
  // ============================================================
  // DAY 1 — TECHNICAL EVENTS (October 14, 2026)
  // ============================================================
  {
    id: 'tech-talk',
    slug: 'tech-talk',
    name: 'Tech Talk',
    shortTitle: 'Paper Presentation & Innovation Pitch',
    category: 'technical',
    day: 1,
    date: 'October 14, 2026',
    time: '10:30 AM - 01:00 PM',
    venue: 'IT Seminar Hall (Academic Block, 6th Floor)',
    icon: 'Presentation',
    heroImage: '/hero-bg.png',
    teamSize: '1 - 3 Members',
    fee: '₹200 per participant',
    description: 'Tech Talk is the premier research and paper presentation symposium arena. Present groundbreaking ideas, cutting-edge software paradigms, AI/ML breakthroughs, cyber architectures, IoT solutions, or blockchain innovations in front of an esteemed panel of academicians and industry veterans.',
    rules: [
      'Team size can be 1 to 3 participants.',
      'Paper abstract must be submitted prior to the presentation.',
      'Time limit: 8 minutes for presentation + 2 minutes for Q&A.',
      'Presentations must be in PPT/PDF format.',
      'Plagiarism exceeding 15% will lead to immediate disqualification.',
      'Evaluation will be based on originality, technical depth, delivery, and answers to jury queries.'
    ],
    rounds: [
      {
        name: 'Round 1: Abstract & Concept Screening',
        description: 'Submission evaluation of the presentation paper abstract and novelty.',
        duration: 'Online / Prior'
      },
      {
        name: 'Round 2: Live Stage Presentation',
        description: 'Live 8-minute presentation followed by intense cross-questioning by the panel.',
        duration: '10 Minutes per team'
      }
    ],
    judging: [
      'Innovation & Novelty (25%)',
      'Technical Feasibility & Implementation (30%)',
      'Presentation Skills & Slides Design (20%)',
      'Q&A Defense & Clarity (25%)'
    ],
    eligibility: 'Open to all Engineering, Technology, and Science undergraduate/postgraduate students.',
    submission: 'Bring your presentation file on a USB drive and keep a backup in Google Drive.',
    contact: {
      name: 'Mrs. M. Sheeba',
      phone: '+91 9944481587'
    },
    registrationOpen: true,
    order: 1
  },
  {
    id: 'erasex',
    slug: 'erasex',
    name: 'EraseX',
    shortTitle: 'Speed Debugging & Algorithmic Challenge',
    category: 'technical',
    day: 1,
    date: 'October 14, 2026',
    time: '11:45 AM - 01:15 PM',
    venue: 'Programming Lab 1 & 2 (6th Floor)',
    icon: 'Code',
    heroImage: '/hero-bg.png',
    teamSize: '1 - 2 Members',
    fee: '₹200 per participant',
    description: 'Enter the debugging gauntlet! EraseX tests your code comprehension, error hunting instinct, syntax acuity, and algorithmic problem-solving speed under intense ticking timers across C, C++, Java, and Python environments.',
    rules: [
      'Team size: 1 to 2 members.',
      'Permitted languages: C, C++, Java, Python.',
      'No internet browsing or AI assistants (ChatGPT, Copilot) allowed during the contest.',
      'Scores are determined by test cases passed, logical errors rectified, and fastest submission time.',
      'Decisions made by the technical jury will be final.'
    ],
    rounds: [
      {
        name: 'Round 1: Rapid Error Hunt',
        description: 'Pen & paper or console round fixing multiple syntax and logical bugs within short timeframes.',
        duration: '30 Minutes'
      },
      {
        name: 'Round 2: The Logic Maze (Finals)',
        description: 'Complex broken codebases and algorithms where teams must rectify runtime exceptions and pass hidden test cases.',
        duration: '45 Minutes'
      }
    ],
    judging: [
      'Correctness of Output (40%)',
      'Execution Speed & Completion Time (30%)',
      'Code Optimization (30%)'
    ],
    eligibility: 'All college students with strong programming foundations.',
    submission: 'System terminals will be provided with pre-configured IDEs.',
    contact: {
      name: 'Mr. S. Sashikumar',
      phone: '+91 9629301892'
    },
    registrationOpen: true,
    order: 2
  },

  // ============================================================
  // DAY 1 — NON-TECHNICAL EVENTS (October 14, 2026)
  // ============================================================
  {
    id: 'titan-11',
    slug: 'titan-11',
    name: 'Titan 11',
    shortTitle: 'High-Stakes IPL Auction Strategy',
    category: 'non-technical',
    day: 1,
    date: 'October 14, 2026',
    time: '01:30 PM - 04:00 PM',
    venue: 'Seminar Hall B (Academic Block)',
    icon: 'Trophy',
    heroImage: '/hero-bg.png',
    teamSize: '2 - 4 Members',
    fee: '₹200 per participant',
    description: 'Channel your inner franchise manager and cricket analyst. Armed with a virtual budget purse, bid against rival colleges in real-time auctions to assemble the most balanced, star-studded playing XI while managing team rating constraints, overseas limits, and salary caps.',
    rules: [
      'Team size: 2 to 4 members.',
      'Teams must build a squad of 11 players with set role constraints (Batsmen, Bowlers, All-rounders, Wicketkeeper).',
      'Virtual budget will be provided to all registered franchises.',
      'Exceeding budget or violating player combination criteria leads to heavy point penalties.',
      'Detailed player rating metrics will be shared prior to the hammer falling.'
    ],
    rounds: [
      {
        name: 'Round 1: Cricket IQ Prelims',
        description: 'Rapid-fire cricket trivia and statistics quiz to determine initial bidding purse bonuses.',
        duration: '25 Minutes'
      },
      {
        name: 'Round 2: The Grand Auction Arena',
        description: 'Live auction bidding wars led by the auctioneer for marquee, international, and uncapped players.',
        duration: '90 Minutes'
      }
    ],
    judging: [
      'Team Balance & Role Fulfillments (40%)',
      'Player Ratings & Synergy Points (35%)',
      'Budget Management & Smart Spending (25%)'
    ],
    eligibility: 'Open to all cricket lovers and strategic masterminds.',
    submission: 'Bid paddles and franchise calculation sheets provided on spot.',
    contact: {
      name: 'Vishva S',
      phone: '+91 9360729933'
    },
    registrationOpen: true,
    order: 3
  },
  {
    id: 'insta-lens',
    slug: 'insta-lens',
    name: 'Insta Lens',
    shortTitle: 'Campus Photography & Visual Storytelling',
    category: 'non-technical',
    day: 1,
    date: 'October 14, 2026',
    time: '02:00 PM - 04:30 PM',
    venue: 'DSU Campus Ground & LT Hall',
    icon: 'Camera',
    heroImage: '/hero-bg.png',
    teamSize: '1 - 2 Members',
    fee: '₹200 per participant',
    description: 'Capture the essence, architecture, emotion, and adrenaline of JEVION 2K26 through your lens. Frame unforgettable moments across the campus with compelling visual perspectives, framing mastery, and cinematic storytelling.',
    rules: [
      'Individual or duo participation (1-2 members).',
      'Photographs must be clicked within the university campus on the event day.',
      'Both DSLR/Mirrorless cameras and high-res mobile phones are permitted.',
      'Basic color grading allowed; excessive manipulation or AI generation leads to disqualification.',
      'EXIF data must remain intact for timestamp verification.'
    ],
    rounds: [
      {
        name: 'Round 1: Theme Shooting on Campus',
        description: 'Participants are revealed 2 on-spot themes and have 2 hours to capture shots across campus.',
        duration: '120 Minutes'
      },
      {
        name: 'Round 2: Portfolio Defense & Critique',
        description: 'Submit top 3 photographs and describe the narrative and creative techniques to the judges.',
        duration: '30 Minutes'
      }
    ],
    judging: [
      'Composition, Lighting & Framing (35%)',
      'Relevance to Given Theme (30%)',
      'Creativity & Visual Impact (25%)',
      'Technical Execution (10%)'
    ],
    eligibility: 'All creative shutterbugs and visual storytellers.',
    submission: 'Digital submission via drive link or memory card transfer.',
    contact: {
      name: 'Girivaran C',
      phone: '+91 8056306369'
    },
    registrationOpen: true,
    order: 4
  },
  {
    id: 'think-link',
    slug: 'think-link',
    name: 'Think & Link',
    shortTitle: 'Connection Trivia & Pattern Decoding',
    category: 'non-technical',
    day: 1,
    date: 'October 14, 2026',
    time: '03:30 PM - 05:00 PM',
    venue: 'Lecture Theatre (6th Floor)',
    icon: 'Link2',
    heroImage: '/hero-bg.png',
    teamSize: '2 - 3 Members',
    fee: '₹200 per participant',
    description: 'The ultimate connection puzzle challenge! Identify hidden bridges, decipher visual puzzles, decode pop-culture references, tech logos, memes, and lateral thinking clues to discover what ties seemingly unrelated images together.',
    rules: [
      'Team size: 2 to 3 members.',
      'Round 1 is buzzer/written elimination.',
      'Use of mobile phones or smartwatches during rounds will result in instant disqualification.',
      'Negative marking applies in final buzzer rounds for incorrect guesses.'
    ],
    rounds: [
      {
        name: 'Round 1: Visual Link Elimination',
        description: 'Rapid series of 20 picture connection puzzles.',
        duration: '30 Minutes'
      },
      {
        name: 'Round 2: The Buzzer Showdown',
        description: 'Top 6 teams face off in high-stakes tiered connection boards with progressive hints.',
        duration: '45 Minutes'
      }
    ],
    judging: [
      'Speed and Accuracy in Identifying Connections',
      'Cumulative score across all clue difficulty tiers'
    ],
    eligibility: 'Open to all keen observers and trivia enthusiasts.',
    submission: 'Buzzer consoles and answer sheets provided at the venue.',
    contact: {
      name: 'Vishva S',
      phone: '+91 9360729933'
    },
    registrationOpen: true,
    order: 5
  },

  // ============================================================
  // DAY 2 — TECHNICAL EVENTS (October 15, 2026)
  // ============================================================
  {
    id: 'code-hack',
    slug: 'code-hack',
    name: 'Code Hack',
    shortTitle: 'Mini Hackathon & Rapid Prototype Sprint',
    category: 'technical',
    day: 2,
    date: 'October 15, 2026',
    time: '09:30 AM - 01:30 PM',
    venue: 'Innovation & Incubation Lab (6th Floor)',
    icon: 'Terminal',
    heroImage: '/hero-bg.png',
    teamSize: '2 - 4 Members',
    fee: '₹200 per participant',
    description: 'A 4-hour rapid development sprint! Problem statements across AI agents, Web3, Smart Campus solutions, Healthcare, and FinTech will be revealed. Teams will conceptualize, build, and deploy working prototypes under the mentorship of industry experts.',
    rules: [
      'Team size: 2 to 4 members.',
      'Problem statements revealed at 09:30 AM on Day 2.',
      'Any open-source technology stack, framework, or cloud backend is permitted.',
      'Code must be committed to a new GitHub repository created on the spot.',
      'Pre-built projects will be disqualified during git commit audit.'
    ],
    rounds: [
      {
        name: 'Sprint 1: Architecture & Prototype Check',
        description: 'Midway review by mentors checking progress, wireframes, and backend APIs.',
        duration: '2 Hours'
      },
      {
        name: 'Sprint 2: Working Demo & Jury Pitch',
        description: 'Live 5-minute product demonstration showcasing features, UI, and live database.',
        duration: '1.5 Hours'
      }
    ],
    judging: [
      'Solution Feasibility & Impact (30%)',
      'Technical Architecture & Code Quality (30%)',
      'UI/UX Polish & Working Demo (25%)',
      'Pitch & Presentation (15%)'
    ],
    eligibility: 'Undergraduate and postgraduate coders, designers, and developers.',
    submission: 'GitHub repository link + Live deployed demo URL / APK.',
    contact: {
      name: 'Mr. S. Sashikumar',
      phone: '+91 9629301892'
    },
    registrationOpen: true,
    order: 6
  },
  {
    id: 'hunt-iq',
    slug: 'hunt-iq',
    name: 'Hunt IQ',
    shortTitle: 'High-Stakes Technical & Logic Quiz',
    category: 'technical',
    day: 2,
    date: 'October 15, 2026',
    time: '11:00 AM - 12:45 PM',
    venue: 'IT Seminar Hall (Academic Block)',
    icon: 'Search',
    heroImage: '/hero-bg.png',
    teamSize: '1 - 2 Members',
    fee: '₹200 per participant',
    description: 'Battle of the sharpest minds! Hunt IQ covers the vast horizons of Computer Science, Cloud Systems, AI revolutions, tech titans history, algorithmic riddles, cryptography, and modern digital ecosystems.',
    rules: [
      'Team size: 1 to 2 members.',
      'Prelims consists of 30 questions with strict time limits.',
      'Top 6 scoring teams qualify for the Grand Final stage on the main podium.',
      'Ties broken by sudden-death questions.'
    ],
    rounds: [
      {
        name: 'Round 1: Digital Written Prelims',
        description: 'Multiple-choice and code-snippet questions testing computer science breadth.',
        duration: '35 Minutes'
      },
      {
        name: 'Round 2: The Grand Stage Finale',
        description: 'Multi-tiered rounds: Infinite Pounce & Bounce, Audio-Visual Clues, and Rapid Fire.',
        duration: '50 Minutes'
      }
    ],
    judging: [
      'Highest cumulative score across all final rounds',
      'Speed bonus points in Rapid Fire'
    ],
    eligibility: 'All students with deep curiosity in technology and logic.',
    submission: 'Digital quiz terminals / on-stage podiums.',
    contact: {
      name: 'Mrs. M. Sheeba',
      phone: '+91 9944481587'
    },
    registrationOpen: true,
    order: 7
  },

  // ============================================================
  // DAY 2 — NON-TECHNICAL EVENTS (October 15, 2026)
  // ============================================================
  {
    id: 'aurora-films',
    slug: 'aurora-films',
    name: 'Aurora Films',
    shortTitle: 'Cinematic Short Film Premiere Contest',
    category: 'non-technical',
    day: 2,
    date: 'October 15, 2026',
    time: '01:30 PM - 03:30 PM',
    venue: 'Central Auditorium (Academic Block)',
    icon: 'Film',
    heroImage: '/hero-bg.png',
    teamSize: '1 - 4 Members',
    fee: '₹200 per participant',
    description: 'Let your cinematic visions illuminate the silver screen. Submit and premiere your short films covering drama, sci-fi, social awareness, thriller, or comedy. Judged by media professionals on directing, sound design, editing, and emotional storytelling impact.',
    rules: [
      'Team size: 1 to 4 members representing the crew.',
      'Film duration: 5 to 12 minutes (including intro and credits).',
      'Original content only; background score must be royalty-free or properly credited.',
      'Content must strictly adhere to university standards (no vulgarity or hate speech).',
      'Resolution: Minimum 1080p Full HD (MP4/MOV).'
    ],
    rounds: [
      {
        name: 'Round 1: Screening & Curation',
        description: 'Jury preview of all entries to curate the top 8 official festival selections.',
        duration: 'Prior to event'
      },
      {
        name: 'Round 2: Auditorium Premiere & Director Q&A',
        description: 'Live screening on the big screen followed by director and crew interview with judges.',
        duration: '120 Minutes'
      }
    ],
    judging: [
      'Storyline, Screenplay & Concept (30%)',
      'Cinematography & Visual Aesthetics (25%)',
      'Direction & Acting Performance (25%)',
      'Sound Design, Score & Editing (20%)'
    ],
    eligibility: 'Student filmmakers, editors, actors, and creators from any recognized institution.',
    submission: 'Google Drive / YouTube unlisted link submitted 24 hours prior to Day 2.',
    contact: {
      name: 'Girivaran C',
      phone: '+91 8056306369'
    },
    registrationOpen: true,
    order: 8
  },
  {
    id: 'nayakan',
    slug: 'nayakan',
    name: 'Nayakan',
    shortTitle: 'Ultimate Cinema Trivia & Dialogue Guessing',
    category: 'non-technical',
    day: 2,
    date: 'October 15, 2026',
    time: '02:30 PM - 04:00 PM',
    venue: 'Seminar Hall A (Academic Block)',
    icon: 'Clapperboard',
    heroImage: '/hero-bg.png',
    teamSize: '2 - 3 Members',
    fee: '₹200 per participant',
    description: 'Celebrate the magic of Indian and World Cinema! Identify iconic movie scenes by subtle background scores (BGM), mimic legendary punch dialogues, decipher zoomed-in props, and unravel reversed audio clips in this electrifying cinema face-off.',
    rules: [
      'Team size: 2 to 3 members.',
      'Rounds encompass Tamil, Telugu, Malayalam, Hindi, and Global cinema.',
      'Fastest buzzers receive first answering privilege in stage rounds.',
      'Prompting from the audience will invalidate the question.'
    ],
    rounds: [
      {
        name: 'Round 1: BGM & Frame Elimination',
        description: 'Recognizing iconic background scores, blur-to-sharp posters, and classic frames.',
        duration: '30 Minutes'
      },
      {
        name: 'Round 2: The Cine Star Stage Battle',
        description: 'Dialogue mimicry, reverse songs decode, and connection filmography trivia.',
        duration: '50 Minutes'
      }
    ],
    judging: [
      'Accuracy of movie titles, composers, and actors identified',
      'Stage presence and performance in dialogue rounds'
    ],
    eligibility: 'Open to all cinephiles and movie enthusiasts.',
    submission: 'All audiovisual assets and buzzer equipment provided.',
    contact: {
      name: 'Vishva S',
      phone: '+91 9360729933'
    },
    registrationOpen: true,
    order: 9
  },
  {
    id: 'secret-hunt',
    slug: 'secret-hunt',
    name: 'Secret Hunt',
    shortTitle: 'Campus Adventure Clue Solving & Treasure Hunt',
    category: 'non-technical',
    day: 2,
    date: 'October 15, 2026',
    time: '03:30 PM - 05:00 PM',
    venue: 'Dhanalakshmi Srinivasan University Campus',
    icon: 'Map',
    heroImage: '/hero-bg.png',
    teamSize: '3 - 4 Members',
    fee: '₹200 per participant',
    description: 'The crowning adventure of JEVION 2K26! Decode encrypted ciphers, find hidden QR codes stationed across campus landmarks, solve physical riddles, and race against the clock to discover the legendary Tech Titan artifact.',
    rules: [
      'Team size: 3 to 4 members.',
      'Teams must stay together as a complete unit throughout the hunt.',
      'Damaging university property or entering unauthorized areas causes immediate disqualification.',
      'Clues must be solved in chronological order without skipping stations.',
      'The first team to unlock all check-ins and bring the final token wins.'
    ],
    rounds: [
      {
        name: 'Stage 1: The Cryptic Gateway',
        description: 'Decrypt initial cipher riddles to receive the first clue map coordinates.',
        duration: '20 Minutes'
      },
      {
        name: 'Stage 2: The Campus Odyssey',
        description: 'Physical outdoor trail locating hidden digital check-in nodes across the campus.',
        duration: '60 Minutes'
      }
    ],
    judging: [
      'Fastest overall completion time',
      'All clue checkpoint stamps verified'
    ],
    eligibility: 'All students ready for physical agility and sharp puzzle solving.',
    submission: 'Physical map and team tracker tokens issued at start line.',
    contact: {
      name: 'Girivaran C',
      phone: '+91 8056306369'
    },
    registrationOpen: true,
    order: 10
  }
];

export const getEventBySlug = (slugOrId: string): Event | undefined => {
  if (!slugOrId) return undefined;
  const clean = slugOrId.toLowerCase().trim();
  return events.find(e => e.slug.toLowerCase() === clean || e.id.toLowerCase() === clean);
};

export const getEventsByCategory = (category: string): Event[] => {
  const clean = category.toLowerCase().trim();
  if (clean === 'all') return events;
  return events.filter(e => e.category.toLowerCase() === clean);
};

export const getEventsByDay = (day: number | string): Event[] => {
  if (day === 'ALL' || day === 'all') return events;
  const num = typeof day === 'string' ? parseInt(day, 10) : day;
  return events.filter(e => e.day === num);
};
