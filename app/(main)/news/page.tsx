import AppDropdown from "@/component/AppDropdown";
import AppNews from "@/component/News/AppNews";
import AppText from "@/component/Text/AppText";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { COLOR } from "@/share/contanst/color";

const OPTIONS = [
  { value: "NAME", label: "Theo tên" },
  { value: "VIEW", label: "Theo lượt xem" },
];

const NewsPage = () => {
  return (
    <div>
      {/* header */}
      <div className="flex p-3 mx-4 border" style={{ borderColor: COLOR.gray }}>
        <div
          className="w-full h-100"
          style={{
            backgroundImage: `url(${IMAGE_SOUCE.IMG_BACKGROUD_NEWS})`,
          }}
        >
          <div className="flex items-center mx-auto max-w-7xl h-full">
            <AppText text="TIN TỨC" typo="HEADER_1_B" />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="mx-auto max-w-7xl">
        <div
          className="flex justify-between items-center px-3 py-2 my-5"
          style={{ backgroundColor: COLOR.grayLight }}
        >
          <div className="flex gap-2 items-center">
            <AppText text="Hiển thị:" typo="TEXT_LG_B" />
            <AppText text={`12 / 24 / 36`} typo="TEXT_LG" />
          </div>
          <AppDropdown options={OPTIONS} placeholder="Sắp xếp theo" />
        </div>

        <div className="grid grid-cols-3 gap-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <AppNews key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
