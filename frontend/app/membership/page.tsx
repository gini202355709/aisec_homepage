import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Check,
  User,
  Building2,
  Landmark,
  ChevronRight,
  FileText,
  CreditCard,
  ClipboardCheck,
  Send,
  Mail,
  Phone,
  HelpCircle,
} from 'lucide-react';
import Header from '@/components/Header';

type MembershipKey = 'personal' | 'corporate' | 'institution';

type MembershipPlan = {
  key: MembershipKey;
  label: string;
  name: string;
  desc: string;
  fee: string;
  feeUnit: string;
  Icon: React.ComponentType<{ size?: number }>;
  benefits: string[];
  featured: boolean;
};

type ProcessStep = {
  no: string;
  title: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number }>;
};

type FaqItem = {
  q: string;
  a: string;
};

export default function MembershipPage() {
  const navItems = ['회원 유형', '회원 혜택', '가입 절차', '자주 묻는 질문'];

  const plans: MembershipPlan[] = [
    {
      key: 'personal',
      label: 'PERSONAL',
      name: '개인회원',
      desc: 'AI 보안 분야에 관심 있는 개인 누구나 가입할 수 있습니다.',
      fee: '연 50,000',
      feeUnit: '원',
      Icon: User,
      benefits: [
        '뉴스레터 정기 수신',
        '세미나·워크숍 참가 할인',
        '자료실 일반 자료 열람',
        '회원 네트워킹 참여',
      ],
      featured: false,
    },
    {
      key: 'corporate',
      label: 'CORPORATE',
      name: '기업회원',
      desc: 'AI 보안 관련 사업을 운영하는 기업을 위한 가장 인기 있는 회원 등급입니다.',
      fee: '연 1,200,000',
      feeUnit: '원~',
      Icon: Building2,
      benefits: [
        '의결권 및 선거권 부여',
        '전문위원회 참여',
        '표준화 작업 참여',
        '정부 과제 연계 지원',
        '컨퍼런스 부스 참여',
        '회원사 로고 노출',
      ],
      featured: true,
    },
    {
      key: 'institution',
      label: 'INSTITUTION',
      name: '기관회원',
      desc: '정부·공공기관, 연구소, 대학 등 비영리 기관을 위한 등급입니다.',
      fee: '별도 협의',
      feeUnit: '',
      Icon: Landmark,
      benefits: [
        '정책자문위원회 참여',
        '공동연구 수행',
        '협회 로고 사용 허가',
        '우선 협력기관 지정',
      ],
      featured: false,
    },
  ];

  const benefitCategories: Array<{
    title: string;
    items: Array<{ label: string; personal: boolean; corporate: boolean; institution: boolean }>;
  }> = [
    {
      title: '정보 및 자료',
      items: [
        { label: '뉴스레터 수신', personal: true, corporate: true, institution: true },
        { label: '자료실 일반 자료 열람', personal: true, corporate: true, institution: true },
        { label: '자료실 프리미엄 자료 열람', personal: false, corporate: true, institution: true },
        { label: 'AI 보안 리포트 무료 제공', personal: false, corporate: true, institution: true },
      ],
    },
    {
      title: '교육 및 행사',
      items: [
        { label: '세미나·워크숍 참가 할인', personal: true, corporate: true, institution: true },
        { label: '교육 과정 20% 할인', personal: false, corporate: true, institution: true },
        { label: '컨퍼런스 부스 참여', personal: false, corporate: true, institution: false },
        { label: '회원 전용 네트워킹 초청', personal: true, corporate: true, institution: true },
      ],
    },
    {
      title: '협회 활동',
      items: [
        { label: '의결권·선거권 행사', personal: false, corporate: true, institution: false },
        { label: '전문위원회 참여', personal: false, corporate: true, institution: true },
        { label: '표준화 작업 참여', personal: false, corporate: true, institution: true },
        { label: '정책 자문 참여', personal: false, corporate: false, institution: true },
      ],
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      no: '01',
      title: '가입 신청서 작성',
      desc: '온라인 신청서를 작성하고 필요 정보를 입력합니다.',
      Icon: FileText,
    },
    {
      no: '02',
      title: '서류 제출',
      desc: '기업·기관 회원은 사업자등록증 등 증빙 서류를 제출합니다.',
      Icon: Send,
    },
    {
      no: '03',
      title: '심사 및 승인',
      desc: '사무국 검토 후 영업일 기준 3~5일 이내 승인 안내를 드립니다.',
      Icon: ClipboardCheck,
    },
    {
      no: '04',
      title: '회비 납부',
      desc: '안내받은 계좌로 연회비를 납부하시면 회원 자격이 부여됩니다.',
      Icon: CreditCard,
    },
  ];

  const faqs: FaqItem[] = [
    {
      q: '회원 자격은 어떻게 유지되나요?',
      a: '연회비를 매년 정해진 기간 내에 납부하시면 회원 자격이 유지됩니다. 미납 시 자격이 자동으로 종료될 수 있습니다.',
    },
    {
      q: '회원 등급을 변경할 수 있나요?',
      a: '가능합니다. 사무국으로 변경 신청을 주시면 차액 정산 후 등급 변경이 진행됩니다.',
    },
    {
      q: '기업회원은 몇 명까지 등록 가능한가요?',
      a: '기본 5명까지 등록 가능하며, 등급에 따라 최대 20명까지 확장하실 수 있습니다.',
    },
    {
      q: '가입비 환불이 가능한가요?',
      a: '가입 후 30일 이내에 한해 별도 사유 없이 전액 환불이 가능합니다. 자세한 사항은 사무국으로 문의해주세요.',
    },
    {
      q: '해외 기업도 가입 가능한가요?',
      a: '가능합니다. 해외 기업회원의 경우 별도 협의를 통해 가입 절차를 안내해드립니다.',
    },
  ];

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
                Membership
              </span>

              <h1 className="text-[42px] md:text-[48px] font-black leading-[1.08] tracking-[-0.045em] break-keep text-slate-950">
                AI 보안 생태계의
                <br />
                <span className="text-[#2563eb]">함께하는 회원</span>이 되어주세요
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-[720px] break-keep">
                개인, 기업, 기관 등 다양한 형태의 회원이 함께 모여 AI 보안 분야의
                미래를 만들어갑니다. 회원 등급별 혜택과 가입 절차를 안내해드립니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#section-0"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2563eb] text-white font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)]"
                >
                  회원 유형 보기 <ArrowRight size={18} />
                </a>

                <a
                  href="#section-2"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-blue-50 transition shadow-sm"
                >
                  가입 절차 확인 <ClipboardCheck size={18} />
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
                  <h2 className="mt-2 text-2xl font-black text-slate-950">회원 안내</h2>
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
              {/* 1. 회원 유형 */}
              <ContentCard id="section-0">
                <SectionTitle icon={<User />} label="Membership Type" title="회원 유형" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  한국AI보안협회는 개인회원, 기업회원, 기관회원 세 가지 유형으로
                  운영되며, 각 유형별로 차별화된 혜택과 권리를 제공합니다.
                </p>

                <div className="grid lg:grid-cols-3 gap-6">
                  {plans.map((plan) => {
                    const Icon = plan.Icon;
                    const cardClass = plan.featured
                      ? 'relative p-8 rounded-[32px] bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white border-2 border-[#2563eb] shadow-[0_28px_72px_rgba(37,99,235,0.32)] lg:scale-105 lg:z-10 flex flex-col'
                      : 'relative p-8 rounded-[32px] bg-white border border-blue-100 text-slate-950 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition flex flex-col';

                    const iconBoxClass = plan.featured
                      ? 'w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center mb-6 border border-white/20'
                      : 'w-14 h-14 rounded-2xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-6 border border-blue-100';

                    const labelClass = plan.featured
                      ? 'text-[11px] font-black tracking-[0.22em] uppercase text-white/80'
                      : 'text-[11px] font-black tracking-[0.22em] uppercase text-[#2563eb]';

                    const descClass = plan.featured
                      ? 'text-[14px] text-white/80 leading-relaxed break-keep mb-7'
                      : 'text-[14px] text-slate-500 leading-relaxed break-keep mb-7';

                    const feeUnitClass = plan.featured ? 'text-white/70' : 'text-slate-500';

                    const checkBoxClass = plan.featured
                      ? 'w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5'
                      : 'w-5 h-5 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb] shrink-0 mt-0.5';

                    const benefitTextClass = plan.featured
                      ? 'text-[14px] text-white/95 break-keep'
                      : 'text-[14px] text-slate-600 break-keep';

                    const buttonClass = plan.featured
                      ? 'w-full py-4 bg-white text-[#2563eb] rounded-2xl font-black hover:bg-[#dce8ff] transition text-center inline-flex items-center justify-center gap-2'
                      : 'w-full py-4 bg-[#2563eb] text-white rounded-2xl font-black hover:bg-[#1d4ed8] transition text-center inline-flex items-center justify-center gap-2';

                    return (
                      <div key={plan.key} className={cardClass}>
                        {plan.featured ? (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#2563eb] text-[11px] font-black tracking-wider px-5 py-1.5 rounded-full shadow-md">
                            추천
                          </div>
                        ) : null}

                        <div className={iconBoxClass}>
                          <Icon size={24} />
                        </div>

                        <div className={labelClass}>{plan.label}</div>
                        <h3 className="text-2xl font-black mt-2 mb-3">{plan.name}</h3>
                        <p className={descClass}>{plan.desc}</p>

                        <div className="mb-8">
                          <span className="text-3xl font-black">{plan.fee}</span>
                          <span className={`text-sm ml-1 font-bold ${feeUnitClass}`}>
                            {plan.feeUnit}
                          </span>
                        </div>

                        <ul className="space-y-3 mb-10 flex-1">
                          {plan.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-3">
                              <div className={checkBoxClass}>
                                <Check size={12} />
                              </div>
                              <span className={benefitTextClass}>{b}</span>
                            </li>
                          ))}
                        </ul>

                        <Link href="/contact" className={buttonClass}>
                          가입 신청 <ArrowRight size={16} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </ContentCard>

              {/* 2. 회원 혜택 (비교표) */}
              <ContentCard id="section-1">
                <SectionTitle icon={<Sparkles />} label="Benefits" title="회원 혜택 비교" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  각 회원 유형별로 제공되는 혜택을 한눈에 비교해보실 수 있습니다.
                </p>

                <div className="overflow-x-auto -mx-2 px-2">
                  <table className="w-full min-w-[640px] border-separate border-spacing-0">
                    <thead>
                      <tr>
                        <th className="text-left py-5 px-5 text-[13px] font-black tracking-wider text-slate-500 uppercase bg-[#f8fbff] rounded-l-[16px] border-y border-l border-blue-100 w-[40%]">
                          혜택 항목
                        </th>
                        <th className="py-5 px-5 text-[13px] font-black tracking-wider text-slate-700 bg-[#f8fbff] border-y border-blue-100">
                          개인
                        </th>
                        <th className="py-5 px-5 text-[13px] font-black tracking-wider text-white bg-[#2563eb] border-y border-[#2563eb]">
                          기업
                        </th>
                        <th className="py-5 px-5 text-[13px] font-black tracking-wider text-slate-700 bg-[#f8fbff] rounded-r-[16px] border-y border-r border-blue-100">
                          기관
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {benefitCategories.map((cat) => (
                        <React.Fragment key={cat.title}>
                          <tr>
                            <td
                              colSpan={4}
                              className="pt-8 pb-3 px-2 text-[12px] font-black tracking-[0.2em] uppercase text-[#2563eb]"
                            >
                              {cat.title}
                            </td>
                          </tr>
                          {cat.items.map((item) => (
                            <tr key={item.label} className="group">
                              <td className="py-4 px-5 text-[14px] text-slate-700 border-b border-slate-100 break-keep">
                                {item.label}
                              </td>
                              <td className="py-4 px-5 text-center border-b border-slate-100">
                                <BenefitMark active={item.personal} />
                              </td>
                              <td className="py-4 px-5 text-center border-b border-slate-100 bg-[#f8fbff]">
                                <BenefitMark active={item.corporate} highlight />
                              </td>
                              <td className="py-4 px-5 text-center border-b border-slate-100">
                                <BenefitMark active={item.institution} />
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ContentCard>

              {/* 3. 가입 절차 */}
              <ContentCard id="section-2">
                <SectionTitle icon={<ClipboardCheck />} label="Process" title="가입 절차" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  간단한 4단계 절차를 통해 협회 회원으로 가입하실 수 있습니다.
                  궁금하신 점은 언제든 사무국으로 문의해주세요.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                  {processSteps.map((step) => {
                    const Icon = step.Icon;
                    return (
                      <div
                        key={step.no}
                        className="relative p-6 rounded-[26px] bg-[#f8fbff] border border-blue-100 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition"
                      >
                        <div className="absolute top-6 right-6 text-[40px] font-black text-[#2563eb] opacity-10 leading-none">
                          {step.no}
                        </div>
                        <div className="relative">
                          <div className="w-12 h-12 rounded-2xl bg-white text-[#2563eb] border border-blue-100 flex items-center justify-center mb-5">
                            <Icon size={20} />
                          </div>
                          <div className="text-[11px] font-black tracking-[0.22em] text-[#2563eb] mb-2">
                            STEP {step.no}
                          </div>
                          <h3 className="text-[17px] font-black text-slate-950 mb-3 break-keep">
                            {step.title}
                          </h3>
                          <p className="text-[13px] text-slate-500 leading-relaxed break-keep">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 필요 서류 */}
                <div className="rounded-[24px] p-7 bg-[#eff6ff] border border-blue-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#2563eb] flex items-center justify-center border border-blue-100">
                      <FileText size={18} />
                    </div>
                    <h4 className="text-lg font-black text-slate-950">필요 서류 안내</h4>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-5 text-[14px] text-slate-600">
                    <div>
                      <div className="text-[12px] font-black tracking-wider text-[#2563eb] mb-2">
                        개인회원
                      </div>
                      <div className="break-keep">신청서 1부</div>
                    </div>
                    <div>
                      <div className="text-[12px] font-black tracking-wider text-[#2563eb] mb-2">
                        기업회원
                      </div>
                      <div className="break-keep">
                        신청서 1부<br />
                        사업자등록증 사본
                      </div>
                    </div>
                    <div>
                      <div className="text-[12px] font-black tracking-wider text-[#2563eb] mb-2">
                        기관회원
                      </div>
                      <div className="break-keep">
                        신청서 1부<br />
                        기관 설립 증빙 서류
                      </div>
                    </div>
                  </div>
                </div>
              </ContentCard>

              {/* 4. FAQ */}
              <ContentCard id="section-3">
                <SectionTitle icon={<HelpCircle />} label="FAQ" title="자주 묻는 질문" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  회원 가입 전 가장 많이 문의주시는 질문들을 정리했습니다.
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details
                      key={faq.q}
                      className="group p-6 rounded-[22px] bg-[#f8fbff] border border-blue-100 hover:bg-white hover:shadow-[0_18px_44px_rgba(37,99,235,0.08)] transition open:bg-white open:shadow-[0_18px_44px_rgba(37,99,235,0.08)]"
                    >
                      <summary className="flex items-start gap-4 cursor-pointer list-none">
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center font-black text-sm border border-blue-100">
                          Q{idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[16px] font-black text-slate-950 break-keep pr-6">
                            {faq.q}
                          </h4>
                        </div>
                        <ChevronRight
                          size={18}
                          className="shrink-0 text-slate-400 mt-2 group-open:rotate-90 transition-transform"
                        />
                      </summary>
                      <div className="mt-5 pl-[48px] text-[14.5px] text-slate-600 leading-loose break-keep">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </ContentCard>

              {/* CTA */}
              <section className="relative rounded-[40px] p-9 md:p-14 overflow-hidden bg-gradient-to-br from-[#1b3f7a] via-[#1d4ed8] to-[#2563eb] text-white shadow-[0_24px_80px_rgba(37,99,235,0.25)]">
                <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute left-0 bottom-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

                <div className="relative z-10 grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
                  <div>
                    <span className="text-[12px] font-black tracking-[0.22em] uppercase text-white/70">
                      Join Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 mb-5 tracking-[-0.03em] break-keep">
                      지금 협회 회원으로 함께해주세요
                    </h2>
                    <p className="text-white/80 leading-relaxed break-keep">
                      가입 절차 및 회원 관련 문의는 사무국으로 연락 주시면 친절하게
                      안내해드립니다.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-5 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                          <Phone size={16} />
                        </div>
                        <div>
                          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-white/60">
                            대표전화
                          </div>
                          <div className="font-bold">051-XXXX-XXXX</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                          <Mail size={16} />
                        </div>
                        <div>
                          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-white/60">
                            이메일
                          </div>
                          <div className="font-bold">member@kaisa.or.kr</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#2563eb] rounded-full font-black hover:bg-[#dce8ff] transition text-[15px]"
                    >
                      회원 가입 신청 <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white rounded-full font-black hover:bg-white/15 transition text-[15px] border border-white/20"
                    >
                      가입 문의하기 <Mail size={16} />
                    </Link>
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

function BenefitMark({
  active,
  highlight = false,
}: {
  active: boolean;
  highlight?: boolean;
}) {
  if (active) {
    const cls = highlight
      ? 'inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white'
      : 'inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#eff6ff] text-[#2563eb] border border-blue-100';
    return (
      <span className={cls}>
        <Check size={14} />
      </span>
    );
  }
  return <span className="inline-block text-slate-300 font-black text-lg">—</span>;
}