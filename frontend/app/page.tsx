import React from 'react';
import Link from 'next/link';
import { 
  ChevronDown, Search, Menu, ArrowRight, 
  Lock, GraduationCap, Globe, Beaker, 
  FileText, Landmark, Check, Megaphone, 
  BookOpen, Image as ImageIcon, Microscope, 
  Scale, Mail 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[##2563eb] font-sans text-[#1a2a3a] selection:bg-[#1b3f7a] selection:text-white">
      
      {/* 1. UTIL BAR */}
      <div className="hidden lg:block bg-white border-b border-[#eaeff8] py-2">
        <div className="max-w-[1320px] mx-auto px-10 flex justify-end gap-6 text-[12.5px] text-[#7a8fa8]">
          <a href="#" className="hover:text-[#1b3f7a] transition-colors">로그인</a>
          <a href="#" className="hover:text-[#1b3f7a] transition-colors">회원가입</a>
          <a href="#" className="hover:text-[#1b3f7a] transition-colors font-medium">English</a>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-[1000] bg-white/90 backdrop-blur-md border-b border-[#dde4ef]">
        <div className="max-w-[1320px] mx-auto px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 flex items-center justify-center bg-[#e8eef8] border border-[#1b3f7a] rounded-full">
              <div className="w-7 h-7 border-2 border-[#1b3f7a] rotate-45 flex items-center justify-center">
                <span className="text-[10px] font-extrabold text-[#1b3f7a] -rotate-45">AI</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[19px] font-bold text-[#1b3f7a] leading-none tracking-tight">한국AI보안협회</span>
              <span className="text-[9px] text-[#7a8fa8] font-normal tracking-[0.05em] uppercase mt-1">Korea AI Security Association</span>
            </div>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex h-full items-stretch">
              {
              [
                { title: '협회소개', 
                  href: '/association',
                  subs: ['설립목적', '협회장 인사말', '비전', '연혁', '정관/회칙'] },
                { title: '조직 및 임원', subs: ['조직도', '이사진', '사무국 안내'] },
                { title: '사업 활동 및 교육 행사' },
                { title: '회원 안내' },
                { title: '자료 및 소식',
                  href: '/news',
                  subs: ['공지사항', '자료실', '갤러리'] },
                { title: '문의하기' },
        ]
              .map((item) => (
                <li key={item.title} className="group relative flex items-center">
                  <Link
                    href={
                      item.title === '협회소개'
                        ? '/association'
                        : item.title === '자료 및 소식'
                        ? '/news'
                        : '#'
                    }
                    className="flex items-center gap-1 px-5 h-full text-[15px] font-medium text-[#3a4a5c] group-hover:text-[#1b3f7a] transition-colors border-b-2 border-transparent group-hover:border-[#1b3f7a]"
                  >
                    {item.title}
                    <ChevronDown
                      size={14}
                      className="opacity-40 group-hover:rotate-180 transition-transform"
                    />
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 min-w-[180px] bg-white border border-[#dde4ef] border-t-2 border-t-[#1b3f7a] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    {item.subs?.map((sub) => (
                      <a key={sub} href="#" className="block px-5 py-3 text-[14px] text-[#3a4a5c] hover:bg-[#f0f4fb] hover:text-[#1b3f7a] hover:pl-7 transition-all border-b border-[#f2f5fa] last:border-0">
                        {sub}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-[#7a8fa8] hover:bg-[#f0f4fb] hover:text-[#1b3f7a] rounded-lg transition-all">
              <Search size={22} />
            </button>
            <button className="p-2.5 text-[#7a8fa8] lg:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#dce8ff_0%,transparent_50%),radial-gradient(circle_at_20%_20%,#eaf1ff_0%,transparent_40%)]" />
        <div className="relative max-w-[1320px] mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#e8eef8] text-[#2a5298] text-[13px] font-bold rounded-full mb-6">AI 시대의 안전한 미래를 만듭니다</span>
            <h1 className="text-4xl md:text-[52px] font-bold leading-[1.15] tracking-tight mb-8 break-keep">
              인공지능 보안 기술 연구 및<br />표준화를 선도하는 <strong className="text-[#2563eb]">전문가 협회</strong>
            </h1>
            <p className="text-[17px] text-[#7a8fa8] leading-relaxed mb-10 max-w-[500px] break-keep">
              한국AI보안협회는 인공지능 기술의 안전하고 신뢰할 수 있는 발전을 위해 산학연관이 함께 만들어가는 전문가 집단입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-9 py-4 bg-[#2563eb] text-white rounded-full font-bold hover:bg-[#142e5c] transition-all hover:shadow-xl hover:-translate-y-1">
                협회 가입하기 <ArrowRight size={18} />
              </button>
              <button className="px-9 py-4 bg-white border border-[#dde4ef] text-[#3a4a5c] rounded-full font-bold hover:border-[#1b3f7a] hover:text-[#1b3f7a] transition-all">
                자세히 보기
              </button>
            </div>
          </div>
          
          {/* Hero Visual Card */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: '정회원사', val: '240+', icon: <Landmark className="text-[#2a5298]" /> },
              { label: '전문위원회', val: '38', icon: <Microscope className="text-[#2a5298]" /> },
              { label: '연간 교육', val: '120h', icon: <GraduationCap className="text-[#2a5298]" /> },
              { label: '국제 협력', val: '15', icon: <Globe className="text-[#2a5298]" /> },
            ].map((s, i) => (
              <div key={i} className="bg-white/80 backdrop-blur border border-white p-7 rounded-[24px] shadow-sm hover:shadow-md transition-all">
                <div className="mb-4">{s.icon}</div>
                <div className="text-3xl font-bold text-[#1b3f7a] mb-1">{s.val}</div>
                <div className="text-[14px] text-[#7a8fa8]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PURPOSE */}
      <section className="py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
            <div>
              <span className="text-[12px] font-black tracking-widest text-[#2a5298] uppercase bg-[#e8eef8] px-3 py-1 rounded mb-4 inline-block">Introduction</span>
              <h2 className="text-4xl font-bold leading-tight mb-6">AI 보안의<br />새로운 기준을 세웁니다</h2>
              <p className="text-[#7a8fa8]">한국AI보안협회 설립목적과 비전</p>
            </div>
            <div className="space-y-6 text-[16px] text-[#3a4a5c] leading-loose break-keep">
              <p>한국AI보안협회는 급속도로 발전하는 인공지능 기술이 사회·경제적으로 안전하게 활용될 수 있도록 보안 표준 수립, 정책 제언, 기술 연구를 목적으로 합니다.</p>
              <p>정부기관, 연구소, 학계가 유기적으로 협력하는 플랫폼을 제공하며 국내 AI 생태계의 안전성을 확보하는 데 기여하고 있습니다.</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: '🔐', text: '보안 표준화' },
                  { icon: '🎓', text: '인재 양성' },
                  { icon: '🌐', text: '국제 협력' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#f0f4fb] p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#eaeff8]">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="text-[14px] font-bold text-[#1b3f7a]">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWS SECTION */}
      <section className="py-28 bg-[#f2f5fa]">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#2a5298] font-bold text-[13px] tracking-widest uppercase">Latest News</span>
              <h2 className="text-3xl font-bold mt-2">최신 공지 및 소식</h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#1b3f7a] font-bold text-[14px] group">
              전체보기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cat: '공지사항', title: '2025년도 정기총회 개최 안내', date: '2025.01.15', icon: <Megaphone className="text-white" />, color: 'bg-[#1b3f7a]' },
              { cat: '자료실', title: 'AI 보안 가이드라인 v2.0 배포', date: '2025.01.08', icon: <FileText className="text-[#2a5298]" />, color: 'bg-[#dce8ff]' },
              { cat: '갤러리', title: 'AI 보안 컨퍼런스 2026 결과 보고', date: '2026.05.14', icon: <ImageIcon className="text-[#2a5298]" />, color: 'bg-[#e0ecff]' },
            ].map((news, i) => (
              <div key={i} className="bg-white rounded-[24px] overflow-hidden border border-[#dde4ef] hover:-translate-y-2 transition-all hover:shadow-2xl group cursor-pointer">
                <div className={`h-48 flex items-center justify-center relative ${news.color}`}>
                   <div className="scale-[2] opacity-80">{news.icon}</div>
                   <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-[#1b3f7a] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                     {news.cat}
                   </span>
                </div>
                <div className="p-8">
                  <div className="text-[13px] text-[#7a8fa8] mb-3">{news.date}</div>
                  <h3 className="text-[18px] font-bold leading-snug group-hover:text-[#1b3f7a] transition-colors mb-4">{news.title}</h3>
                  <p className="text-[14px] text-[#7a8fa8] line-clamp-2">협회 소속 회원분들의 많은 관심과 참여를 부탁드립니다...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACTIVITIES */}
      <section className="py-28 bg-white">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[#2a5298] font-bold text-[13px] uppercase tracking-[0.2em]">Our Activities</span>
            <h2 className="text-3xl font-bold mt-3 mb-5">주요 사업 및 활동</h2>
            <p className="text-[#7a8fa8]">AI 보안 생태계 강화를 위한 협회의 핵심 사업을 소개합니다.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Microscope />, title: '연구·표준화', desc: 'AI 시스템 취약점 분석 및 보안 표준 개발 사업을 수행합니다.' },
              { icon: <GraduationCap />, title: '교육 및 인증', desc: '전문인력 양성을 위한 교육과정 및 자격증 발급을 지원합니다.' },
              { icon: <Scale />, title: '정책 자문', desc: '정부기관에 보안 관련 정책 자문 및 의견서를 제출합니다.' },
              { icon: <Globe />, title: '국제 교류', desc: '글로벌 표준화 기구와 협력하여 트렌드를 공유합니다.' },
            ].map((act, i) => (
              <div key={i} className="bg-[#f0f4fb] p-10 rounded-[32px] hover:bg-white border border-transparent hover:border-[#eaeff8] hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1b3f7a] shadow-sm mb-8 group-hover:bg-[#1b3f7a] group-hover:text-white transition-all">
                  {act.icon}
                </div>
                <div className="text-[12px] font-black text-[#2a5298] mb-2 uppercase tracking-tighter opacity-50 italic">Activity 0{i+1}</div>
                <h3 className="text-[19px] font-bold mb-4">{act.title}</h3>
                <p className="text-[14px] text-[#7a8fa8] leading-relaxed break-keep">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEMBERSHIP */}
      <section className="py-28 bg-[#f2f5fa]">
        <div className="max-w-[1320px] mx-auto px-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">함께 만들어가는 AI 보안 생태계</h2>
             <p className="text-[#7a8fa8]">다양한 회원 유형으로 협회에 참여하실 수 있습니다.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 개인회원 */}
            <div className="bg-white p-10 rounded-[32px] border border-[#dde4ef] relative flex flex-col">
              <div className="text-[#2a5298] font-black text-[12px] tracking-widest mb-2">PERSONAL</div>
              <h3 className="text-2xl font-bold mb-6">개인회원</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {['뉴스레터 수신', '세미나 참가 할인', '자료실 열람', '네트워킹 참여'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-[14.5px] text-[#3a4a5c]">
                    <div className="w-5 h-5 bg-[#f0f4fb] rounded-full flex items-center justify-center text-[#1b3f7a]"><Check size={12} /></div> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-[#dde4ef] rounded-2xl font-bold hover:bg-[#f0f4fb] transition-colors">가입 신청</button>
            </div>
            {/* 기업회원 (Featured) */}
            <div className="bg-white p-10 rounded-[32px] border-2 border-[#1b3f7a] relative shadow-2xl scale-105 z-10 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1b3f7a] text-white text-[11px] font-bold px-5 py-1.5 rounded-full">추천</div>
              <div className="text-[#2a5298] font-black text-[12px] tracking-widest mb-2">CORPORATE</div>
              <h3 className="text-2xl font-bold mb-6">기업회원</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {['의결권/선거권 부여', '전문위원회 참여', '표준화 작업 참여', '정부 과제 연계', '컨퍼런스 부스 참여'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-[14.5px] text-[#3a4a5c]">
                    <div className="w-5 h-5 bg-[#1b3f7a] rounded-full flex items-center justify-center text-white"><Check size={12} /></div> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#1b3f7a] text-white rounded-2xl font-bold hover:bg-[#142e5c] transition-colors">가입 신청</button>
            </div>
            {/* 기관회원 */}
            <div className="bg-white p-10 rounded-[32px] border border-[#dde4ef] flex flex-col">
              <div className="text-[#2a5298] font-black text-[12px] tracking-widest mb-2">INSTITUTION</div>
              <h3 className="text-2xl font-bold mb-6">기관회원</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {['정책자문위 참여', '공동연구 수행', '협회 로고 사용', '우선 협력기관 지정'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-[14.5px] text-[#3a4a5c]">
                    <div className="w-5 h-5 bg-[#f0f4fb] rounded-full flex items-center justify-center text-[#1b3f7a]"><Check size={12} /></div> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-[#dde4ef] rounded-2xl font-bold hover:bg-[#f0f4fb] transition-colors">가입 문의</button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <div className="max-w-[1320px] mx-auto px-10 py-12">
        <div className="bg-[#1b3f7a] rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">협회 활동에 관심이 있으신가요?</h3>
            <p className="text-white/60">문의사항은 언제든지 사무국으로 연락 주시기 바랍니다.</p>
          </div>
          <button className="relative z-10 flex items-center gap-3 px-10 py-5 bg-white text-[#1b3f7a] rounded-full font-black hover:bg-[#dce8ff] transition-all hover:scale-105">
            문의하기 <Mail size={20} />
          </button>
        </div>
      </div>

      {/* 9. FOOTER */}
      <footer className="bg-white border-t border-[#dde4ef] pt-20">
        <div className="max-w-[1320px] mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 pb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#1b3f7a] rotate-45 flex items-center justify-center">
                <span className="text-[8px] font-black text-[#1b3f7a] -rotate-45">AI</span>
              </div>
              <span className="text-[20px] font-black text-[#1b3f7a]">한국AI보안협회</span>
            </div>
            <p className="text-[14px] text-[#7a8fa8] leading-relaxed">
              부산광역시 XX구 XX대로 XXX<br />
              대표전화 : 051-XXXX-XXXX | 팩스 : 051-XXXX-XXXX<br />
              이메일 : info@kaisa.or.kr
            </p>
          </div>
          {['협회 소개', '조직 및 임원', '자료 및 소식'].map(t => (
            <div key={t}>
              <h4 className="text-[15px] font-bold mb-6">{t}</h4>
              <ul className="space-y-4 text-[14px] text-[#7a8fa8]">
                {['메뉴 리스트 01', '메뉴 리스트 02', '메뉴 리스트 03', '메뉴 리스트 04'].map(m => (
                  <li key={m} className="hover:text-[#1b3f7a] cursor-pointer transition-colors">{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#f2f5fa] py-8">
          <div className="max-w-[1320px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-[#7a8fa8]">
            <p>© 2026 한국AI보안협회 (Korea AI Security Association). All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#1b3f7a] font-bold">개인정보처리방침</a>
              <a href="#" className="hover:text-[#1b3f7a]">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}