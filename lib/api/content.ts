import { mockData } from '@/lib/api/mock-data'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/api'
const USE_MOCK_API = (process.env.NEXT_PUBLIC_USE_MOCK_API ?? 'true') === 'true'

async function fetchFromApi<T>(path: string, fallback: T): Promise<T> {
  if (USE_MOCK_API) return fallback

  try {
    const res = await fetch(`${API_BASE_URL}${path}`, { next: { revalidate: 60 } })
    if (!res.ok) return fallback
    return (await res.json()) as T
  } catch {
    return fallback
  }
}

export async function getNewsItems() {
  return fetchFromApi('/news', mockData.news)
}

export async function getResourceGroups() {
  return fetchFromApi('/resources/groups', mockData.resourceGroups)
}

export async function getResources() {
  return fetchFromApi('/resources', mockData.resources)
}

export async function getEvents() {
  return fetchFromApi('/events', mockData.events)
}

export async function getPrograms() {
  return fetchFromApi('/programs', mockData.programs)
}

export async function getTestimonies() {
  return fetchFromApi('/testimonies', mockData.testimonies)
}

export async function getPillars() {
  return fetchFromApi('/pillars', mockData.pillars)
}

export async function submitPartnerApplication(payload: unknown) {
  if (USE_MOCK_API) {
    return Promise.resolve({ success: true, mock: true })
  }

  const res = await fetch(`${API_BASE_URL}/partner-subscriptions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error('Failed to submit partner application')
  return res.json()
}

