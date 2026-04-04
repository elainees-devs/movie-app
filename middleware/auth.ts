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

function verifyJwtAsync(token: string, secret: string): Promise<JwtPayload & AuthUser> {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (err, decoded) => {
			if (err) return reject(err);
			resolve(decoded as JwtPayload & AuthUser);
		});
	});
}


export async function authMiddleware(request: NextRequest): Promise<NextResponse | void> {
	const authHeader = request.headers.get('authorization');
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}
	const token = authHeader.replace('Bearer ', '');
	try {
		const decoded = await verifyJwtAsync(token, JWT_SECRET);
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

