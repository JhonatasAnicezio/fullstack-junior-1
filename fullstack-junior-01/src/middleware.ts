import { NextRequest } from 'next/server' 
import { env } from 'process';

export const config = {
  matcher: '/api/jobs/:path*',
}
 
export function middleware(req: NextRequest) {
  const secret = req.headers.get('Authorization');

  if (secret !== env.SECRET) {
    return Response.json(
      { message: 'You do not have permission to access this route' },
      { status: 401 }
    );
  }
}