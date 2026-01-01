import AppNews from "@/component/News/AppNews";

const HomeBlog = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 space-y-3">
      <p className="mb-2 text-lg font-medium text-center uppercase">Blog & Bài viết</p>
      <h2 className="text-5xl font-semibold text-center uppercase">Tin tức mới nhất</h2>
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
