import clsx from "clsx";
import Link from "next/link";

interface Props {
  href?: string;
  text?: string;
  status?: boolean;
  classNameText?: string;
  classNameLine?: string;
}

const TextHoverUnderline: React.FC<Props> = ({
  href,
  text,
  classNameText,
  classNameLine,
}) => {
  return (
    <div className="group">
      <Link
        href={href || "#"}
        className={clsx("uppercase text-base font-medium", classNameText)}
      >
        {text}
      </Link>
      <div
        className={clsx(
          "h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-[90%]",
          classNameLine,
        )}
      />
    </div>
  );
};

export default TextHoverUnderline;
