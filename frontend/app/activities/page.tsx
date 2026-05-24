import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Microscope,
  GraduationCap,
  Scale,
  Globe,
  ChevronRight,
  CalendarDays,
  MapPin,
  Clock,
  Users,
  BookOpen,
  Award,
  FileCheck,
  Lightbulb,
  Target,
  Megaphone,
} from 'lucide-react';
import Header from '@/components/Header';

export default function ActivitiesPage() {
  const navItems = ['핵심 사업', '교육 프로그램', '행사 및 일정', '성과 및 실적'];

  // 핵심 사업
  const coreBusinesses: Array<{
    Icon: React.ComponentType<{ size?: number }>;
    no: string;
    title: string;
    desc: string;
    points: string[];
  }> = [
    {
      Icon: Microscope,
      no: '01',
      title: '연구 · 표준화 사업',
      desc: 'AI 시스템의 보안 취약점을 분석하고, 안전한 활용을 위한 기술 표준을 개발합니다.',
      points: ['AI 보안 위협 분석 리포트 발간', '기술 표준 초안 작성 및 심의', '국가 표준(KS) 제안'],
    },
    {
      Icon: GraduationCap,
      no: '02',
      title: '교육 및 인증 사업',
      desc: 'AI 보안 전문 인력 양성을 위한 체계적 교육 과정과 자격 인증 제도를 운영합니다.',
      points: ['실무자 대상 정기 교육 과정', 'AI 보안 전문가 자격증 발급', '대학·기업 맞춤형 교육'],
    },
    {
      Icon: Scale,
      no: '03',
      title: '정책 자문 사업',
      desc: '정부기관 및 공공기관에 AI 보안 관련 정책 자문과 의견서를 제공합니다.',
      points: ['정책 자문 위원회 운영', '입법 의견서 제출', '규제 영향 분석'],
    },
    {
      Icon: Globe,
      no: '04',
      title: '국제 교류 사업',
      desc: '글로벌 표준화 기구 및 해외 협회와 협력하여 국제 동향을 공유합니다.',
      points: ['ISO/IEC 표준 활동 참여', '해외 협회 MOU 체결', '국제 컨퍼런스 공동 개최'],
    },
  ];

  // 교육 프로그램
  const educationPrograms: Array<{
    Icon: React.ComponentType<{ size?: number }>;
    level: string;
    title: string;
    duration: string;
    target: string;
  }> = [
    {
      Icon: BookOpen,
      level: 'BASIC',
      title: 'AI 보안 입문 과정',
      duration: '4주 (총 32시간)',
      target: 'AI 보안에 처음 입문하는 실무자',
    },
    {
      Icon: Lightbulb,
      level: 'ADVANCED',
      title: 'AI 보안 심화 과정',
      duration: '8주 (총 64시간)',
      target: '보안 분야 3년 이상 실무 경력자',
    },
    {
      Icon: Award,
      level: 'CERTIFICATE',
      title: 'AI 보안 전문가 자격 과정',
      duration: '12주 (총 96시간)',
      target: '자격 인증 취득 희망자',
    },
    {
      Icon: Target,
      level: 'CUSTOM',
      title: '기업 맞춤형 교육',
      duration: '협의 후 결정',
      target: '기업·기관 단체 수강 희망 회원사',
    },
  ];

  // 행사 일정
  const events: Array<{
    date: string;
    month: string;
    title: string;
    type: string;
    location: string;
    status: 'upcoming' | 'open' | 'closed';
  }> = [
    {
      date: '06.18',
      month: 'JUN',
      title: 'AI 보안 기술 세미나 2026',
      type: '세미나',
      location: '부산 벡스코',
      status: 'open',
    },
    {
      date: '07.10',
      month: 'JUL',
      title: 'AI 보안 전문가 양성 워크숍',
      type: '워크숍',
      location: '온라인 (Zoom)',
      status: 'open',
    },
    {
      date: '09.04',
      month: 'SEP',
      title: '제3회 한국 AI 보안 컨퍼런스',
      type: '컨퍼런스',
      location: '서울 코엑스',
      status: 'upcoming',
    },
    {
      date: '11.21',
      month: 'NOV',
      title: '연말 정기 총회 및 시상식',
      type: '총회',
      location: '부산 그랜드조선',
      status: 'upcoming',
    },
  ];

  // 성과 및 실적
  const achievements: Array<{
    value: string;
    label: string;
    desc: string;
  }> = [
    { value: '38+', label: '발간 표준', desc: '기술 표준 및 가이드라인' },
    { value: '1,240', label: '교육 수료', desc: '연간 누적 수료생' },
    { value: '15', label: '국제 협력', desc: '글로벌 협력 기관' },
    { value: '120h', label: '연간 교육', desc: '정기 교육 운영 시간' },
  ];

  const statusStyle: Record<
    'upcoming' | 'open' | 'closed',
    { label: string; cls: string }
  > = {
    upcoming: { label: '예정', cls: 'bg-[#eff6ff] text-[#2563eb] border-blue-100' },
    open: { label: '접수중', cls: 'bg-[#dcfce7] text-[#15803d] border-green-100' },
    closed: { label: '마감', cls: 'bg-slate-100 text-slate-500 border-slate-200' },
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
                Activities &amp; Education
              </span>

              <h1 className="text-[42px] md:text-[48px] font-black leading-[1.08] tracking-[-0.045em] break-keep text-slate-950">
                AI 보안 생태계를 만드는
                <br />
                <span className="text-[#2563eb]">사업 활동과 교육</span>을 소개합니다
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-[720px] break-keep">
                연구·표준화, 교육, 정책 자문, 국제 교류 등 4대 핵심 사업을 중심으로
                AI 보안 분야의 전문성을 강화하고 산업 생태계 발전에 기여합니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#section-0"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2563eb] text-white font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)]"
                >
                  핵심 사업 보기 <ArrowRight size={18} />
                </a>

                <a
                  href="#section-2"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-blue-50 transition shadow-sm"
                >
                  행사 일정 확인 <CalendarDays size={18} />
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
                  <h2 className="mt-2 text-2xl font-black text-slate-950">사업 활동</h2>
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
              {/* 1. 핵심 사업 */}
              <ContentCard id="section-0">
                <SectionTitle icon={<Target />} label="Core Business" title="4대 핵심 사업" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  한국AI보안협회는 AI 보안 분야의 전문성 확보와 산업 발전을 위한
                  4개 핵심 사업 영역을 중심으로 활동합니다.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {coreBusinesses.map(({ Icon, no, title, desc, points }) => (
                    <div
                      key={no}
                      className="group p-7 rounded-[28px] bg-[#f8fbff] border border-blue-100 hover:bg-white hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)] transition"
                    >
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-white text-[#2563eb] border border-blue-100 flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-transparent transition">
                          <Icon size={24} />
                        </div>
                        <div className="text-[12px] font-black tracking-[0.2em] text-[#2563eb] opacity-40">
                          {no}
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-slate-950 mb-3 break-keep">
                        {title}
                      </h3>
                      <p className="text-[14px] text-slate-500 leading-relaxed break-keep mb-5">
                        {desc}
                      </p>
                      <ul className="space-y-2">
                        {points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-[13px] text-slate-600"
                          >
                            <FileCheck
                              size={14}
                              className="text-[#2563eb] shrink-0 mt-1"
                            />
                            <span className="break-keep">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ContentCard>

              {/* 2. 교육 프로그램 */}
              <ContentCard id="section-1">
                <SectionTitle
                  icon={<GraduationCap />}
                  label="Education"
                  title="교육 프로그램"
                />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  실무자부터 전문가까지 수준별로 구성된 교육 과정을 통해
                  AI 보안 분야의 인재를 체계적으로 양성합니다.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {educationPrograms.map(({ Icon, level, title, duration, target }) => (
                    <div
                      key={title}
                      className="p-7 rounded-[26px] bg-white border border-blue-100 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition"
                    >
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                          <Icon size={22} />
                        </div>
                        <span className="text-[11px] font-black tracking-[0.22em] text-[#2563eb] px-3 py-1 bg-[#eff6ff] rounded-full">
                          {level}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-950 mb-4 break-keep">
                        {title}
                      </h3>
                      <div className="space-y-3 text-[13px] text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-slate-400 shrink-0" />
                          <span>
                            <span className="font-bold text-slate-500 mr-2">기간</span>
                            {duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-slate-400 shrink-0" />
                          <span className="break-keep">
                            <span className="font-bold text-slate-500 mr-2">대상</span>
                            {target}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-[22px] bg-[#eff6ff] border border-blue-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-[14px] text-slate-600 break-keep">
                    <span className="font-black text-[#2563eb]">정회원사</span>는 교육비
                    20% 할인 혜택이 적용됩니다.
                  </div>
                  <a
                    href="/membership"
                    className="inline-flex items-center gap-2 text-[#2563eb] font-black text-sm hover:gap-3 transition-all"
                  >
                    회원 가입 안내 <ArrowRight size={14} />
                  </a>
                </div>
              </ContentCard>

              {/* 3. 행사 및 일정 */}
              <ContentCard id="section-2">
                <SectionTitle icon={<CalendarDays />} label="Events" title="행사 및 일정" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  2026년 한 해 동안 진행되는 협회의 주요 행사 일정입니다.
                  세미나, 워크숍, 컨퍼런스에 많은 관심과 참여 부탁드립니다.
                </p>

                <div className="space-y-4">
                  {events.map((e) => (
                    <div
                      key={e.title}
                      className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_auto] gap-5 md:gap-8 items-center p-6 rounded-[24px] bg-white border border-blue-100 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition"
                    >
                      <div className="text-center bg-[#eff6ff] rounded-2xl py-4 group-hover:bg-[#2563eb] group-hover:text-white transition">
                        <div className="text-[11px] font-black tracking-[0.2em] text-[#2563eb] group-hover:text-white/80 mb-1">
                          {e.month}
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-slate-950 group-hover:text-white">
                          {e.date}
                        </div>
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#2563eb] bg-[#eff6ff] px-3 py-1 rounded-full">
                            {e.type}
                          </span>
                          <span
                            className={`text-[11px] font-black tracking-wider px-3 py-1 rounded-full border ${statusStyle[e.status].cls}`}
                          >
                            {statusStyle[e.status].label}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-black text-slate-950 mb-2 break-keep">
                          {e.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[13px] text-slate-500">
                          <MapPin size={14} className="shrink-0" />
                          {e.location}
                        </div>
                      </div>

                      <div className="hidden md:flex justify-end">
                        <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#f8fbff] text-[#2563eb] border border-blue-100 font-bold text-sm hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition">
                          자세히 <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </ContentCard>

              {/* 4. 성과 및 실적 */}
              <section
                id="section-3"
                className="relative rounded-[40px] p-9 md:p-14 overflow-hidden bg-gradient-to-br from-[#1b3f7a] via-[#1d4ed8] to-[#2563eb] text-white shadow-[0_24px_80px_rgba(37,99,235,0.25)]"
              >
                <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute left-0 bottom-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

                <div className="relative z-10">
                  <div className="mb-10">
                    <div className="w-[60px] h-[60px] rounded-[22px] flex items-center justify-center mb-5 bg-white/10 text-white border border-white/20">
                      <Megaphone size={22} />
                    </div>
                    <span className="text-[12px] font-black tracking-[0.22em] uppercase text-white/70">
                      Achievements
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 tracking-[-0.03em]">
                      주요 성과 및 실적
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {achievements.map((a) => (
                      <div
                        key={a.label}
                        className="p-6 rounded-[24px] bg-white/10 border border-white/20 backdrop-blur"
                      >
                        <div className="text-3xl md:text-4xl font-black mb-2">
                          {a.value}
                        </div>
                        <div className="text-[13px] font-black tracking-wider text-white/90 mb-1">
                          {a.label}
                        </div>
                        <div className="text-[12px] text-white/60 break-keep">
                          {a.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-white/70 text-sm break-keep">
                      협회 사업 참여 및 협력 제안은 언제든 환영합니다.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#2563eb] rounded-full font-black hover:bg-[#dce8ff] transition text-sm"
                    >
                      사업 협력 문의 <ArrowRight size={16} />
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

function ContentCard({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative bg-white rounded-[40px] p-9 md:p-14 border border-blue-100 shadow-[0_24px_80px_rgba(37,99,235,0.08)] overflow-hidden"
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}

function SectionTitle({
  icon,
  label,
  title,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-9">
      <div className="w-[60px] h-[60px] rounded-[22px] flex items-center justify-center mb-5 bg-[#eff6ff] text-[#2563eb] border border-blue-100">
        {icon}
      </div>

      <span className="text-[12px] font-black tracking-[0.22em] uppercase text-[#2563eb]">
        {label}
      </span>

      <h2 className="text-3xl md:text-4xl font-black mt-2 tracking-[-0.03em] text-slate-950">
        {title}
      </h2>
    </div>
  );
}