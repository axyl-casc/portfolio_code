import { CardGrid } from '../components/CardGrid';
import { projects } from '../projects';
import type { CardItem } from '../types';

const items: CardItem[] = projects
  .filter((project) => project.section === 'other')
  .map((project) => ({
    title: project.title,
    href: `/projects/${project.slug}`,
    description: project.description,
    tags: project.tags
  }));

export function OtherProjectsPage() {
  return (
    <main id="main-content" className="site-main flex-1" tabIndex={-1}>
      <CardGrid items={items} grid cardClassName="other-project-card" />
    </main>
  );
}
