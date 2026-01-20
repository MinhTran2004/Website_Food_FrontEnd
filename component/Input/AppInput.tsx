'use client'
import clsx from "clsx";
import { useField } from "formik";
import React, { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    viewExtra?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
}

const AppInput: React.FC<Props> = ({ viewExtra, label, iconLeft, iconRight, ...input }) => {
    const [field, meta] = useField(input.name!);

    return (
        <div className={clsx('flex flex-col gap-0.5', viewExtra)}>
            <label className="pl-1 font-medium text-md">{label}</label>
            <div className={clsx(`border border-colorGray px-4 py-3 rounded-xl flex items-center gap-2`)}>
                {iconLeft}
                <div className="w-full flex justify-between">
                    <input
                        className="focus-visible:outline-0 w-full"
                        {...field}
                        {...input}
                    />
                    {iconRight}
                </div>
            </div>
            {/* error message */}
            {meta.touched && meta.error && (
                <span className="text-sm text-red-500 pl-1">{meta.error}</span>
            )}
        </div>
    )
}

export default AppInput;