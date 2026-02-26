import { COLOR } from "@/share/contanst/color";
import { TYPE_ROUTE } from "@/share/contanst/route.constants";
import { getCurrentPath } from "@/utils/getSeverUrl";
import { FaAngleRight } from "react-icons/fa6";
import AppText from "./Text/AppText";

const PathLink = async () => {
  const path = await getCurrentPath();

  const splitPath = path.split("/");

  const definePath = (key: TYPE_ROUTE) => {
    switch (key) {
      case "PRODUCTS":
        return "Đồ ăn";
      case "PRODUCTID":
        return "Chi tiết sản phẩm";
      case "NEWS":
        return "Tin tức";
      case "CONTACT":
        return "Liên hệ";
      default:
        return "Trang chủ";
    }
  };

  const formatPath = splitPath.map((item) => {
    const newPath = definePath(item.toUpperCase() as TYPE_ROUTE);
    return newPath;
  });

  return (
    <div
      className="mb-8 bg-colorGrayLight px-4"
    >
      <div className="max-w-7xl mx-auto flex py-3">
        {formatPath.map((item, index) => (
          <div className="flex items-center" key={index}>
            <AppText
              key={item}
              text={item}
              color={index < formatPath.length - 1 ? COLOR.gray : COLOR.black}
            />
            {index < formatPath.length - 1 && (
              <FaAngleRight className="mx-1" color={COLOR.gray} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathLink;
