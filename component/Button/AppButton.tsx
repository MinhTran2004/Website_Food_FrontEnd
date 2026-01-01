import clsx from "clsx";
import { HtmlHTMLAttributes, ReactNode } from "react";

interface IAppButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  text?: React.HTMLAttributes<HTMLParagraphElement>;
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
            : "px-[50px] py-[15px] bg-colorOrange rounded-[10px] text-white"
        )}
        {...props}
      >
        <p {...text}>{text?.children}</p>
      </button>
      <div className={iconRightStyle}>{iconRight}</div>
    </div>
  );
};

export default AppButton;
