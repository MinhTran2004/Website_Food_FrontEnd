import AppNews from "@/component/News/AppNews";

const HomeBlog = () => {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-6 space-y-3">
      <p className="mb-2 text-lg font-medium text-center uppercase">Blog & Bài viết</p>
      <h2 className="text-[40px] xl:text-[55px] leading-[40px] xl:leading-[60px] font-semibold text-center uppercase">Tin tức mới nhất</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <AppNews key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
