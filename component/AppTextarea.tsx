"use client";
import { useField } from "formik";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const AppTextarea: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name!);

  return (
    <div className="flex flex-col gap-1">
      <label className="pl-1 font-medium">{label}</label>

      <textarea
        {...props}
        {...field}
        rows={4}
        className="border rounded-xl p-3 outline-none bg-white shadow-sm border-colorGray"
      />

      {meta.touched && meta.error && (
        <span className="text-red-500 text-sm">{meta.error}</span>
      )}
    </div>
  );
};

export default AppTextarea;