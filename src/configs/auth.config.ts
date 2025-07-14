import { IAuthConfig } from '@/types/auth/config.types';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: IAuthConfig = {
  default: 'private',
  excluded: ['/api/auth/callback/credentials', '/api/auth/signin/credentials'],
  //  lib params
  providers: [
    Credentials({
      id: 'hasura-credentials',
      name: 'Hasura Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          console.log({
            credentials,
          });

          if (!credentials) {
            return null;
          }

          const { user } = {
            user: {
              id: '1',
              name: 'John Doe',
              email: credentials.email as string,
            },
          };

          // const { user } = await apiRequest.post({
          //   email: credentials.email as string,
          //   password: credentials.password as string,
          //});

          console.log(user);

          return user;
        } catch (error: unknown) {
          console.error('Authorize error:', error);
          throw new Error(JSON.stringify({ errors: 'Authorize error', status: false }));
        }
      },
    }),
    // Auth0({
    //   clientId: process.env.AUTH_AUTH0_ID,
    //   clientSecret: process.env.AUTH_AUTH0_SECRET,
    //   issuer: process.env.AUTH_AUTH0_ISSUER,
    // }),
    // Discord({
    //   clientId: process.env.AUTH_DISCORD_ID,
    //   clientSecret: process.env.AUTH_DISCORD_SECRET,
    // }),
    // Google({
    //   clientId: process.env.AUTH_AUTH_GOOGLE_ID,
    //   clientSecret: process.env.AUTH_AUTH_GOOGLE_SECRET,
    // }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
  session: { strategy: 'jwt' },
};
