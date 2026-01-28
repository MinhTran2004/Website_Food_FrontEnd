import AppDrawer from "@/component/AppDrawer";
import PathLink from "@/component/PathLink";
import { RiFilter2Fill } from "react-icons/ri";
import ProductCategory from "./component/Filter/Category";
import ProductPrice from "./component/Filter/Price";
import ProductStatus from "./component/Filter/Status";
import ProductContainer from "./component/Product";

const ProductPage = () => {
  return (
    <div>
      <PathLink />
      <div className="lg:hidden">
        <AppDrawer
          open={
            <div className="flex items-center gap-0.5 ml-4 mb-2">
              <RiFilter2Fill size={20} />
              <p>Bộ lọc</p>
            </div>
          }
          title="Bộ lọc"
          body={
            <div className="p-4 space-y-4 h-fit">
              <ProductCategory />
              <ProductPrice />
              <ProductStatus />
            </div>
          }
        />
      </div>

      <div className="flex mx-auto max-w-7xl">
        <div className="hidden lg:block w-[30%] px-4 space-y-4 h-fit">
          <ProductCategory />
          <ProductPrice />
          <ProductStatus />
        </div>

        <div className="w-full">
          <ProductContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
