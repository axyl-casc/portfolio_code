import { CardGrid } from '../components/CardGrid';
import { hobbies } from '../hobbies';
import type { CardItem } from '../types';

const items: CardItem[] = hobbies
  .filter((hobby) => hobby.section === 'other')
  .map((hobby) => ({
    title: hobby.title,
    href: `/hobbies/${hobby.slug}`,
    description: hobby.description,
    tags: hobby.tags
  }));

export function OtherHobbiesPage() {
  return (
    <main id="main-content" className="site-main flex-1" tabIndex={-1}>
      <CardGrid items={items} grid />
    </main>
  );
}
