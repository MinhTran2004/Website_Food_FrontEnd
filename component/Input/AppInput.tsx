"use client";
import clsx from "clsx";
import React, { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  viewExtra?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  classNameContainerText?: string;
}

const AppInput: React.FC<Props> = ({
  viewExtra,
  label,
  iconLeft,
  iconRight,
  classNameContainerText,
  ...input
}) => {
  return (
    <div className={clsx("flex flex-col gap-0.5", viewExtra)}>
      <label className="pl-1 font-medium text-md">{label}</label>
      <div
        className={clsx(
          `px-4 py-2.5 rounded-xl flex items-center gap-2 bg-white shadow-sm border border-colorGrayLight
                focus-within:ring-2 focus-within:ring-orange-500/20 transition-all focus-within:border focus-within:border-colorOrange`,
          classNameContainerText,
        )}
      >
        {iconLeft}
        <div className="w-full flex justify-between">
          <input
            className={clsx(
              "w-full outline-none border-none focus:outline-none focus-visible:outline-none bg-transparent",
            )}
            {...input}
          />
          {iconRight}
        </div>
      </div>
    </div>
  );
};

export default AppInput;
