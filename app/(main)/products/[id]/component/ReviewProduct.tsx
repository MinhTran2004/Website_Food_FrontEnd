import AppRateProgress from "@/component/RateProduct/AppRateProgress";
import AppStar from "@/component/RateProduct/AppStar";
import { IProduct } from "@/share/interface/product.interface";
import clsx from "clsx";

const TAB = ["THÔNG TIN SẢN PHẨM", "ĐÁNH GIÁ", "BÌNH LUẬN"];

const ReviewProduct: React.FC<IProduct> = (props) => {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <div className="flex justify-center items-center gap-12">
          {TAB.map((item, index) => (
            <p
              key={index}
              className={clsx(
                `font-medium text-lg`,
                0 === index && `text-colorOrange`
              )}
            >
              {item}
            </p>
          ))}
        </div>

        <div
          className="bg-colorGrayLight p-6 space-y-2"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col flex-1 items-center gap-2">
          <p className="text-2xl font-medium text-center">
            Khách hàng đánh giá
          </p>
          <p className="text-3xl font-medium">5.0</p>
          <AppStar size={20} total_star={props.total_star} />
        </div>

        <div className="flex-2">
          <AppRateProgress text="5" progress={props.rates.star5} />
          <AppRateProgress text="4" progress={props.rates.star4} />
          <AppRateProgress text="3" progress={props.rates.star3} />
          <AppRateProgress text="2" progress={props.rates.star2} />
          <AppRateProgress text="1" progress={props.rates.star1} />
        </div>
      </div>

      <div>
        <p className="text-2xl font-medium border-b border-colorGray mb-4 pb-2">
          Bình luận
        </p>

        <p>Chưa có đánh giá nào</p>

        {/* <div className="space-y-3">
          <AppComment />
          <AppComment />
          <AppComment />
          <AppComment />
          <AppComment />
        </div> */}
      </div>
    </div>
  );
};
export default ReviewProduct;
