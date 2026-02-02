'use client'

import AppButton from "@/component/Button/AppButton";
import AppComment from "@/component/RateProduct/AppComment";
import AppRateProgress from "@/component/RateProduct/AppRateProgress";
import AppStar from "@/component/RateProduct/AppStar";
import clsx from "clsx";
import { useState } from "react";

const TAB = ['THÔNG TIN SẢN PHẨM', 'ĐÁNH GIÁ', 'BÌNH LUẬN']

const ReviewProduct = () => {
    const [tab, setTab] = useState<number>(0);

    return (
        <div className="space-y-10">

            <div className="space-y-5">
                <div className="flex justify-center items-center gap-12">
                    {TAB.map((item, index) => (
                        <AppButton
                            buttonDefault
                            className={clsx(`font-medium text-lg hover:text-colorOrange`, tab === index && `text-colorOrange`)}
                            text={{ children: item }} />
                    ))}
                </div>

                <div className="bg-colorGrayLight p-6 space-y-2">
                    <p className="font-medium">Fish Salad - Hòa quyện hương vị biển cả và tươi mát của thảo mộc</p>
                    <p className="text-sm">Khi nghĩ đến Fish Salad, hãy tưởng tượng về sự hòa quện tinh tế giữa hương vị đậm đà của đại dương và sự tươi mát của thảo mộc xanh. Đây không chỉ là một món salad thông thường, mà còn là một hành trình văn hóa ẩm thực, nơi mỗi nguyên liệu đều kể một câu chuyện riêng về sự đa dạng và sắc màu của ẩm thực thế giới.

                        Chúng tôi chăm chút từng chi tiết, từ việc chọn lựa những miếng cá tươi ngon nhất, đến việc kết hợp chúng với rau xanh tươi mát và các loại gia vị tự nhiên. Lớp cá thịt mềm ngon, kết hợp với vị cay nồng nhẹ từ sốt tương ớt, tạo nên một biểu cảm hài hòa đầy tinh tế trên đầu lưỡi.
                        <br />
                        <br />
                        Mỗi miếng salad là một hành trình thưởng thức, từ cảm nhận đầu tiên khi thấy màu sắc tươi mới, đến cảm xúc vị giác được kích thích bởi sự pha trộn độc đáo của các thành phần. Fish Salad không chỉ là một bữa ăn, mà còn là một trải nghiệm thú vị, đưa bạn đến với một thế giới hương vị phong phú, sâu lắng và đầy bất ngờ.
                        <br />
                        <br />
                        Hãy cùng thưởng thức và khám phá hương vị tinh tế của Fish Salad, nơi biển cả và vị ngon hòa quyện thành một tác phẩm ẩm thực độc đáo, đem đến cho bạn cảm giác hài lòng và phấn khích mỗi khi thưởng thức.</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-1 items-center gap-2">
                    <p className="text-2xl font-medium text-center">Khách hàng đánh giá</p>
                    <p className="text-3xl font-medium">5.0</p>
                    <AppStar size={20} />
                </div>

                <div className="flex-2">
                    <AppRateProgress text="5" progress={0} />
                    <AppRateProgress text="4" progress={0} />
                    <AppRateProgress text="3" progress={0} />
                    <AppRateProgress text="2" progress={0} />
                    <AppRateProgress text="1" progress={0} />
                </div>
            </div>


            <div>
                <p className="text-2xl font-medium border-b border-colorGray mb-4 pb-2">Bình luận</p>

                <div className="space-y-3">
                    <AppComment />
                    <AppComment />
                    <AppComment />
                    <AppComment />
                    <AppComment />
                </div>
            </div>
        </div>
    )
}
export default ReviewProduct;