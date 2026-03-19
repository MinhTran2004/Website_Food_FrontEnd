import HeaderHomeMobile from "@/component/Layout/HeaderHomeMobile";
import HeaderMain from "@/component/Layout/HeaderMain";
import HomeFooter from "../(home-page)/component/Footer";
import "../globals.css";
import Tabs from "./component/Tabs";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-colorBlueLight flex flex-col justify-between h-screen">
      <div>
        <div className="bg-white mb-6">
          <HeaderMain />
          <HeaderHomeMobile />
        </div>
        <div className="bg-colorBlueLight max-w-7xl w-full mx-auto space-y-6 px-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-medium">Tài Khoản Của Tôi</h1>
            <p className="text-colorGray">
              Quản lý thông tin cá nhân, địa chỉ và lịch sử mua hàng
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <Tabs />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>

      <div className="pt-20 bg-colorBlueLight">
        <HomeFooter />
      </div>
    </div>
  );
}
