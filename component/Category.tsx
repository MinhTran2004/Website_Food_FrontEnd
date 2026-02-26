import AppLine from "@/component/AppLine";
import {
  FILTER_PRICE,
  HREF_CATEGORY,
  TYPE_CATEGORY,
} from "@/share/contanst/product.constants";
import { ROUTE } from "@/share/contanst/route.constants";
import clsx from "clsx";
import Link from "next/link";

const ItemCategory = async ({
  text,
  isLast,
  category,
  price,
  link,
}: {
  text: string;
  isLast: boolean;
  category: string;
  price: FILTER_PRICE;
  link: string;
}) => {
  return (
    <Link
      href={{
        pathname: ROUTE.PRODUCTS,
        query: { category: link, price: price },
      }}
    >
      <div className="flex gap-4 items-center py-2">
        <p>▪</p>
        <p
          className={clsx(
            "hover:text-colorOrange cursor-pointer",
            category === link && "text-colorOrange",
          )}
        >
          {text}
        </p>
      </div>
      {!isLast && (
        <AppLine
          className={`bg-transparent border border-gray-200 border-dashed`}
        />
      )}
    </Link>
  );
};

interface IProps {
  category?: string;
  price: FILTER_PRICE;
}

const ProductCategory: React.FC<IProps> = ({ category, price }) => {
  return (
    <div>
      <h3 className="text-lg font-medium">DANH MỤC</h3>
      <AppLine className="my-2 bg-gray-200" />

      <div>
        {HREF_CATEGORY.map((item, index) => (
          <ItemCategory
            key={index}
            text={item.text}
            link={item.link}
            category={category || TYPE_CATEGORY[0]}
            price={price}
            isLast={HREF_CATEGORY.length - 1 === index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
