'use client';

import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Megaphone,
  FileText,
  Image as ImageIcon,
  Download,
  CalendarDays,
  ChevronRight,
  Search,
  Pin,
  Eye,
  Pencil,
} from 'lucide-react';
import Header from '@/components/Header';
import Link from 'next/link';
import ContentCard from '@/components/news/ContentCard';
import SectionTitle from '@/components/news/SectionTitle';
import { fetchGallery, fetchNotices, fetchResources } from '@/lib/api';

type NoticeItem = {
  id: string;
  tag: '중요' | '모집' | '교육' | '일반';
  title: string;
  date: string;
  views: number;
  pinned?: boolean;
};

type ResourceItem = {
  id: string;
  title: string;
  type: 'PDF' | 'DOC' | 'XLS' | 'ZIP';
  size: string;
  date: string;
  downloads: number;
};

type GalleryItem = {
  id: string;
  title: string;
  desc: string;
  date: string;
  gradient: string;
};

type NoticeApiItem = {
  id: string;
  tag?: string;
  title?: string;
  date?: string;
  views?: number;
  pinned?: boolean;
};

type ResourceApiItem = {
  id: string;
  title?: string;
  type?: string;
  size?: string;
  date?: string;
  downloads?: number;
};

type GalleryApiItem = {
  id: string;
  title?: string;
  description?: string;
  date?: string;
};

