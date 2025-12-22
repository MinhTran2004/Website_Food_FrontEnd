import { COLOR } from "@/share/contanst/color";
import { TEXT_TYPO } from "@/share/contanst/common";
import { CSSProperties, ElementType, HTMLAttributes, useMemo } from "react";

export interface IAppText extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  typo?: TEXT_TYPO;
  color?: string;
  text?: string;
}

const AppText = ({
  as: Component = "p",
  text,
  color = COLOR.black,
  typo,
  ...props
}: IAppText) => {
  const FONT_SIZE: CSSProperties = useMemo(() => {
    switch (typo) {
      case "HEADER_1":
        return { fontSize: "64px" };
      case "HEADER_1_B":
        return { fontSize: "64px", fontWeight: 600 };
      case "HEADER_2":
        return { fontSize: "48px" };
      case "HEADER_2_B":
        return { fontSize: "48px", fontWeight: 600 };
      case "HEADER_3":
        return { fontSize: "46px" };
      case "HEADER_3_B":
        return { fontSize: "46px", fontWeight: 600 };
      case "HEADER_4":
        return { fontSize: "26px" };
      case "HEADER_4_B":
        return { fontSize: "26px", fontWeight: 600 };
      case "HEADER_5":
        return { fontSize: "24px" };
      case "HEADER_5_B":
        return { fontSize: "24px", fontWeight: 600 };
      case "LARGE":
        return { fontSize: "22px" };
      case "LARGE_B":
        return { fontSize: "22px", fontWeight: 500 };
      case "LARGE_MEDIUM":
        return { fontSize: "20px" };
      case "LARGE_MEDIUM_B":
        return { fontSize: "20px", fontWeight: 500 };
      case "BASE_LARGE":
        return { fontSize: "18px" };
      case "BASE_LARGE_B":
        return { fontSize: "18px", fontWeight: 500 };
      case "BASE":
        return { fontSize: "16px" };
      case "BASE_B":
        return { fontSize: "16px", fontWeight: 500 };
      case "BASE_SMALL":
        return { fontSize: "14px" };
      case "BASE_SMALL_B":
        return { fontSize: "14px", fontWeight: 500 };
      case "BASE_SMALL_LEST":
        return { fontSize: "12px" };
      case "BASE_SMALL_LEST":
        return { fontSize: "12px", fontWeight: 500 };
      default:
        return { fontSize: "16px" };
    }
  }, [typo]);
  return (
    <Component
      style={{ ...FONT_SIZE, ...props.style }}
      className={`text-[${color}]`}
      {...props}
    >
      {text}
    </Component>
  );
};

export default AppText;
