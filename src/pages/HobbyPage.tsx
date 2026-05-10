import type { Hobby } from '../types';

export function HobbyPage({ hobby }: { hobby: Hobby }) {
  const hasHobbyUrl = hobby.hobbyUrl.trim().length > 0;

  return (
    <main id="main-content" className="site-main flex-1" tabIndex={-1}>
      <section className="max-w-3xl mx-auto card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body space-y-4">
          <h2 className="text-3xl font-bold text-primary">{hobby.title}</h2>
          <p className="text-base-content/80">{hobby.description}</p>
          {hasHobbyUrl ? (
            <div className="pt-2">
              <a href={hobby.hobbyUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Learn More</a>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
