import { VscSend } from "react-icons/vsc";

const HomeSubscribe = () => {
  return (
    <div className="bg-[#f9f5ef] py-15">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div>
          <p className="uppercase text-lg font-medium mb-4 text-center">
            Đăng ký bản tin
          </p>
          <h2 className=" text-5xl font-semibold uppercase text-center mb-10">
            Theo dõi bản tin của chúng tôi
          </h2>
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
            <p className="text-colorGray">Tôi đồng ý với</p>
            <p className=" underline text-colorBlue">
              chính sách và quyền riêng tư
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscribe;
