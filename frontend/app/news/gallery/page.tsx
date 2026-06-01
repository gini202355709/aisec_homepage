'use client';

import { useMemo, useState } from 'react';
import { Image as ImageIcon, CalendarDays } from 'lucide-react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import ContentCard from '@/components/news/ContentCard';
import SectionTitle from '@/components/news/SectionTitle';

type Category = '행사' | '교육' | '회의';
type GalleryItem = { id: number; title: string; desc: string; date: string; category: Category; gradient: string };

const ALL_GALLERY: GalleryItem[] = [
  { id: 1, title: 'AI 보안 컨퍼런스 2026', desc: '국내외 전문가 250명이 참여한 협회 대표 행사', date: '2026.05.14', category: '행사', gradient: 'from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]' },
  { id: 2, title: '전문위원회 발족식', desc: '6대 전문위원회 위원장 위촉 및 운영 방향 발표', date: '2026.04.03', category: '회의', gradient: 'from-[#60a5fa] via-[#2563eb] to-[#1d4ed8]' },
  { id: 3, title: '회원사 네트워킹 데이', desc: '신규 회원사 환영 및 업계 동향 공유의 자리', date: '2026.03.22', category: '행사', gradient: 'from-[#dbeafe] via-[#60a5fa] to-[#2563eb]' },
  { id: 4, title: 'AI 윤리 라운드테이블', desc: '학계·산업계 전문가 AI 윤리 토론회', date: '2026.03.05', category: '회의', gradient: 'from-[#1e3a8a] via-[#2563eb] to-[#60a5fa]' },
  { id: 5, title: '회원사 보안 실무 교육', desc: '실무자 대상 AI 보안 핸즈온 워크숍', date: '2026.02.18', category: '교육', gradient: 'from-[#eff6ff] via-[#93c5fd] to-[#2563eb]' },
  { id: 6, title: '신년 임원 워크숍', desc: '2026년 협회 사업 방향 설정 및 비전 공유', date: '2026.01.20', category: '회의', gradient: 'from-[#2563eb] via-[#60a5fa] to-[#dbeafe]' },
];

const filters = ['전체', '행사', '교육', '회의'] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('전체');
  const list = useMemo(
    () => (filter === '전체' ? ALL_GALLERY : ALL_GALLERY.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7fbff] text-[#0f172a]">
        <PageHero
          badge="Gallery"
          title={<>협회 활동 <span className="text-[#2563eb]">현장 갤러리</span></>}
          description="협회 주요 행사 및 활동의 생생한 현장을 사진으로 만나보세요."
        />

        <section className="relative -mt-10 pb-24">
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <ContentCard id="gallery-all">
              <SectionTitle icon={<ImageIcon />} label="Gallery" title="갤러리" />

              <div className="flex flex-wrap gap-2 mb-9">
                {filters.map((f) => {
                  const active = f === filter;
                  return (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-5 py-2.5 rounded-full text-[14px] font-bold border transition ${
                        active
                          ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-[0_8px_20px_rgba(37,99,235,0.25)]'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-[#2563eb] hover:text-[#2563eb]'
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((item) => (
                  <article
                    key={item.id}
                    className="group rounded-[26px] overflow-hidden bg-white border border-blue-100 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(37,99,235,0.18)] transition cursor-pointer"
                  >
                    <div className={`relative h-56 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.5),transparent_30%)]" />
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:32px_32px]" />
                      <div className="absolute bottom-5 left-5 w-12 h-12 rounded-2xl bg-white/95 text-[#2563eb] backdrop-blur flex items-center justify-center shadow-lg">
                        <ImageIcon size={20} />
                      </div>
                      <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-black text-[#2563eb] shadow-sm">
                        <CalendarDays size={11} />{item.date}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-[17px] font-black text-slate-950 mb-2 group-hover:text-[#2563eb] transition break-keep">{item.title}</h3>
                      <p className="text-[13.5px] text-slate-500 leading-relaxed break-keep">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </ContentCard>
          </div>
        </section>
      </main>
    </>
  );
}