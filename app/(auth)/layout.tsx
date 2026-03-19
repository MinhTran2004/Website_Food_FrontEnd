import clsx from "clsx";
import "../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={clsx(`min-h-screen`)}>
        <div className="flex flex-col h-screen">
          <main className="flex-1">{children}</main>
        </div>
      </div>
  );
}
