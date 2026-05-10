export type EducationItem = {
  title: string;
  meta: string;
  details: string[];
  tags: string[];
};
export const educationItems: EducationItem[] = [
  {
    title: 'Bachelor of Science – Computer Science',
    meta: 'Mount Royal University · September 2020 – May 2026 · Calgary, AB',
    details: [
      'GPA: 3.3 / 4.0.',
      'Completed a Computer Science degree with a Mathematics cognate focused on statistics, graph theory, and network science.',
      'Worked on projects involving AI, software development, data visualization, game development, and web technologies.',
      'Presented research and technical projects at MRU Research Days and the Alberta Mathematics Dialogue.',
      'Senior capstone project focused on building a Go (Baduk) AI using search algorithms, machine learning concepts, and game theory.',
      'Experience with Python, TypeScript, Godot, full-stack web development, and modern software tooling.',
      'Interested in practical software systems, problem-solving, and building reliable, understandable technology.'
    ],
    tags: [
      'Computer Science',
      'Mathematics',
      'Artificial Intelligence',
      'Go AI',
      'Research',
      'Software Engineering',
      'Data Analysis'
    ]
  },
  {
    title: 'Robert Thirsk High School',
    meta: 'Graduated Grade 12 · June 2018 · Calgary, AB',
    details: [
      'Completed Grade 12 with a focus on technology and applied science courses.',
      'Took Computer Science and Robotics classes covering programming fundamentals, hardware, and engineering concepts.',
      'Participated in robotics, chess, and science clubs.',
      'Developed an early interest in software development, systems, and technical problem-solving.'
    ],
    tags: [
      'Computer Science',
      'Robotics',
      'Chess Club',
      'Science Club',
      'STEM',
      'Technology',
      "Javascript",
      "Python"
    ]
  },
  {
    title: 'Hockey Alberta - Central Zone Referee Training',
    meta: '2014 – 2015 · Mount Royal University · Calgary, AB',
    details: [
      'Completed Hockey Alberta referee and officiating training.',
      'Worked as a referee and linesman for Novice and Atom hockey games.',
      'Gained experience with communication, teamwork, leadership, and quick decision-making in fast-paced environments.'
    ],
    tags: [
      'Referee Training',
      'Leadership',
      'Communication',
      'Teamwork',
      'Decision Making'
    ]
  }
];