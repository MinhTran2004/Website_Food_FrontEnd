import PathLink from "@/component/PathLink";
import ProductCategory from "./component/Filter/Category";
import ProductPrice from "./component/Filter/Price";
import ProductContainer from "./component/Product";
import ProductStatus from "./component/Filter/Status";

const ProductPage = () => {
  return (
    <div>
      <PathLink />
      <div className="flex mx-auto max-w-7xl">
        <div className="w-[28%] px-4 space-y-4 h-fit">
          <ProductCategory />
          <ProductPrice />
          <ProductStatus />
        </div>

        <div className="w-[72%]">
          <ProductContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
