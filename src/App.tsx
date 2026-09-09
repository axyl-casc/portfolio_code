import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { OtherProjectsPage } from './pages/OtherProjectsPage';
import { OtherHobbiesPage } from './pages/OtherHobbiesPage';
import { ProjectPage } from './pages/ProjectPage';
import { HobbyPage } from './pages/HobbyPage';
import { TagPage } from './pages/TagPage';
import { TechStackPage } from './pages/TechStackPage';
import { projects } from './projects';
import { hobbies } from './hobbies';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('page-theme');
    return stored === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('page-theme', theme);
  }, [theme]);

  const handleThemeChange = (nextTheme: 'light' | 'dark') => {
    if (typeof document === 'undefined' || !('startViewTransition' in document)) {
      setTheme(nextTheme);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('page-theme', nextTheme);
      });
    });
  };


  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash.replace('#', '');

      if (!hash) {
        return;
      }

      requestAnimationFrame(() => {
        const target = document.getElementById(hash);

        if (!target) {
          return;
        }

        const collapsibleToggle = target.querySelector<HTMLInputElement>('input[type="checkbox"]');
        if (collapsibleToggle) {
          collapsibleToggle.checked = true;
        }

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    scrollToHashTarget();
    window.addEventListener('hashchange', scrollToHashTarget);

    return () => {
      window.removeEventListener('hashchange', scrollToHashTarget);
    };
  }, [window.location.pathname]);

  const path = window.location.pathname;
  const isOtherProjects = path.includes('other_projects');
  const isOtherHobbies = path.includes('other_hobbies');
  const isTechStack = path.includes('tech-stack') || path.includes('tech_stack') || path.includes('techstack');
  const projectMatch = path.match(/^\/projects\/([^/]+)\/?$/);
  const hobbyMatch = path.match(/^\/hobbies\/([^/]+)\/?$/);
  const tagMatch = path.match(/^\/tags\/([^/]+)\/?$/);
  const project = projectMatch
    ? projects.find(
        (item) =>
          item.slug === projectMatch[1] ||
          (item.slug === 'assembly-board-game' && (projectMatch[1] === 'compiled' || projectMatch[1] === 'compiled-game'))
      )
    : undefined;
  const hobby = hobbyMatch ? hobbies.find((item) => item.slug === hobbyMatch[1]) : undefined;
  const tag = tagMatch ? decodeURIComponent(tagMatch[1]) : undefined;

  if (isTechStack) {
    return (
      <Layout
        title="Tech Stacks"
        subtitle="Frontend, Backend, Database, and Server technologies powering my software."
        theme={theme}
        onThemeChange={handleThemeChange}
      >
        <TechStackPage />
      </Layout>
    );
  }

  if (project) {
    return (
      <Layout title="Project" subtitle="Project details and links." theme={theme} onThemeChange={handleThemeChange}>
        <ProjectPage project={project} />
      </Layout>
    );
  }

  if (hobby) {
    return (
      <Layout title="Hobbies" subtitle="Details and links for hobbies." theme={theme} onThemeChange={handleThemeChange}>
        <HobbyPage hobby={hobby} />
      </Layout>
    );
  }

  if (isOtherProjects) {
    return (
      <Layout title="Projects" subtitle="Explore my other projects." theme={theme} onThemeChange={handleThemeChange}>
        <OtherProjectsPage />
      </Layout>
    );
  }

  if (tag) {
    return (
      <Layout title="Tags" subtitle="Explore everything related to a specific tag." theme={theme} onThemeChange={handleThemeChange}>
        <TagPage tag={tag} />
      </Layout>
    );
  }

  if (isOtherHobbies) {
    return (
      <Layout title="Hobbies" subtitle="Explore my other hobbies." theme={theme} onThemeChange={handleThemeChange}>
        <OtherHobbiesPage />
      </Layout>
    );
  }

  return (
    <Layout
      title="Axyl Carefoot-Schulz"
      subtitle="Software Developer | Building Scalable and User Focused Applications | Full Stack Development"
      theme={theme}
      onThemeChange={handleThemeChange}
    >
      <HomePage />
    </Layout>
  );
}

export default App;
