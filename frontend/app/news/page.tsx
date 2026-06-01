import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Megaphone,
  FileText,
  Image as ImageIcon,
  Download,
  CalendarDays,
  ChevronRight,
  Search,
  Pin,
  Eye,
  Pencil,
} from 'lucide-react';
import Header from '@/components/Header';
import Link from 'next/link';
import ContentCard from '@/components/news/ContentCard';
import SectionTitle from '@/components/news/SectionTitle';

type NoticeItem = {
  id: number;
  tag: '중요' | '모집' | '교육' | '일반';
  title: string;
  date: string;
  views: number;
  pinned?: boolean;
};

type ResourceItem = {
  id: number;
  title: string;
  type: 'PDF' | 'DOC' | 'XLS' | 'ZIP';
  size: string;
  date: string;
  downloads: number;
};

type GalleryItem = {
  id: number;
  title: string;
  desc: string;
  date: string;
  gradient: string;
};

export default function NewsPage() {
  const navItems = ['공지사항', '자료실', '갤러리'];

  const notices: NoticeItem[] = [
    {
      id: 1,
      tag: '중요',
      title: '2026 한국AI보안협회 정기총회 및 AI 보안 컨퍼런스 개최 안내',
      date: '2026.05.14',
      views: 1284,
      pinned: true,
    },
    {
      id: 2,
      tag: '모집',
      title: 'AI 보안 전문위원회 신규 위원 모집 공고',
      date: '2026.05.02',
      views: 892,
    },
    {
      id: 3,
      tag: '교육',
      title: '회원사 대상 AI 보안 교육 프로그램 안내',
      date: '2026.04.21',
      views: 567,
    },
    {
      id: 4,
      tag: '일반',
      title: '협회 사무국 이전 안내 (5월 1일자)',
      date: '2026.04.18',
      views: 423,
    },
    {
      id: 5,
      tag: '중요',
      title: 'AI 보안 가이드라인 v2.0 배포 안내',
      date: '2026.04.08',
      views: 1560,
    },
    {
      id: 6,
      tag: '일반',
      title: '제3회 한국 AI 보안 컨퍼런스 사전 등록 안내',
      date: '2026.03.27',
      views: 738,
    },
  ];

  const resources: ResourceItem[] = [
    {
      id: 1,
      title: 'AI 시스템 보안 가이드라인 v2.0',
      type: 'PDF',
      size: '3.2MB',
      date: '2026.05.10',
      downloads: 1842,
    },
    {
      id: 2,
      title: '생성형 AI 보안 위협 대응 체크리스트',
      type: 'DOC',
      size: '480KB',
      date: '2026.04.28',
      downloads: 956,
    },
    {
      id: 3,
      title: 'AI 보안 표준화 동향 리포트',
      type: 'PDF',
      size: '5.1MB',
      date: '2026.04.12',
      downloads: 723,
    },
    {
      id: 4,
      title: '회원사 보안 진단 자가평가표',
      type: 'XLS',
      size: '210KB',
      date: '2026.03.30',
      downloads: 612,
    },
    {
      id: 5,
      title: 'AI 모델 취약점 분석 사례집',
      type: 'PDF',
      size: '8.7MB',
      date: '2026.03.15',
      downloads: 1102,
    },
    {
      id: 6,
      title: '협회 양식 자료 모음 (2026년 개정판)',
      type: 'ZIP',
      size: '1.4MB',
      date: '2026.02.28',
      downloads: 480,
    },
  ];

  const gallery: GalleryItem[] = [
    {
      id: 1,
      title: 'AI 보안 컨퍼런스 2026',
      desc: '국내외 전문가 250명이 참여한 협회 대표 행사',
      date: '2026.05.14',
      gradient: 'from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]',
    },
    {
      id: 2,
      title: '전문위원회 발족식',
      desc: '6대 전문위원회 위원장 위촉 및 운영 방향 발표',
      date: '2026.04.03',
      gradient: 'from-[#60a5fa] via-[#2563eb] to-[#1d4ed8]',
    },
    {
      id: 3,
      title: '회원사 네트워킹 데이',
      desc: '신규 회원사 환영 및 업계 동향 공유의 자리',
      date: '2026.03.22',
      gradient: 'from-[#dbeafe] via-[#60a5fa] to-[#2563eb]',
    },
    {
      id: 4,
      title: 'AI 윤리 라운드테이블',
      desc: '학계·산업계 전문가 AI 윤리 토론회',
      date: '2026.03.05',
      gradient: 'from-[#1e3a8a] via-[#2563eb] to-[#60a5fa]',
    },
    {
      id: 5,
      title: '국제 표준화 협력 회의',
      desc: 'ISO/IEC 워킹그룹과의 공동 협력 미팅',
      date: '2026.02.18',
      gradient: 'from-[#eff6ff] via-[#93c5fd] to-[#2563eb]',
    },
    {
      id: 6,
      title: '신년 임원 워크숍',
      desc: '2026년 협회 사업 방향 설정 및 비전 공유',
      date: '2026.01.20',
      gradient: 'from-[#2563eb] via-[#60a5fa] to-[#dbeafe]',
    },
  ];

  const tagStyle: Record<NoticeItem['tag'], string> = {
    중요: 'bg-[#fef2f2] text-[#ef4444] border-red-100',
    모집: 'bg-[#eff6ff] text-[#2563eb] border-blue-100',
    교육: 'bg-[#fefce8] text-[#ca8a04] border-yellow-100',
    일반: 'bg-slate-100 text-slate-600 border-slate-200',
  };

  const fileTypeStyle: Record<ResourceItem['type'], string> = {
    PDF: 'bg-[#fef2f2] text-[#ef4444]',
    DOC: 'bg-[#eff6ff] text-[#2563eb]',
    XLS: 'bg-[#f0fdf4] text-[#15803d]',
    ZIP: 'bg-[#fefce8] text-[#ca8a04]',
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f7fbff] text-[#0f172a] overflow-hidden">
        {/* 히어로 섹션 */}
        <section className="relative min-h-[520px] bg-gradient-to-br from-white via-[#eef8ff] to-[#dbeeff] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_18%_28%,rgba(147,197,253,0.28),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:76px_76px]" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 pt-28 pb-24">
            <div className="max-w-[820px]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 shadow-sm text-[#2563eb] text-sm font-bold mb-7">
                <Sparkles size={16} />
                News &amp; Resources
              </span>

              <h1 className="text-[42px] md:text-[48px] font-black leading-[1.08] tracking-[-0.045em] break-keep text-slate-950">
                협회의 새로운
                <br />
                <span className="text-[#2563eb]">소식과 자료</span>를 만나보세요
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-[720px] break-keep">
                공지사항, 연구 자료, 행사 사진까지 한국AI보안협회의 다양한 활동을
                한곳에서 확인하실 수 있습니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#section-0"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2563eb] text-white font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)]"
                >
                  공지사항 보기 <ArrowRight size={18} />
                </a>

                <a
                  href="#section-1"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-blue-50 transition shadow-sm"
                >
                  자료실 바로가기 <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 본문 콘텐츠 */}
        <section className="relative py-24">
          <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-white to-transparent" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-[300px_1fr] gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-32 rounded-[32px] overflow-hidden bg-white border border-blue-100 shadow-[0_24px_70px_rgba(37,99,235,0.08)]">
                <div className="p-7 bg-gradient-to-br from-[#eff6ff] to-white border-b border-blue-100">
                  <p className="text-xs font-black tracking-[0.2em] uppercase text-[#2563eb]">
                    Contents
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">자료 및 소식</h2>
                </div>

                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href={`#section-${index}`}
                    className="flex items-center justify-between px-7 py-5 text-[15px] font-bold text-slate-600 border-b border-slate-100 last:border-0 hover:bg-[#f0f7ff] hover:text-[#2563eb] transition"
                  >
                    {item}
                    <ChevronRight size={16} />
                  </a>
                ))}
              </div>
            </aside>

            <div className="space-y-10">
              {/* 1. 공지사항 */}
              <ContentCard id="section-0">
                <SectionTitle icon={<Megaphone />} label="Notice" title="공지사항" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회의 주요 공지 및 안내사항을 확인하실 수 있습니다.
                </p>

                {/* 검색 + 글쓰기 */}
                <div className="mb-7 flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-3 rounded-[16px] border border-slate-300 bg-white px-5 py-3.5 focus-within:border-[#2563eb] focus-within:ring-4 focus-within:ring-[#2563eb]/10 transition">
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input
                      placeholder="공지사항 검색"
                      className="w-full bg-transparent text-[14px] text-slate-700 outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <Link
                    href="/news/notice/write"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[16px] bg-[#2563eb] text-white font-bold text-[14px] hover:bg-[#1d4ed8] transition shadow-[0_10px_28px_rgba(37,99,235,0.25)] whitespace-nowrap"
                  >
                    <Pencil size={16} /> 글쓰기
                  </Link>
                </div>

                {/* 공지 리스트 */}
                <ul className="divide-y divide-slate-100 border-y border-slate-100">
                  {notices.map((notice) => (
                    <li key={notice.id}>
                      <a
                        href="#"
                        className="group flex items-center gap-4 py-5 hover:bg-[#f8fbff] transition px-2 -mx-2 rounded-[8px]"
                      >
                        {/* 핀 아이콘 */}
                        <div className="shrink-0 w-8">
                          {notice.pinned ? (
                            <div className="w-7 h-7 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                              <Pin size={13} />
                            </div>
                          ) : null}
                        </div>

                        {/* 태그 */}
                        <span
                          className={`shrink-0 inline-flex items-center justify-center min-w-[52px] px-3 py-1 rounded-full text-[11px] font-black tracking-wider border ${tagStyle[notice.tag]}`}
                        >
                          {notice.tag}
                        </span>

                        {/* 제목 */}
                        <h3 className="flex-1 min-w-0 text-[15px] md:text-[16px] font-bold text-slate-800 group-hover:text-[#2563eb] transition break-keep">
                          {notice.title}
                        </h3>

                        {/* 메타 */}
                        <div className="hidden sm:flex items-center gap-5 shrink-0 text-[12.5px] text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <Eye size={13} />
                            {notice.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <CalendarDays size={13} />
                            {notice.date}
                          </span>
                        </div>

                        <ChevronRight
                          size={16}
                          className="shrink-0 text-slate-300 group-hover:text-[#2563eb] group-hover:translate-x-1 transition-all"
                        />
                      </a>
                    </li>
                  ))}
                </ul>

                {/* 페이지네이션 */}
                <div className="mt-10 flex items-center justify-center gap-2">
                  {['<', '1', '2', '3', '4', '5', '>'].map((p, idx) => {
                    const isActive = p === '1';
                    const baseClass =
                      'inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold transition';
                    const activeClass = 'bg-[#2563eb] text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]';
                    const inactiveClass = 'bg-white text-slate-600 border border-slate-200 hover:border-[#2563eb] hover:text-[#2563eb]';
                    return (
                      <button
                        key={`${p}-${idx}`}
                        className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </ContentCard>

              {/* 2. 자료실 */}
              <ContentCard id="section-1">
                <SectionTitle icon={<FileText />} label="Resources" title="자료실" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회에서 발간한 가이드라인, 리포트, 양식 자료 등을 다운로드 받으실
                  수 있습니다.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {resources.map((res) => (
                    <article
                      key={res.id}
                      className="group p-7 rounded-[26px] bg-[#f8fbff] border border-blue-100 hover:bg-white hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white text-[#2563eb] border border-blue-100 flex items-center justify-center">
                          <FileText size={22} />
                        </div>
                        <span
                          className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-black tracking-wider ${fileTypeStyle[res.type]}`}
                        >
                          {res.type}
                        </span>
                      </div>

                      <h3 className="text-[17px] font-black text-slate-950 mb-3 break-keep group-hover:text-[#2563eb] transition flex-1">
                        {res.title}
                      </h3>

                      <div className="flex items-center gap-4 text-[12px] text-slate-500 mb-5">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={12} />
                          {res.date}
                        </span>
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

                <div className="mt-10 text-center">
                  <a
                    href="/news/resources"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-[#eff6ff] transition text-[14px]"
                  >
                    전체 자료 보기 <ArrowRight size={15} />
                  </a>
                </div>
              </ContentCard>

              {/* 3. 갤러리 */}
              <ContentCard id="section-2">
                <SectionTitle icon={<ImageIcon />} label="Gallery" title="갤러리" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회 주요 행사 및 활동의 생생한 현장을 사진으로 만나보세요.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gallery.map((item) => (
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
                          <CalendarDays size={11} />
                          {item.date}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-[17px] font-black text-slate-950 mb-2 group-hover:text-[#2563eb] transition break-keep">
                          {item.title}
                        </h3>
                        <p className="text-[13.5px] text-slate-500 leading-relaxed break-keep">
                          {item.desc}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <a
                    href="/news/gallery"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-[#eff6ff] transition text-[14px]"
                  >
                    갤러리 전체보기 <ArrowRight size={15} />
                  </a>
                </div>
              </ContentCard>

              {/* CTA */}
              <section className="relative rounded-[40px] p-9 md:p-14 overflow-hidden bg-gradient-to-br from-[#1b3f7a] via-[#1d4ed8] to-[#2563eb] text-white shadow-[0_24px_80px_rgba(37,99,235,0.25)]">
                <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute left-0 bottom-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

                <div className="relative z-10 grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
                  <div>
                    <span className="text-[12px] font-black tracking-[0.22em] uppercase text-white/70">
                      Newsletter
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 mb-5 tracking-[-0.03em] break-keep">
                      협회 소식을 메일로 받아보세요
                    </h2>
                    <p className="text-white/80 leading-relaxed break-keep">
                      주요 공지, 신규 자료, 행사 일정을 월 1회 뉴스레터로 전해드립니다.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#2563eb] rounded-full font-black hover:bg-[#dce8ff] transition text-[15px]"
                    >
                      뉴스레터 구독하기 <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}