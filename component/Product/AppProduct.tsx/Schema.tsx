import { BASE_URL } from "@/types/contanst";
import { ROUTE } from "@/types/contanst/route.constants";
import { IProduct } from "@/types/interface/product.interface";
import { Product, WithContext } from "schema-dts";

const AppProductSchema: React.FC<IProduct> = ({ ...product }) => {
  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "FastFood",
    },
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}${ROUTE.PRODUCTID(product._id)}`,
      price: product.price.toString(),
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      "@id": `${BASE_URL}${ROUTE.PRODUCTID(product._id)}`,
      image: product.image,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    ></script>
  );
};

export default AppProductSchema;
