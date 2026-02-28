import AppDropdown from "@/component/AppDropdown";
import AppNews from "@/component/News/AppNews";
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
      <div className="flex p-3 mx-4 border border-colorGray">
        <div
          className="w-full h-100 px-6"
          style={{
            backgroundImage: `url(${IMAGE_SOUCE.IMG_BACKGROUD_NEWS})`,
          }}
        >
          <div className="flex items-center mx-auto max-w-7xl h-full">
            <h1 className="text-5xl font-medium pl-6">TIN TỨC</h1>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="mx-auto max-w-7xl">
        {/* <div
          className="flex justify-between items-center px-3 py-2 my-5"
          style={{ backgroundColor: COLOR.grayLight }}
        >
          <div className="flex gap-2 items-center">
            <p className="font-medium">Hiển thị:</p>
            <p>12 / 24 / 36</p>
          </div>
          <AppDropdown options={OPTIONS} placeholder="Sắp xếp theo" />
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 my-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <AppNews key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
