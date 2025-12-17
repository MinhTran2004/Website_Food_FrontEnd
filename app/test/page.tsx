import AppText from "@/component/Text/AppText";

const TestPage = () => {
  return (
    <div className="h-screen w-screen bg-black p-50">
      <AppText text={"Trang chủ"} typo="BASE" className="text-white uppercase" />
      <AppText text={"Trang chủ"} typo="BASE_B" className="text-white uppercase" />
    </div>
  );
};

export default TestPage;
