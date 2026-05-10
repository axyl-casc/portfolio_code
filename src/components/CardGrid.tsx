import type { CSSProperties } from 'react';
import type { CardItem } from '../types';
import { getTagHue } from '../utils/tagColors';

export function CardGrid({
  items,
  grid = false,
  cardClassName = '',
  cardStyle
}: {
  items: CardItem[];
  grid?: boolean;
  cardClassName?: string;
  cardStyle?: CSSProperties;
}) {
  return (
    <div className={grid ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'space-y-6'}>
      {items.map((item) => (
        <div
          key={item.href}
          className={`card content-card content-card--interactive transition-all duration-200 ${cardClassName}`.trim()}
          style={cardStyle}
        >
          <div className="card-body relative">
            <a href={item.href} className="card-link-overlay" aria-label={`Open ${item.title}`} />
            <h3 className="card-title text-base-content">
              {item.title}
            </h3>
            <p className="text-base-content/80">{item.description}</p>
            {item.tags && item.tags.length > 0 && (
              <div className="card-actions pt-2 relative z-10">
                {item.tags.map((tag) => (
                  <a
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                    className="badge tag-badge hover:opacity-80 transition-opacity"
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
