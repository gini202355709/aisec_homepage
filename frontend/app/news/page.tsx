import React from 'react';
import {
  ArrowRight,
  Search,
  Megaphone,
  FileText,
  Image as ImageIcon,
  Download,
  CalendarDays,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

const notices = [
  {
    category: '공지사항',
    title: '2026 한국AI보안협회 정기총회 개최 안내',
    date: '2026.05.14',
    tag: '중요',
  },
  {
    category: '공지사항',
    title: 'AI 보안 전문위원회 신규 위원 모집 공고',
    date: '2026.05.02',
    tag: '모집',
  },
  {
    category: '공지사항',
    title: '회원사 대상 AI 보안 교육 프로그램 안내',
    date: '2026.04.21',
    tag: '교육',
  },
];

const resources = [
  {
    title: 'AI 시스템 보안 가이드라인 v2.0',
    type: 'PDF',
    date: '2026.05.10',
  },
  {
    title: '생성형 AI 보안 위협 대응 체크리스트',
    type: 'DOC',
    date: '2026.04.28',
  },
  {
    title: 'AI 보안 표준화 동향 리포트',
    type: 'PDF',
    date: '2026.04.12',
  },
];

const gallery = [
  {
    title: 'AI 보안 컨퍼런스 2026',
    date: '2026.05.14',
  },
  {
    title: '전문위원회 발족식',
    date: '2026.04.03',
  },
  {
    title: '회원사 네트워킹 데이',
    date: '2026.03.22',
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#f2f5fa] text-[#1a2a3a]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,#2d7ff9_0%,transparent_28%),radial-gradient(circle_at_20%_30%,#dcecff_0%,transparent_35%)] opacity-90" />
        <div className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#207bf3]/20 blur-3xl" />
        <div className="absolute left-[8%] bottom-[-80px] h-[260px] w-[260px] rounded-full bg-[#9ed2ff]/30 blur-3xl" />

        <div className="relative mx-auto max-w-[1320px] px-10 py-28">
          <div className="max-w-[720px]">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[13px] font-bold text-[#1b3f7a] shadow-sm">
              <ShieldCheck size={16} />
              News & Resources
            </span>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-[56px]">
              자료 및 소식
            </h1>

            <p className="max-w-[560px] break-keep text-[17px] leading-relaxed text-[#5f728a]">
              한국AI보안협회의 공지사항, 연구 자료, 행사 소식을 한눈에 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* TAB / SEARCH */}
      <section className="relative z-10 -mt-8">
        <div className="mx-auto max-w-[1320px] px-10">
          <div className="rounded-[28px] border border-[#dde4ef] bg-white p-4 shadow-xl shadow-[#1b3f7a]/5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="grid grid-cols-3 gap-2">
                {['공지사항', '자료실', '갤러리'].map((tab, index) => (
                  <button
                    key={tab}
                    className={`rounded-2xl px-8 py-4 text-[15px] font-bold transition-all ${
                      index === 0
                        ? 'bg-[#1b3f7a] text-white shadow-lg shadow-[#1b3f7a]/20'
                        : 'bg-[#f0f4fb] text-[#5f728a] hover:bg-[#e8eef8] hover:text-[#1b3f7a]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#dde4ef] bg-[#f8fbff] px-5 py-4 lg:w-[360px]">
                <Search size={20} className="text-[#7a8fa8]" />
                <input
                  placeholder="검색어를 입력하세요"
                  className="w-full bg-transparent text-[14px] outline-none placeholder:text-[#9badc2]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE NOTICE */}
      <section className="py-20">
        <div className="mx-auto max-w-[1320px] px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="group relative overflow-hidden rounded-[36px] bg-[#12366f] p-10 text-white shadow-2xl shadow-[#1b3f7a]/20">
              <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-[#2d7ff9]/50 blur-2xl" />
              <div className="absolute bottom-[-120px] left-[20%] h-80 w-80 rounded-full bg-[#8ecbff]/20 blur-3xl" />

              <div className="relative">
                <div className="mb-20 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-[12px] font-black">
                    NOTICE
                  </span>
                  <Megaphone className="opacity-80" />
                </div>

                <p className="mb-4 text-[14px] text-white/60">2026.05.14</p>
                <h2 className="mb-6 max-w-[620px] break-keep text-3xl font-black leading-snug">
                  2026 한국AI보안협회 정기총회 및 AI 보안 컨퍼런스 개최 안내
                </h2>
                <p className="mb-10 max-w-[560px] break-keep text-[15px] leading-relaxed text-white/70">
                  협회 주요 사업 보고와 함께 AI 보안 기술 동향, 정책 방향, 회원사 네트워킹 프로그램이 진행됩니다.
                </p>

                <button className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-black text-[#1b3f7a] transition-all group-hover:translate-x-1">
                  자세히 보기 <ArrowRight size={17} />
                </button>
              </div>
            </article>

            <div className="grid gap-5">
              {notices.map((item) => (
                <article
                  key={item.title}
                  className="group flex items-center justify-between rounded-[28px] border border-[#dde4ef] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-[#e8eef8] px-3 py-1 text-[11px] font-black text-[#1b3f7a]">
                        {item.tag}
                      </span>
                      <span className="text-[13px] text-[#7a8fa8]">{item.date}</span>
                    </div>
                    <h3 className="break-keep text-[18px] font-bold group-hover:text-[#1b3f7a]">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronRight className="text-[#9badc2] group-hover:text-[#1b3f7a]" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1320px] px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[13px] font-black uppercase tracking-widest text-[#2a5298]">
                Resources
              </p>
              <h2 className="text-3xl font-black">자료실</h2>
            </div>
            <button className="flex items-center gap-2 text-[14px] font-bold text-[#1b3f7a]">
              전체보기 <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((item) => (
              <article
                key={item.title}
                className="group rounded-[32px] border border-[#dde4ef] bg-[#f8fbff] p-8 transition-all hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
              >
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2efff] text-[#1b3f7a]">
                    <FileText />
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-[#2a5298]">
                    {item.type}
                  </span>
                </div>

                <h3 className="mb-5 break-keep text-[20px] font-black leading-snug group-hover:text-[#1b3f7a]">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between border-t border-[#dde4ef] pt-5">
                  <span className="flex items-center gap-2 text-[13px] text-[#7a8fa8]">
                    <CalendarDays size={15} />
                    {item.date}
                  </span>
                  <Download size={18} className="text-[#1b3f7a]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="mx-auto max-w-[1320px] px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[13px] font-black uppercase tracking-widest text-[#2a5298]">
                Gallery
              </p>
              <h2 className="text-3xl font-black">갤러리</h2>
            </div>
            <button className="flex items-center gap-2 text-[14px] font-bold text-[#1b3f7a]">
              전체보기 <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {gallery.map((item, index) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[32px] border border-[#dde4ef] bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`relative h-60 ${
                    index === 0
                      ? 'bg-gradient-to-br from-[#1b3f7a] via-[#2d7ff9] to-[#bfe4ff]'
                      : index === 1
                      ? 'bg-gradient-to-br from-[#dcecff] via-[#5da5ff] to-[#1b3f7a]'
                      : 'bg-gradient-to-br from-[#eaf5ff] via-[#9ed2ff] to-[#2d7ff9]'
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.9),transparent_22%)]" />
                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-[#1b3f7a] backdrop-blur">
                    <ImageIcon />
                  </div>
                </div>

                <div className="p-7">
                  <p className="mb-3 text-[13px] text-[#7a8fa8]">{item.date}</p>
                  <h3 className="break-keep text-[19px] font-black group-hover:text-[#1b3f7a]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
