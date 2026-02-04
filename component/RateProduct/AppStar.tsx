import clsx from "clsx";
import { CiStar } from "react-icons/ci";

interface Props {
  size?: number;
  color?: string;
  total_star?: number
}

const AppStar: React.FC<Props> = ({ size = 14, color = "text-yellow-500", total_star = 0 }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <CiStar
          key={index}
          className={clsx(index < total_star && `text-yellow-500`)}
        />
      ))}
    </div>
  );
};

export default AppStar;
