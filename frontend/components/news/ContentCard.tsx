import type { ReactNode } from 'react';

export default function ContentCard({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="relative bg-white rounded-[40px] p-9 md:p-14 border border-blue-100 shadow-[0_24px_80px_rgba(37,99,235,0.08)] overflow-hidden"
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}