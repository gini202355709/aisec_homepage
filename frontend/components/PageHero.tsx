import { Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

export default function PageHero({
  badge,
  title,
  description,
}: {
  badge: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="relative min-h-[400px] bg-gradient-to-br from-white via-[#eef8ff] to-[#dbeeff] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_18%_28%,rgba(147,197,253,0.28),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:76px_76px]" />
      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 pt-28 pb-20">
        <div className="max-w-[820px]">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 shadow-sm text-[#2563eb] text-sm font-bold mb-7">
            <Sparkles size={16} /> {badge}
          </span>
          <h1 className="text-[40px] md:text-[46px] font-black leading-[1.08] tracking-[-0.045em] break-keep text-slate-950">
            {title}
          </h1>
          <p className="mt-7 text-lg text-slate-600 leading-relaxed max-w-[720px] break-keep">{description}</p>
        </div>
      </div>
    </section>
  );
}