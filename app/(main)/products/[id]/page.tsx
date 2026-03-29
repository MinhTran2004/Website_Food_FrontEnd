import AppImage from "@/component/Image/AppImage";
import LayoutSpace from "@/component/LayoutSpace";
import AppStar from "@/component/RateProduct/AppStar";
import { ApiServerURL } from "@/service/index.service";
import { URLS } from "@/service/url.service";
import { BASE_URL } from "@/types/contanst";
import { TYPE_CATEGORY_PRODUCT } from "@/types/contanst/product.constants";
import { IProduct } from "@/types/interface/product.interface";
import { formatVND } from "@/utils/formatVND";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PaymentProduct from "./component/PaymentProduct";
import ProductSimilar from "./component/ProductSimilar";
import ReviewProduct from "./component/ReviewProduct";

export async function generateMetadata({
  params,
}: PageProps<"/products/[id]">): Promise<Metadata> {
  const { id } = await params;

  const product = await fetch(`${ApiServerURL}${URLS.GET_PRODUCT_BY_ID(id)}`, {
    cache: "no-store",
  }).then((res) => res.json());

  if (!product) return notFound();

  const productName = product.name.toLocaleLowerCase();

  return {
    title: `${productName}`,
    description: `${productName} - Giá ${product.price}đ. Đặt ngay tại FastFood, giao hàng nhanh chóng, tiện lợi.`,
    keywords: [
      `${productName}`,
      "đặt đồ ăn",
      "fastfood",
      "đồ ăn nhanh",
      "giao đồ ăn",
      "ship đồ ăn",
      "order food online",
      "FastFood Việt Nam",
    ],
    openGraph: {
      title: `${productName}`,
      description: `${productName} - Giá ${product.price}đ. Đặt ngay tại FastFood, giao hàng nhanh chóng, tiện lợi.`,
      url: `${BASE_URL}/products${product.id}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: productName,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const ProductIdPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  if (!id) return;

  const res = await fetch(`${ApiServerURL}${URLS.GET_PRODUCT_BY_ID(id)}`, {
    cache: "no-store",
  });

  const product: IProduct = await res.json();

  return (
    <LayoutSpace>
      <div className="max-w-7xl flex mx-auto px-6 gap-10">
        <div className="hidden lg:block w-[30%] space-y-4 h-fit">
          {/* <ProductCategory /> */}
          <ProductSimilar />
        </div>

        <div className="w-full mx-auto space-y-12">
          <div className="w-full flex flex-col md:flex-row gap-6">
            <AppImage
              src={product.image}
              classNameContainer="md:h-[400px] md:w-[400px] w-full h-[300px] border border-colorGrayLight"
              className="object-contain duration-300 hover:scale-105 hover:cursor-pointer"
              alt=""
            />
            <div className="space-y-3">
              <h1 className="text-3xl font-medium">{product.name}</h1>
              <AppStar size={20} />
              <p className="text-2xl font-medium text-colorOrange">
                {formatVND(product.price)}
              </p>

              <p className="font-medium text-sm">
                Mã sản phẩm:{" "}
                <span className="font-normal text-[15px]">{product.id}</span>
              </p>
              <p className="font-medium text-sm">
                Danh mục:{" "}
                <span className="font-normal text-colorOrange text-[15px]">
                  {TYPE_CATEGORY_PRODUCT[product.category]}
                </span>
              </p>

              <PaymentProduct key={product.id} {...product} />
            </div>
          </div>

          <ReviewProduct {...product} />
        </div>
      </div>
    </LayoutSpace>
  );
};

export default ProductIdPage;
