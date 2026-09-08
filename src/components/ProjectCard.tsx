import type { CSSProperties } from 'react';
import type { Project } from '../types';
import { getTagHue } from '../utils/tagColors';
import { tagPath } from '../utils/tags';
import { FadeImage } from './FadeImage';

export function ProjectCard({
  project,
  isFlagship = false
}: {
  project: Project;
  isFlagship?: boolean;
}) {
  const caseStudyHref = `/projects/${project.slug}`;

  // All project cards consistently provide a single clear primary action: Read More
  const caseStudyLabel = 'Read More →';

  return (
    <article
      className={`content-card group flex flex-col ${
        isFlagship ? 'md:flex-row md:items-stretch' : 'justify-between'
      } transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isFlagship ? 'border-primary/40 ring-1 ring-primary/20' : ''
      }`}
    >
      {/* Visual Header */}
      <div
        className={`relative overflow-hidden bg-base-200 border-b border-base-content/10 shrink-0 ${
          isFlagship
            ? 'w-full md:w-5/12 lg:w-4/12 max-h-56 sm:max-h-64 md:max-h-none md:border-b-0 md:border-r flex items-center justify-center'
            : 'aspect-[16/9] w-full'
        }`}
      >
        {project.thumbnail ? (
          <FadeImage
            src={project.thumbnail}
            alt={`${project.title} preview`}
            wrapperClassName="h-full w-full overflow-hidden"
            className={`h-full w-full object-cover ${
              isFlagship ? 'object-top md:object-cover' : 'object-top'
            }`}
            showSkeleton={true}
          />
        ) : project.slug === 'goguesser' ? (
          <div className="h-full w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-950/40 via-base-200 to-sky-950/30 text-center select-none">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-7 h-7 rounded-full bg-slate-900 border-2 border-slate-600 shadow-md" />
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                100ms Sync
              </span>
              <span className="inline-block w-7 h-7 rounded-full bg-white border-2 border-slate-300 shadow-md" />
            </div>
            <p className="text-base font-bold text-base-content tracking-wide">GoGuesser</p>
            <p className="text-xs text-base-content/70 mt-1">Real-Time Multiplayer SGF Guessing Engine</p>
          </div>
        ) : project.slug === 'anscombes-quartet-research' ? (
          <div className="h-full w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-950/40 via-base-200 to-indigo-950/30 text-center select-none">
            <div className="flex items-center gap-4 mb-2">
              <svg className="w-12 h-12 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              </svg>
              <div className="text-left font-mono text-[11px] leading-tight text-base-content/75">
                <div>y = 0.5x + 3.0</div>
                <div>R² = 0.67</div>
                <div>MRU Research Days</div>
              </div>
            </div>
            <p className="text-base font-bold text-base-content tracking-wide">Anscombe&apos;s Quartet</p>
            <p className="text-xs text-base-content/70 mt-1">Vectorized Regression &amp; Visual Data Analysis</p>
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-base-200 text-base-content/60 text-sm font-mono">
            {project.title}
          </div>
        )}

        {/* Badge Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {isFlagship && (
            <span className="badge badge-primary font-semibold text-xs shadow-md">
              Flagship Project
            </span>
          )}
          {project.slug === 'goguesser' && (
            <span className="badge badge-success font-semibold text-xs shadow-md text-slate-950">
              Shipped App
            </span>
          )}
          {project.slug === 'defender-remake-atari-st' && (
            <span className="badge badge-accent font-semibold text-xs shadow-md text-slate-950">
              Low-Level Systems
            </span>
          )}
          {project.slug === 'anscombes-quartet-research' && (
            <span className="badge badge-secondary font-semibold text-xs shadow-md">
              Presented Research
            </span>
          )}
        </div>
      </div>

      {/* Content Column */}
      <div className="flex flex-col justify-between flex-1">
        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-base-content tracking-tight group-hover:text-primary transition-colors">
              <a href={caseStudyHref} className="hover:underline focus:outline-none focus:text-primary">
                {project.title}
              </a>
            </h3>
            <p className="text-sm text-base-content/85 leading-relaxed">
              {project.shortDescription || project.description}
            </p>
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.slice(0, 5).map((tag) => (
                <a
                  key={tag}
                  href={tagPath(tag)}
                  className="tag-badge"
                  style={{ '--tag-hue': getTagHue(tag) } as CSSProperties}
                >
                  {tag}
                </a>
              ))}
              {project.tags.length > 5 && (
                <span className="text-[11px] font-medium text-base-content/60 self-center pl-1">
                  +{project.tags.length - 5} more
                </span>
              )}
            </div>
          )}
        </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2 flex items-center border-t border-base-content/10">
        <a
          href={caseStudyHref}
          className="btn btn-primary btn-sm rounded-full font-medium shadow-sm w-full text-center justify-center"
        >
          {caseStudyLabel}
        </a>
      </div>
    </div>
  </article>
);
}
