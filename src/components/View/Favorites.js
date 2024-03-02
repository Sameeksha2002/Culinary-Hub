import { useSelector } from "react-redux";
import MealCard from "../DiscoverMeal/MealCard";
import FeaturesButton from "../Buttons/FeaturesButton";

const Favorites = () => {
  const favMeals = useSelector((state) => state.favMeals);
  console.log(favMeals);

  return (
    <div className="text-center min-h-[100vh] py-7 bg-gradient-to-t from-deep-purple-400 to-pink-200 ">
      <h1 className="favHeading text-4xl text-white">Your Favorites</h1>

      {favMeals.length !== 0 ? (
        <ul className="flex flex-wrap ">
          {favMeals.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal} widthClass="40%" />
          ))}
        </ul>
      ) : (
        <>
          <h2 className="text-white mt-12">Your favorites list is empty. </h2>
          <div className="md:w-[30%] mx-auto">
            <FeaturesButton message="Start Exploring" />
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
