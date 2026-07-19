import { useState } from "react";
import { FaStar } from "react-icons/fa";
function Rating({rating, setRating}) {
    const [hover, setHover] = useState(0);
    return (
        <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                key={star}
                size={35} className={`cursor-pointer transition-all duration-300 ${
                    star <=( hover || rating)
                    ? "text-yellow-400 scale-110"
                    : "text-gray-500"
                }`}
                onClick={()=> setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                />
            ))}
            <span className="ml-3 text-yellow-300 font-semibold text-lg">
                {rating > 0 ?`${rating}/5` : "No Rating"}
            </span>
        </div>
    );
}
export default Rating;