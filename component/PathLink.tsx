import { COLOR } from "@/share/contanst/color";
import { TYPE_PAGE_LIST } from "@/share/contanst/common";
import { getCurrentPath } from "@/utils/getSeverUrl";
import { FaAngleRight } from "react-icons/fa6";
import AppText from "./Text/AppText";

const PathLink = async () => {
  const path = await getCurrentPath();

  const splitPath = path.split("/");

  const definePath = (key: TYPE_PAGE_LIST) => {
    switch (key) {
      case "PRODUCT":
        return "Đồ ăn";
      default:
        return "Trang chủ";
    }
  };

  const formatPath = splitPath.map((item) => {
    const newPath = definePath(item.toUpperCase() as TYPE_PAGE_LIST);
    return newPath;
  });

  return (
    <div
      className="mb-8 bg-colorGrayLight"
    >
      <div className="w-7xl mx-auto flex py-3">
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
