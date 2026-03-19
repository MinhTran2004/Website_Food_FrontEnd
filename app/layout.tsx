import { ToastProvider } from "@/component/AppToast";
import AuthNotification from "@/component/AuthNotification";
import { LoadingProvider } from "@/component/LoadingScreen";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  // weight: ['300', '400', '500', '600', '700', '800'], // tùy bạn dùng
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <ToastProvider>
          <LoadingProvider>
            <Providers>
              <AuthNotification />
              <main>{children}</main>
              {/* <Analytics /> */}
            </Providers>
          </LoadingProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
