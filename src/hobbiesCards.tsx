import { hobbies } from './hobbies';
import type { CardItem } from './types';

export const featuredHobbies: CardItem[] = [
  ...hobbies.map((hobby) => ({
    title: hobby.title,
    href: `/hobbies/${hobby.slug}`,
    description: hobby.description,
    tags: hobby.tags
  }))
];
