import { NextRequest, NextResponse } from 'next/server';
import type { AuthUser, AuthRequest } from './auth';

export function roleMiddleware(allowedRoles: string[]) {
  return (request: NextRequest): NextResponse | void => {
    const user = (request as AuthRequest).user;
    if (!user || !allowedRoles.includes(user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  };
}
