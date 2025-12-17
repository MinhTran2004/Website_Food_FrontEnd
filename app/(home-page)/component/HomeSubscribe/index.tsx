import AppText from "@/component/Text/AppText";
import { COLOR } from "@/share/contanst/color";
import { VscSend } from "react-icons/vsc";

const HomeSubscribe = () => {
  return (
    <div className="bg-[#f9f5ef] py-15">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div>
          <AppText
            typo="BASE_LARGE_B"
            text="Đăng ký bản tin"
            className="uppercase mb-4 text-center"
          />

          <AppText
            typo="HEADER_2_B"
            as={"h3"}
            text="Theo dõi bản tin của chúng tôi"
            className="uppercase text-center mb-8"
          />
        </div>

        <div className="w-md flex border-b-2 border-b-[#767676] pb-2 mb-4">
          <input
            type="text"
            placeholder="Nhập email của bạn*"
            className="text-xl w-full focus:outline-none"
          />
          <VscSend size={24} />
        </div>

        <div className="flex w-md gap-2">
          <input type="checkbox" />
          <div className="flex gap-1">
            <AppText typo="BASE" color={COLOR.gray} text="Tôi đồng ý với" />
            <AppText
              typo="BASE"
              color={COLOR.blue}
              text="chính sách và quyền riêng tư"
              className="underline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscribe;
