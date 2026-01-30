import { IMAGE_SOUCE } from "@/public/assets/images";
import AppImage from "../Image/AppImage";
import AppStar from "./AppStar";

const AppComment = () => {
    return (
        <div className="flex gap-4">
            <AppImage src={IMAGE_SOUCE.IMG_DEMO_PRODUCT_1} classNameContainer="h-[70px] w-[70px] rounded-full" alt="" />

            <div>
                <p className="font-medium text-[17px]">Trần Công Minh</p>
                <div className="flex items-center mb-1 gap-2">
                    <p className="text-colorGray text-[14px]">23/10/2026</p>
                    <AppStar size={12} />
                </div>
                <p>Sản phẩm tốt!</p>
            </div>
        </div>
    )
}

export default AppComment;