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

import compiledMainMenu from './assets/images/projects/compiled/main_menu.jpeg';
import compiledPlayTab1 from './assets/images/projects/compiled/play_tab_1.jpeg';
import compiledPlayTab2 from './assets/images/projects/compiled/play_tab_2.jpeg';
import compiledTutorial from './assets/images/projects/compiled/tutorial_section.jpeg';
import compiledDictionary from './assets/images/projects/compiled/dictionary.jpeg';
import compiledPassNPlay from './assets/images/projects/compiled/passnplay.jpeg';
import compiledLogo from './assets/images/projects/compiled/logo_with_text.png';

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

export const compiledAssets = {
  logo: compiledLogo,
  mainMenu: compiledMainMenu,
  playTab1: compiledPlayTab1,
  playTab2: compiledPlayTab2,
  tutorial: compiledTutorial,
  dictionary: compiledDictionary,
  passNPlay: compiledPassNPlay,
  gallery: [
    { src: compiledPlayTab2, caption: 'Program Board: Staging instructions into the shared cyclic memory loop with CPU registers (R0–R3) and condition flags (Z, N, C, V)' },
    { src: compiledPlayTab1, caption: 'Command Deck: Tactical card hand management and private objective tracking' },
    { src: compiledMainMenu, caption: 'Main Menu: Mode selection including singleplayer CPU sparring, pass-and-play local multiplayer, and tutorial' },
    { src: compiledTutorial, caption: 'Interactive 20-Lesson Curriculum: Step-by-step instruction covering registers, memory loops, branch jumps, and sabotage' },
    { src: compiledDictionary, caption: 'Card Dictionary: Full reference suite for all 31 executable instructions across Basic, Intermediate, and Advanced tiers' },
    { src: compiledPassNPlay, caption: 'Pass & Play: Same-device turn-based multiplayer with private hands, hidden objectives, and shared CPU execution' }
  ]
};

