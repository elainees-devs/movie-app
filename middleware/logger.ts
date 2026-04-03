

import { NextRequest } from 'next/server';
import type { AuthRequest } from './auth';
import { appendFile } from 'fs/promises';
import path from 'path';

export function loggerMiddleware(request: NextRequest): void {
  const user = (request as AuthRequest).user;
  const log = {
    method: request.method,
    url: request.nextUrl.pathname,
    timestamp: new Date().toISOString(),
    email: user?.email || undefined,
  };

  const logLine = JSON.stringify(log) + '\n';
  const logFilePath = path.join(process.cwd(), 'logs', 'requests.log');

  // Write log to file asynchronously, fallback to console if error
  appendFile(logFilePath, logLine)
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log(logLine);
    });
}
