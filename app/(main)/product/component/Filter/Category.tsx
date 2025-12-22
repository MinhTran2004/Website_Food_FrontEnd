import AppLine from "@/component/AppLine";
import AppText from "@/component/Text/AppText";

const ItemCategory = ({ text, isLast }: { text: string; isLast: boolean }) => (
  <div>
    <div className="flex gap-4 items-center py-2">
      <AppText text={"▪"} typo="LARGE_MEDIUM_B" />
      <AppText
        text={text}
        typo="BASE"
        className={`hover:text-[#ec5708] cursor-pointer`}
      />
    </div>
    {!isLast && (
      <AppLine
        className={`bg-transparent border border-gray-200 border-dashed`}
      />
    )}
  </div>
);

const DATA = ["Món tráng miệng", "Món chính", "Món khai vị"];

const ProductCategory = () => {
  return (
    <div>
      <AppText text="DANH MỤC" typo="LARGE_MEDIUM_B" />
      <AppLine className="my-2 bg-gray-200" />

      <div>
        {DATA.map((item, index) => (
          <ItemCategory
            key={index}
            text={item}
            isLast={DATA.length - 1 === index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
