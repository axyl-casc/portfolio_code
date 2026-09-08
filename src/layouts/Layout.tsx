import { ReactNode, useEffect, useRef, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import resumeUrl from '../assets/Axyl - Resume.pdf?url';

type LayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
};

const homeLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Applied AI', href: '#applied-ai' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Résumé', href: resumeUrl },
  { label: 'GitHub', href: 'https://github.com/axyl-casc' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axyl-carefoot-schulz-7b3024200/' }
];

const defaultLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Tech Stacks', href: '/tech-stack' },
  { label: 'Résumé', href: resumeUrl },
  { label: 'GitHub', href: 'https://github.com/axyl-casc' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axyl-carefoot-schulz-7b3024200/' }
];

const DATA_REVEAL_SELECTOR = '[data-reveal]';

export function Layout({ title, subtitle, children, theme, onThemeChange }: LayoutProps) {
  const links = window.location.pathname === '/' ? homeLinks : defaultLinks;
  const [showScrollTop, setShowScrollTop] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Yobo-style scroll-reveal IntersectionObserver
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealAll = () => {
      root.querySelectorAll(DATA_REVEAL_SELECTOR).forEach((el) => {
        el.classList.add('is-revealed');
      });
    };

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
      }
    );

    const observeElement = (el: Element) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el);
      }
    };

    root.querySelectorAll(DATA_REVEAL_SELECTOR).forEach(observeElement);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.matches(DATA_REVEAL_SELECTOR)) observeElement(node);
            node.querySelectorAll?.(DATA_REVEAL_SELECTOR).forEach(observeElement);
          }
        });
      });
    });

    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, [children]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      ref={rootRef}
      className="scroll-reveal-root site-surface relative min-h-screen overflow-hidden text-base-content font-sans leading-normal tracking-normal"
    >
      <div className="animated-background" aria-hidden="true">
        <div className="background-wave background-wave--top-light" />
        <div className="background-wave background-wave--top-deep" />
        <div className="background-wave background-wave--front" />
        <div className="background-wave background-wave--middle" />
        <div className="background-wave background-wave--back" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <button
          type="button"
          className={`scroll-top-button ${showScrollTop ? 'scroll-top-button--visible' : 'scroll-top-button--hidden'}`}
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          tabIndex={showScrollTop ? 0 : -1}
          aria-hidden={!showScrollTop}
        >
          ↑
        </button>
        <Header title={title} subtitle={subtitle} links={links} theme={theme} onThemeChange={onThemeChange} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
