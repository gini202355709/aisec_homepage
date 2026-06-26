'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Megaphone,
  MessageSquare,
  Users,
  ShieldCheck,
  Trash2,
  PlusCircle,
  CheckCircle2,
} from 'lucide-react';
import {
  createNotice,
  createResource,
  deleteNotice,
  deleteResource,
  fetchContacts,
  fetchMembershipApplications,
  fetchNotices,
  fetchResources,
  getMe,
  updateContactStatus,
} from '@/lib/api';

type NoticeItem = {
  id: string;
  title: string;
  content: string;
  tag: string;
  date: string;
  pinned: boolean;
  views: number;
};

type ResourceItem = {
  id: string;
  title: string;
  description: string;
  type: string;
  size: string;
  date: string;
  downloads: number;
};

type ContactItem = {
  id: string;
  name: string;
  email: string;
  title: string;
  message: string;
  status: string;
  inquiryType: string;
};

type ApplicationItem = {
  id: string;
  name: string;
  email: string;
  memberType: string;
  company: string;
  status: string;
};

function AdminPage() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [applications, setApplications] = useState<ApplicationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [noticeForm, setNoticeForm] = useState({ title: '', content: '', tag: '일반', date: '', pinned: false });
  const [resourceForm, setResourceForm] = useState({ title: '', description: '', type: 'PDF', size: '', date: '', file: null as File | null });

  useEffect(() => {
    const load = async () => {
      try {
        const meResult = await getMe();
        if (!meResult?.user || (meResult.user as { role?: string }).role !== 'admin') {
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        setIsAdmin(true);
        const [noticeResult, resourceResult, contactResult, appResult] = await Promise.all([
          fetchNotices(),
          fetchResources(),
          fetchContacts(),
          fetchMembershipApplications(),
        ]);

        setNotices((noticeResult.notices || []).map((item: Record<string, unknown>) => ({
          id: String(item.id || ''),
          title: String(item.title || ''),
          content: String(item.content || ''),
          tag: String(item.tag || '일반'),
          date: String(item.date || ''),
          pinned: Boolean(item.pinned),
          views: Number(item.views || 0),
        })));

        setResources((resourceResult.resources || []).map((item: Record<string, unknown>) => ({
          id: String(item.id || ''),
          title: String(item.title || ''),
          description: String(item.description || ''),
          type: String(item.type || 'PDF'),
          size: String(item.size || ''),
          date: String(item.date || ''),
          downloads: Number(item.downloads || 0),
        })));

        setContacts((contactResult.contacts || []).map((item: Record<string, unknown>) => ({
          id: String(item.id || ''),
          name: String(item.name || ''),
          email: String(item.email || ''),
          title: String(item.title || ''),
          message: String(item.message || ''),
          status: String(item.status || 'received'),
          inquiryType: String(item.inquiryType || 'etc'),
        })));

        setApplications((appResult.applications || []).map((item: Record<string, unknown>) => ({
          id: String(item.id || ''),
          name: String(item.name || ''),
          email: String(item.email || ''),
          memberType: String(item.memberType || ''),
          company: String(item.company || ''),
          status: String(item.status || 'pending'),
        })));
      } catch (error) {
        setIsAdmin(false);
        setMessage(error instanceof Error ? error.message : '관리자 권한 확인에 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleCreateNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createNotice({
        title: noticeForm.title,
        content: noticeForm.content,
        tag: noticeForm.tag,
        date: noticeForm.date || new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
        pinned: noticeForm.pinned,
      });
      const created = result.notice as Record<string, unknown>;
      setNotices((prev) => [{
        id: String(created.id || ''),
        title: String(created.title || noticeForm.title),
        content: String(created.content || noticeForm.content),
        tag: String(created.tag || noticeForm.tag),
        date: String(created.date || noticeForm.date),
        pinned: Boolean(created.pinned),
        views: Number(created.views || 0),
      }, ...prev]);
      setNoticeForm({ title: '', content: '', tag: '일반', date: '', pinned: false });
      setMessage('공지사항이 등록되었습니다.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '공지 등록에 실패했습니다.');
    }
  };

  const handleCreateResource = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resourceForm.file) {
      setMessage('업로드할 파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('title', resourceForm.title);
    formData.append('description', resourceForm.description);
    formData.append('type', resourceForm.type);
    formData.append('size', resourceForm.size || '0KB');
    formData.append('date', resourceForm.date || new Date().toISOString().slice(0, 10).replace(/-/g, '.'));
    formData.append('file', resourceForm.file);

    try {
      const result = await createResource(formData);
      const created = result.resource as Record<string, unknown>;
      setResources((prev) => [{
        id: String(created.id || ''),
        title: String(created.title || resourceForm.title),
        description: String(created.description || resourceForm.description),
        type: String(created.type || resourceForm.type),
        size: String(created.size || resourceForm.size || '0KB'),
        date: String(created.date || resourceForm.date),
        downloads: Number(created.downloads || 0),
      }, ...prev]);
      setResourceForm({ title: '', description: '', type: 'PDF', size: '', date: '', file: null });
      setMessage('자료가 등록되었습니다.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '자료 등록에 실패했습니다.');
    }
  };

  const handleDeleteNotice = async (id: string) => {
    try {
      await deleteNotice(id);
      setNotices((prev) => prev.filter((item) => item.id !== id));
      setMessage('공지사항이 삭제되었습니다.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '공지 삭제에 실패했습니다.');
    }
  };

  const handleDeleteResource = async (id: string) => {
    try {
      await deleteResource(id);
      setResources((prev) => prev.filter((item) => item.id !== id));
      setMessage('자료가 삭제되었습니다.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '자료 삭제에 실패했습니다.');
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateContactStatus(id, status);
      setContacts((prev) => prev.map((item) => item.id === id ? { ...item, status } : item));
      setMessage('문의 상태가 업데이트되었습니다.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '문의 상태 변경에 실패했습니다.');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50">관리자 권한을 확인하는 중입니다...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
        <ShieldCheck size={48} className="text-[#2563eb] mb-4" />
        <h1 className="text-2xl font-bold mb-2">관리자 권한이 필요합니다.</h1>
        <p className="text-slate-600 mb-6">로그인 후 관리자 계정으로 다시 접근해주세요.</p>
        <Link href="/login" className="px-5 py-3 rounded-full bg-[#2563eb] text-white">로그인하기</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-[#2563eb]">Admin Dashboard</p>
            <h1 className="text-3xl font-black">협회 운영 관리자</h1>
          </div>
          <Link href="/" className="text-sm font-bold text-[#2563eb]">홈으로 돌아가기</Link>
        </div>

        {message ? <div className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700">{message}</div> : null}

        <section className="grid md:grid-cols-2 gap-6">
          <form onSubmit={handleCreateNotice} className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#2563eb] font-black">
              <Megaphone size={18} /> 공지사항 등록
            </div>
            <input value={noticeForm.title} onChange={(e) => setNoticeForm((prev) => ({ ...prev, title: e.target.value }))} required placeholder="제목" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <textarea value={noticeForm.content} onChange={(e) => setNoticeForm((prev) => ({ ...prev, content: e.target.value }))} required placeholder="내용" rows={4} className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <div className="grid sm:grid-cols-2 gap-3">
              <select value={noticeForm.tag} onChange={(e) => setNoticeForm((prev) => ({ ...prev, tag: e.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3">
                <option value="중요">중요</option>
                <option value="모집">모집</option>
                <option value="교육">교육</option>
                <option value="일반">일반</option>
              </select>
              <input value={noticeForm.date} onChange={(e) => setNoticeForm((prev) => ({ ...prev, date: e.target.value }))} placeholder="날짜 (예: 2026.06.26)" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={noticeForm.pinned} onChange={(e) => setNoticeForm((prev) => ({ ...prev, pinned: e.target.checked }))} />
              상단 고정
            </label>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-3 font-bold text-white">
              <PlusCircle size={18} /> 공지 등록
            </button>
          </form>

          <form onSubmit={handleCreateResource} className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#2563eb] font-black">
              <FileText size={18} /> 자료 등록
            </div>
            <input value={resourceForm.title} onChange={(e) => setResourceForm((prev) => ({ ...prev, title: e.target.value }))} required placeholder="자료 제목" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <textarea value={resourceForm.description} onChange={(e) => setResourceForm((prev) => ({ ...prev, description: e.target.value }))} placeholder="설명" rows={3} className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <div className="grid sm:grid-cols-2 gap-3">
              <select value={resourceForm.type} onChange={(e) => setResourceForm((prev) => ({ ...prev, type: e.target.value }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3">
                <option value="PDF">PDF</option>
                <option value="DOC">DOC</option>
                <option value="XLS">XLS</option>
                <option value="ZIP">ZIP</option>
              </select>
              <input value={resourceForm.size} onChange={(e) => setResourceForm((prev) => ({ ...prev, size: e.target.value }))} placeholder="크기 (예: 3.2MB)" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            </div>
            <input type="date" value={resourceForm.date} onChange={(e) => setResourceForm((prev) => ({ ...prev, date: e.target.value.replace(/-/g, '.') }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <input type="file" onChange={(e) => setResourceForm((prev) => ({ ...prev, file: e.target.files?.[0] || null }))} className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-3 font-bold text-white">
              <PlusCircle size={18} /> 자료 등록
            </button>
          </form>
        </section>

        <section className="grid xl:grid-cols-3 gap-6">
          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 font-black text-[#2563eb] mb-4"><Megaphone size={18} /> 공지사항 목록</div>
            <div className="space-y-3">
              {notices.map((notice) => (
                <div key={notice.id} className="rounded-2xl border border-slate-200 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-sm">{notice.title}</div>
                      <div className="text-xs text-slate-500">{notice.tag} · {notice.date}</div>
                    </div>
                    <button onClick={() => handleDeleteNotice(notice.id)} className="text-red-500"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 font-black text-[#2563eb] mb-4"><FileText size={18} /> 자료 목록</div>
            <div className="space-y-3">
              {resources.map((resource) => (
                <div key={resource.id} className="rounded-2xl border border-slate-200 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-sm">{resource.title}</div>
                      <div className="text-xs text-slate-500">{resource.type} · {resource.size}</div>
                    </div>
                    <button onClick={() => handleDeleteResource(resource.id)} className="text-red-500"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 font-black text-[#2563eb] mb-4"><MessageSquare size={18} /> 문의 관리</div>
            <div className="space-y-3">
              {contacts.map((contact) => (
                <div key={contact.id} className="rounded-2xl border border-slate-200 p-3">
                  <div className="font-bold text-sm">{contact.title}</div>
                  <div className="text-xs text-slate-500">{contact.name} · {contact.email}</div>
                  <select value={contact.status} onChange={(e) => handleStatusChange(contact.id, e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm">
                    <option value="received">접수됨</option>
                    <option value="reviewing">검토중</option>
                    <option value="done">처리완료</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 font-black text-[#2563eb] mb-4"><Users size={18} /> 회원가입 신청</div>
          <div className="space-y-3">
            {applications.map((app) => (
              <div key={app.id} className="rounded-2xl border border-slate-200 p-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm">{app.name} · {app.email}</div>
                  <div className="text-xs text-slate-500">{app.memberType} · {app.company}</div>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                  <CheckCircle2 size={14} /> {app.status}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminPage;
