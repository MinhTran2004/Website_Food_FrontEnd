import { URLS } from "@/service/url.service";
import { IResponse } from "@/share/interface/api.interface";
import { IUser } from "@/share/interface/user.interface";
import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const handler = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as typeof session.user & { accessToken?: string }).accessToken = token.accessToken as string;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const googleProfile = profile as {
          email_verified?: boolean;
        };

        if (googleProfile?.email_verified === false) {
          console.log("❌ Email not verified");
          return false;
        }
      }
      try {
        if (account?.provider === "google") {
          const response: IResponse<IUser> = await fetch(
            `${NEXT_PUBLIC_API_URL}${URLS.LOGIN_GOOGLE}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idToken: account?.id_token,
                provider: account?.provider,
              }),
            }
          ).then((res) => res.json());
          user.accessToken = response.data?.accessToken;
        } else if (account?.provider === "facebook") {
          const response: IResponse<IUser> = await fetch(
            `${NEXT_PUBLIC_API_URL}${URLS.LOGIN_FACEBOOK}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                accessToken: account?.access_token,
                provider: account?.provider,
              }),
            }
          ).then((res) => res.json());
          user.accessToken = response.data?.accessToken;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },
  },
  // pages: {
  //     signIn: '/auth/signin'
  // }
  // debug: true,
});

export { handler as GET, handler as POST };
