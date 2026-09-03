import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
};

export function Section({ title, description, children, id }: SectionProps) {
  return (
    <section id={id} className="collapse collapse-arrow content-card shadow-md">
      <input type="checkbox" defaultChecked />
      <div className="collapse-title py-5 px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">{title}</h2>
        <p className="mt-1.5 text-sm md:text-base text-base-content/80 leading-relaxed">{description}</p>
      </div>
      <div className="collapse-content px-6 pb-6 pt-2">{children}</div>
    </section>
  );
}

