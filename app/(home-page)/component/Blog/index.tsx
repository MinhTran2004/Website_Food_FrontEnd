import AppNews from "@/component/News/AppNews";
import AppText from "@/component/Text/AppText";

const HomeBlog = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 space-y-3">
        <AppText
          typo="HEADER_6_B"
          className="text-center uppercase"
          text="Blog & Bài viết"
        />
        <AppText
          typo="HEADER_1_B"
          as={"h3"}
          className="text-center uppercase"
          text="Tin tức mới nhất"
        />
      </div>

      <div className="flex">
        {Array.from({ length: 3 }).map((_, index) => (
          <AppNews key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
