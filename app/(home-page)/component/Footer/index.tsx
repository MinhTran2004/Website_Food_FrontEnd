import FooterCategory from "./Category";
import FooterConatct from "./Contact";
import FooterNetWork from "./Network";

const HomeFooter = () => {
  return (
    <div className="bg-[#252525] pt-4 pb-20">
      <div className="max-w-7xl mx-auto space-y-9">
        <FooterCategory />
        <FooterConatct />
        <FooterNetWork />
      </div>
    </div>
  );
};

export default HomeFooter;
