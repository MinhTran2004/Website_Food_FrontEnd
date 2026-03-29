import { productService } from "@/service/product.service";
import { BASE_URL } from "@/types/contanst";
import { TYPE_CATEGORY } from "@/types/contanst/product.constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await Promise.all(
    TYPE_CATEGORY.map(async (category) => {
      return (await productService.getAllProduct({ category: category })).data
        ?.items;
    }),
  );

  const flastProduct = products.flat();

  const productPages = flastProduct
    .map((item) => ({
      url: `${BASE_URL}/products/${item?.id}`,
      priority: 0.8,
      //   lastModified: `${item.updateAt}`,
    }))
    .flat() as MetadataRoute.Sitemap;

  return [
    {
      url: `${BASE_URL}`,
      changeFrequency: "weekly", //Nội dung trang thay đổi với tuần suất thê nào,
      priority: 1,
    },
    ...productPages,
  ];
}
