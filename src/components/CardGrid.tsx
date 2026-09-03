import type { CSSProperties } from 'react';
import type { CardItem } from '../types';
import { getTagHue } from '../utils/tagColors';
import { tagPath } from '../utils/tags';

export function CardGrid({
  items,
  grid = true,
  cardClassName = '',
  cardStyle
}: {
  items: CardItem[];
  grid?: boolean;
  cardClassName?: string;
  cardStyle?: CSSProperties;
}) {
  const containerClass = grid
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  return (
    <div className={containerClass}>
      {items.map((item) => (
        <div
          key={item.href}
          className={`card content-card content-card--interactive group flex flex-col justify-between ${cardClassName}`.trim()}
          style={cardStyle}
        >
          <div className="card-body p-6 flex flex-col justify-between h-full relative">
            <a href={item.href} className="card-link-overlay" aria-label={`Open ${item.title}`} />
            <div>
              <h3 className="card-title text-xl font-bold tracking-tight text-base-content group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-base-content/85">
                {item.description}
              </p>
            </div>
            {item.tags && item.tags.length > 0 && (
              <div className="card-actions pt-5 mt-auto relative z-20 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
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
        </div>
      ))}
    </div>
  );
}

