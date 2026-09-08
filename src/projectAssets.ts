// Project image and asset imports
import badukIntro from './assets/images/projects/companion_baduk/intro.png';
import badukGameplay1 from './assets/images/projects/companion_baduk/gameplay1.png';
import badukGameplay2 from './assets/images/projects/companion_baduk/gameplay2.png';
import badukProfile from './assets/images/projects/companion_baduk/profile.png';
import badukShop from './assets/images/projects/companion_baduk/shop.png';
import badukTutorial from './assets/images/projects/companion_baduk/tutorial.png';
import badukBeltLevelup from './assets/images/projects/companion_baduk/belt_levelup.png';
import badukAiGraph1 from './assets/images/projects/companion_baduk/ai_graph (1).png';
import badukAiGraph2 from './assets/images/projects/companion_baduk/ai_graph (2).png';
import badukAiGraph3 from './assets/images/projects/companion_baduk/ai_graph (3).png';

import defenderGameplay from './assets/images/projects/defender/gameplay.png';
import defenderMenu from './assets/images/projects/defender/menu.png';

import amdPresentationPdf from './assets/images/projects/anscombes_quartet/AMD Math Presentation.pdf?url';

export const badukAssets = {
  intro: badukIntro,
  gameplay1: badukGameplay1,
  gameplay2: badukGameplay2,
  profile: badukProfile,
  shop: badukShop,
  tutorial: badukTutorial,
  beltLevelup: badukBeltLevelup,
  aiGraph1: badukAiGraph1,
  aiGraph2: badukAiGraph2,
  aiGraph3: badukAiGraph3,
  gallery: [
    { src: badukGameplay1, caption: 'Tactical board view with move analysis, territory markers, and evaluation' },
    { src: badukGameplay2, caption: 'In-game sparring match against calibrated AI opponent' },
    { src: badukIntro, caption: 'Main menu with game modes: Normal, Chinese Opening, Handicap, and Sunjang' },
    { src: badukTutorial, caption: 'Interactive step-by-step tutorial board for beginner fundamentals' },
    { src: badukBeltLevelup, caption: 'Belt-based skill progression visualization from 40 kyu to 9 dan' },
    { src: badukProfile, caption: 'Player profile statistics, win-rate curves, and match records' },
    { src: badukShop, caption: 'In-game reward system: unlockable boards and stone skins with zero microtransactions' },
    { src: badukAiGraph1, caption: 'Explainable AI heuristic evaluation curves and state assessment' },
    { src: badukAiGraph2, caption: 'Monte Carlo tree search branching and territory influence mapping' },
    { src: badukAiGraph3, caption: 'Comparative position evaluation graph across sequential moves' }
  ]
};

export const defenderAssets = {
  gameplay: defenderGameplay,
  menu: defenderMenu,
  videoUrl: 'https://youtu.be/L9AeZlsrXT8',
  gallery: [
    { src: defenderGameplay, caption: '70 FPS double-buffered arcade gameplay running on Atari ST hardware' },
    { src: defenderMenu, caption: 'Splash menu driven by custom interrupt-driven IKBD keyboard & mouse scans' }
  ]
};

export const anscombesAssets = {
  presentationPdf: amdPresentationPdf
};
