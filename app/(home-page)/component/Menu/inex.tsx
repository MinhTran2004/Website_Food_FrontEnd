import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ItemMenu = ({
  title,
  label,
  price,
}: {
  title: string;
  label: string;
  price: string;
}) => (
  <div>
    <p className="text-[22px] font-medium pb-1">{title}</p>
    <p className="text-gray-400 text-lg">{label}</p>
    <div className="flex items-end">
      <div className="flex-1 border-b border-dashed border-gray-500 mb-[7px] mr-2" />
      <p className="text-[#EC5708] font-semibold text-xl">
        {price} <span className="text-[15px]">VND</span>
      </p>
    </div>
  </div>
);

const HomeMenu = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-center font-medium mb-4">MENU</p>
      <p className="text-[46px] text-center font-semibold">MENU CỦA NHÀ HÀNG</p>
      <MdKeyboardDoubleArrowDown
        size={40}
        className="text-center w-full mb-4"
      />

      <div className="grid grid-cols-2 gap-x-20">
        <ItemMenu
          title="Bít tết bò Fiorentina"
          label="Món ăn là một sự kết hợp tuyệt v..."
          price="300.000"
        />
        <ItemMenu
          title="Mì Spaghetti"
          label="Món ăn là một sự kết hợp tuyệt v..."
          price="300.000"
        />
        <ItemMenu
          title="Mugaritz"
          label="Món ăn là một sự kết hợp tuyệt v..."
          price="300.000"
        />
        <ItemMenu
          title="Cà ri xanh"
          label="Món ăn là một sự kết hợp tuyệt v..."
          price="300.000"
        />
        <ItemMenu
          title="Lasagna"
          label="Món ăn là một sự kết hợp tuyệt v..."
          price="300.000"
        />
        <ItemMenu
          title="Eleven Madison Park"
          label="Món ăn là một sự kết hợp tuyệt v..."
          price="300.000"
        />
        <ItemMenu
          title="Bánh mì cà ri"
          label="Món ăn là một sự kết hợp tuyệt v..."
          price="300.000"
        />
        <ItemMenu
          title="Salad cá"
          label="Món ăn là một sự kết hợp tuyệt v..."
          price="300.000"
        />
      </div>
    </div>
  );
};
export default HomeMenu;
