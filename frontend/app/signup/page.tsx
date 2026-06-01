'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  User,
  Mail,
  Phone,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
  Check,
  Building2,
} from 'lucide-react';

export default function SignupPage() {
  const [showPw, setShowPw] = useState(false);
  const [showPwConfirm, setShowPwConfirm] = useState(false);
  const [memberType, setMemberType] = useState<'personal' | 'corporate'>('personal');

  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const pwMismatch = pwConfirm.length > 0 && pw !== pwConfirm;

  const [agreements, setAgreements] = useState({
    terms: false, // 필수
    privacy: false, // 필수
    marketing: false, // 선택
  });
  const allChecked = agreements.terms && agreements.privacy && agreements.marketing;
  const requiredAgreed = agreements.terms && agreements.privacy;

  const handleAllChange = (checked: boolean) =>
    setAgreements({ terms: checked, privacy: checked, marketing: checked });
  const handleOneChange = (key: keyof typeof agreements, checked: boolean) =>
    setAgreements((prev) => ({ ...prev, [key]: checked }));

  const memberTypes = [
    { id: 'personal' as const, label: '개인회원', icon: <User size={18} /> },
    { id: 'corporate' as const, label: '기업회원', icon: <Building2 size={18} /> },
  ];

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white font-sans text-[#0f172a] selection:bg-[#2563eb] selection:text-white">
      {/* LEFT : 브랜드 패널 (로그인 페이지와 동일 무드) */}
      <div className="relative hidden lg:flex flex-col justify-between p-16 overflow-hidden bg-gradient-to-br from-[#1b3f7a] via-[#1d4ed8] to-[#2563eb] text-white">
        <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute left-0 bottom-0 w-[28rem] h-[28rem] bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

        {/* 브랜드 */}
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 bg-white/15 backdrop-blur rounded-2xl flex items-center justify-center">
            <ShieldCheck size={22} />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-[17px]">한국AI보안협회</div>
            <div className="text-[12px] tracking-widest text-white/60">KAISA</div>
          </div>
        </Link>

        {/* 메시지 */}
        <div className="relative z-10 max-w-[440px]">
          <h2 className="text-[34px] font-bold leading-[1.25] mb-6 break-keep">
            지금 한국AI보안협회의
            <br />
            회원이 되어보세요
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 break-keep">
            회원가입 후 자료실 열람, 세미나·교육 신청, 전문위원회 활동 등 다양한 회원 전용 서비스를
            이용하실 수 있습니다.
          </p>
          <ul className="space-y-4">
            {[
              '보안 가이드라인 및 자료실 무제한 열람',
              '세미나·교육 우선 신청 및 할인 혜택',
              '전문위원회 네트워킹 참여',
              '협회 뉴스레터 및 최신 소식 수신',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[15px] text-white/90">
                <div className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                  <Check size={14} />
                </div>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-[13px] text-white/50">
          © 2026 한국AI보안협회 (Korea AI Security Association)
        </p>
      </div>

      {/* RIGHT : 회원가입 폼 */}
      <div className="relative flex items-center justify-center px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,#eaf1ff_0%,transparent_55%)]" />

        <div className="relative w-full max-w-[440px]">
          {/* 상단: 로고 / 홈으로 */}
          <div className="flex items-center justify-between mb-10">
            <Image
              src="/kaisa-logo-full.png"
              alt="한국AI보안협회"
              width={150}
              height={40}
              className="object-contain"
              priority
            />
            <Link
              href="/"
              className="text-[13px] text-[#7a8fa8] hover:text-[#2563eb] transition-colors"
            >
              홈으로
            </Link>
          </div>

          <h1 className="text-[32px] font-bold mb-2">회원가입</h1>
          <p className="text-[#7a8fa8] text-[15px] mb-8 break-keep">
            한국AI보안협회 회원으로 가입하고 다양한 혜택을 누려보세요.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (pwMismatch || !requiredAgreed) return;
              // TODO: 실제 회원가입 로직 연결 (예: 회원가입 API 호출 또는 NextAuth)
            }}
            className="space-y-5"
          >
            {/* 회원 유형 */}
            <div>
              <label className="block text-[13.5px] font-bold text-[#3a4a5c] mb-2">회원 유형</label>
              <div className="grid grid-cols-2 gap-3">
                {memberTypes.map((m) => {
                  const active = memberType === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMemberType(m.id)}
                      className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl border text-[14.5px] font-bold transition-all ${
                        active
                          ? 'bg-[#eff6ff] border-[#2563eb] text-[#2563eb]'
                          : 'bg-white border-[#dde4ef] text-[#7a8fa8] hover:border-[#aab7c8]'
                      }`}
                    >
                      {m.icon}
                      {m.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 이름 */}
            <div>
              <label htmlFor="name" className="block text-[13.5px] font-bold text-[#3a4a5c] mb-2">
                {memberType === 'corporate' ? '담당자 이름' : '이름'}
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a8fa8]" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="홍길동"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#dde4ef] rounded-2xl text-[15px] placeholder:text-[#aab7c8] focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all"
                />
              </div>
            </div>

            {/* 기업/기관명 (기업회원만 노출) */}
            {memberType === 'corporate' && (
              <div>
                <label
                  htmlFor="company"
                  className="block text-[13.5px] font-bold text-[#3a4a5c] mb-2"
                >
                  기업/기관명
                </label>
                <div className="relative">
                  <Building2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a8fa8]"
                  />
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="(주)한국에이아이"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#dde4ef] rounded-2xl text-[15px] placeholder:text-[#aab7c8] focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all"
                  />
                </div>
              </div>
            )}

            {/* 이메일 */}
            <div>
              <label htmlFor="email" className="block text-[13.5px] font-bold text-[#3a4a5c] mb-2">
                이메일
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a8fa8]" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@kaisa.or.kr"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#dde4ef] rounded-2xl text-[15px] placeholder:text-[#aab7c8] focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all"
                />
              </div>
            </div>

            {/* 휴대폰 번호 */}
            <div>
              <label htmlFor="phone" className="block text-[13.5px] font-bold text-[#3a4a5c] mb-2">
                휴대폰 번호
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a8fa8]" />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#dde4ef] rounded-2xl text-[15px] placeholder:text-[#aab7c8] focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all"
                />
              </div>
            </div>

            {/* 비밀번호 */}
            <div>
              <label
                htmlFor="password"
                className="block text-[13.5px] font-bold text-[#3a4a5c] mb-2"
              >
                비밀번호
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a8fa8]" />
                <input
                  id="password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  required
                  minLength={8}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="8자 이상 입력하세요"
                  className="w-full pl-12 pr-12 py-4 bg-white border border-[#dde4ef] rounded-2xl text-[15px] placeholder:text-[#aab7c8] focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a8fa8] hover:text-[#2563eb] transition-colors"
                  aria-label="비밀번호 표시 전환"
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label
                htmlFor="passwordConfirm"
                className="block text-[13.5px] font-bold text-[#3a4a5c] mb-2"
              >
                비밀번호 확인
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a8fa8]" />
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type={showPwConfirm ? 'text' : 'password'}
                  required
                  value={pwConfirm}
                  onChange={(e) => setPwConfirm(e.target.value)}
                  placeholder="비밀번호를 다시 입력하세요"
                  className={`w-full pl-12 pr-12 py-4 bg-white border rounded-2xl text-[15px] placeholder:text-[#aab7c8] focus:outline-none focus:ring-4 transition-all ${
                    pwMismatch
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10'
                      : 'border-[#dde4ef] focus:border-[#2563eb] focus:ring-[#2563eb]/10'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPwConfirm((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a8fa8] hover:text-[#2563eb] transition-colors"
                  aria-label="비밀번호 확인 표시 전환"
                >
                  {showPwConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {pwMismatch && (
                <p className="mt-2 text-[13px] text-red-500">비밀번호가 일치하지 않습니다.</p>
              )}
            </div>

            {/* 약관 동의 */}
            <div className="bg-[#f7f9fc] border border-[#dde4ef] rounded-2xl p-5 space-y-3">
              {/* 전체 동의 */}
              <label className="flex items-center gap-3 text-[15px] font-bold text-[#0f172a] cursor-pointer select-none pb-3 border-b border-[#e6ecf4]">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={(e) => handleAllChange(e.target.checked)}
                  className="w-5 h-5 accent-[#2563eb] rounded"
                />
                전체 약관에 동의합니다
              </label>

              {/* 이용약관 (필수) */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 text-[14px] text-[#3a4a5c] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreements.terms}
                    onChange={(e) => handleOneChange('terms', e.target.checked)}
                    className="w-4 h-4 accent-[#2563eb] rounded"
                  />
                  <span>
                    <span className="text-[#2563eb] font-bold">[필수]</span> 이용약관 동의
                  </span>
                </label>
                <Link
                  href="/terms"
                  className="text-[13px] text-[#7a8fa8] underline hover:text-[#2563eb]"
                >
                  보기
                </Link>
              </div>

              {/* 개인정보처리방침 (필수) */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 text-[14px] text-[#3a4a5c] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreements.privacy}
                    onChange={(e) => handleOneChange('privacy', e.target.checked)}
                    className="w-4 h-4 accent-[#2563eb] rounded"
                  />
                  <span>
                    <span className="text-[#2563eb] font-bold">[필수]</span> 개인정보처리방침 동의
                  </span>
                </label>
                <Link
                  href="/privacy"
                  className="text-[13px] text-[#7a8fa8] underline hover:text-[#2563eb]"
                >
                  보기
                </Link>
              </div>

              {/* 마케팅 (선택) */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 text-[14px] text-[#3a4a5c] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreements.marketing}
                    onChange={(e) => handleOneChange('marketing', e.target.checked)}
                    className="w-4 h-4 accent-[#2563eb] rounded"
                  />
                  <span>
                    <span className="text-[#7a8fa8] font-bold">[선택]</span> 마케팅 정보 수신 동의
                  </span>
                </label>
              </div>
            </div>

            {/* 가입 버튼 */}
            <button
              type="submit"
              disabled={!requiredAgreed || pwMismatch}
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#2563eb] text-white rounded-2xl font-bold hover:bg-[#1d4ed8] transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              회원가입 <ArrowRight size={18} />
            </button>
          </form>

          {/* 구분선 */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[#dde4ef]" />
            <span className="text-[13px] text-[#7a8fa8]">또는</span>
            <div className="flex-1 h-px bg-[#dde4ef]" />
          </div>

          {/* 로그인 이동 */}
          <p className="text-center text-[14.5px] text-[#7a8fa8]">
            이미 회원이신가요?{' '}
            <Link href="/login" className="font-bold text-[#2563eb] hover:text-[#1d4ed8]">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
