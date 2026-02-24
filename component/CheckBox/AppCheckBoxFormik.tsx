import { COLOR } from "@/share/contanst/color";
import React from "react";
import { useField } from "formik";

interface Props {
  name: string; // 👈 bắt buộc cho Formik
  id?: string;
  label?: React.HTMLAttributes<HTMLParagraphElement>;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AppCheckBoxFormik: React.FC<Props> = ({
  name,
  id,
  label,
  disabled = false,
  className = "",
  size = "md",
}) => {
  const [field, meta, helpers] = useField({ name, type: "checkbox" });

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const labelSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className={`flex flex-col ${className} w-fit group`}>
      <label htmlFor={id || name} className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={id || name}
          name={name}
          disabled={disabled}
          checked={field.value}
          onChange={(e) => helpers.setValue(e.target.checked)}
          onBlur={field.onBlur}
          className={`
            appearance-none
            ${sizeClasses[size]}
            rounded-full
            border
            border-gray-300
            bg-white
            cursor-pointer
            disabled:cursor-not-allowed
            disabled:opacity-50
            transition-all

            group-hover:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgNEw0LjUgNy41TDExIDEiIHN0cm9rZT0iI2VjNTcwOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')]
            group-hover:bg-center
            group-hover:bg-no-repeat

            checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgNEw0LjUgNy41TDExIDEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')]
            checked:bg-center
            checked:bg-no-repeat
            ${meta.touched && meta.error ? COLOR.orange : ""}
          `}
        />

        {label && (
          <p
            className={`
              ml-2 hover:text-colorOrange
              ${labelSizeClasses[size]}
              ${
                disabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 cursor-pointer"
              }
              select-none
            `}
            {...label}
          >
            {label.children}
          </p>
        )}
      </label>

      {meta.touched && meta.error && (
        <span className="mt-1 ml-7 text-sm text-red-500">{meta.error}</span>
      )}
    </div>
  );
};

export default AppCheckBoxFormik;
