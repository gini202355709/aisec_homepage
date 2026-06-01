import type { ReactNode } from 'react';

export default function SectionTitle({ icon, label, title }: { icon: ReactNode; label: string; title: string }) {
  return (
    <div className="mb-9">
      <div className="w-[60px] h-[60px] rounded-[22px] flex items-center justify-center mb-5 bg-[#eff6ff] text-[#2563eb] border border-blue-100">
        {icon}
      </div>
      <span className="text-[12px] font-black tracking-[0.22em] uppercase text-[#2563eb]">{label}</span>
      <h2 className="text-3xl md:text-4xl font-black mt-2 tracking-[-0.03em] text-slate-950">{title}</h2>
    </div>
  );
}