import ProductCategory from "@/component/Category";
import ProductSimilar from "./component/ProductSimilar";
import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import PaymentProduct from "./component/PaymentProduct";
import ReviewProduct from "./component/ReviewProduct";
import AppStar from "@/component/RateProduct/AppStar";

const ProductIdPage = () => {
    return (
        <div className="max-w-7xl flex mx-auto gap-10">
            <div className="hidden lg:block w-[30%] px-4 space-y-4 h-fit">
                <ProductCategory />
                <ProductSimilar />
            </div>

            <div className="w-full space-y-12">
                <div className="w-full flex gap-10">
                    <AppImage src={IMAGE_SOUCE.IMG_DEMO_PRODUCT_2} classNameContainer="h-[400px] w-[400px] border border-colorGrayLight" alt="" />
                    <div className="space-y-3">
                        <h1 className="text-3xl font-medium">Bít tết bò Fiorentina</h1>
                        <AppStar size={20} />
                        <div className="flex items-end gap-5">
                            <div className="flex items-end gap-1">
                                <p className="text-2xl font-medium text-colorOrange">300.000</p><span className="text-lg font-medium text-colorOrange">VND</span>
                            </div>
                            <div className="flex items-end gap-1">
                                <p className="text-xl text-colorGray line-through">400.000</p> <span className="text-base text-colorGray">VND</span>
                            </div>
                        </div>

                        <p className="font-medium text-sm">Mã sản phẩm: <span className="font-normal text-[15px]">213d8dcaun389nf983</span></p>
                        <p className="font-medium text-sm">Danh mục: <span className="font-normal text-colorOrange text-[15px]">Món chính</span></p>

                        <PaymentProduct />
                    </div>
                </div>

                <ReviewProduct />
            </div>
        </div>
    )
}

export default ProductIdPage;