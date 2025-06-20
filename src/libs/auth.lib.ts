import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
// import Auth0 from 'next-auth/providers/auth0';
// import Discord from 'next-auth/providers/discord';
// import Google from 'next-auth/providers/google';

interface GraphQLVariables {
  email: string;
  password: string;
}

const hasuraQuery = async (variables: GraphQLVariables) => {
  console.log({
    variables,
  });
  // send a request to Hasura GraphQL endpoint
  return {
    user: null,
  };
};

export const { auth, handlers, signIn, signOut } = NextAuth({
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

          const { user } = await hasuraQuery({
            email: credentials.email as string,
            password: credentials.password as string,
          });

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
