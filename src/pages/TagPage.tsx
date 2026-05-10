import { projects } from '../projects';
import { hobbies } from '../hobbies';
import { experienceItems } from '../experience';
import { educationItems } from '../education';
import type { CardItem } from '../types';
import { CardGrid } from '../components/CardGrid';

function matchesTag(input: string, tag: string) {
  return input.trim().toLowerCase() === tag.trim().toLowerCase();
}

export function TagPage({ tag }: { tag: string }) {
  const projectLinks: CardItem[] = projects
    .filter((item) => item.tags.some((itemTag) => matchesTag(itemTag, tag)))
    .map((item) => ({
      title: item.title,
      description: item.description,
      href: `/projects/${item.slug}`,
      tags: item.tags
    }));

  const hobbyLinks: CardItem[] = hobbies
    .filter((item) => item.tags.some((itemTag) => matchesTag(itemTag, tag)))
    .map((item) => ({
      title: item.title,
      description: item.description,
      href: `/hobbies/${item.slug}`,
      tags: item.tags
    }));

  const experienceLinks: CardItem[] = experienceItems
    .filter((item) => item.tags.some((itemTag) => matchesTag(itemTag, tag)))
    .map((item) => ({
      title: item.title,
      description: item.meta,
      href: '/#experience',
      tags: item.tags
    }));

  const educationLinks: CardItem[] = educationItems
    .filter((item) => item.tags.some((itemTag) => matchesTag(itemTag, tag)))
    .map((item) => ({
      title: item.title,
      description: item.meta,
      href: '/#education',
      tags: item.tags
    }));

  const items = [...projectLinks, ...experienceLinks, ...educationLinks, ...hobbyLinks];

  return (
    <main id="main-content" className="site-main flex-1 space-y-4 bg-base-100 rounded-2xl" tabIndex={-1}>
      <section className="card content-card">
        <div className="card-body space-y-4">
          <h2 className="text-2xl font-bold">Tagged: {tag}</h2>
          <p className="text-base-content/80">Found {items.length} related {items.length === 1 ? 'link' : 'links'}.</p>
          {items.length > 0 ? (
            <CardGrid items={items} grid />
          ) : (
            <div className="alert alert-info">No links found for this tag yet.</div>
          )}
        </div>
      </section>
    </main>
  );
}
