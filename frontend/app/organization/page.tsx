import React from 'react';
import {
  ArrowRight,
  Network,
  Users,
  Building2,
  ChevronRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Crown,
  UserCog,
  Briefcase,
  Award,
} from 'lucide-react';
import Header from '@/components/Header';

export default function OrganizationPage() {
  const navItems = ['조직도', '이사진', '사무국 안내'];

  // 조직도 구성
  const orgStructure: Array<{
    level: string;
    name: string;
    desc: string;
  }> = [
    { level: 'TOP', name: '총회', desc: '협회 최고 의결기관' },
    { level: 'EXECUTIVE', name: '이사회', desc: '주요 정책 및 사업 심의·의결' },
    { level: 'LEADERSHIP', name: '협회장 / 부협회장', desc: '협회 대표 및 운영 총괄' },
  ];

  const committees: Array<{
    title: string;
    desc: string;
  }> = [
    { title: '기술표준위원회', desc: 'AI 보안 기술 표준 제정 및 검토' },
    { title: '정책자문위원회', desc: '정부·기관 대상 정책 자문 활동' },
    { title: '교육인증위원회', desc: '전문 인력 양성 및 자격 인증 운영' },
    { title: '국제협력위원회', desc: '글로벌 표준화 기구 및 협회 교류' },
    { title: '윤리위원회', desc: 'AI 윤리·신뢰성 검토 및 가이드 수립' },
    { title: '연구개발위원회', desc: 'AI 보안 기술 연구 및 R&D 과제 수행' },
  ];

  // 이사진
  const boardMembers: Array<{
    role: string;
    name: string;
    affiliation: string;
    color: string;
  }> = [
    { role: '협회장', name: '홍길동', affiliation: 'KAISA / 前 국가보안기술연구소장', color: 'bg-[#2563eb]' },
    { role: '수석부협회장', name: '김보안', affiliation: '서울대학교 컴퓨터공학부 교수', color: 'bg-[#1d4ed8]' },
    { role: '부협회장', name: '이안전', affiliation: '한국전자통신연구원(ETRI) 책임연구원', color: 'bg-[#2a5298]' },
    { role: '부협회장', name: '박지능', affiliation: 'KAIST 정보보호대학원 교수', color: 'bg-[#2a5298]' },
  ];

  const directors: Array<{
    name: string;
    affiliation: string;
  }> = [
    { name: '최정보', affiliation: '한국인터넷진흥원(KISA)' },
    { name: '정데이터', affiliation: '포스텍 AI연구원' },
    { name: '강네트', affiliation: 'LG CNS 보안사업부' },
    { name: '윤암호', affiliation: '국가보안기술연구소' },
    { name: '장보호', affiliation: '고려대학교 정보보호대학원' },
    { name: '신윤리', affiliation: '연세대학교 인공지능학과' },
    { name: '오표준', affiliation: '한국표준협회 ICT표준원' },
    { name: '한기술', affiliation: '삼성SDS Security R&D' },
  ];

  // 사무국
  const officeTeams: Array<{
    Icon: React.ComponentType<{ size?: number }>;
    name: string;
    desc: string;
    contact: string;
  }> = [
    {
      Icon: Briefcase,
      name: '기획총괄팀',
      desc: '협회 운영 기획 및 대외 협력',
      contact: 'plan@kaisa.or.kr',
    },
    {
      Icon: Award,
      name: '교육사업팀',
      desc: '교육 프로그램 및 자격 인증 운영',
      contact: 'edu@kaisa.or.kr',
    },
    {
      Icon: Network,
      name: '연구표준팀',
      desc: '기술 표준화 및 연구 과제 관리',
      contact: 'research@kaisa.or.kr',
    },
    {
      Icon: Users,
      name: '회원지원팀',
      desc: '회원사 관리 및 행사 운영 지원',
      contact: 'member@kaisa.or.kr',
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
                Organization &amp; Leadership
              </span>

              <h1 className="text-[42px] md:text-[48px] font-black leading-[1.08] tracking-[-0.045em] break-keep text-slate-950">
                전문성과 책임감을 갖춘
                <br />
                <span className="text-[#2563eb]">조직 및 임원</span>이 함께합니다
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-[720px] break-keep">
                산·학·연·관 각 분야의 전문가들이 협회의 의사결정과 운영에 참여하며,
                투명하고 체계적인 조직 체계를 통해 AI 보안 생태계를 이끌어갑니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#section-0"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2563eb] text-white font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)]"
                >
                  조직도 보기 <ArrowRight size={18} />
                </a>

                <a
                  href="#section-1"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-blue-50 transition shadow-sm"
                >
                  이사진 소개 <Users size={18} />
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
                  <h2 className="mt-2 text-2xl font-black text-slate-950">조직 및 임원</h2>
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
              {/* 1. 조직도 */}
              <ContentCard id="section-0">
                <SectionTitle icon={<Network />} label="Org Chart" title="조직도" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  한국AI보안협회는 최고 의결기관인 총회를 중심으로 이사회, 협회장단,
                  6개 전문위원회 및 사무국으로 구성되어 있습니다.
                </p>

                {/* 상위 조직 계층 */}
                <div className="space-y-4 mb-12">
                  {orgStructure.map((node, idx) => (
                    <div key={node.name} className="relative">
                      <div className="flex items-center gap-5 p-6 rounded-[24px] bg-gradient-to-r from-[#eff6ff] to-white border border-blue-100">
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#2563eb] text-white flex items-center justify-center font-black text-lg">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-[11px] font-black tracking-[0.2em] text-[#2563eb] mb-1">
                            {node.level}
                          </div>
                          <div className="text-xl font-black text-slate-950 mb-1">
                            {node.name}
                          </div>
                          <div className="text-sm text-slate-500 break-keep">{node.desc}</div>
                        </div>
                      </div>
                      {idx < orgStructure.length - 1 && (
                        <div className="flex justify-center py-2">
                          <div className="w-0.5 h-6 bg-blue-200" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 전문위원회 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
                    <h3 className="text-xl font-black text-slate-950">전문위원회</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {committees.map((c) => (
                      <div
                        key={c.title}
                        className="p-6 rounded-[22px] bg-[#f8fbff] border border-blue-100 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(37,99,235,0.1)] transition"
                      >
                        <div className="text-[15px] font-black text-slate-950 mb-2 break-keep">
                          {c.title}
                        </div>
                        <div className="text-[13px] text-slate-500 leading-relaxed break-keep">
                          {c.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 사무국 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
                    <h3 className="text-xl font-black text-slate-950">사무국</h3>
                  </div>
                  <div className="p-6 rounded-[22px] bg-[#eff6ff] border border-blue-100">
                    <div className="text-[15px] text-slate-600 leading-relaxed break-keep">
                      이사회 산하 실무 조직으로, 기획총괄팀·교육사업팀·연구표준팀·회원지원팀
                      4개 팀으로 구성되어 협회의 일상적인 운영과 회원 지원 업무를 수행합니다.
                    </div>
                  </div>
                </div>
              </ContentCard>

              {/* 2. 이사진 */}
              <ContentCard id="section-1">
                <SectionTitle icon={<Crown />} label="Board" title="이사진" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회장 및 부협회장을 중심으로 학계, 연구계, 산업계 전문가들이
                  이사진으로 참여하여 협회의 주요 의사결정을 이끌고 있습니다.
                </p>

                {/* 협회장단 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
                    <h3 className="text-xl font-black text-slate-950">협회장단</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    {boardMembers.map((m) => (
                      <div
                        key={m.name + m.role}
                        className="flex items-center gap-5 p-6 rounded-[24px] bg-white border border-blue-100 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition"
                      >
                        <div
                          className={`shrink-0 w-16 h-16 rounded-2xl ${m.color} text-white flex items-center justify-center font-black text-xl`}
                        >
                          {m.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-[#2563eb] mb-1">
                            {m.role}
                          </div>
                          <div className="text-lg font-black text-slate-950 mb-1">
                            {m.name}
                          </div>
                          <div className="text-[13px] text-slate-500 break-keep">
                            {m.affiliation}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 이사진 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
                    <h3 className="text-xl font-black text-slate-950">이사</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {directors.map((d) => (
                      <div
                        key={d.name}
                        className="p-5 rounded-[20px] bg-[#f8fbff] border border-blue-100 hover:bg-white hover:shadow-[0_18px_44px_rgba(37,99,235,0.1)] transition"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-4">
                          <UserCog size={18} />
                        </div>
                        <div className="text-[15px] font-black text-slate-950 mb-1">
                          {d.name}
                        </div>
                        <div className="text-[12px] text-slate-500 break-keep leading-relaxed">
                          {d.affiliation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ContentCard>

              {/* 3. 사무국 안내 */}
              <ContentCard id="section-2">
                <SectionTitle icon={<Building2 />} label="Office" title="사무국 안내" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  사무국은 협회의 일상적인 운영을 책임지는 실무 조직입니다.
                  각 팀별 담당 업무에 따라 문의해주시면 신속하게 안내해드리겠습니다.
                </p>

                {/* 팀 안내 */}
                <div className="grid md:grid-cols-2 gap-5 mb-10">
                  {officeTeams.map(({ Icon, name, desc, contact }) => (
                    <div
                      key={name}
                      className="p-7 rounded-[26px] bg-white border border-blue-100 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-5">
                        <Icon size={22} />
                      </div>
                      <h4 className="text-lg font-black text-slate-950 mb-2">{name}</h4>
                      <p className="text-[14px] text-slate-500 leading-relaxed break-keep mb-4">
                        {desc}
                      </p>
                      <div className="flex items-center gap-2 text-[13px] text-[#2563eb] font-bold">
                        <Mail size={14} />
                        {contact}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 연락처 정보 */}
                <div className="rounded-[28px] p-8 md:p-10 bg-gradient-to-br from-[#1b3f7a] to-[#2563eb] text-white overflow-hidden relative">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="text-[11px] font-black tracking-[0.22em] uppercase text-white/70 mb-3">
                      Contact Information
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-8">사무국 대표 연락처</h3>

                    <div className="grid sm:grid-cols-3 gap-6">
                      <ContactItem
                        icon={<MapPin size={18} />}
                        label="주소"
                        value="부산광역시 XX구 XX대로 XXX"
                      />
                      <ContactItem
                        icon={<Phone size={18} />}
                        label="대표전화"
                        value="051-XXXX-XXXX"
                      />
                      <ContactItem
                        icon={<Mail size={18} />}
                        label="이메일"
                        value="info@kaisa.or.kr"
                      />
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-white/70 text-sm">
                        운영시간: 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)
                      </p>
                      
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563eb] rounded-full font-black hover:bg-[#dce8ff] transition text-sm"
                      >
                        문의하기 <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </ContentCard>
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

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-black tracking-[0.18em] uppercase text-white/60 mb-1">
          {label}
        </div>
        <div className="text-[15px] font-bold break-keep">{value}</div>
      </div>
    </div>
  );
}
