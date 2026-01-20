import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import AppImage from "../Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: React.HTMLAttributes<HTMLParagraphElement>;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconRightStyle?: string;
  buttonDefault?: boolean;
  isLoading?: boolean;
}

const AppButton: React.FC<IAppButtonProps> = ({
  buttonDefault,
  text,
  iconLeft,
  iconRight,
  iconRightStyle,
  isLoading,
  ...props
}) => {
  return (
    <div className="flex items-center group w-full">
      <button
        {...props}
        className={clsx(
          "w-full flex items-center justify-center gap-2 text-base font-semibold cursor-pointer",
          buttonDefault
            ? "px-0 py-0 bg-transparent rounded-0 text-black"
            : "px-[50px] py-[15px] bg-colorOrange rounded-[10px] text-white",
          `disabled:bg-colorGrayLight disabled:text-colorGray`, props.className)}
      >
        {isLoading && <AppImage src={IMAGE_SOUCE.LOADING} alt="" classNameContainer="h-[20px] w-[20px]" unoptimized />}
        {iconLeft}
        <p {...text}>{text?.children}</p>
      </button>
      <div className={iconRightStyle}>{iconRight}</div>
    </div>
  );
};

export default AppButton;
