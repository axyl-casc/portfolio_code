import { projects } from './projects';
import type { CardItem } from './types';

export const featuredProjects: CardItem[] = [
  ...projects
    .filter((project) => project.section === 'featured')
    .map((project) => ({
      title: project.title,
      href: `/projects/${project.slug}`,
      description: project.description,
      tags: project.tags
    })),
  {
    title: 'Other Projects',
    href: '/other_projects',
    description: 'Explore additional projects, including software tools, data visualizations, and experimental applications.',
    tags: []
  }
];
