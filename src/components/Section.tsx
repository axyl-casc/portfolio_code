import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
};

export function Section({ title, description, children, id }: SectionProps) {
  return (
    <section id={id} className="collapse collapse-arrow bg-base-100 border border-base-300 shadow-sm">
      <input type="checkbox" defaultChecked />
      <div className="collapse-title">
        <h2 className="text-2xl font-semibold text-primary">{title}</h2>
        <p className="mt-2 text-sm text-base-content/80">{description}</p>
      </div>
      <div className="collapse-content pt-1">{children}</div>
    </section>
  );
}
