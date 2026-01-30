import AppLine from "@/component/AppLine";

const ItemCategory = ({ text, isLast }: { text: string; isLast: boolean }) => (
  <div>
    <div className="flex gap-4 items-center py-2">
      <p>▪</p>
      <p className="hover:text-colorOrange cursor-pointer">{text}</p>
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
      <h3 className="text-lg font-medium">DANH MỤC</h3>
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
