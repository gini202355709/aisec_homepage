'use client';

import { useMemo, useState } from 'react';
import { FileText, Download, CalendarDays, Search } from 'lucide-react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import ContentCard from '@/components/news/ContentCard';
import SectionTitle from '@/components/news/SectionTitle';

type ResourceType = 'PDF' | 'DOC' | 'XLS' | 'ZIP';
type ResourceItem = { id: number; title: string; type: ResourceType; size: string; date: string; downloads: number };

const ALL_RESOURCES: ResourceItem[] = [
  { id: 1, title: 'AI 시스템 보안 가이드라인 v2.0', type: 'PDF', size: '3.2MB', date: '2026.05.10', downloads: 1842 },
  { id: 2, title: '생성형 AI 보안 위협 대응 체크리스트', type: 'DOC', size: '480KB', date: '2026.04.28', downloads: 956 },
  { id: 3, title: 'AI 보안 표준화 동향 리포트', type: 'PDF', size: '5.1MB', date: '2026.04.12', downloads: 723 },
  { id: 4, title: '회원사 보안 진단 자가평가표', type: 'XLS', size: '210KB', date: '2026.03.30', downloads: 612 },
  { id: 5, title: 'AI 모델 취약점 분석 사례집', type: 'PDF', size: '8.7MB', date: '2026.03.15', downloads: 1102 },
  { id: 6, title: '협회 양식 자료 모음 (2026년 개정판)', type: 'ZIP', size: '1.4MB', date: '2026.02.28', downloads: 480 },
  { id: 7, title: 'LLM 프롬프트 인젝션 방어 가이드', type: 'PDF', size: '2.6MB', date: '2026.02.10', downloads: 834 },
  { id: 8, title: '연간 회원사 보안 통계 데이터', type: 'XLS', size: '1.1MB', date: '2026.01.22', downloads: 367 },
];

const fileTypeStyle: Record<ResourceType, string> = {
  PDF: 'bg-[#fef2f2] text-[#ef4444]',
  DOC: 'bg-[#eff6ff] text-[#2563eb]',
  XLS: 'bg-[#f0fdf4] text-[#15803d]',
  ZIP: 'bg-[#fefce8] text-[#ca8a04]',
};

const filters = ['전체', 'PDF', 'DOC', 'XLS', 'ZIP'] as const;

export default function ResourcesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('전체');
  const [sort, setSort] = useState<'latest' | 'downloads'>('latest');
  const [query, setQuery] = useState('');

  const list = useMemo(() => {
    let r = ALL_RESOURCES;
    if (filter !== '전체') r = r.filter((x) => x.type === filter);
    if (query.trim()) r = r.filter((x) => x.title.includes(query.trim()));
    return [...r].sort((a, b) =>
      sort === 'latest' ? b.date.localeCompare(a.date) : b.downloads - a.downloads,
    );
  }, [filter, sort, query]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7fbff] text-[#0f172a]">
        <PageHero
          badge="Resources"
          title={<>협회 <span className="text-[#2563eb]">발간 자료</span> 전체보기</>}
          description="가이드라인, 리포트, 양식 자료를 분류·검색하여 다운로드하실 수 있습니다."
        />

        <section className="relative -mt-10 pb-24">
          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
            <ContentCard id="resources-all">
              <SectionTitle icon={<FileText />} label="Resources" title="자료실" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
                <div className="flex flex-wrap gap-2">
                  {filters.map((f) => {
                    const active = f === filter;
                    return (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full text-[13px] font-bold border transition ${
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
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2.5 rounded-[14px] border border-slate-300 bg-white px-4 py-2.5 focus-within:border-[#2563eb] focus-within:ring-4 focus-within:ring-[#2563eb]/10 transition">
                    <Search size={16} className="text-slate-400 shrink-0" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="자료 검색"
                      className="w-full sm:w-44 bg-transparent text-[14px] text-slate-700 outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as 'latest' | 'downloads')}
                    className="rounded-[14px] border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-bold text-slate-600 outline-none focus:border-[#2563eb] cursor-pointer"
                  >
                    <option value="latest">최신순</option>
                    <option value="downloads">다운로드순</option>
                  </select>
                </div>
              </div>

              <p className="text-[13px] text-slate-500 mb-5">
                총 <span className="font-black text-[#2563eb]">{list.length}</span>건
              </p>

              {list.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {list.map((res) => (
                    <article
                      key={res.id}
                      className="group p-7 rounded-[26px] bg-[#f8fbff] border border-blue-100 hover:bg-white hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white text-[#2563eb] border border-blue-100 flex items-center justify-center">
                          <FileText size={22} />
                        </div>
                        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-black tracking-wider ${fileTypeStyle[res.type]}`}>
                          {res.type}
                        </span>
                      </div>
                      <h3 className="text-[17px] font-black text-slate-950 mb-3 break-keep group-hover:text-[#2563eb] transition flex-1">
                        {res.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[12px] text-slate-500 mb-5">
                        <span className="flex items-center gap-1.5"><CalendarDays size={12} />{res.date}</span>
                        <span className="text-slate-300">|</span>
                        <span>{res.size}</span>
                        <span className="text-slate-300">|</span>
                        <span>{res.downloads.toLocaleString()}회</span>
                      </div>
                      <button className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-[#2563eb] border border-blue-100 font-bold text-[14px] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition">
                        다운로드 <Download size={15} />
                      </button>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center text-slate-400 text-[15px]">검색 결과가 없습니다.</div>
              )}
            </ContentCard>
          </div>
        </section>
      </main>
    </>
  );
}