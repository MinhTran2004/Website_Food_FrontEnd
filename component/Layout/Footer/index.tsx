import FooterCategory from "./Category";
import FooterContact from "./Contact";
import FooterNetWork from "./Network";

const HomeFooter = () => {
  return (
    <div className="bg-[#252525] pt-4 pb-10 px-6">
      <div className="grid grid-rows-3 sm:grid-rows-1 mx-auto md:space-y-9 max-w-7xl">
        <FooterCategory />
        <FooterContact />
        <FooterNetWork />
      </div>
    </div>
  );
};

export default HomeFooter;
