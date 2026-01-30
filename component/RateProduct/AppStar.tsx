import { FaStar } from "react-icons/fa6";

interface Props {
    size?: number,
    color?: string,
}

const AppStar: React.FC<Props> = ({ size = 14, color = 'text-yellow-500' }) => {
    return (
        <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className={color} size={size} />
            ))}
        </div>
    )
}

export default AppStar;