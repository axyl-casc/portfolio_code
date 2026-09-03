import { CardGrid } from '../components/CardGrid';
import { projects } from '../projects';
import type { CardItem } from '../types';

const items: CardItem[] = projects
  .filter((project) => project.section === 'other')
  .map((project) => ({
    title: project.title,
    href: `/projects/${project.slug}`,
    description: project.shortDescription || project.description || '',
    tags: project.tags
  }));

export function OtherProjectsPage() {
  return (
    <main id="main-content" className="site-main flex-1 space-y-8" tabIndex={-1}>
      <div className="content-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">Other Projects</h2>
            <p className="mt-2 text-base text-base-content/85 max-w-2xl leading-relaxed">
              Explore additional software tools, systems programming projects, educational games, and experimental applications.
            </p>
          </div>
          <a href="/#projects" className="btn btn-outline btn-sm rounded-full self-start md:self-center">
            ← Back to Featured Projects
          </a>
        </div>
      </div>
      <CardGrid items={items} grid />
    </main>
  );
}

