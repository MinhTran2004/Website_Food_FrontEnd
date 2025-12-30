import { TEXT_TYPO } from "@/share/contanst/common";
import { ElementType, HTMLAttributes } from "react";

export interface IAppText extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  typo?: TEXT_TYPO;
  text?: string;
}

const AppText = ({
  as: Component = "p",
  text,
  typo,
  className = "",
  ...props
}: IAppText) => {
  const setupFontsize = (): string => {
    switch (typo) {
      // HEADER_1 - Lớn nhất
      case "HEADER_1":
        return "text-5xl"; // 48px
      case "HEADER_1_B":
        return "text-5xl font-semibold";
      case "HEADER_1_LG":
        return "text-6xl"; // 60px
      case "HEADER_1_LG_B":
        return "text-6xl font-semibold";
      case "HEADER_1_XL":
        return "text-7xl"; // 72px
      case "HEADER_1_XL_B":
        return "text-7xl font-semibold";

      // HEADER_2
      case "HEADER_2":
        return "text-4xl"; // 36px
      case "HEADER_2_B":
        return "text-4xl font-semibold";

      // HEADER_3
      case "HEADER_3":
        return "text-3xl"; // 30px
      case "HEADER_3_B":
        return "text-3xl font-semibold";

      // HEADER_4
      case "HEADER_4":
        return "text-2xl"; // 24px
      case "HEADER_4_B":
        return "text-2xl font-semibold";

      // HEADER_5
      case "HEADER_5":
        return "text-xl"; // 20px
      case "HEADER_5_B":
        return "text-xl font-semibold";

      // HEADER_6
      case "HEADER_6":
        return "text-lg"; // 18px
      case "HEADER_6_B":
        return "text-lg font-semibold";

      // TEXT - Nhỏ hơn paragraph
      case "TEXT":
        return "text-sm"; // 14px
      case "TEXT_B":
        return "text-sm font-semibold";
      case "TEXT_SM":
        return "text-xs"; // 12px
      case "TEXT_SM_B":
        return "text-xs font-semibold";
      case "TEXT_LG":
        return "text-base"; // 16px
      case "TEXT_LG_B":
        return "text-base font-semibold";

      // CAPTION - Nhỏ nhất
      case "CAPTION_SM":
        return "text-[10px]"; // 10px
      case "CAPTION_SM_B":
        return "text-[10px] font-semibold";

      default:
        return "text-base";
    }
  };

  return (
    <Component className={`${setupFontsize()} ${className}`} {...props}>
      {text}
    </Component>
  );
};

export default AppText;
