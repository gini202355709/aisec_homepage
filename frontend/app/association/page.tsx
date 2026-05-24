import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Eye,
  History,
  FileText,
  CheckCircle2,
  Network,
  LockKeyhole,
  BrainCircuit,
  Globe2,
  ChevronRight,
  Download,
  Sparkles,
} from 'lucide-react';
import Header from '@/components/Header';

export default function AssociationPage() {
  const navItems = ['설립목적', '협회장 인사말', '비전', '연혁', '정관/회칙'];

  const featureCards: Array<{
    Icon: React.ComponentType<{ size?: number }>;
    title: string;
    desc: string;
  }> = [
    { Icon: BrainCircuit, title: 'AI Security', desc: '인공지능 보안 연구' },
    { Icon: LockKeyhole, title: 'Trust Standard', desc: '신뢰성·표준화 체계' },
    { Icon: Network, title: 'Cooperation', desc: '산학연관 협력 네트워크' },
    { Icon: Globe2, title: 'Global Vision', desc: '글로벌 보안 생태계' },
  ];

  const visionCards: Array<[string, string, string]> = [
    ['01', '신뢰 가능한 AI', '안전성과 투명성을 갖춘 AI 활용 환경 조성'],
    ['02', '보안 표준 선도', 'AI 보안 기준과 기술 표준 수립'],
    ['03', '전문 인재 양성', 'AI 보안 분야의 실무형 전문가 육성'],
  ];

  const historyItems: Array<[string, string]> = [
    ['2026', '한국AI보안협회 공식 홈페이지 구축'],
    ['2025', 'AI 보안 교육 및 세미나 프로그램 운영'],
    ['2024', 'AI 보안 연구회 및 전문위원회 구성'],
    ['2023', '협회 설립 준비위원회 발족'],
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f7fbff] text-[#0f172a] overflow-hidden">
        {/* 히어로 섹션 */}
        <section className="relative min-h-[640px] bg-gradient-to-br from-white via-[#eef8ff] to-[#dbeeff] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_18%_28%,rgba(147,197,253,0.28),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:76px_76px]" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 pt-28 pb-24">
            <div className="max-w-[820px]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 shadow-sm text-[#2563eb] text-sm font-bold mb-7">
                <Sparkles size={16} />
                Korea AI Security Association
              </span>

              <h1 className="text-[42px] md:text-[48px] font-black leading-[1.08] tracking-[-0.045em] break-keep text-slate-950">
                안전하고 신뢰할 수 있는
                <br />
                <span className="text-[#2563eb]">AI 보안 생태계</span>
                를 만듭니다
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-[720px] break-keep">
                한국AI보안협회는 인공지능 기술의 안전한 활용과 보안 표준화를 위해
                산·학·연·관이 함께 협력하는 전문 협회입니다.
              </p>

              {/* 깨진 <a> 태그 문법을 정상적으로 수정 완료 */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#section-0"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2563eb] text-white font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)]"
                >
                  협회 소개 보기 <ArrowRight size={18} />
                </a>

                <a
                  href="#section-4"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-blue-50 transition shadow-sm"
                >
                  정관/회칙 확인 <Download size={18} />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-5 mt-20">
              {featureCards.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="group p-6 rounded-[30px] bg-white/80 border border-white shadow-[0_20px_60px_rgba(37,99,235,0.08)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(37,99,235,0.14)] transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-5 group-hover:bg-[#2563eb] group-hover:text-white transition">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-black text-lg text-slate-950">{title}</h3>
                  <p className="text-sm text-slate-500 mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 본문 콘텐츠 섹션 */}
        <section className="relative py-24">
          <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-white to-transparent" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-[300px_1fr] gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-32 rounded-[32px] overflow-hidden bg-white border border-blue-100 shadow-[0_24px_70px_rgba(37,99,235,0.08)]">
                <div className="p-7 bg-gradient-to-br from-[#eff6ff] to-white border-b border-blue-100">
                  <p className="text-xs font-black tracking-[0.2em] uppercase text-[#2563eb]">
                    Contents
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">협회 소개</h2>
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
              <ContentCard id="section-0">
                <SectionTitle icon={<Target />} label="Purpose" title="설립목적" />
                <p className="text-slate-600 leading-loose text-[17px] break-keep">
                  한국AI보안협회는 인공지능 기술의 발전 과정에서 발생할 수 있는
                  보안 위협을 연구하고, 안전한 활용 기준과 보안 체계를 마련하기 위해
                  설립되었습니다. 기술 연구, 표준화, 교육, 정책 제언을 통해 신뢰 가능한
                  AI 보안 생태계 조성을 목표로 합니다.
                </p>
              </ContentCard>

              <ContentCard id="section-1">
                <SectionTitle icon={<ShieldCheck />} label="Greeting" title="협회장 인사말" />

                <div className="grid md:grid-cols-[1fr_240px] gap-10 items-end">
                  <div className="space-y-5 text-slate-600 leading-loose text-[17px] break-keep">
                    <p>
                      안녕하십니까. 한국AI보안협회를 찾아주신 여러분께 진심으로 감사드립니다.
                    </p>
                    <p>
                      AI 기술은 산업과 사회 전반을 빠르게 변화시키고 있습니다.
                      그만큼 보안과 신뢰성 확보는 더 이상 선택이 아닌 필수 과제가
                      되었습니다. 우리 협회는 전문가들과 함께 안전한 AI 활용 환경을
                      만들기 위해 지속적으로 노력하겠습니다.
                    </p>
                  </div>

                  <div className="rounded-[28px] p-7 bg-[#f0f7ff] border border-blue-100">
                    <p className="text-sm text-slate-500">한국AI보안협회 협회장</p>
                    <p className="text-3xl font-black text-[#2563eb] mt-2">홍길동</p>
                  </div>
                </div>
              </ContentCard>

              <ContentCard id="section-2">
                <SectionTitle icon={<Eye />} label="Vision" title="비전" />

                <div className="grid md:grid-cols-3 gap-5">
                  {visionCards.map(([num, title, desc]) => (
                    <div
                      key={num}
                      className="relative overflow-hidden rounded-[30px] p-7 bg-[#f8fbff] border border-blue-100 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)] transition"
                    >
                      <div className="relative">
                        <div className="text-[#2563eb] text-sm font-black mb-5">{num}</div>
                        <h3 className="text-xl font-black mb-3 text-slate-950">{title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed break-keep">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ContentCard>

              <ContentCard id="section-3">
                <SectionTitle icon={<History />} label="History" title="연혁" />

                <div>
                  {historyItems.map(([year, text]) => (
                    <div
                      key={year}
                      className="grid grid-cols-[92px_1fr] md:grid-cols-[130px_1fr] gap-6 py-7 border-b border-slate-100 last:border-0"
                    >
                      <div className="text-2xl md:text-3xl font-black text-[#2563eb]">
                        {year}
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 font-semibold break-keep">
                        <CheckCircle2 size={20} className="text-sky-500 shrink-0" />
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </ContentCard>

              <section
                id="section-4"
                className="relative rounded-[40px] p-9 md:p-14 overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f0f7ff] to-[#dbeafe] border border-blue-100 shadow-[0_24px_80px_rgba(37,99,235,0.12)]"
              >
                <div className="relative z-10 max-w-[760px]">
                  <SectionTitle icon={<FileText />} label="Rules" title="정관/회칙" />

                  <p className="text-slate-600 leading-loose mb-9 text-[17px] break-keep">
                    협회의 운영 기준과 회원 권리 및 의무, 주요 의사결정 체계는
                    정관과 회칙에 따라 투명하게 관리됩니다.
                  </p>

                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563eb] text-white rounded-full font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.25)]">
                    정관/회칙 보기 <ArrowRight size={18} />
                  </button>
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