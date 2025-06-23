import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const userEmail = credentials?.email;
        const userPassword = credentials?.password;

        const [rows] = await db.query(
          "SELECT * FROM users WHERE user_email = ?",
          [userEmail]
        );
        const user = Array.isArray(rows) ? rows[0] : null;

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(userPassword, user.user_password);
        if (!passwordMatch) return null;

        return {
          id: user.id,
          name: user.company_name,
          email: user.user_email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
