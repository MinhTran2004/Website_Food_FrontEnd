import LayoutSpace from "@/component/LayoutSpace";
import AppNews from "@/component/News/AppNews";
import { IMAGE_SOUCE } from "@/public/assets/images";

const NewsPage = () => {
  return (
    <LayoutSpace>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 my-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <AppNews key={index} />
          ))}
        </div>
      </div>
    </LayoutSpace>
  );
};

export default NewsPage;
