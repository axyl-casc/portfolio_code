import { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type LayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
};

const homeLinks = [
  { label: 'About me', href: '#about-me' },
  { label: 'Technical Skills', href: '#technical-skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'GitHub', href: 'https://github.com/axyl-casc' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axyl-carefoot-schulz-7b3024200/' }
];

const defaultLinks = [
  { label: 'Home', href: '/' },
  { label: 'GitHub', href: 'https://github.com/axyl-casc' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axyl-carefoot-schulz-7b3024200/' }
];

export function Layout({ title, subtitle, children, theme, onThemeChange }: LayoutProps) {
  const links = window.location.pathname === '/' ? homeLinks : defaultLinks;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-surface relative min-h-screen overflow-hidden text-base-content font-sans leading-normal tracking-normal">
      <div className="animated-background" aria-hidden="true">
        <div className="background-wave background-wave--top-light" />
        <div className="background-wave background-wave--top-deep" />
        <div className="background-wave background-wave--front" />
        <div className="background-wave background-wave--middle" />
        <div className="background-wave background-wave--back" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <button type="button" className="scroll-top-button" onClick={handleScrollToTop} aria-label="Scroll to top">
          ↑
        </button>
        <Header title={title} subtitle={subtitle} links={links} theme={theme} onThemeChange={onThemeChange} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
