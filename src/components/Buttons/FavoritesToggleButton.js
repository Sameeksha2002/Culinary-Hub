import { isMobile } from "react-device-detect";
import FavSvg from "../../assets/svg/FavoriteSvg";

const FavoriteToggleButton = ({ favClass = "", strokeColor = "red" }) => {
  return (
    <div
      className={`absolute top-[70%] left-[40%] md:top-[80%] md:left-[43%] z-1 bg-white rounded-full p-1 group-hover:scale-[1.15] transition ease-in-out delay-50 cursor-pointer ${favClass}`}
    >
      <FavSvg strokeColor={strokeColor} SvgSize={isMobile ? "20px" : "30px"} />
    </div>
  );
};

export default FavoriteToggleButton;
