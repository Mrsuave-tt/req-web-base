import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Simple in-memory cache for Firebase queries
const queryCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function getCachedQuery<T>(key: string): T | null {
  const cached = queryCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  queryCache.delete(key);
  return null;
}

export function setCachedQuery<T>(key: string, data: T): void {
  queryCache.set(key, { data, timestamp: Date.now() });
}

export function clearQueryCache(): void {
  queryCache.clear();
}