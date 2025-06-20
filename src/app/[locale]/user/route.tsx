import { auth } from '@/libs/auth.lib';

export async function GET() {
  const session = await auth();

  console.log({
    session,
  });

  if (!session) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  return new Response('Hello, Next.js!', {
    status: 200,
  });
}
