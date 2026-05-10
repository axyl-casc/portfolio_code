import { useEffect, useState } from 'react';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { OtherProjectsPage } from './pages/OtherProjectsPage';
import { OtherHobbiesPage } from './pages/OtherHobbiesPage';
import { ProjectPage } from './pages/ProjectPage';
import { HobbyPage } from './pages/HobbyPage';
import { TagPage } from './pages/TagPage';
import { projects } from './projects';
import { hobbies } from './hobbies';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


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
  const projectMatch = path.match(/^\/projects\/([^/]+)\/?$/);
  const hobbyMatch = path.match(/^\/hobbies\/([^/]+)\/?$/);
  const tagMatch = path.match(/^\/tags\/([^/]+)\/?$/);
  const project = projectMatch ? projects.find((item) => item.slug === projectMatch[1]) : undefined;
  const hobby = hobbyMatch ? hobbies.find((item) => item.slug === hobbyMatch[1]) : undefined;
  const tag = tagMatch ? decodeURIComponent(tagMatch[1]) : undefined;

  if (project) {
    return (
      <Layout title="Project" subtitle="Project details and links." theme={theme} onThemeChange={setTheme}>
        <ProjectPage project={project} />
      </Layout>
    );
  }

  if (hobby) {
    return (
      <Layout title="Hobbies" subtitle="Details and links for hobbies." theme={theme} onThemeChange={setTheme}>
        <HobbyPage hobby={hobby} />
      </Layout>
    );
  }

  if (isOtherProjects) {
    return (
      <Layout title="Projects" subtitle="Explore my other projects." theme={theme} onThemeChange={setTheme}>
        <OtherProjectsPage />
      </Layout>
    );
  }

  if (tag) {
    return (
      <Layout title="Tags" subtitle="Explore everything related to a specific tag." theme={theme} onThemeChange={setTheme}>
        <TagPage tag={tag} />
      </Layout>
    );
  }

  if (isOtherHobbies) {
    return (
      <Layout title="Hobbies" subtitle="Explore my other hobbies." theme={theme} onThemeChange={setTheme}>
        <OtherHobbiesPage />
      </Layout>
    );
  }

  return (
    <Layout
      title="Axyl Carefoot-Schulz"
      subtitle="Software Developer | Building Scalable and User Focused Applications | Full Stack Development"
      theme={theme}
      onThemeChange={setTheme}
    >
      <HomePage />
    </Layout>
  );
}

export default App;
