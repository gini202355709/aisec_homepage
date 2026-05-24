import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  GraduationCap,
  Globe,
  FileText,
  Landmark,
  Check,
  Megaphone,
  Image as ImageIcon,
  Microscope,
  Scale,
  Mail,
} from 'lucide-react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0f172a] selection:bg-[#2563eb] selection:text-white">
      {/* 공통 Header */}
      <Header />

      {/* 1. HERO */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#dce8ff_0%,transparent_50%),radial-gradient(circle_at_20%_20%,#eaf1ff_0%,transparent_40%)]" />
        <div className="relative max-w-[1320px] mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#F2F5FA] text-[#EAB308] text-[28px] font-bold rounded-full mb-6">
              AI 시대의 안전한 미래를 만듭니다
            </span>
            <h1 className="text-4xl md:text-[52px] font-bold leading-[1.15] tracking-tight mb-8 break-keep">
              인공지능 보안 기술 연구 및<br />표준화를 선도하는{' '}
              <strong className="text-[#2563eb]">전문가 협회</strong>
            </h1>
            <p className="text-[17px] text-[#7a8fa8] leading-relaxed mb-10 max-w-[500px] break-keep">
              한국AI보안협회는 인공지능 기술의 안전하고 신뢰할 수 있는 발전을 위해 산학연관이 함께 만들어가는 전문가 집단입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/membership"
                className="flex items-center gap-2 px-9 py-4 bg-[#2563eb] text-white rounded-full font-bold hover:bg-[#1d4ed8] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                협회 가입하기 <ArrowRight size={18} />
              </Link>
              <Link
                href="/association"
                className="px-9 py-4 bg-white border border-[#dde4ef] text-[#3a4a5c] rounded-full font-bold hover:border-[#2563eb] hover:text-[#2563eb] transition-all"
              >
                자세히 보기
              </Link>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: '정회원사', val: '240+', icon: <Landmark className="text-[#2563eb]" /> },
              { label: '전문위원회', val: '38', icon: <Microscope className="text-[#2563eb]" /> },
              { label: '연간 교육', val: '120h', icon: <GraduationCap className="text-[#2563eb]" /> },
              { label: '국제 협력', val: '15', icon: <Globe className="text-[#2563eb]" /> },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur border border-white p-7 rounded-[24px] shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-4">{s.icon}</div>
                <div className="text-3xl font-bold text-[#1b3f7a] mb-1">{s.val}</div>
                <div className="text-[14px] text-[#7a8fa8]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PURPOSE */}
      <section className="py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
            <div>
              <span className="text-[12px] font-black tracking-widest text-[#2563eb] uppercase bg-[#eff6ff] px-3 py-1 rounded mb-4 inline-block">
                Introduction
              </span>
              <h2 className="text-4xl font-bold leading-tight mb-6">
                AI 보안의<br />새로운 기준을 세웁니다
              </h2>
              <p className="text-[#7a8fa8]">한국AI보안협회 설립목적과 비전</p>
            </div>
            <div className="space-y-6 text-[16px] text-[#3a4a5c] leading-loose break-keep">
              <p>
                한국AI보안협회는 급속도로 발전하는 인공지능 기술이 사회·경제적으로 안전하게 활용될 수 있도록 보안 표준 수립, 정책 제언, 기술 연구를 목적으로 합니다.
              </p>
              <p>
                정부기관, 연구소, 학계가 유기적으로 협력하는 플랫폼을 제공하며 국내 AI 생태계의 안전성을 확보하는 데 기여하고 있습니다.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: '🔐', text: '보안 표준화' },
                  { icon: '🎓', text: '인재 양성' },
                  { icon: '🌐', text: '국제 협력' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f0f4fb] p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#eaeff8]"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="text-[14px] font-bold text-[#1b3f7a]">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEWS SECTION */}
      <section className="py-28 bg-[#f2f5fa]">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#2563eb] font-bold text-[13px] tracking-widest uppercase">
                Latest News
              </span>
              <h2 className="text-3xl font-bold mt-2">최신 공지 및 소식</h2>
            </div>
            <Link
              href="/news"
              className="flex items-center gap-2 text-[#2563eb] font-bold text-[14px] group"
            >
              전체보기{' '}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                cat: '공지사항',
                title: '2026년도 정기총회 개최 안내',
                date: '2026.01.15',
                icon: <Megaphone className="text-white" />,
                color: 'bg-[#2563eb]',
                href: '/news#section-0',
              },
              {
                cat: '자료실',
                title: 'AI 보안 가이드라인 v2.0 배포',
                date: '2026.01.08',
                icon: <FileText className="text-[#2563eb]" />,
                color: 'bg-[#dce8ff]',
                href: '/news#section-1',
              },
              {
                cat: '갤러리',
                title: 'AI 보안 컨퍼런스 2026 결과 보고',
                date: '2026.05.14',
                icon: <ImageIcon className="text-[#2563eb]" />,
                color: 'bg-[#e0ecff]',
                href: '/news#section-2',
              },
            ].map((news, i) => (
              <Link
                key={i}
                href={news.href}
                className="bg-white rounded-[24px] overflow-hidden border border-[#dde4ef] hover:-translate-y-2 transition-all hover:shadow-2xl group cursor-pointer"
              >
                <div className={`h-48 flex items-center justify-center relative ${news.color}`}>
                  <div className="scale-[2] opacity-80">{news.icon}</div>
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-[#2563eb] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                    {news.cat}
                  </span>
                </div>
                <div className="p-8">
                  <div className="text-[13px] text-[#7a8fa8] mb-3">{news.date}</div>
                  <h3 className="text-[18px] font-bold leading-snug group-hover:text-[#2563eb] transition-colors mb-4">
                    {news.title}
                  </h3>
                  <p className="text-[14px] text-[#7a8fa8] line-clamp-2">
                    협회 소속 회원분들의 많은 관심과 참여를 부탁드립니다...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACTIVITIES */}
      <section className="py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[0.2em]">
              Our Activities
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-5">주요 사업 및 활동</h2>
            <p className="text-[#7a8fa8]">AI 보안 생태계 강화를 위한 협회의 핵심 사업을 소개합니다.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Microscope />,
                title: '연구·표준화',
                desc: 'AI 시스템 취약점 분석 및 보안 표준 개발 사업을 수행합니다.',
              },
              {
                icon: <GraduationCap />,
                title: '교육 및 인증',
                desc: '전문인력 양성을 위한 교육과정 및 자격증 발급을 지원합니다.',
              },
              {
                icon: <Scale />,
                title: '정책 자문',
                desc: '정부기관에 보안 관련 정책 자문 및 의견서를 제출합니다.',
              },
              {
                icon: <Globe />,
                title: '국제 교류',
                desc: '글로벌 표준화 기구와 협력하여 트렌드를 공유합니다.',
              },
            ].map((act, i) => (
              <Link
                key={i}
                href="/activities"
                className="bg-[#f0f4fb] p-10 rounded-[32px] hover:bg-white border border-transparent hover:border-[#eaeff8] hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#2563eb] shadow-sm mb-8 group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                  {act.icon}
                </div>
                <div className="text-[12px] font-black text-[#2563eb] mb-2 uppercase tracking-tighter opacity-50 italic">
                  Activity 0{i + 1}
                </div>
                <h3 className="text-[19px] font-bold mb-4">{act.title}</h3>
                <p className="text-[14px] text-[#7a8fa8] leading-relaxed break-keep">{act.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEMBERSHIP */}
      <section className="py-28 bg-[#f2f5fa]">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">함께 만들어가는 AI 보안 생태계</h2>
            <p className="text-[#7a8fa8]">다양한 회원 유형으로 협회에 참여하실 수 있습니다.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 개인회원 */}
            <div className="bg-white p-10 rounded-[32px] border border-[#dde4ef] relative flex flex-col">
              <div className="text-[#2563eb] font-black text-[12px] tracking-widest mb-2">
                PERSONAL
              </div>
              <h3 className="text-2xl font-bold mb-6">개인회원</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {['뉴스레터 수신', '세미나 참가 할인', '자료실 열람', '네트워킹 참여'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14.5px] text-[#3a4a5c]">
                    <div className="w-5 h-5 bg-[#eff6ff] rounded-full flex items-center justify-center text-[#2563eb]">
                      <Check size={12} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/membership"
                className="w-full py-4 border border-[#dde4ef] rounded-2xl font-bold hover:bg-[#f0f4fb] transition-colors text-center"
              >
                가입 신청
              </Link>
            </div>

            {/* 기업회원 (Featured) */}
            <div className="bg-white p-10 rounded-[32px] border-2 border-[#2563eb] relative shadow-2xl scale-105 z-10 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white text-[11px] font-bold px-5 py-1.5 rounded-full">
                추천
              </div>
              <div className="text-[#2563eb] font-black text-[12px] tracking-widest mb-2">
                CORPORATE
              </div>
              <h3 className="text-2xl font-bold mb-6">기업회원</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  '의결권/선거권 부여',
                  '전문위원회 참여',
                  '표준화 작업 참여',
                  '정부 과제 연계',
                  '컨퍼런스 부스 참여',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14.5px] text-[#3a4a5c]">
                    <div className="w-5 h-5 bg-[#2563eb] rounded-full flex items-center justify-center text-white">
                      <Check size={12} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/membership"
                className="w-full py-4 bg-[#2563eb] text-white rounded-2xl font-bold hover:bg-[#1d4ed8] transition-colors text-center"
              >
                가입 신청
              </Link>
            </div>

            {/* 기관회원 */}
            <div className="bg-white p-10 rounded-[32px] border border-[#dde4ef] flex flex-col">
              <div className="text-[#2563eb] font-black text-[12px] tracking-widest mb-2">
                INSTITUTION
              </div>
              <h3 className="text-2xl font-bold mb-6">기관회원</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {['정책자문위 참여', '공동연구 수행', '협회 로고 사용', '우선 협력기관 지정'].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-3 text-[14.5px] text-[#3a4a5c]">
                      <div className="w-5 h-5 bg-[#eff6ff] rounded-full flex items-center justify-center text-[#2563eb]">
                        <Check size={12} />
                      </div>
                      {f}
                    </li>
                  ),
                )}
              </ul>
              <Link
                href="/contact"
                className="w-full py-4 border border-[#dde4ef] rounded-2xl font-bold hover:bg-[#f0f4fb] transition-colors text-center"
              >
                가입 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <div className="max-w-[1320px] mx-auto px-10 py-12">
        <div className="bg-gradient-to-br from-[#1b3f7a] via-[#1d4ed8] to-[#2563eb] rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">협회 활동에 관심이 있으신가요?</h3>
            <p className="text-white/70">문의사항은 언제든지 사무국으로 연락 주시기 바랍니다.</p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 flex items-center gap-3 px-10 py-5 bg-white text-[#2563eb] rounded-full font-black hover:bg-[#dce8ff] transition-all hover:scale-105"
          >
            문의하기 <Mail size={20} />
          </Link>
        </div>
      </div>

      {/* 7. FOOTER */}
      <footer className="bg-white border-t border-[#dde4ef] pt-20">
        <div className="max-w-[1320px] mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 pb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Image
                src="/kaisa-logo-full.png"
              alt="한국AI보안협회"
              width={200} 
              height={53}
              className="object-contain"
              priority
              />
              
            </div>
            <p className="text-[14px] text-[#7a8fa8] leading-relaxed">
              부산광역시 XX구 XX대로 XXX
              <br />
              대표전화 : 051-XXXX-XXXX | 팩스 : 051-XXXX-XXXX
              <br />
              이메일 : info@kaisa.or.kr
            </p>
          </div>
          {[
            {
              title: '협회 소개',
              links: [
                { label: '설립목적', href: '/association#section-0' },
                { label: '협회장 인사말', href: '/association#section-1' },
                { label: '비전', href: '/association#section-2' },
                { label: '연혁', href: '/association#section-3' },
              ],
            },
            {
              title: '조직 및 임원',
              links: [
                { label: '조직도', href: '/organization#section-0' },
                { label: '이사진', href: '/organization#section-1' },
                { label: '사무국 안내', href: '/organization#section-2' },
              ],
            },
            {
              title: '자료 및 소식',
              links: [
                { label: '공지사항', href: '/news#section-0' },
                { label: '자료실', href: '/news#section-1' },
                { label: '갤러리', href: '/news#section-2' },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[15px] font-bold mb-6">{col.title}</h4>
              <ul className="space-y-4 text-[14px] text-[#7a8fa8]">
                {col.links.map((m) => (
                  <li key={m.label}>
                    <Link href={m.href} className="hover:text-[#2563eb] cursor-pointer transition-colors">
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#f2f5fa] py-8">
          <div className="max-w-[1320px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-[#7a8fa8]">
            <p>© 2026 한국AI보안협회 (Korea AI Security Association). All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-[#2563eb] font-bold">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-[#2563eb]">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}