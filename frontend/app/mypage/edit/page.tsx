'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { getMe, updateProfile } from '@/lib/api';

export default function EditProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    company: '',
    password: '',
  });

  useEffect(() => {
    async function loadProfile() {
      try {
        const result = await getMe();
        const user = result.user as Record<string, unknown>;
        setForm({
          name: String(user.name || ''),
          phone: String(user.phone || ''),
          company: String(user.company || ''),
          password: '',
        });
      } catch (err) {
        setError('로그인이 필요합니다. 다시 로그인 해주세요.');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [router]);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setMessage(null);
    setError(null);

    try {
      const payload: Record<string, unknown> = {
        name: form.name,
        phone: form.phone,
        company: form.company,
      };
      if (form.password.trim()) {
        payload.password = form.password.trim();
      }

      const result = await updateProfile(payload);
      setMessage('내 정보가 성공적으로 변경되었습니다.');
      router.push('/mypage');
    } catch (err) {
      setError(err instanceof Error ? err.message : '정보 수정에 실패했습니다.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-[#2563eb] selection:text-white">
      <Header />
      <main className="max-w-[920px] mx-auto px-6 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#2563eb] mb-3">마이페이지</p>
          <h1 className="text-4xl font-black text-[#0f172a]">내 정보 수정</h1>
          <p className="mt-3 text-[#64748b] leading-relaxed">
            개인 정보를 안전하게 업데이트할 수 있습니다. 비밀번호는 변경하지 않으면 그대로 유지됩니다.
          </p>
        </div>

        {loading ? (
          <div className="rounded-[32px] border border-[#e2e8f0] bg-[#f8fafc] p-12 text-center text-[#334155]">
            프로필 정보를 불러오는 중입니다...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 rounded-[32px] border border-[#e2e8f0] bg-[#f8fafc] p-10 shadow-sm">
            {error && (
              <div className="rounded-3xl border border-[#fecaca] bg-[#fff1f2] p-4 text-[#b91c1c]">
                {error}
              </div>
            )}
            {message && (
              <div className="rounded-3xl border border-[#d1fae5] bg-[#ecfdf5] p-4 text-[#166534]">
                {message}
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                label="이름"
                value={form.name}
                onChange={(value) => handleChange('name', value)}
                placeholder="이름을 입력하세요"
              />
              <FormField
                label="회사명"
                value={form.company}
                onChange={(value) => handleChange('company', value)}
                placeholder="회사명을 입력하세요"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                label="전화번호"
                value={form.phone}
                onChange={(value) => handleChange('phone', value)}
                placeholder="연락처를 입력하세요"
              />
              <FormField
                label="비밀번호(선택)"
                value={form.password}
                onChange={(value) => handleChange('password', value)}
                placeholder="새 비밀번호를 입력하세요"
                type="password"
                helpText="비밀번호를 변경하려면 입력하세요. 비워두면 기존 비밀번호가 유지됩니다."
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => router.push('/mypage')}
                className="rounded-full border border-[#cbd5e1] bg-white px-8 py-3 font-semibold text-[#334155] hover:border-[#2563eb] hover:text-[#2563eb] transition-all"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-full bg-[#2563eb] px-8 py-3 font-semibold text-white hover:bg-[#1d4ed8] transition-all disabled:cursor-not-allowed disabled:opacity-70"
              >
                {saving ? '저장 중...' : '내 정보 저장'}
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  helpText,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  helpText?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#334155]">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        className="mt-3 w-full rounded-3xl border border-[#dbeafe] bg-white px-5 py-4 text-[#0f172a] outline-none transition-all focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
      />
      {helpText ? <p className="mt-3 text-sm text-[#64748b]">{helpText}</p> : null}
    </label>
  );
}
