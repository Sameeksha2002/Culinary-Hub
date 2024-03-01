import { Link } from "react-router-dom";
import FavSvg from "../../assets/svg/FavoriteSvg";
import { useSelector } from "react-redux";

const FavoritesButton = () => {
  const favMeals = useSelector((state) => state.favMeals);
  return (
    <Link to="/favorites">
      <button className="bg-white shadow-lg mx-auto rounded-full text-[#D9534F] flex items-center gap-2 py-2 px-4 hover:scale-105 transition ease-in-out delay-50 hover:bg-[#f8e5e4]">
        <span className=" text-base font-raleway">
          Favorites {favMeals.length}
        </span>

        <FavSvg strokeColor="#D9534F" />
      </button>
    </Link>
  );
};

export default FavoritesButton;
