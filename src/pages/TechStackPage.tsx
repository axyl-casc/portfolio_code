import { useState, useMemo, type CSSProperties } from 'react';
import {
  CATEGORIES,
  techItems,
  PROJECT_STACK_PROFILES,
  type TechCategory,
  type TechItem,
  type ProjectStackProfile
} from '../techStackData';
import { getTagHue } from '../utils/tagColors';
import { tagPath } from '../utils/tags';

export function TechStackPage() {
  const [activeCategory, setActiveCategory] = useState<TechCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'rating-desc' | 'name-asc'>('default');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'matrix'>('grid');

  // Selected project profile if any
  const selectedProject: ProjectStackProfile | undefined = useMemo(() => {
    if (!selectedProjectSlug) return undefined;
    return PROJECT_STACK_PROFILES.find((p) => p.projectSlug === selectedProjectSlug);
  }, [selectedProjectSlug]);

  // Names of tech items associated with the selected project
  const highlightedTechNames = useMemo(() => {
    if (!selectedProject) return new Set<string>();
    return new Set([
      ...selectedProject.frontend,
      ...selectedProject.backend,
      ...selectedProject.database,
      ...selectedProject.server
    ]);
  }, [selectedProject]);


  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    let result = techItems.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }


      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesBadge = item.badge.toLowerCase().includes(q);
        const matchesProficiency = item.proficiencyLabel.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const matchesProjects = item.projects.some((p) => p.name.toLowerCase().includes(q));
        const matchesHighlights = item.highlights.some((h) => h.toLowerCase().includes(q));

        if (
          !matchesName &&
          !matchesDesc &&
          !matchesBadge &&
          !matchesProficiency &&
          !matchesTags &&
          !matchesProjects &&
          !matchesHighlights
        ) {
          return false;
        }
      }

      return true;
    });

    if (sortBy === 'rating-desc') {
      result = [...result].sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));
    } else if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    return {
      all: techItems.length,
      frontend: techItems.filter((t) => t.category === 'frontend').length,
      backend: techItems.filter((t) => t.category === 'backend').length,
      database: techItems.filter((t) => t.category === 'database').length,
      server: techItems.filter((t) => t.category === 'server').length
    };
  }, []);

  // Items grouped by category for sectioned view
  const groupedItems = useMemo(() => {
    const map: Record<TechCategory, TechItem[]> = {
      frontend: [],
      backend: [],
      database: [],
      server: []
    };

    filteredItems.forEach((item) => {
      map[item.category].push(item);
    });

    return map;
  }, [filteredItems]);

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortBy('default');
    setSelectedProjectSlug('');
  };

  const renderStars = (rating: number, max = 5) => {
    return (
      <div className="flex items-center gap-0.5 text-amber-400 text-sm" aria-label={`${rating} out of ${max} stars`}>
        {Array.from({ length: max }, (_, i) => (
          <span key={i} className={i < rating ? 'text-amber-400' : 'text-base-content/20'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <main id="main-content" className="site-main flex-1 space-y-8" tabIndex={-1}>
      {/* Top Banner / Hero Card */}
      <div className="content-card p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Full-Stack Architecture &amp; Skill Ratings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              Tech Stacks &amp; Systems
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="/" className="btn btn-outline btn-sm rounded-full">
              ← Home
            </a>
            <a href="/other_projects" className="btn btn-outline btn-sm rounded-full">
              All Projects →
            </a>
          </div>
        </div>

        {/* Quick Stat Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-base-content/10">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id];
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(activeCategory === cat.id ? 'all' : cat.id)}
                className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'border-primary bg-primary/10 shadow-sm'
                    : 'border-base-content/10 bg-base-200/50 hover:bg-base-200 hover:border-primary/30'
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-base-content/70">
                    {cat.name.split('&')[0]}
                  </span>
                  <span className="text-xl font-black text-primary">{count}</span>
                </div>
                <div className="text-xs text-base-content/60 mt-1 truncate">
                  {cat.id === 'frontend' && 'UIs, SPAs & Visuals'}
                  {cat.id === 'backend' && 'APIs, Systems & Logic'}
                  {cat.id === 'database' && 'SQL, Cloud & Cache'}
                  {cat.id === 'server' && 'Hosting, CI/CD & Linux'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Controls Bar: Category Tabs, Search, Project Highlighter & View Mode */}
      <div className="content-card p-5 md:p-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Technology Categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === 'all'
                  ? 'bg-primary text-primary-content border-primary shadow-sm'
                  : 'bg-base-200/60 hover:bg-base-200 text-base-content/85 border-base-content/10'
              }`}
            >
              All Stacks ({categoryCounts.all})
            </button>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? 'bg-primary text-primary-content border-primary shadow-sm'
                      : 'bg-base-200/60 hover:bg-base-200 text-base-content/85 border-base-content/10'
                  }`}
                >
                  {cat.name} ({categoryCounts[cat.id]})
                </button>
              );
            })}
          </div>

          {/* View Mode & Sorting Switcher */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-base-content/70 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="select select-xs rounded-lg bg-base-200/80 border-base-content/15 text-xs text-base-content font-medium"
              >
                <option value="default">Default Order</option>
                <option value="rating-desc">Highest Rated (5 → 1)</option>
                <option value="name-asc">Name (A → Z)</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-base-200/70 p-1 rounded-full border border-base-content/10 text-xs">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-base-100 text-primary shadow-sm font-semibold'
                    : 'text-base-content/75 hover:text-base-content'
                }`}
              >
                Cards View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('matrix')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  viewMode === 'matrix'
                    ? 'bg-base-100 text-primary shadow-sm font-semibold'
                    : 'text-base-content/75 hover:text-base-content'
                }`}
              >
                Stack Matrix
              </button>
            </div>
          </div>
        </div>

        {/* Second Row: Search & Project Inspector Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
          {/* Search Box */}
          <div className="md:col-span-7 relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-base-content/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, rating, keyword, project..."
              className="input input-sm w-full pl-10 pr-9 py-4 rounded-xl bg-base-200/50 border-base-content/15 text-sm focus:border-primary focus:bg-base-100 transition-all text-base-content"
              aria-label="Search technologies"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-base-content/50 hover:text-base-content"
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>

          {/* Project Inspector Selector */}
          <div className="md:col-span-5 relative">
            <select
              value={selectedProjectSlug}
              onChange={(e) => setSelectedProjectSlug(e.target.value)}
              className="select select-sm w-full rounded-xl bg-base-200/50 border-base-content/15 text-sm focus:border-primary focus:bg-base-100 text-base-content"
              aria-label="Highlight tech stack by project"
            >
              <option value="">✨ Highlight Stack by Project...</option>
              {PROJECT_STACK_PROFILES.map((p) => (
                <option key={p.projectSlug || p.projectName} value={p.projectSlug || ''}>
                  {p.projectName} ({p.role})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters / Reset Cue */}
        {(activeCategory !== 'all' || sortBy !== 'default' || searchQuery || selectedProjectSlug) && (
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-base-content/75 border-t border-base-content/10">
            <span className="font-semibold text-base-content">Active filters:</span>
            {activeCategory !== 'all' && (
              <span className="badge badge-sm badge-primary gap-1">
                Category: {activeCategory}
                <button type="button" onClick={() => setActiveCategory('all')} className="hover:font-bold">×</button>
              </span>
            )}
            {sortBy !== 'default' && (
              <span className="badge badge-sm badge-outline gap-1">
                Sort: {sortBy === 'rating-desc' ? 'Highest Rated' : 'A-Z'}
                <button type="button" onClick={() => setSortBy('default')} className="hover:font-bold">×</button>
              </span>
            )}
            {searchQuery && (
              <span className="badge badge-sm badge-outline gap-1">
                Query: "{searchQuery}"
                <button type="button" onClick={() => setSearchQuery('')} className="hover:font-bold">×</button>
              </span>
            )}
            {selectedProject && (
              <span className="badge badge-sm badge-secondary gap-1">
                Highlighting: {selectedProject.projectName}
                <button type="button" onClick={() => setSelectedProjectSlug('')} className="hover:font-bold">×</button>
              </span>
            )}
            <button
              type="button"
              onClick={handleClearFilters}
              className="btn btn-ghost btn-xs text-primary underline underline-offset-2 ml-auto"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Interactive Project Stack Inspector Card */}
      {selectedProject && (
        <div className="content-card p-6 md:p-8 border-2 border-primary/40 bg-gradient-to-br from-primary/5 via-base-100 to-base-200/50 shadow-md">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="badge badge-primary badge-sm font-semibold">Interactive Stack Blueprint</span>
                <span className="text-xs text-base-content/70">{selectedProject.role}</span>
              </div>
              <h3 className="text-2xl font-black text-primary mt-1">{selectedProject.projectName}</h3>
              <p className="mt-2 text-sm text-base-content/85 max-w-2xl leading-relaxed">
                {selectedProject.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start">
              {selectedProject.projectSlug && (
                <a
                  href={`/projects/${selectedProject.projectSlug}`}
                  className="btn btn-primary btn-sm rounded-full shadow-sm"
                >
                  View Full Project Details →
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm rounded-full"
                >
                  Live Demo ↗
                </a>
              )}
              {selectedProject.repoUrl && (
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm rounded-full"
                >
                  Source Code ↗
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedProjectSlug('')}
                className="btn btn-ghost btn-sm rounded-full text-base-content/70"
                aria-label="Close project blueprint"
              >
                Dismiss
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-5 border-t border-base-content/15">
            <div className="bg-base-100/80 p-3.5 rounded-xl border border-sky-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-500">Frontend</span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selectedProject.frontend.length > 0 ? (
                  selectedProject.frontend.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-md bg-sky-500/10 text-sky-700 dark:text-sky-300 font-medium border border-sky-500/25">
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-base-content/50 italic">None / CLI / Embedded</span>
                )}
              </div>
            </div>

            <div className="bg-base-100/80 p-3.5 rounded-xl border border-indigo-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">Backend &amp; Logic</span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selectedProject.backend.length > 0 ? (
                  selectedProject.backend.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-medium border border-indigo-500/25">
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-base-content/50 italic">Client-side only</span>
                )}
              </div>
            </div>

            <div className="bg-base-100/80 p-3.5 rounded-xl border border-emerald-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">Database &amp; Data</span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selectedProject.database.length > 0 ? (
                  selectedProject.database.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-medium border border-emerald-500/25">
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-base-content/50 italic">Stateless / SGF files</span>
                )}
              </div>
            </div>

            <div className="bg-base-100/80 p-3.5 rounded-xl border border-amber-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Server &amp; Host</span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selectedProject.server.length > 0 ? (
                  selectedProject.server.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 font-medium border border-amber-500/25">
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-base-content/50 italic">Local binary / Standalone</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MATRIX VIEW (Side-by-side Architectural Board) */}
      {viewMode === 'matrix' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => {
              const items = groupedItems[cat.id];
              return (
                <div key={cat.id} className="content-card p-5 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-base-content/10">
                    <span className={`p-1.5 rounded-lg ${cat.colorClass}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={cat.iconSvg} />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-extrabold text-base text-base-content">{cat.name}</h3>
                      <span className="text-xs text-base-content/60">{items.length} technologies</span>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    {items.map((item) => {
                      const isHighlighted = highlightedTechNames.has(item.name);
                      return (
                        <div
                          key={item.id}
                          className={`p-3 rounded-xl border transition-all duration-200 ${
                            isHighlighted
                              ? 'border-primary ring-2 ring-primary/40 bg-primary/10 shadow-sm'
                              : 'border-base-content/10 bg-base-200/50 hover:bg-base-200 hover:border-base-content/20'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-bold text-sm text-base-content">{item.name}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-base-content/10 text-base-content/80 font-medium">
                              {item.badge}
                            </span>
                          </div>

                          {/* Star Rating in Matrix */}
                          <div className="mt-1.5 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              {renderStars(item.rating)}
                              <span className="text-[11px] font-bold text-amber-500">{item.rating}/5</span>
                            </div>
                            <span className="text-[10px] text-base-content/60 font-medium">
                              {item.proficiencyLabel}
                            </span>
                          </div>

                          <p className="mt-1.5 text-xs text-base-content/80 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                          {item.projects.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-base-content/10 flex flex-wrap gap-1">
                              {item.projects.slice(0, 2).map((proj) => (
                                <a
                                  key={proj.name}
                                  href={proj.slug ? `/projects/${proj.slug}` : (proj.url || '#')}
                                  className="text-[10px] text-primary hover:underline truncate max-w-[150px]"
                                >
                                  • {proj.name}
                                </a>
                              ))}
                              {item.projects.length > 2 && (
                                <span className="text-[10px] text-base-content/50">+{item.projects.length - 2} more</span>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {items.length === 0 && (
                      <div className="text-center py-8 text-xs text-base-content/50 italic">
                        No matches in this category.
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CARDS VIEW (Segmented by Category or Filtered) */}
      {viewMode === 'grid' && (
        <div className="space-y-10">
          {CATEGORIES.map((cat) => {
            // When filtering by a specific category, only display that category
            if (activeCategory !== 'all' && activeCategory !== cat.id) {
              return null;
            }

            const items = groupedItems[cat.id];
            if (items.length === 0 && searchQuery) {
              return null;
            }

            return (
              <section key={cat.id} id={cat.id} className="space-y-4">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-base-content/10">
                  <div className="flex items-center gap-3">
                    <span className={`p-2 rounded-xl ${cat.colorClass}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={cat.iconSvg} />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-primary">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-base-content/75">
                        {cat.shortDesc}
                      </p>
                    </div>
                  </div>
                  <span className="badge badge-outline text-xs self-start sm:self-center">
                    {items.length} {items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Cards Grid */}
                {items.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => {
                      const isHighlighted = highlightedTechNames.has(item.name);

                      return (
                        <div
                          key={item.id}
                          className={`card content-card transition-all duration-200 flex flex-col justify-between ${
                            isHighlighted
                              ? 'ring-2 ring-primary border-primary shadow-lg bg-primary/5'
                              : 'hover:border-primary/40'
                          }`}
                        >
                          <div className="card-body p-6 flex flex-col justify-between h-full space-y-4">
                            {/* Header: Title, Badge & 5-Star Rating */}
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="text-xl font-bold tracking-tight text-base-content hover:text-primary transition-colors">
                                  {item.name}
                                </h4>
                                <span className="badge badge-sm badge-outline text-[11px] shrink-0 font-medium">
                                  {item.badge}
                                </span>
                              </div>

                              {/* 5-Star Rating Bar */}
                              <div className="mt-2.5 flex items-center justify-between gap-2 p-2 rounded-xl bg-base-200/50 border border-base-content/10">
                                <div className="flex items-center gap-1.5">
                                  {renderStars(item.rating)}
                                  <span className="text-xs font-extrabold text-amber-500">
                                    {item.rating}/5
                                  </span>
                                </div>
                                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                                  item.rating === 5
                                    ? 'bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 font-bold'
                                    : item.rating === 4
                                    ? 'bg-primary/10 text-primary border border-primary/25'
                                    : 'bg-base-content/10 text-base-content/75'
                                }`}>
                                  {item.proficiencyLabel}
                                </span>
                              </div>

                              {isHighlighted && (
                                <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-content">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                  Used in {selectedProject?.projectName}
                                </div>
                              )}

                              {/* Description */}
                              <p className="mt-3 text-sm text-base-content/85 leading-relaxed">
                                {item.description}
                              </p>
                            </div>

                            {/* Highlights Checklist */}
                            {item.highlights.length > 0 && (
                              <div className="bg-base-200/50 rounded-xl p-3.5 border border-base-content/10 space-y-1.5">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-base-content/70 block">
                                  Key Capabilities &amp; Focus:
                                </span>
                                <ul className="space-y-1 text-xs text-base-content/80">
                                  {item.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-1.5 leading-snug">
                                      <span className="text-primary font-bold shrink-0">›</span>
                                      <span>{h}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Associated Projects Section */}
                            {item.projects.length > 0 && (
                              <div className="pt-2 border-t border-base-content/10">
                                <span className="text-xs font-semibold text-base-content/75 block mb-2">
                                  Applied in Projects:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {item.projects.map((proj) => {
                                    const isThisProjectSelected = selectedProjectSlug === proj.slug;
                                    return (
                                      <a
                                        key={proj.name}
                                        href={proj.slug ? `/projects/${proj.slug}` : (proj.url || '#')}
                                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all ${
                                          isThisProjectSelected
                                            ? 'bg-primary text-primary-content border-primary font-bold'
                                            : 'bg-base-200/80 hover:bg-base-200 text-base-content/90 border-base-content/15 hover:border-primary/50'
                                        }`}
                                      >
                                        {proj.name} {proj.slug ? '→' : '↗'}
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                            {/* Tags Section */}
                            {item.tags.length > 0 && (
                              <div className="card-actions pt-3 mt-auto border-t border-base-content/10 flex flex-wrap gap-1.5">
                                {item.tags.map((tag) => (
                                  <a
                                    key={tag}
                                    href={tagPath(tag)}
                                    className="tag-badge text-[11px]"
                                    style={{ '--tag-hue': getTagHue(tag) } as CSSProperties}
                                  >
                                    {tag}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="content-card p-8 text-center text-sm text-base-content/60">
                    No matching technologies found in this category.
                  </div>
                )}
              </section>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="content-card p-12 text-center space-y-3">
              <p className="text-lg font-bold text-base-content">No technologies match your filter criteria.</p>
              <p className="text-sm text-base-content/75">
                Try lowering your star rating threshold, changing your search keyword, or clearing your active filters.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="btn btn-primary btn-sm rounded-full mt-2"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Footer Navigation Box */}
      <div className="content-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-base font-bold text-base-content">Interested in seeing how these are applied?</h4>
          <p className="text-sm text-base-content/80 mt-1">
            Browse through detailed project writeups, interactive demos, and source code repositories.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="/other_projects" className="btn btn-primary btn-sm rounded-full">
            Browse All Projects →
          </a>
          <a href="/#technical-skills" className="btn btn-outline btn-sm rounded-full">
            Skills Overview
          </a>
        </div>
      </div>
    </main>
  );
}
