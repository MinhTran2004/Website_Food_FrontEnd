import AppImage from "@/component/Image/AppImage";
import AppStar from "@/component/RateProduct/AppStar";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { ROUTE } from "@/share/contanst/route.constants";
import Link from "next/link";

const Item = () => {
    return (
        <div className="flex gap-2 w-full">
            <Link href={ROUTE.NEWS}>
                <AppImage src={IMAGE_SOUCE.IMG_DEMO_PRODUCT_1} classNameContainer="h-[80px] w-[80px]" alt="" />
            </Link>

            <div className="py-1.5">
                <Link className="line-clamp-1 font-medium text-md hover:text-colorOrange" href={ROUTE.NEWS}>
                    Bánh mì cà ri
                </Link>
                <AppStar />

                <div className="mt-1.5 flex items-end gap-6">
                    <p className="text-sm font-medium text-colorGray">120,000 <span className="text-xs">VND</span></p>
                    <p className="text-[15px] font-medium text-colorGray line-through">200,000 <span className="text-xs">VND</span></p>
                </div>
            </div>
        </div>
    )
}

const ProductSimilar = () => {
    return (
        <div>
            <h3 className="text-lg font-medium border-b border-colorGrayLight pb-2 mb-2">SẢN PHẨM TƯƠNG TỰ</h3>
            <div className="space-y-2">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default ProductSimilar;