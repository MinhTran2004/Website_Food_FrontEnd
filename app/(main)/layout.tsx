import HeaderHomeMobile from "@/component/Layout/HeaderHomeMobile";
import HeaderMain from "@/component/Layout/HeaderMain";
import HomeFooter from "../(home-page)/component/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <HeaderMain />
        <HeaderHomeMobile />
      </div>
      <div className="flex-1">{children}</div>
      <div className="pt-20">
        <HomeFooter />
      </div>
    </div>
  );
}
