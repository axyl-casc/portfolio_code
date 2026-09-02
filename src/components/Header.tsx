import { useState } from 'react';
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

const profilePictures = Object.values(
  import.meta.glob('../assets/images/pfp/*.{jpg,jpeg,JPG,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
    query: '?url'
  })
) as string[];

export function Header({ title, subtitle, links, theme, onThemeChange }: HeaderProps) {
  const [profilePicture] = useState(() => {
    const randomIndex = Math.floor(Math.random() * profilePictures.length);
    return profilePictures[randomIndex];
  });
  const [isProfilePictureLoaded, setIsProfilePictureLoaded] = useState(false);

  const socialIconMap = {
    github: theme === 'dark' ? githubIconLight : githubIconDark,
    linkedin: theme === 'dark' ? linkedinIconLight : linkedinIconDark
  } as const;

return (
  <header className="site-header">
    <div className="container mx-auto">
      <div className="header-shell relative">
        <div className="header-theme-control">
          <ThemeController theme={theme} onChange={onThemeChange} />
        </div>

        {profilePicture && (
          <img
            src={profilePicture}
            alt=""
            className={`header-profile-image ${
              isProfilePictureLoaded ? 'header-profile-image--loaded' : ''
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsProfilePictureLoaded(true)}
            aria-hidden="true"
          />
        )}

        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>

        <nav className="header-nav" aria-label="Primary">
          {links.map((link) =>
            /github|linkedin/i.test(link.label) ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="header-social-link"
                aria-label={link.label}
              >
                <img
                  src={
                    socialIconMap[
                      link.label.toLowerCase() as keyof typeof socialIconMap
                    ]
                  }
                  alt=""
                  className="header-social-icon"
                />
              </a>
            ) : (
              <a key={link.href} href={link.href} className="header-nav-link">
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </div>
  </header>
);
}
