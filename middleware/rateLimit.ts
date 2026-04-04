import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory store (for demo/dev only; use Redis or similar for production)
const rateLimitStore = new Map<string, { count: number; lastRequest: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // Max requests per window per IP

export async function rateLimitMiddleware(request: NextRequest): Promise<NextResponse | void> {
  // NextRequest does not have an 'ip' property; use x-forwarded-for or fallback
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  // Simulate async store access (replace with real async store in production)
  const entry = await (async () => rateLimitStore.get(ip) || { count: 0, lastRequest: now })();

  if (now - entry.lastRequest > WINDOW_MS) {
    // Reset window
    entry.count = 1;
    entry.lastRequest = now;
  } else {
    entry.count += 1;
  }

  await (async () => rateLimitStore.set(ip, entry))();

  if (entry.count > MAX_REQUESTS) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
}
