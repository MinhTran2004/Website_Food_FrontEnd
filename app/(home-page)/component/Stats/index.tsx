const ItemHomeStats = ({ number, text }: { number: string; text: string }) => (
  <div className="relative w-full">
    <p className="w-full text-center font-medium text-[100px] xl:text-[160px] text-colorGrayLight">
      {number}
    </p>
    <p className="w-full text-2xl font-medium text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {text}
    </p>
  </div>
);

const HomeStats = () => {
  return (
    <div>
      <div className="hidden lg:flex justify-center items-center max-w-7xl mx-auto gap-x-20 px-10">
        <ItemHomeStats number="99" text="Món ăn" />
        <div className="h-12 w-px bg-gray-500" />
        <ItemHomeStats number="33" text="Địa điểm" />
        <div className="h-12 w-px bg-gray-500" />
        <ItemHomeStats number="49" text="Đầu bếp" />
        <div className="h-12 w-px bg-gray-500" />
        <ItemHomeStats number="20" text="Thành phố" />
      </div>

      {/* mobile */}
      <div className="lg:hidden grid items-center max-w-7xl mx-auto gap-x-20 px-10">
        <div className="flex justify-between items-center">
          <ItemHomeStats number="99" text="Món ăn" />
          <div className="h-12 w-px bg-gray-500" />
          <ItemHomeStats number="33" text="Địa điểm" />
        </div>
        <div className="flex justify-between items-center">
          <ItemHomeStats number="49" text="Đầu bếp" />
          <div className="h-12 w-px bg-gray-500" />
          <ItemHomeStats number="20" text="Thành phố" />
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
