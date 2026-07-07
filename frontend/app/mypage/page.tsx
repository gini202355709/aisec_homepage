'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { clearAuthToken, getMe } from '@/lib/api';

export default function MyPage() {
  const router = useRouter();
  const [user, setUser] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const result = await getMe();
        setUser(result.user as Record<string, unknown>);
      } catch (err) {
        clearAuthToken();
        setError('로그인이 필요합니다.');
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  const handleLogout = () => {
    clearAuthToken();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] selection:bg-[#2563eb] selection:text-white font-sans">
      <Header />
      <main className="max-w-[1320px] mx-auto px-10 py-16">
        {loading ? (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-lg font-medium text-[#334155]">회원 정보를 불러오는 중입니다...</div>
          </div>
        ) : error || !user ? (
          <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center">
            <p className="text-xl font-semibold text-[#334155]">로그인이 필요합니다.</p>
            <p className="max-w-[520px] text-[#64748b]">
              회원 전용 마이페이지에 접근하려면 로그인 후 다시 시도해주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="px-8 py-3 rounded-full bg-[#2563eb] text-white font-semibold hover:bg-[#1d4ed8] transition-all"
              >
                로그인으로 이동
              </button>
              <button
                type="button"
                onClick={() => router.push('/')}
                className="px-8 py-3 rounded-full border border-[#cbd5e1] text-[#334155] hover:border-[#2563eb] hover:text-[#2563eb] transition-all"
              >
                메인으로 돌아가기
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <section className="rounded-[32px] border border-[#e2e8f0] bg-[#f8fafc] p-10 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2563eb] mb-3">
                    내 정보
                  </p>
                  <h1 className="text-3xl font-black text-[#0f172a]">마이페이지</h1>
                  <p className="mt-3 text-[#64748b] max-w-2xl leading-relaxed">
                    회원님의 계정 정보를 확인하고, 개인화된 협회 활동을 관리할 수 있습니다.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="px-6 py-3 rounded-full bg-[#ef4444] text-white font-semibold hover:bg-[#dc2626] transition-all"
                  >
                    로그아웃
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push('/mypage/edit')}
                    className="px-6 py-3 rounded-full border border-[#cbd5e1] text-[#334155] hover:border-[#2563eb] hover:text-[#2563eb] transition-all"
                  >
                    내 정보 변경
                  </button>
                </div>
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-[32px] border border-[#e2e8f0] p-10 shadow-sm">
                <div className="mb-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-3xl bg-[#2563eb]/10 text-[#2563eb] grid place-items-center text-2xl font-bold">
                    {String(user.name ? user.name : 'U').charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm text-[#64748b]">환영합니다,</p>
                    <h2 className="text-2xl font-bold text-[#0f172a]">{String(user.name ? user.name : '회원')}</h2>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ProfileItem label="이메일" value={String(user.email || '-') } />
                  <ProfileItem label="회원 유형" value={String(user.memberType || '-') } />
                  <ProfileItem label="회사명" value={String(user.company || '-') } />
                  <ProfileItem label="권한" value={String(user.role || '-') } />
                  <ProfileItem label="전화번호" value={String(user.phone || '등록된 번호 없음')} />
                </div>
              </div>

              <div className="rounded-[32px] border border-[#e2e8f0] bg-[#f8fafc] p-10 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2563eb] mb-5">
                  빠른 이동
                </p>
                <div className="space-y-4">
                  <ActionLink href="/news" label="공지사항 & 자료실" description="최신 소식과 자료를 한 눈에 확인하세요." />
                  <ActionLink href="/membership" label="회원 안내" description="협회 회원 혜택 및 가입 정보를 확인하세요." />
                  <ActionLink href="/contact" label="문의하기" description="협회 담당자에게 직접 문의할 수 있습니다." />
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-[#e2e8f0] bg-white p-6">
      <p className="text-sm text-[#64748b] mb-2">{label}</p>
      <p className="text-base font-semibold text-[#0f172a] break-words">{value}</p>
    </div>
  );
}

function ActionLink({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <Link
      href={href}
      className="block w-full rounded-3xl border border-[#dbeafe] bg-white p-5 transition-all hover:border-[#2563eb] hover:bg-[#eff6ff]"
    >
      <p className="font-semibold text-[#0f172a] mb-2">{label}</p>
      <p className="text-sm text-[#64748b]">{description}</p>
    </Link>
  );
}
