import Address from "./component/address";
import ListProduct from "./component/list-product";
import Payment from "./component/payment";

const CartPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-center font-medium text-4xl">Giỏ hàng của bạn</h1>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 gap-6">
        <div className="space-y-6">
          <ListProduct />
          <Address />
        </div>

        <Payment />
      </div>
    </div>
  );
};

export default CartPage;
