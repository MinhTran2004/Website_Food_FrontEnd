import HeaderHome from "@/component/Layout/HeaderHome";
import HeaderHomeMobile from "@/component/Layout/HeaderHomeMobile";
import clsx from "clsx";
import HomeFooter from "../../component/Layout/Footer";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white z-100">
        <HeaderHome />
        <HeaderHomeMobile />
      </div>

      {/* Content */}
      <main className={clsx('flex flex-col flex-1')}>{children}</main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
