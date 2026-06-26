'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  MessageSquare,
  Building2,
  User,
  Briefcase,
  CheckCircle2,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import Header from '@/components/Header';
import { createContact } from '@/lib/api';

type InquiryType =
  | 'membership'
  | 'education'
  | 'partnership'
  | 'press'
  | 'etc';

type FormState = {
  inquiryType: InquiryType;
  name: string;
  affiliation: string;
  email: string;
  phone: string;
  title: string;
  message: string;
  agree: boolean;
};

type SubmitStatus = 'idle' | 'submitting' | 'success';

export default function ContactPage() {
  const navItems = ['연락처 안내', '문의 유형', '문의하기', '오시는 길'];

  const inquiryTypes: Array<{
    key: InquiryType;
    label: string;
    desc: string;
    Icon: React.ComponentType<{ size?: number }>;
    contact: string;
  }> = [
    {
      key: 'membership',
      label: '회원 가입 문의',
      desc: '개인·기업·기관 회원 가입 절차와 혜택에 대해 문의하실 수 있습니다.',
      Icon: User,
      contact: 'member@kaisa.or.kr',
    },
    {
      key: 'education',
      label: '교육·행사 문의',
      desc: '교육 프로그램, 세미나, 컨퍼런스 등 협회 행사 관련 문의입니다.',
      Icon: Briefcase,
      contact: 'edu@kaisa.or.kr',
    },
    {
      key: 'partnership',
      label: '사업 협력 문의',
      desc: '연구 협력, 공동 사업, MOU 체결 등 협력 제안을 받습니다.',
      Icon: Building2,
      contact: 'plan@kaisa.or.kr',
    },
    {
      key: 'press',
      label: '언론·홍보 문의',
      desc: '취재 요청, 인터뷰, 보도자료 관련 문의를 처리합니다.',
      Icon: MessageSquare,
      contact: 'press@kaisa.or.kr',
    },
  ];

  const contactInfo: Array<{
    Icon: React.ComponentType<{ size?: number }>;
    label: string;
    primary: string;
    sub: string;
  }> = [
    {
      Icon: Phone,
      label: '대표전화',
      primary: '051-XXXX-XXXX',
      sub: '평일 09:00 ~ 18:00',
    },
    {
      Icon: Mail,
      label: '대표 이메일',
      primary: 'info@kaisa.or.kr',
      sub: '24시간 접수 가능',
    },
    {
      Icon: MapPin,
      label: '협회 주소',
      primary: '부산광역시 XX구 XX대로 XXX',
      sub: 'KAISA 빌딩 5층',
    },
    {
      Icon: Clock,
      label: '운영시간',
      primary: '평일 09:00 ~ 18:00',
      sub: '점심시간 12:00 ~ 13:00',
    },
  ];

  const [form, setForm] = useState<FormState>({
    inquiryType: 'membership',
    name: '',
    affiliation: '',
    email: '',
    phone: '',
    title: '',
    message: '',
    agree: false,
  });

  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: target.checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.agree) {
      setSubmitMessage('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setStatus('submitting');
    setSubmitMessage(null);

    try {
      await createContact({
        inquiryType: form.inquiryType,
        name: form.name,
        affiliation: form.affiliation,
        email: form.email,
        phone: form.phone,
        title: form.title,
        message: form.message,
        agree: form.agree,
      });

      setStatus('success');
      setSubmitMessage('문의가 정상적으로 접수되었습니다. 빠른 시일 내 답변드리겠습니다.');
      setForm({
        inquiryType: 'membership',
        name: '',
        affiliation: '',
        email: '',
        phone: '',
        title: '',
        message: '',
        agree: false,
      });
    } catch (error) {
      setStatus('idle');
      setSubmitMessage(error instanceof Error ? error.message : '문의 접수 중 오류가 발생했습니다.');
    }
  };

  const handleReset = () => {
    setForm({
      inquiryType: 'membership',
      name: '',
      affiliation: '',
      email: '',
      phone: '',
      title: '',
      message: '',
      agree: false,
    });
    setStatus('idle');
    setSubmitMessage(null);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f7fbff] text-[#0f172a] overflow-hidden">
        {/* 히어로 섹션 */}
        <section className="relative min-h-[480px] bg-gradient-to-br from-white via-[#eef8ff] to-[#dbeeff] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.28),transparent_32%),radial-gradient(circle_at_18%_28%,rgba(147,197,253,0.28),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:76px_76px]" />

          <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 pt-28 pb-24">
            <div className="max-w-[820px]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 shadow-sm text-[#2563eb] text-sm font-bold mb-7">
                <Sparkles size={16} />
                Contact Us
              </span>

              <h1 className="text-[42px] md:text-[64px] font-black leading-[1.08] tracking-[-0.045em] break-keep text-slate-950">
                궁금하신 점이 있으시면
                <br />
                <span className="text-[#2563eb]">언제든 문의</span>해주세요
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-[720px] break-keep">
                회원 가입, 교육 프로그램, 사업 협력 등 모든 문의사항에 대해
                사무국에서 친절하고 신속하게 답변해드립니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#section-2"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2563eb] text-white font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)]"
                >
                  문의 작성하기 <ArrowRight size={18} />
                </a>

                <a
                  href="tel:051-XXXX-XXXX"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#2563eb] border border-blue-100 font-bold hover:bg-blue-50 transition shadow-sm"
                >
                  바로 전화하기 <Phone size={18} />
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
                  <h2 className="mt-2 text-2xl font-black text-slate-950">문의하기</h2>
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
              {/* 1. 연락처 안내 */}
              <ContentCard id="section-0">
                <SectionTitle icon={<Phone />} label="Contact Info" title="연락처 안내" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회 사무국으로 직접 연락 주시거나, 아래 문의 양식을 통해
                  남겨주시면 영업일 기준 1~3일 이내 답변드립니다.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {contactInfo.map(({ Icon, label, primary, sub }) => (
                    <div
                      key={label}
                      className="p-7 rounded-[26px] bg-[#f8fbff] border border-blue-100 hover:bg-white hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white text-[#2563eb] border border-blue-100 flex items-center justify-center mb-5">
                        <Icon size={22} />
                      </div>
                      <div className="text-[12px] font-black tracking-[0.22em] uppercase text-[#2563eb] mb-2">
                        {label}
                      </div>
                      <div className="text-lg font-black text-slate-950 mb-1 break-keep">
                        {primary}
                      </div>
                      <div className="text-[13px] text-slate-500 break-keep">{sub}</div>
                    </div>
                  ))}
                </div>
              </ContentCard>

              {/* 2. 문의 유형 */}
              <ContentCard id="section-1">
                <SectionTitle
                  icon={<MessageSquare />}
                  label="Inquiry Type"
                  title="문의 유형별 안내"
                />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  문의 내용에 따라 담당 부서가 달라집니다. 빠른 답변을 위해 알맞은
                  담당 이메일로 직접 연락 주시거나, 아래 문의 양식에서 유형을
                  선택해주세요.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {inquiryTypes.map(({ key, label, desc, Icon, contact }) => (
                    <div
                      key={key}
                      className="group p-7 rounded-[26px] bg-white border border-blue-100 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(37,99,235,0.12)] transition"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white transition">
                          <Icon size={22} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-black text-slate-950 mb-2 break-keep">
                            {label}
                          </h3>
                          <p className="text-[14px] text-slate-500 leading-relaxed break-keep">
                            {desc}
                          </p>
                        </div>
                      </div>
                      
                      <a
                        href={`mailto:${contact}`}
                        className="inline-flex items-center gap-2 text-[#2563eb] font-bold text-[14px] hover:gap-3 transition-all"
                      >
                        <Mail size={14} />
                        {contact}
                      </a>
                    </div>
                  ))}
                </div>
              </ContentCard>

              {/* 3. 문의하기 폼 */}
              <ContentCard id="section-2">
                <SectionTitle icon={<Send />} label="Inquiry Form" title="문의하기" />

                {status === 'success' ? (
                  <SuccessMessage onReset={handleReset} />
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                    {/* 문의 유형 선택 */}
                    <FieldGroup label="문의 유형" required htmlFor="inquiryType">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={form.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-[12px] border border-slate-300 text-[15px] text-slate-700 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2212%22%20height=%2212%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%2364748b%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpolyline%20points=%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10"
                      >
                        <option value="membership">회원 가입 문의</option>
                        <option value="education">교육·행사 문의</option>
                        <option value="partnership">사업 협력 문의</option>
                        <option value="press">언론·홍보 문의</option>
                        <option value="etc">기타 문의</option>
                      </select>
                    </FieldGroup>

                    {/* 이름 / 소속 */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <FieldGroup label="이름" required htmlFor="name">
                        <TextInput
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="홍길동"
                          required
                        />
                      </FieldGroup>

                      <FieldGroup label="소속 / 회사" htmlFor="affiliation">
                        <TextInput
                          id="affiliation"
                          name="affiliation"
                          value={form.affiliation}
                          onChange={handleChange}
                          placeholder="한국AI보안협회"
                        />
                      </FieldGroup>
                    </div>

                    {/* 이메일 / 연락처 */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <FieldGroup label="이메일" required htmlFor="email">
                        <TextInput
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="example@kaisa.or.kr"
                          required
                        />
                      </FieldGroup>

                      <FieldGroup label="연락처" htmlFor="phone">
                        <TextInput
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="010-0000-0000"
                        />
                      </FieldGroup>
                    </div>

                    {/* 제목 */}
                    <FieldGroup label="제목" required htmlFor="title">
                      <TextInput
                        id="title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="문의 제목을 입력해주세요"
                        required
                      />
                    </FieldGroup>

                    {/* 문의 내용 */}
                    <FieldGroup label="문의 내용" required htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={8}
                        placeholder="문의하실 내용을 자세히 작성해주세요."
                        className="w-full px-4 py-3.5 rounded-[12px] border border-slate-300 text-[15px] text-slate-700 bg-white focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition resize-none leading-relaxed"
                      />
                    </FieldGroup>

                    {/* 개인정보 동의 */}
                    <div className="rounded-[20px] p-6 bg-[#f8fbff] border border-blue-100">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agree"
                          checked={form.agree}
                          onChange={handleChange}
                          className="shrink-0 mt-0.5 w-5 h-5 rounded border-slate-300 text-[#2563eb] focus:ring-[#2563eb] cursor-pointer accent-[#2563eb]"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-[14px] font-bold text-slate-700 mb-2">
                            개인정보 수집 및 이용에 동의합니다.{' '}
                            <span className="text-[#ef4444]">*</span>
                          </div>
                          <p className="text-[12.5px] text-slate-500 leading-relaxed break-keep">
                            수집 항목: 이름, 소속, 이메일, 연락처 / 수집 목적: 문의
                            답변 및 응대 / 보유 기간: 답변 완료 후 3개월
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* 제출 버튼 */}
                    {submitMessage ? (
                      <p className="text-sm text-emerald-600">
                        {submitMessage}
                      </p>
                    ) : null}

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2563eb] text-white rounded-full font-black hover:bg-[#1d4ed8] transition shadow-[0_14px_36px_rgba(37,99,235,0.28)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            전송 중...
                          </>
                        ) : (
                          <>
                            문의 제출하기 <Send size={18} />
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleReset}
                        disabled={status === 'submitting'}
                        className="sm:w-auto px-7 py-4 bg-white text-slate-600 border border-slate-300 rounded-full font-bold hover:bg-slate-50 transition disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        기초화
                      </button>
                    </div>
                  </form>
                )}
              </ContentCard>

              {/* 4. 오시는 길 */}
              <ContentCard id="section-3">
                <SectionTitle icon={<MapPin />} label="Location" title="오시는 길" />

                <p className="text-slate-600 leading-loose text-[17px] break-keep mb-10">
                  협회 사무국 위치 및 교통편을 안내해드립니다. 방문 전 사전 연락
                  부탁드립니다.
                </p>

                {/* 지도 영역 (placeholder) */}
                <div className="relative rounded-[26px] overflow-hidden border border-blue-100 mb-8 bg-gradient-to-br from-[#eff6ff] to-[#dbeeff] aspect-[16/9] flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(37,99,235,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.15)_1px,transparent_1px)] bg-[size:48px_48px]" />
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2563eb] text-white mb-4 shadow-[0_14px_36px_rgba(37,99,235,0.32)]">
                      <MapPin size={28} />
                    </div>
                    <div className="text-lg font-black text-slate-950 mb-1">
                      한국AI보안협회
                    </div>
                    <div className="text-[13px] text-slate-500">
                      부산광역시 XX구 XX대로 XXX
                    </div>
                    
                    <a
                      href="https://map.kakao.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-white text-[#2563eb] rounded-full font-bold text-[13px] border border-blue-100 hover:bg-[#eff6ff] transition shadow-sm"
                    >
                      지도 앱에서 보기 <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* 교통편 안내 */}
                <div className="grid md:grid-cols-3 gap-5">
                  <TransportCard
                    title="지하철"
                    items={['2호선 OO역 3번 출구', '도보 약 7분 거리']}
                  />
                  <TransportCard
                    title="버스"
                    items={['일반: 100, 200, 300번', 'XX 정류장 하차 후 도보 3분']}
                  />
                  <TransportCard
                    title="자가용"
                    items={['건물 지하 주차장 이용', '회원사 방문 시 2시간 무료']}
                  />
                </div>
              </ContentCard>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ─── 헬퍼 컴포넌트 ─── */

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

function FieldGroup({
  label,
  required = false,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-[14px] font-bold text-slate-700 mb-2"
      >
        {label}
        {required ? <span className="text-[#ef4444] ml-1">*</span> : null}
      </label>
      {children}
    </div>
  );
}

function TextInput({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}: {
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3.5 rounded-[12px] border border-slate-300 text-[15px] text-slate-700 bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 transition"
    />
  );
}

function TransportCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="p-6 rounded-[22px] bg-[#f8fbff] border border-blue-100">
      <div className="text-[12px] font-black tracking-[0.22em] uppercase text-[#2563eb] mb-3">
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-[14px] text-slate-600 leading-relaxed break-keep"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#dcfce7] text-[#10b981] mb-6">
        <CheckCircle2 size={40} />
      </div>
      <h3 className="text-2xl font-black text-slate-950 mb-3">
        문의가 정상적으로 접수되었습니다
      </h3>
      <p className="text-slate-600 leading-relaxed mb-8 break-keep max-w-md mx-auto">
        영업일 기준 1~3일 이내에 답변드리겠습니다.
        <br />
        문의해주셔서 감사합니다.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563eb] text-white rounded-full font-black hover:bg-[#1d4ed8] transition text-[14px]"
      >
        새 문의 작성하기 <ArrowRight size={16} />
      </button>
    </div>
  );
}