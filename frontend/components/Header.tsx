'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronDown, Search, Menu } from 'lucide-react';
import { clearAuthToken, getMe } from '@/lib/api';

const NAV_ITEMS = [
  {
    title: '협회소개',
    href: '/association',
    subs: [
      { label: '설립목적', href: '/association#section-0' },
      { label: '협회장 인사말', href: '/association#section-1' },
      { label: '비전', href: '/association#section-2' },
      { label: '연혁', href: '/association#section-3' },
      { label: '정관/회칙', href: '/association#section-4' },
    ],
  },
  {
    title: '조직 및 임원',
    href: '/organization',
    subs: [
      { label: '조직도', href: '/organization#section-0' },
      { label: '이사진', href: '/organization#section-1' },
      { label: '사무국 안내', href: '/organization#section-2' },
    ],
  },
  {
    title: '사업 활동 및 교육 행사',
    href: '/activities',
    subs: [],
  },
  {
    title: '회원 안내',
    href: '/membership',
    subs: [],
  },
  {
    title: '자료 및 소식',
    href: '/news',
    subs: [
      { label: '공지사항', href: '/news#section-0' },
      { label: '자료실', href: '/news#section-1' },
      { label: '갤러리', href: '/news#section-2' },
    ],
  },
  {
    title: '문의하기',
    href: '/contact',
    subs: [],
  },
];

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const result = await getMe();
        setUser(result.user as Record<string, unknown>);
      } catch {
        clearAuthToken();
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const handleLogout = () => {
    clearAuthToken();
    setUser(null);
    router.push('/');
  };

  return (
    <>
      {/* UTIL BAR */}
      <div className="hidden lg:block bg-white border-b border-[#eaeff8] py-2">
        <div className="max-w-[1320px] mx-auto px-10 flex justify-end gap-6 text-[12.5px] text-[#7a8fa8]">
          {loading ? (
            <span className="text-[#7a8fa8]">로딩 중...</span>
          ) : user ? (
            <>
              <Link href="/mypage" className="hover:text-[#2563eb] transition-colors">마이페이지</Link>
              <button
                type="button"
                onClick={handleLogout}
                className="hover:text-[#2563eb] transition-colors"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-[#2563eb] transition-colors">로그인</Link>
              <Link href="/signup" className="hover:text-[#2563eb] transition-colors">회원가입</Link>
            </>
          )}
          <Link href="/en" className="hover:text-[#2563eb] transition-colors font-medium">English</Link>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-[1000] bg-white/90 backdrop-blur-md border-b border-[#dde4ef]">
        <div className="max-w-[1320px] mx-auto px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            
            {/* 풀 로고 이미지 */}
            <Image
              src="/kaisa-logo-full.png"
              alt="한국AI보안협회"
              width={200} 
              height={53}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex h-full items-stretch">
              {NAV_ITEMS.map((item) => (
                <li key={item.title} className="group relative flex items-center">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-5 h-full text-[15px] font-medium text-[#3a4a5c] group-hover:text-[#2563eb] transition-colors border-b-2 border-transparent group-hover:border-[#2563eb]"
                  >
                    {item.title}
                    {item.subs.length > 0 && (
                      <ChevronDown
                        size={14}
                        className="opacity-40 group-hover:rotate-180 transition-transform"
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.subs.length > 0 && (
                    <div className="absolute top-full left-0 min-w-[200px] bg-white border border-[#dde4ef] border-t-2 border-t-[#2563eb] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                      {item.subs.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-5 py-3 text-[14px] text-[#3a4a5c] hover:bg-[#f0f4fb] hover:text-[#2563eb] hover:pl-7 transition-all border-b border-[#f2f5fa] last:border-0"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-[#7a8fa8] hover:bg-[#f0f4fb] hover:text-[#2563eb] rounded-lg transition-all">
              <Search size={22} />
            </button>
            <button className="p-2.5 text-[#7a8fa8] lg:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}