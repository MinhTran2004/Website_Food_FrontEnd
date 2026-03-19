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
    <p className="text-2xl font-medium">{title}</p>
    <p className="text-base text-colorGray">{label}</p>
    <div className="flex items-end">
      <div className="flex-1 border-b border-dashed border-gray-500 mb-[7px] mr-2" />
      <div className="flex items-center gap-0.5">
        <p className="text-xl font-medium text-colorOrange">{price}</p>
        <p className="text-xl font-medium text-colorOrange">VND</p>
      </div>
    </div>
  </div>
);

const HomeMenu = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <p className="mb-4 text-lg font-medium text-center">MENU</p>
      <h2 className="mb-2 text-5xl font-medium text-center">
        MENU CỦA NHÀ HÀNG
      </h2>

      <MdKeyboardDoubleArrowDown
        size={40}
        className="text-center w-full mb-4"
      />

      <div className="grid lg:grid-cols-2 lg:gap-x-20 gap-y-2 mt-10">
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
