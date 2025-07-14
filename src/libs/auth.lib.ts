import NextAuth from 'next-auth';

import { authConfig } from '@/configs/auth.config';

export const credentialsAuthorize = async (credentials: Record<string, string>) => {
  try {
    console.log({
      credentials,
    });

    if (!credentials) {
      return null;
    }

    // Simulate an authorization process, e.g., querying a database or an API
    const user = {
      id: '1',
      name: 'John Doe',
      email: credentials.email,
    };

    console.log(user);

    return user;
  } catch (error: unknown) {
    console.error('Authorize error:', error);
    throw new Error(JSON.stringify({ errors: 'Authorize error', status: false }));
  }
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    async signIn(userDetail) {
      if (Object.keys(userDetail).length === 0) {
        return false;
      }
      return true;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/protected`;
    },
    async session({ session, token }) {
      if (session.user?.name) session.user.name = token.name;
      return session;
    },
    async jwt({ token, user }) {
      //const newUser = { ...user } as unknown;
      console.log({ token, user });
      //if (newUser.first_name && newUser.last_name) token.name = `${newUser.first_name} ${newUser.last_name}`;
      return token;
    },
  },
});
