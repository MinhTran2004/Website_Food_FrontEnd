import { ToastProvider } from "@/component/AppToast";
import AuthNotification from "@/component/AuthNotification";
import { LoadingProvider } from "@/component/LoadingScreen";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { BASE_URL } from "@/types/contanst";
import { Metadata, Viewport } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Analytics } from '@vercel/analytics/next';

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  // weight: ['300', '400', '500', '600', '700', '800'], // tùy bạn dùng
});

export const metadata: Metadata = {
  title: {
    default: "FastFood - Đặt đồ ăn nhanh, giao tận nơi",
    template: "%s | FastFood",
  },
  description:
    "FastFood - Nền tảng đặt đồ ăn nhanh tiện lợi. Giao hàng nhanh chóng, đa dạng món ngon từ nhiều nhà hàng. Đặt ngay để thưởng thức!",
  keywords: [
    "đặt đồ ăn",
    "fastfood",
    "đồ ăn nhanh",
    "giao đồ ăn",
    "ship đồ ăn",
    "order food online",
    "FastFood Việt Nam",
  ],
  openGraph: {
    title: {
      default: "FastFood - Đặt đồ ăn nhanh, giao tận nơi",
      template: "%s | FastFood",
    },
    description:
      "FastFood - Nền tảng đặt đồ ăn nhanh tiện lợi. Giao hàng nhanh chóng, đa dạng món ngon từ nhiều nhà hàng. Đặt ngay để thưởng thức!",
    url: `${BASE_URL}/products?category=MAIN_COURES`,
    siteName: "FastFood",
    images: [
      {
        url: IMAGE_SOUCE.URL_IMAGE_OPENGRAPH_SEO,
        width: 1200,
        height: 630,
        alt: "FastFood",
      },
    ],
    locale: "vi_VN",
    phoneNumbers: "0976577025",
    countryName: "Việt Nam",
    emails: "fastfood@gmail.com",
    type: "website",
  },
  alternates: {
    canonical: BASE_URL,
  },
  metadataBase: new URL(`${BASE_URL}`),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={robotoCondensed.className}>
        <ToastProvider>
          <LoadingProvider>
            <Providers>
              <AuthNotification />
              <main>{children}</main>
              <Analytics />
            </Providers>
          </LoadingProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
