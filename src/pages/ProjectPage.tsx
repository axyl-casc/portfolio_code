import type { CSSProperties } from 'react';
import type { Project } from '../types';
import { getTagHue } from '../utils/tagColors';
import { tagPath } from '../utils/tags';

export function ProjectPage({ project }: { project: Project }) {
  const hasProjectUrl = project.projectUrl && project.projectUrl.trim().length > 0;
  const paragraphs: string[] = Array.isArray(project.longDescription)
    ? project.longDescription
    : (project.longDescription || project.shortDescription || project.description || '')
        .split(/\n\n+/)
        .filter(Boolean);

  const backHref = project.section === 'other' ? '/other_projects' : '/#projects';
  const backLabel = project.section === 'other' ? '← Back to Other Projects' : '← Back to Projects';

  return (
    <main id="main-content" className="site-main flex-1" tabIndex={-1}>
      <section className="max-w-4xl mx-auto content-card shadow-lg p-6 sm:p-10 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">{project.title}</h2>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <a
                  key={tag}
                  href={tagPath(tag)}
                  className="tag-badge"
                  style={{ '--tag-hue': getTagHue(tag) } as CSSProperties}
                >
                  {tag}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="divider my-0 opacity-40" />

        <div className="space-y-5">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base-content/85 leading-relaxed text-base sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-xl font-bold tracking-tight text-base-content">Key Features &amp; Highlights</h3>
            <ul className="list-disc list-inside space-y-2 text-base-content/85 leading-relaxed text-base">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="pl-1">
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-base-content/10">
          {hasProjectUrl && (
            <a href={project.projectUrl} className="btn btn-primary rounded-full px-6" target="_blank" rel="noreferrer">
              Visit Project ↗
            </a>
          )}
          <a href={backHref} className="btn btn-outline rounded-full px-6">
            {backLabel}
          </a>
        </div>
      </section>
    </main>
  );
}

