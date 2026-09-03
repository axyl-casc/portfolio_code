import { CardGrid } from '../components/CardGrid';
import { hobbies } from '../hobbies';
import type { CardItem } from '../types';

const items: CardItem[] = hobbies
  .filter((hobby) => hobby.section === 'other')
  .map((hobby) => ({
    title: hobby.title,
    href: `/hobbies/${hobby.slug}`,
    description: hobby.shortDescription || hobby.description || '',
    tags: hobby.tags
  }));

export function OtherHobbiesPage() {
  return (
    <main id="main-content" className="site-main flex-1 space-y-8" tabIndex={-1}>
      <div className="content-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">Other Hobbies</h2>
            <p className="mt-2 text-base text-base-content/85 max-w-2xl leading-relaxed">
              Explore additional personal pursuits, athletics, nature observation, and creative interests outside of software.
            </p>
          </div>
          <a href="/#hobbies" className="btn btn-outline btn-sm rounded-full self-start md:self-center">
            ← Back to Featured Hobbies
          </a>
        </div>
      </div>
      <CardGrid items={items} grid />
    </main>
  );
}

