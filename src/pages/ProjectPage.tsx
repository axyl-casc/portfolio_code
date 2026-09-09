import { useState, useEffect, type CSSProperties } from 'react';
import type { Project } from '../types';
import { getTagHue } from '../utils/tagColors';
import { tagPath } from '../utils/tags';
import { FadeImage } from '../components/FadeImage';

export function ProjectPage({ project }: { project: Project }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  useEffect(() => {
    if (!isZoomModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomModalOpen(false);
      } else if (e.key === 'ArrowLeft' && project.gallery && project.gallery.length > 1) {
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : project.gallery!.length - 1));
      } else if (e.key === 'ArrowRight' && project.gallery && project.gallery.length > 1) {
        setSelectedImageIndex((prev) => (prev < project.gallery!.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomModalOpen, project.gallery]);

  const hasGallery = project.gallery && project.gallery.length > 0;
  const currentImage = hasGallery ? project.gallery![selectedImageIndex] : null;

  const backHref = project.section === 'other' ? '/other_projects' : '/#projects';
  const backLabel = project.section === 'other' ? '← Back to Other Projects' : '← Back to Featured Projects';

  const paragraphs: string[] = Array.isArray(project.longDescription)
    ? project.longDescription
    : (project.longDescription || project.shortDescription || project.description || '')
        .split(/\n\n+/)
        .filter(Boolean);

  // Extract YouTube ID if present
  let youtubeEmbedUrl: string | null = null;
  if (project.videoUrl) {
    if (project.videoUrl.includes('youtu.be/')) {
      const id = project.videoUrl.split('youtu.be/')[1]?.split(/[?#]/)[0];
      if (id) youtubeEmbedUrl = `https://www.youtube.com/embed/${id}`;
    } else if (project.videoUrl.includes('youtube.com/watch')) {
      const params = new URLSearchParams(project.videoUrl.split('?')[1]);
      const id = params.get('v');
      if (id) youtubeEmbedUrl = `https://www.youtube.com/embed/${id}`;
    }
  }

  return (
    <main id="main-content" className="site-main flex-1 space-y-10 py-6" tabIndex={-1}>
      {/* Top Header Card */}
      <section className="max-w-5xl mx-auto content-card p-6 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <a href={backHref} className="text-xs font-semibold text-primary hover:underline">
                {backLabel}
              </a>
              {project.section === 'featured' && (
                <span className="badge badge-primary badge-sm font-semibold whitespace-nowrap py-1.5 px-3 h-auto leading-tight">Featured Project</span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-base-content">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-base-content/85 max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm sm:btn-md rounded-full px-6 shadow-md"
              >
                {project.demoLabel || 'Live Project ↗'}
              </a>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm sm:btn-md rounded-full px-6 shadow-md"
              >
                GitHub Repository ↗
              </a>
            ) : null}

            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent btn-sm sm:btn-md rounded-full px-6 shadow-md text-slate-950 font-semibold"
              >
                Google Play (Closed Test) ↗
              </a>
            )}

            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm sm:btn-md rounded-full px-6 shadow-md"
              >
                Presentation Slides (PDF) ↗
              </a>
            )}

            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm sm:btn-md rounded-full px-6 shadow-md"
              >
                Download on itch.io ↗
              </a>
            )}

            {project.demoUrl && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm sm:btn-md rounded-full px-6 font-medium"
              >
                GitHub Repository ↗
              </a>
            )}
          </div>
        </div>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-base-content/10">
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
      </section>

      {/* Interactive Screenshot Gallery (if available) */}
      {hasGallery && currentImage && (
        <section className="max-w-5xl mx-auto content-card overflow-hidden shadow-lg p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-base-content">
              Project Visuals &amp; Screenshots
            </h2>
            <span className="text-xs font-semibold text-base-content/60">
              {selectedImageIndex + 1} of {project.gallery!.length}
            </span>
          </div>

          {/* Main Selected Image */}
          <div
            className="relative w-full h-[50vh] sm:h-[62vh] lg:h-[70vh] min-h-[340px] max-h-[720px] overflow-hidden rounded-2xl bg-base-300/30 border border-base-content/10 shadow-inner flex items-center justify-center p-2 sm:p-4 group cursor-zoom-in"
            onClick={() => setIsZoomModalOpen(true)}
            title="Click to expand screenshot to full screen"
          >
            <FadeImage
              src={currentImage.src}
              alt={currentImage.caption || `${project.title} screenshot`}
              wrapperClassName="h-full w-full flex items-center justify-center"
              className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <span className="absolute bottom-3 right-3 text-xs bg-base-100/85 backdrop-blur-sm text-base-content/80 font-medium px-2.5 py-1 rounded-full border border-base-content/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Click to Expand
            </span>
          </div>

          {currentImage.caption && (
            <p className="text-xs sm:text-sm text-center text-base-content/75 italic">
              {currentImage.caption}
            </p>
          )}

          {/* Thumbnail Strip */}
          {project.gallery!.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1">
              {project.gallery!.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-primary ring-2 ring-primary/30 scale-105'
                      : 'border-base-content/15 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <FadeImage
                    src={item.src}
                    alt=""
                    wrapperClassName="w-full h-full flex items-center justify-center bg-base-300/40"
                    className="max-h-full max-w-full w-auto h-auto object-contain p-0.5"
                    showSkeleton={false}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Fullscreen Lightbox Modal */}
          {isZoomModalOpen && currentImage && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged screenshot preview"
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
              onClick={() => setIsZoomModalOpen(false)}
            >
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <span className="text-xs text-white/70 font-mono bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                  {selectedImageIndex + 1} / {project.gallery!.length}
                </span>
                <button
                  type="button"
                  onClick={() => setIsZoomModalOpen(false)}
                  className="btn btn-circle btn-sm btn-ghost text-white hover:bg-white/20 text-base font-bold"
                  aria-label="Close fullscreen preview"
                >
                  ✕
                </button>
              </div>

              <div
                className="relative max-h-[85vh] max-w-[95vw] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.caption || `${project.title} screenshot`}
                  className="max-h-[85vh] max-w-[95vw] w-auto h-auto object-contain rounded-xl shadow-2xl select-none"
                />
              </div>

              {currentImage.caption && (
                <p
                  className="mt-3 text-sm text-center text-white/90 max-w-2xl px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {currentImage.caption}
                </p>
              )}

              {/* Prev / Next Controls */}
              {project.gallery!.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : project.gallery!.length - 1));
                    }}
                    className="btn btn-circle btn-sm sm:btn-md bg-black/50 text-white border border-white/10 hover:bg-black/80 pointer-events-auto shadow-xl"
                    aria-label="Previous image"
                  >
                    ❮
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) => (prev < project.gallery!.length - 1 ? prev + 1 : 0));
                    }}
                    className="btn btn-circle btn-sm sm:btn-md bg-black/50 text-white border border-white/10 hover:bg-black/80 pointer-events-auto shadow-xl"
                    aria-label="Next image"
                  >
                    ❯
                  </button>
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* YouTube Video Embed (if available) */}
      {youtubeEmbedUrl && (
        <section className="max-w-5xl mx-auto content-card p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-base-content">Gameplay Demonstration Video</h2>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md border border-base-content/10 bg-black">
            <iframe
              src={youtubeEmbedUrl}
              title={`${project.title} Video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Detailed Case Study Sections (if available) */}
      {project.caseStudy ? (
        <section className="max-w-5xl mx-auto space-y-8">
          {/* Overview */}
          <div className="content-card p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-primary">Overview</h2>
            <p className="text-base text-base-content/85 leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Key Features & Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="content-card p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-primary">Key Features &amp; Engineering Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base text-base-content/85 leading-relaxed">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-base-200/50 border border-base-content/10">
                    <span className="text-primary font-bold text-base shrink-0">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="content-card p-6 sm:p-8 space-y-3 border-error/20 bg-error/5">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <h2 className="text-lg font-bold text-base-content">The Problem</h2>
              </div>
              <p className="text-sm sm:text-base text-base-content/85 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="content-card p-6 sm:p-8 space-y-3 border-success/20 bg-success/5">
              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <h2 className="text-lg font-bold text-base-content">The Solution</h2>
              </div>
              <p className="text-sm sm:text-base text-base-content/85 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Technical Architecture */}
          {project.caseStudy.architectureDiagram && (
            <div className="content-card p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-bold text-primary">Technical Architecture</h2>
                <span className="badge badge-outline text-xs whitespace-nowrap py-2 px-3 h-auto leading-tight shrink-0 font-medium">System Design</span>
              </div>

              <div className="overflow-x-auto rounded-2xl bg-base-300/40 p-4 sm:p-6 border border-base-content/10">
                <pre className="font-mono text-xs sm:text-sm text-base-content leading-snug select-all">
                  {project.caseStudy.architectureDiagram}
                </pre>
              </div>

              {project.caseStudy.architectureDescription && (
                <p className="text-sm sm:text-base text-base-content/85 leading-relaxed pt-2">
                  {project.caseStudy.architectureDescription}
                </p>
              )}
            </div>
          )}

          {/* Key Engineering Decisions */}
          {project.caseStudy.keyDecisions && project.caseStudy.keyDecisions.length > 0 && (
            <div className="content-card p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-primary">Key Engineering Decisions</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.caseStudy.keyDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-base-200/60 border border-base-content/10 space-y-1.5"
                  >
                    <h3 className="font-bold text-sm sm:text-base text-base-content">
                      {decision.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed">
                      {decision.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Challenges */}
          {project.caseStudy.challenges && project.caseStudy.challenges.length > 0 && (
            <div className="content-card p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-primary">Challenges &amp; Solutions</h2>
              <div className="space-y-3">
                {project.caseStudy.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-base-200/60 border border-base-content/10 space-y-1.5"
                  >
                    <h3 className="font-bold text-sm sm:text-base text-base-content">
                      {challenge.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-base-content/80 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results & Impact */}
          {project.caseStudy.results && project.caseStudy.results.length > 0 && (
            <div className="content-card p-6 sm:p-8 space-y-3 border-primary/30">
              <h2 className="text-xl font-bold text-primary">Results &amp; Impact</h2>
              <ul className="space-y-2 text-sm sm:text-base text-base-content/85 leading-relaxed">
                {project.caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ) : (
        /* Standard Project Description & Highlights for other projects */
        <section className="max-w-5xl mx-auto content-card p-6 sm:p-10 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary">About the Project</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base-content/85 leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-base-content/10">
              <h3 className="text-lg font-bold tracking-tight text-base-content">
                Key Features &amp; Engineering Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base-content/85 leading-relaxed text-base">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="pl-1">
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Bottom Navigation Row */}
      <div className="max-w-5xl mx-auto flex items-center pt-4">
        <a href={backHref} className="btn btn-outline rounded-full px-6 font-medium">
          {backLabel}
        </a>
      </div>
    </main>
  );
}