export default function NewsPage() {
  const navItems = ['공지사항', '자료실', '갤러리'];
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const [noticeResult, resourceResult, galleryResult] = await Promise.all([
          fetchNotices(),
          fetchResources(),
          fetchGallery(),
        ]);

        if (!isMounted) {
          return;
        }

        const normalizedNotices = (noticeResult.notices || []).map((item, index) => ({
          id: String(item.id ?? index + 1),
          tag: String(item.tag ?? '일반') as NoticeItem['tag'],
          title: String(item.title ?? '제목 없음'),
          date: String(item.date ?? '-'),
          views: Number(item.views ?? 0),
          pinned: Boolean(item.pinned),
        }));

        const normalizedResources = (resourceResult.resources || []).map((item, index) => ({
          id: String(item.id ?? index + 1),
          title: String(item.title ?? '제목 없음'),
          type: String(item.type ?? 'PDF') as ResourceItem['type'],
          size: String(item.size ?? '0KB'),
          date: String(item.date ?? '-'),
          downloads: Number(item.downloads ?? 0),
        }));

        const gradientPool = [
          'from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]',
          'from-[#60a5fa] via-[#2563eb] to-[#1d4ed8]',
          'from-[#dbeafe] via-[#60a5fa] to-[#2563eb]',
          'from-[#1e3a8a] via-[#2563eb] to-[#60a5fa]',
          'from-[#eff6ff] via-[#93c5fd] to-[#2563eb]',
          'from-[#2563eb] via-[#60a5fa] to-[#dbeafe]',
        ];

        const normalizedGallery = (galleryResult.gallery || []).map((item, index) => ({
          id: String(item.id ?? index + 1),
          title: String(item.title ?? '제목 없음'),
          desc: String(item.description ?? '설명이 없습니다.'),
          date: String(item.date ?? '-'),
          gradient: gradientPool[index % gradientPool.length],
        }));

        setNotices(normalizedNotices);
        setResources(normalizedResources);
        setGallery(normalizedGallery);
        setErrorMessage(null);
      } catch (error) {
        if (isMounted) {
          setErrorMessage(error instanceof Error ? error.message : '데이터를 불러오지 못했습니다.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const tagStyle: Record<NoticeItem['tag'], string> = {
    중요: 'bg-[#fef2f2] text-[#ef4444] border-red-100',
    모집: 'bg-[#eff6ff] text-[#2563eb] border-blue-100',
    교육: 'bg-[#fefce8] text-[#ca8a04] border-yellow-100',
    일반: 'bg-slate-100 text-slate-600 border-slate-200',
  };

  const fileTypeStyle: Record<ResourceItem['type'], string> = {
    PDF: 'bg-[#fef2f2] text-[#ef4444]',
    DOC: 'bg-[#eff6ff] text-[#2563eb]',
    XLS: 'bg-[#f0fdf4] text-[#15803d]',
    ZIP: 'bg-[#fefce8] text-[#ca8a04]',
  };

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
                News &amp; Resources
              </span>

              <h1 className="text-[42px] md:text-[48px] font-black leading-[1.08] tracking-[-0.045em] break-keep text-slate-950">
                협회의 새로운
                <br />
                <span className="text-[#2563eb]">소식과 자료</span>를 만나보세요
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-[720px] break-keep">
                공지사항, 연구 자료, 행사 사진까지 한국AI보안협회의 다양한 활동을
                한곳에서 확인하실 수 있습니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#section-0"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2563eb] text-white font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)]"
                >
                  공지사항 보기 <ArrowRight size={18} />
                </a>

                <a
                  href="#section-1"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-blue-50 transition shadow-sm"
                >
                  자료실 바로가기 <Download size={18} />
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
                  <h2 className="mt-2 text-2xl font-black text-slate-950">자료 및 소식</h2>
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
              {/* 1. 공지사항 */}
              <ContentCard id="section-0">
                <SectionTitle icon={<Megaphone />} label="Notice" title="공지사항" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회의 주요 공지 및 안내사항을 확인하실 수 있습니다.
                </p>

                {/* 검색 + 글쓰기 */}
                <div className="mb-7 flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-3 rounded-[16px] border border-slate-300 bg-white px-5 py-3.5 focus-within:border-[#2563eb] focus-within:ring-4 focus-within:ring-[#2563eb]/10 transition">
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input
                      placeholder="공지사항 검색"
                      className="w-full bg-transparent text-[14px] text-slate-700 outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <Link
                    href="/news/notice/write"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[16px] bg-[#2563eb] text-white font-bold text-[14px] hover:bg-[#1d4ed8] transition shadow-[0_10px_28px_rgba(37,99,235,0.25)] whitespace-nowrap"
                  >
                    <Pencil size={16} /> 글쓰기
                  </Link>
                </div>

                {isLoading ? (
                  <p className="text-slate-500">공지사항을 불러오는 중입니다...</p>
                ) : errorMessage ? (
                  <p className="text-red-500">{errorMessage}</p>
                ) : (
                  <ul className="divide-y divide-slate-100 border-y border-slate-100">
                    {notices.map((notice) => (
                      <li key={notice.id}>
                        <a
                          href="#"
                          className="group flex items-center gap-4 py-5 hover:bg-[#f8fbff] transition px-2 -mx-2 rounded-[8px]"
                        >
                          {/* 핀 아이콘 */}
                          <div className="shrink-0 w-8">
                            {notice.pinned ? (
                              <div className="w-7 h-7 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                                <Pin size={13} />
                              </div>
                            ) : null}
                          </div>

                          {/* 태그 */}
                          <span
                            className={`shrink-0 inline-flex items-center justify-center min-w-[52px] px-3 py-1 rounded-full text-[11px] font-black tracking-wider border ${tagStyle[notice.tag]}`}
                          >
                            {notice.tag}
                          </span>

                          {/* 제목 */}
                          <h3 className="flex-1 min-w-0 text-[15px] md:text-[16px] font-bold text-slate-800 group-hover:text-[#2563eb] transition break-keep">
                            {notice.title}
                          </h3>

                          {/* 메타 */}
                          <div className="hidden sm:flex items-center gap-5 shrink-0 text-[12.5px] text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <Eye size={13} />
                              {notice.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <CalendarDays size={13} />
                              {notice.date}
                            </span>
                          </div>

                          <ChevronRight
                            size={16}
                            className="shrink-0 text-slate-300 group-hover:text-[#2563eb] group-hover:translate-x-1 transition-all"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/* 페이지네이션 */}
                <div className="mt-10 flex items-center justify-center gap-2">
                  {['<', '1', '2', '3', '4', '5', '>'].map((p, idx) => {
                    const isActive = p === '1';
                    const baseClass =
                      'inline-flex items-center justify-center w-10 h-10 rounded-xl text-[14px] font-bold transition';
                    const activeClass = 'bg-[#2563eb] text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)]';
                    const inactiveClass = 'bg-white text-slate-600 border border-slate-200 hover:border-[#2563eb] hover:text-[#2563eb]';
                    return (
                      <button
                        key={`${p}-${idx}`}
                        className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </ContentCard>

              {/* 2. 자료실 */}
              <ContentCard id="section-1">
                <SectionTitle icon={<FileText />} label="Resources" title="자료실" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회에서 발간한 가이드라인, 리포트, 양식 자료 등을 다운로드 받으실
                  수 있습니다.
                </p>

                {isLoading ? (
                  <p className="text-slate-500">자료를 불러오는 중입니다...</p>
                ) : errorMessage ? (
                  <p className="text-red-500">{errorMessage}</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-5">
                    {resources.map((res) => (
                      <article
                        key={res.id}
                        className="group p-7 rounded-[26px] bg-[#f8fbff] border border-blue-100 hover:bg-white hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-white text-[#2563eb] border border-blue-100 flex items-center justify-center">
                            <FileText size={22} />
                          </div>
                          <span
                            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-black tracking-wider ${fileTypeStyle[res.type]}`}
                          >
                            {res.type}
                          </span>
                        </div>

                        <h3 className="text-[17px] font-black text-slate-950 mb-3 break-keep group-hover:text-[#2563eb] transition flex-1">
                          {res.title}
                        </h3>

                        <div className="flex items-center gap-4 text-[12px] text-slate-500 mb-5">
                          <span className="flex items-center gap-1.5">
                            <CalendarDays size={12} />
                            {res.date}
                          </span>
                          <span className="text-slate-300">|</span>
                          <span>{res.size}</span>
                          <span className="text-slate-300">|</span>
                          <span>{res.downloads.toLocaleString()}회</span>
                        </div>

                        <a
                          href={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'}/resources/${res.id}/download`}
                          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-[#2563eb] border border-blue-100 font-bold text-[14px] hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition"
                        >
                          다운로드 <Download size={15} />
                        </a>
                      </article>
                    ))}
                  </div>
                )}

                <div className="mt-10 text-center">
                  <a
                    href="/news/resources"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-[#eff6ff] transition text-[14px]"
                  >
                    전체 자료 보기 <ArrowRight size={15} />
                  </a>
                </div>
              </ContentCard>

              {/* 3. 갤러리 */}
              <ContentCard id="section-2">
                <SectionTitle icon={<ImageIcon />} label="Gallery" title="갤러리" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회 주요 행사 및 활동의 생생한 현장을 사진으로 만나보세요.
                </p>

                {isLoading ? (
                  <p className="text-slate-500">갤러리를 불러오는 중입니다...</p>
                ) : errorMessage ? (
                  <p className="text-red-500">{errorMessage}</p>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery.map((item) => (
                      <article
                        key={item.id}
                        className="group rounded-[26px] overflow-hidden bg-white border border-blue-100 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(37,99,235,0.18)] transition cursor-pointer"
                      >
                        <div className={`relative h-56 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.5),transparent_30%)]" />
                          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:32px_32px]" />

                          <div className="absolute bottom-5 left-5 w-12 h-12 rounded-2xl bg-white/95 text-[#2563eb] backdrop-blur flex items-center justify-center shadow-lg">
                            <ImageIcon size={20} />
                          </div>

                          <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-black text-[#2563eb] shadow-sm">
                            <CalendarDays size={11} />
                            {item.date}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-[17px] font-black text-slate-950 mb-2 group-hover:text-[#2563eb] transition break-keep">
                            {item.title}
                          </h3>
                          <p className="text-[13.5px] text-slate-500 leading-relaxed break-keep">
                            {item.desc}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                <div className="mt-10 text-center">
                  <a
                    href="/news/gallery"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-[#eff6ff] transition text-[14px]"
                  >
                    갤러리 전체보기 <ArrowRight size={15} />
                  </a>
                </div>
              </ContentCard>

              {/* CTA */}
              <section className="relative rounded-[40px] p-9 md:p-14 overflow-hidden bg-gradient-to-br from-[#1b3f7a] via-[#1d4ed8] to-[#2563eb] text-white shadow-[0_24px_80px_rgba(37,99,235,0.25)]">
                <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute left-0 bottom-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

                <div className="relative z-10 grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
                  <div>
                    <span className="text-[12px] font-black tracking-[0.22em] uppercase text-white/70">
                      Newsletter
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black mt-2 mb-5 tracking-[-0.03em] break-keep">
                      협회 소식을 메일로 받아보세요
                    </h2>
                    <p className="text-white/80 leading-relaxed break-keep">
                      주요 공지, 신규 자료, 행사 일정을 월 1회 뉴스레터로 전해드립니다.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#2563eb] rounded-full font-black hover:bg-[#dce8ff] transition text-[15px]"
                    >
                      뉴스레터 구독하기 <ArrowRight size={16} />
                    </a>
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