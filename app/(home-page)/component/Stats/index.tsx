const ItemHomeStats = ({ number, text }: { number: string; text: string }) => (
  <div className="relative">
    <p className="text-center font-medium text-[180px] text-[#f3f3f3]">
      {number}
    </p>
    <p className="text-center text-3xl font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {text}
    </p>
  </div>
);

const HomeStats = () => {
  return (
    <div className="flex justify-between items-center w-7xl mx-auto gap-x-20">
      <ItemHomeStats number="99" text="Món ăn" />
      <div className="h-12 w-px bg-gray-500" />
      <ItemHomeStats number="33" text="Địa điểm" />
      <div className="h-12 w-px bg-gray-500" />
      <ItemHomeStats number="49" text="Đầu bếp" />
      <div className="h-12 w-px bg-gray-500" />
      <ItemHomeStats number="20" text="Thành phố" />
    </div>
  );
};

export default HomeStats;
