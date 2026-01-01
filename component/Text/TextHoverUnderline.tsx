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
  status,
  classNameText,
  classNameLine,
}) => (
  <div className="group">
    <Link
      href={href || "#"}
      className={clsx("uppercase text-base font-medium", classNameText)}
    >
      {text}
    </Link>
    <div
      className={clsx(
        "h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-[90%]",
        status ? "w-[16px]" : "w-0",
        classNameLine
      )}
    />
  </div>
);

export default TextHoverUnderline;
