const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');
const { DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD } = require('../config/env');
const { hashPassword, sanitizeUser } = require('../utils/auth');

const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'store.json');

function createDefaultState() {
  return {
    users: [],
    notices: [],
    resources: [],
    gallery: [],
    contacts: [],
    membershipApplications: [],
  };
}

function ensureDirectory() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadState() {
  ensureDirectory();

  if (!fs.existsSync(DATA_FILE)) {
    const initialState = createDefaultState();
    seedDefaultState(initialState);
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialState, null, 2));
    return initialState;
  }

  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  const parsed = JSON.parse(raw);
  seedDefaultState(parsed);
  fs.writeFileSync(DATA_FILE, JSON.stringify(parsed, null, 2));
  return parsed;
}

function seedDefaultState(state) {
  if (!state.users || !Array.isArray(state.users)) {
    state.users = [];
  }
  if (!state.notices || !Array.isArray(state.notices)) {
    state.notices = [];
  }
  if (!state.resources || !Array.isArray(state.resources)) {
    state.resources = [];
  }
  if (!state.gallery || !Array.isArray(state.gallery)) {
    state.gallery = [];
  }
  if (!state.contacts || !Array.isArray(state.contacts)) {
    state.contacts = [];
  }
  if (!state.membershipApplications || !Array.isArray(state.membershipApplications)) {
    state.membershipApplications = [];
  }

  if (!state.users.some((user) => user.email === DEFAULT_ADMIN_EMAIL)) {
    state.users.push({
      id: randomUUID(),
      name: '관리자',
      email: DEFAULT_ADMIN_EMAIL,
      role: 'admin',
      memberType: 'corporate',
      company: 'KAISA',
      passwordHash: hashPassword(DEFAULT_ADMIN_PASSWORD),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  if (!state.notices.length) {
    state.notices = [
      {
        id: randomUUID(),
        tag: '중요',
        title: '2026 한국AI보안협회 정기총회 및 AI 보안 컨퍼런스 개최 안내',
        content: '정기총회와 컨퍼런스를 개최합니다.',
        date: '2026.05.14',
        views: 1284,
        pinned: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: randomUUID(),
        tag: '모집',
        title: 'AI 보안 전문위원회 신규 위원 모집 공고',
        content: '전문위원회 신규 위원을 모집합니다.',
        date: '2026.05.02',
        views: 892,
        pinned: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }

  if (!state.resources.length) {
    state.resources = [
      {
        id: randomUUID(),
        title: 'AI 시스템 보안 가이드라인 v2.0',
        type: 'PDF',
        size: '3.2MB',
        date: '2026.05.10',
        downloads: 1842,
        description: 'AI 시스템 보안 운영 가이드라인',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: randomUUID(),
        title: '생성형 AI 보안 위협 대응 체크리스트',
        type: 'DOC',
        size: '480KB',
        date: '2026.04.28',
        downloads: 956,
        description: '내부 보안 대응 체크리스트',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }

  if (!state.gallery.length) {
    state.gallery = [
      {
        id: randomUUID(),
        title: 'AI 보안 컨퍼런스 2026',
        description: '국내외 전문가 250명이 참여한 협회 대표 행사',
        date: '2026.05.14',
        imageUrl: '/images/conference-2026.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: randomUUID(),
        title: '전문위원회 발족식',
        description: '6대 전문위원회 위원장 위촉 및 운영 방향 발표',
        date: '2026.04.03',
        imageUrl: '/images/committee-launch.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }
}

let state = null;

function initializeStore() {
  state = loadState();
  return state;
}

function getState() {
  if (!state) {
    state = initializeStore();
  }
  return state;
}

function saveState() {
  ensureDirectory();
  const payload = JSON.stringify(getState(), null, 2);
  fs.writeFileSync(DATA_FILE, payload);
}

function createUser(data) {
  const now = new Date().toISOString();
  const user = {
    id: randomUUID(),
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    role: data.role || 'member',
    memberType: data.memberType || 'personal',
    company: data.company || '',
    passwordHash: data.passwordHash,
    createdAt: now,
    updatedAt: now,
  };
  getState().users.push(user);
  saveState();
  return user;
}

function findUserByEmail(email) {
  return getState().users.find((user) => user.email === email) || null;
}

function findUserById(id) {
  return getState().users.find((user) => user.id === id) || null;
}

function createNotice(data) {
  const now = new Date().toISOString();
  const notice = {
    id: randomUUID(),
    tag: data.tag || '일반',
    title: data.title,
    content: data.content || '',
    date: data.date || new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
    views: Number(data.views) || 0,
    pinned: Boolean(data.pinned),
    createdAt: now,
    updatedAt: now,
  };
  getState().notices.unshift(notice);
  saveState();
  return notice;
}

function listNotices() {
  return getState().notices.slice().sort((a, b) => Number(b.pinned) - Number(a.pinned));
}

function getNoticeById(id) {
  return getState().notices.find((notice) => notice.id === id) || null;
}

function updateNotice(id, updates) {
  const notice = getNoticeById(id);
  if (!notice) return null;
  Object.assign(notice, updates, { updatedAt: new Date().toISOString() });
  saveState();
  return notice;
}

function deleteNotice(id) {
  const index = getState().notices.findIndex((notice) => notice.id === id);
  if (index === -1) return false;
  getState().notices.splice(index, 1);
  saveState();
  return true;
}

function createResource(data) {
  const now = new Date().toISOString();
  const resource = {
    id: randomUUID(),
    title: data.title,
    type: data.type || 'PDF',
    size: data.size || '0KB',
    date: data.date || new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
    downloads: Number(data.downloads) || 0,
    description: data.description || '',
    fileName: data.fileName || '',
    filePath: data.filePath || '',
    createdAt: now,
    updatedAt: now,
  };
  getState().resources.unshift(resource);
  saveState();
  return resource;
}

function listResources() {
  return getState().resources.slice().sort((a, b) => b.downloads - a.downloads);
}

function getResourceById(id) {
  return getState().resources.find((resource) => resource.id === id) || null;
}

function updateResource(id, updates) {
  const resource = getResourceById(id);
  if (!resource) return null;
  Object.assign(resource, updates, { updatedAt: new Date().toISOString() });
  saveState();
  return resource;
}

function incrementResourceDownload(id) {
  const resource = getResourceById(id);
  if (!resource) return null;
  resource.downloads += 1;
  resource.updatedAt = new Date().toISOString();
  saveState();
  return resource;
}

function deleteResource(id) {
  const index = getState().resources.findIndex((resource) => resource.id === id);
  if (index === -1) return false;
  getState().resources.splice(index, 1);
  saveState();
  return true;
}

function createGalleryItem(data) {
  const now = new Date().toISOString();
  const item = {
    id: randomUUID(),
    title: data.title,
    description: data.description || '',
    date: data.date || new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
    imageUrl: data.imageUrl || '',
    createdAt: now,
    updatedAt: now,
  };
  getState().gallery.unshift(item);
  saveState();
  return item;
}

function listGallery() {
  return getState().gallery.slice().sort((a, b) => b.date.localeCompare(a.date));
}

function getGalleryItemById(id) {
  return getState().gallery.find((item) => item.id === id) || null;
}

function updateGalleryItem(id, updates) {
  const item = getGalleryItemById(id);
  if (!item) return null;
  Object.assign(item, updates, { updatedAt: new Date().toISOString() });
  saveState();
  return item;
}

function deleteGalleryItem(id) {
  const index = getState().gallery.findIndex((item) => item.id === id);
  if (index === -1) return false;
  getState().gallery.splice(index, 1);
  saveState();
  return true;
}

function createContact(data) {
  const now = new Date().toISOString();
  const contact = {
    id: randomUUID(),
    inquiryType: data.inquiryType || 'etc',
    name: data.name,
    affiliation: data.affiliation || '',
    email: data.email,
    phone: data.phone || '',
    title: data.title,
    message: data.message,
    agree: Boolean(data.agree),
    status: 'received',
    createdAt: now,
    updatedAt: now,
  };
  getState().contacts.unshift(contact);
  saveState();
  return contact;
}

function listContacts() {
  return getState().contacts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function updateContactStatus(id, status) {
  const contact = getState().contacts.find((item) => item.id === id);
  if (!contact) return null;
  contact.status = status;
  contact.updatedAt = new Date().toISOString();
  saveState();
  return contact;
}

function createMembershipApplication(data) {
  const now = new Date().toISOString();
  const application = {
    id: randomUUID(),
    name: data.name,
    email: data.email,
    role: data.role || 'member',
    memberType: data.memberType || 'personal',
    company: data.company || '',
    phone: data.phone || '',
    message: data.message || '',
    status: 'pending',
    createdAt: now,
    updatedAt: now,
  };
  getState().membershipApplications.unshift(application);
  saveState();
  return application;
}

function listMembershipApplications() {
  return getState().membershipApplications.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function getUserProfile(user) {
  return sanitizeUser(user);
}

module.exports = {
  initializeStore,
  getState,
  saveState,
  createUser,
  findUserByEmail,
  findUserById,
  createNotice,
  listNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
  createResource,
  listResources,
  getResourceById,
  updateResource,
  incrementResourceDownload,
  deleteResource,
  createGalleryItem,
  listGallery,
  getGalleryItemById,
  updateGalleryItem,
  deleteGalleryItem,
  createContact,
  listContacts,
  updateContactStatus,
  createMembershipApplication,
  listMembershipApplications,
  getUserProfile,
};
