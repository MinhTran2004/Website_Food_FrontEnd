import clsx from "clsx";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface IAppButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  text?: string;
  iconRight?: ReactNode;
  iconRightStyle?: string;
  buttonDefault?: boolean;
}

const AppButton: React.FC<IAppButtonProps> = ({
  buttonDefault,
  text,
  iconRight,
  iconRightStyle,
  ...props
}) => {
  return (
    <div className="flex items-center group">
      <button
        className={clsx(
          "text-base font-semibold cursor-pointer",
          buttonDefault
            ? "px-0 py-0 bg-transparent rounded-0 text-black"
            : "px-[50px] py-[15px] bg-[#ec5708] rounded-[10px] text-white"
        )}
        {...props}
      >
        {text}
      </button>
      <div className={iconRightStyle}>{iconRight}</div>
    </div>
  );
};

export default AppButton;
