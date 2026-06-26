const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

function getAuthToken() {
  if (typeof window === 'undefined') {
    return null;
  }

  return localStorage.getItem('kaisa-token');
}

function setAuthToken(token: string) {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem('kaisa-token', token);
}

function clearAuthToken() {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem('kaisa-token');
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {};

  if (options.headers) {
    const incomingHeaders = new Headers(options.headers);
    incomingHeaders.forEach((value, key) => {
      headers[key] = value;
    });
  }

  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const isFormData = options.body instanceof FormData;
  if (!isFormData && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json')
    ? await response.json().catch(() => null)
    : await response.text();

  if (!response.ok) {
    throw new Error(
      typeof payload === 'object' && payload && 'message' in payload
        ? String((payload as { message?: string }).message)
        : '요청에 실패했습니다.',
    );
  }

  return payload as T;
}

export { API_BASE_URL, getAuthToken, setAuthToken, clearAuthToken, request };

export async function registerUser(payload: Record<string, unknown>) {
  return request<{ message: string; user: unknown; token: string }>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function loginUser(payload: Record<string, unknown>) {
  return request<{ message: string; user: unknown; token: string }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function getMe() {
  return request<{ user: unknown }>('/auth/me');
}

export async function fetchNotices() {
  return request<{ notices: Array<Record<string, unknown>> }>('/notices');
}

export async function fetchResources() {
  return request<{ resources: Array<Record<string, unknown>> }>('/resources');
}

export async function fetchGallery() {
  return request<{ gallery: Array<Record<string, unknown>> }>('/gallery');
}

export async function createContact(payload: Record<string, unknown>) {
  return request<{ message: string; contact: unknown }>('/contacts', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function createMembershipApplication(payload: Record<string, unknown>) {
  return request<{ message: string; application: unknown }>('/membership/applications', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function createNotice(payload: Record<string, unknown>) {
  return request<{ notice: unknown }>('/notices', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function deleteNotice(id: string) {
  return request<{ message: string }>(`/notices/${id}`, {
    method: 'DELETE',
  });
}

export async function createResource(formData: FormData) {
  return request<{ resource: unknown }>('/resources', {
    method: 'POST',
    body: formData,
  });
}

export async function deleteResource(id: string) {
  return request<{ message: string }>(`/resources/${id}`, {
    method: 'DELETE',
  });
}

export async function fetchContacts() {
  return request<{ contacts: Array<Record<string, unknown>> }>('/contacts');
}

export async function updateContactStatus(id: string, status: string) {
  return request<{ contact: unknown }>(`/contacts/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

export async function fetchMembershipApplications() {
  return request<{ applications: Array<Record<string, unknown>> }>('/membership/applications');
}
