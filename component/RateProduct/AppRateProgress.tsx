import clsx from "clsx";
import { FaStar } from "react-icons/fa6";

interface Props {
    text: string,
    progress: number,
}

const AppRateProgress: React.FC<Props> = ({ text, progress }) => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
                <p>{text}</p>
                <FaStar className="text-colorBlack" size={14} />
            </div>

            <div className="relative w-full">
                <div className="w-full h-2.5 bg-colorGrayLight rounded-2xl" />
                <div className={clsx(`absolute w-[${progress}%] top-0 left-0 bottom-0 h-2 bg-colorOrange rounded-2xl z-10`)} />
            </div>

            <p>{progress}%</p>
        </div>
    )
}

export default AppRateProgress;