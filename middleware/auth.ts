
import { NextRequest, NextResponse } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface AuthUser {
	id: number;
	email: string;
	role: string;
}

export interface AuthRequest extends NextRequest {
	user?: AuthUser;
}

const JWT_SECRET = process.env.JWT_SECRET || '';

export function authMiddleware(request: NextRequest): NextResponse | void {
	const authHeader = request.headers.get('authorization');
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}
	const token = authHeader.replace('Bearer ', '');
	try {
		const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & AuthUser;
		// Attach user info to request (for downstream middleware/handlers)
		(request as AuthRequest).user = {
			id: decoded.id,
			email: decoded.email,
			role: decoded.role,
		};
	} catch {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}
}
