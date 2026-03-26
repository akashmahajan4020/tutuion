import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export type AppRole = "admin" | "student";

type DemoUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: AppRole;
};

export const demoUsers: DemoUser[] = [
  {
    id: "admin-1",
    name: "Aarav Mehta",
    email: "admin@academicedge.com",
    password: "Admin123!",
    role: "admin",
  },
  {
    id: "student-1",
    name: "Ishita Rao",
    email: "student@academicedge.com",
    password: "Student123!",
    role: "student",
  },
];

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "student@academicedge.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = demoUsers.find(
          (candidate) =>
            candidate.email.toLowerCase() === credentials.email.toLowerCase() &&
            candidate.password === credentials.password,
        );

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id ?? "";
        session.user.role = token.role ?? "student";
      }

      return session;
    },
  },
};

export function getAuthSession() {
  return getServerSession(authOptions);
}
