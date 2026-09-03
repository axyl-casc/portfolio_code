import { projects } from '../projects';
import { hobbies } from '../hobbies';
import { experienceItems } from '../experience';
import { educationItems } from '../education';
import type { CardItem } from '../types';
import { CardGrid } from '../components/CardGrid';
import { normalizeTag, tagsMatch } from '../utils/tags';

export function TagPage({ tag }: { tag: string }) {
  const displayTag = normalizeTag(tag);
  const projectLinks: CardItem[] = projects
    .filter((item) => item.tags.some((itemTag) => tagsMatch(itemTag, tag)))
    .map((item) => ({
      title: item.title,
      description: item.shortDescription || item.description || '',
      href: `/projects/${item.slug}`,
      tags: item.tags
    }));

  const hobbyLinks: CardItem[] = hobbies
    .filter((item) => item.tags.some((itemTag) => tagsMatch(itemTag, tag)))
    .map((item) => ({
      title: item.title,
      description: item.shortDescription || item.description || '',
      href: `/hobbies/${item.slug}`,
      tags: item.tags
    }));

  const experienceLinks: CardItem[] = experienceItems
    .filter((item) => item.tags.some((itemTag) => tagsMatch(itemTag, tag)))
    .map((item) => ({
      title: item.title,
      description: item.meta,
      href: '/#experience',
      tags: item.tags
    }));

  const educationLinks: CardItem[] = educationItems
    .filter((item) => item.tags.some((itemTag) => tagsMatch(itemTag, tag)))
    .map((item) => ({
      title: item.title,
      description: item.meta,
      href: '/#education',
      tags: item.tags
    }));

  const items = [...projectLinks, ...experienceLinks, ...educationLinks, ...hobbyLinks];

  return (
    <main id="main-content" className="site-main flex-1 space-y-8" tabIndex={-1}>
      <div className="content-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">Tagged: {displayTag}</h2>
            <p className="mt-2 text-base text-base-content/85">
              Found {items.length} related {items.length === 1 ? 'item' : 'items'}.
            </p>
          </div>
          <a href="/" className="btn btn-outline btn-sm rounded-full self-start md:self-center">
            ← Back to Home
          </a>
        </div>
      </div>

      {items.length > 0 ? (
        <CardGrid items={items} grid />
      ) : (
        <div className="alert alert-info">No links found for this tag yet.</div>
      )}
    </main>
  );
}

