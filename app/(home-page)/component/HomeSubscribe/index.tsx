import { VscSend } from "react-icons/vsc";

const HomeSubscribe = () => {
  return (
    <div className="bg-[#f9f5ef] py-15">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div>
          <p className="text-lg font-medium uppercase mb-4 text-center">
            Đăng ký bản tin
          </p>
          <p className="text-5xl font-semibold uppercase mb-8">
            Theo dõi bản tin của chúng tôi
          </p>
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
          <p className="text-gray-400">
            Tôi đồng ý với{" "}
            <span className="underline text-[#007bff]">
              chính sách và quyền riêng tư
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscribe;
