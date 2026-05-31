'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
  Check,
} from 'lucide-react';

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white font-sans text-[#0f172a] selection:bg-[#2563eb] selection:text-white">
      {/* LEFT : 브랜드 패널 (홈페이지 CTA 그라데이션 재활용) */}
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
            AI 시대의 안전한 미래를
            <br />
            함께 만들어갑니다
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 break-keep">
            회원 전용 서비스에 접속하시려면 로그인이 필요합니다. 자료실 열람, 세미나 신청,
            전문위원회 활동을 이용하실 수 있습니다.
          </p>
          <ul className="space-y-4">
            {['보안 가이드라인 및 자료실 열람', '세미나·교육 우선 신청', '전문위원회 네트워킹 참여'].map(
              (f) => (
                <li key={f} className="flex items-center gap-3 text-[15px] text-white/90">
                  <div className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  {f}
                </li>
              ),
            )}
          </ul>
        </div>

        <p className="relative z-10 text-[13px] text-white/50">
          © 2026 한국AI보안협회 (Korea AI Security Association)
        </p>
      </div>

      {/* RIGHT : 로그인 폼 */}
      <div className="relative flex items-center justify-center px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,#eaf1ff_0%,transparent_55%)]" />

        <div className="relative w-full max-w-[420px]">
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

          <h1 className="text-[32px] font-bold mb-2">로그인</h1>
          <p className="text-[#7a8fa8] text-[15px] mb-10 break-keep">
            한국AI보안협회 회원 계정으로 로그인하세요.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: 실제 인증 로직 연결 (예: NextAuth signIn() 또는 로그인 API 호출)
            }}
            className="space-y-6"
          >
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
                  placeholder="비밀번호를 입력하세요"
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

            {/* 옵션 */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-[14px] text-[#3a4a5c] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 accent-[#2563eb] rounded"
                />
                로그인 상태 유지
              </label>
              <Link
                href="/find-password"
                className="text-[14px] font-bold text-[#2563eb] hover:text-[#1d4ed8]"
              >
                비밀번호 찾기
              </Link>
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#2563eb] text-white rounded-2xl font-bold hover:bg-[#1d4ed8] transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              로그인 <ArrowRight size={18} />
            </button>
          </form>

          {/* 구분선 */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[#dde4ef]" />
            <span className="text-[13px] text-[#7a8fa8]">또는</span>
            <div className="flex-1 h-px bg-[#dde4ef]" />
          </div>

          {/* 회원가입 */}
          <p className="text-center text-[14.5px] text-[#7a8fa8]">
            아직 회원이 아니신가요?{' '}
            <Link href="/membership" className="font-bold text-[#2563eb] hover:text-[#1d4ed8]">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}