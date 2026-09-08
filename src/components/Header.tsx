import { useState, useEffect } from 'react';
import { ThemeController } from './ThemeController';
import githubIconDark from '../assets/images/github/resized_GitHub_Invertocat_Black.png';
import githubIconLight from '../assets/images/github/resized_GitHub_Invertocat_White.png';
import linkedinIconDark from '../assets/images/github/resized_InBug-Black.png';
import linkedinIconLight from '../assets/images/github/resized_InBug-White.png';

type NavLink = { label: string; href: string };

type HeaderProps = {
  title: string;
  subtitle: string;
  links: NavLink[];
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
};

export function Header({ title, subtitle, links, theme, onThemeChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = window.location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIconMap = {
    github: theme === 'dark' ? githubIconLight : githubIconDark,
    linkedin: theme === 'dark' ? linkedinIconLight : linkedinIconDark
  } as const;

  // Filter regular text links vs icon/external buttons
  const navItems = links.filter((l) => !/github|linkedin|resume/i.test(l.label));
  const resumeLink = links.find((l) => /resume/i.test(l.label));
  const githubLink = links.find((l) => /github/i.test(l.label));
  const linkedinLink = links.find((l) => /linkedin/i.test(l.label));

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-base-100/90 backdrop-blur-md shadow-md border-b border-base-content/10 py-3'
            : 'bg-base-100/70 backdrop-blur-sm border-b border-base-content/5 py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-base-content hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-1"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-content font-extrabold text-sm shadow-sm">
              AC
            </span>
            <span className="hidden sm:inline">Axyl Carefoot-Schulz</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-base-content/85 hover:text-primary hover:bg-base-200/80 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {resumeLink && (
              <a
                href={resumeLink.href}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex btn btn-outline btn-primary btn-xs sm:btn-sm rounded-full font-medium"
              >
                Résumé (PDF)
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-circle btn-sm"
                aria-label="GitHub Profile"
              >
                <img
                  src={socialIconMap.github}
                  alt=""
                  className="w-4 h-4 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            )}

            {linkedinLink && (
              <a
                href={linkedinLink.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-circle btn-sm"
                aria-label="LinkedIn Profile"
              >
                <img
                  src={socialIconMap.linkedin}
                  alt=""
                  className="w-4 h-4 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            )}

            <div className="pl-1 border-l border-base-content/15">
              <ThemeController theme={theme} onChange={onThemeChange} />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden btn btn-ghost btn-circle btn-sm ml-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-base-content/10 bg-base-100/95 px-4 pt-3 pb-5 space-y-2 mt-3 shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-1">
              {navItems.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-base-content/90 hover:bg-base-200 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {resumeLink && (
                <a
                  href={resumeLink.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-base-200 transition-colors font-semibold"
                >
                  📄 View Résumé (PDF)
                </a>
              )}
            </nav>
          </div>
        )}
      </div>

      {/* Subpage Breadcrumb / Title Bar (Only on non-homepages) */}
      {!isHomePage && (
        <div className="bg-base-200/60 border-b border-base-content/10 py-5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-1 text-sm text-base-content/75 max-w-3xl leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
