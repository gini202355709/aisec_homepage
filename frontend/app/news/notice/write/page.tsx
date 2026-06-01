'use client';

import { useState, type ChangeEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Pin, Paperclip, X, Send } from 'lucide-react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import ContentCard from '@/components/news/ContentCard';

const categories = ['중요', '모집', '교육', '일반'] as const;
type Category = (typeof categories)[number];

export default function NoticeWritePage() {
  const router = useRouter();
  const [category, setCategory] = useState<Category>('일반');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [pinned, setPinned] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selected]);
    e.target.value = '';
  };

  const removeFile = (idx: number) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleSubmit = async () => {
    if (!title.trim()) return alert('제목을 입력해 주세요.');
    setSubmitting(true);
    try {
      // TODO: 실제 API 연동
      // const body = new FormData();
      // body.append('category', category);
      // body.append('title', title);
      // body.append('content', content);
      // body.append('pinned', String(pinned));
      // files.forEach((f) => body.append('files', f));
      // await fetch('/api/notices', { method: 'POST', body });
      await new Promise((r) => setTimeout(r, 600));
      router.push('/news'); // 목록 라우트로 변경 가능
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7fbff] text-[#0f172a]">
        <PageHero
          badge="Write Notice"
          title={<>새로운 <span className="text-[#2563eb]">공지사항</span> 작성</>}
          description="회원과 공유할 소식을 작성해 주세요. 제목과 분류는 필수 항목입니다."
        />

        <section className="relative -mt-10 pb-24">
          <div className="relative max-w-[920px] mx-auto px-6 md:px-10">
            <ContentCard id="notice-write">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-[14px] font-bold text-slate-500 hover:text-[#2563eb] transition mb-8"
              >
                <ChevronLeft size={16} /> 공지사항 목록
              </Link>

              <Field label="분류" required>
                <div className="flex flex-wrap gap-2.5">
                  {categories.map((c) => {
                    const active = c === category;
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCategory(c)}
                        className={`px-5 py-2.5 rounded-full text-[14px] font-bold border transition ${
                          active
                            ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-[0_8px_20px_rgba(37,99,235,0.25)]'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-[#2563eb] hover:text-[#2563eb]'
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="제목" required>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                  className="w-full rounded-[16px] border border-slate-300 bg-white px-5 py-4 text-[15px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition"
                />
              </Field>

              <Field label="내용">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={12}
                  placeholder="내용을 입력하세요"
                  className="w-full rounded-[16px] border border-slate-300 bg-white px-5 py-4 text-[15px] leading-relaxed text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition resize-y"
                />
              </Field>

              <Field label="첨부파일">
                <label className="flex items-center justify-center gap-2 w-full rounded-[16px] border-2 border-dashed border-slate-300 bg-[#f8fbff] px-5 py-7 text-[14px] font-bold text-slate-500 cursor-pointer hover:border-[#2563eb] hover:text-[#2563eb] transition">
                  <Paperclip size={16} /> 파일을 선택하세요
                  <input type="file" multiple onChange={handleFiles} className="hidden" />
                </label>
                {files.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {files.map((f, i) => (
                      <li key={`${f.name}-${i}`} className="flex items-center justify-between rounded-[12px] bg-[#f8fbff] border border-blue-100 px-4 py-2.5 text-[13px]">
                        <span className="truncate text-slate-700">{f.name}</span>
                        <button type="button" onClick={() => removeFile(i)} className="shrink-0 text-slate-400 hover:text-[#ef4444] transition">
                          <X size={15} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </Field>

              <Field label="옵션">
                <button
                  type="button"
                  onClick={() => setPinned((v) => !v)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-bold border transition ${
                    pinned ? 'bg-[#eff6ff] text-[#2563eb] border-blue-200' : 'bg-white text-slate-500 border-slate-200 hover:border-[#2563eb]'
                  }`}
                >
                  <Pin size={14} /> 상단 고정 {pinned ? 'ON' : 'OFF'}
                </button>
              </Field>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:justify-end">
                <Link href="/news" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-600 border border-slate-200 font-bold hover:bg-slate-50 transition">
                  취소
                </Link>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2563eb] text-white font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)] disabled:opacity-60"
                >
                  {submitting ? '등록 중…' : <>등록하기 <Send size={16} /></>}
                </button>
              </div>
            </ContentCard>
          </div>
        </section>
      </main>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <div className="mb-7">
      <label className="block text-[14px] font-black text-slate-800 mb-3">
        {label}
        {required && <span className="text-[#ef4444] ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}