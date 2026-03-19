import TabAccounts from "../../../component/TabAccounts";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-colorBlueLight flex flex-col flex-1 justify-between py-6">
      <div className="max-w-7xl w-full mx-auto space-y-6 px-6">
          <h1 className="text-4xl font-medium mb-1">Tài Khoản Của Tôi</h1>
          <p className="text-colorGray">
            Quản lý thông tin cá nhân, địa chỉ và lịch sử mua hàng
          </p>

        <div className="flex flex-col md:flex-row gap-6">
          <TabAccounts />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
