export type CardItem = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

export type ProjectCaseStudy = {
  overview: string;
  problem: string;
  solution: string;
  architectureDiagram?: string;
  architectureDescription?: string;
  keyDecisions?: { title: string; description: string }[];
  challenges?: { title: string; description: string }[];
  results?: string[];
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string | string[];
  description?: string;
  highlights?: string[];
  projectUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  playStoreUrl?: string;
  downloadUrl?: string;
  videoUrl?: string;
  pdfUrl?: string;
  thumbnail?: string;
  gallery?: { src: string; caption?: string }[];
  caseStudy?: ProjectCaseStudy;
  section: 'featured' | 'other';
  tags: string[];
};


export type Hobby = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string | string[];
  description?: string;
  highlights?: string[];
  hobbyUrl: string;
  section: 'featured' | 'other';
  tags: string[];
};
