import { Link, useLocation } from "react-router-dom";
import useFetchIngr from "../../utils/useFetchIngr";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { addMeal, removeMeal } from "../../slices/favMealSlice";
import FavoriteToggleButton from "../Buttons/FavoritesToggleButton";

const MealCard = ({ meal, widthClass = "[80%] " }) => {
  const { pathname } = useLocation();
  const favMeals = useSelector((state) => state.favMeals);
  const dispatch = useDispatch();
  let { ingrAndMeas } = useFetchIngr(meal);

  // CHECKING IF THE MEAL IS ALREADY PRESENT IN FAVORITES OR NOT
  let idPresent = favMeals.some((me) => me.idMeal === meal.idMeal);

  // FILTERING ONLY 3 INGREDIENTS FROM ARRAY
  if (ingrAndMeas.ingredients.length !== 0) {
    ingrAndMeas.ingredients = ingrAndMeas.ingredients.slice(0, 3);
  }

  return (
    <div
      className={`mealCard flex flex-col md:flex-row mx-auto items-center w-[45%] md:w-${widthClass} md:mb-9 p-2 md:py-3 md:pl-3 md:pr-4 bg-blue-gray-50 mt-7 rounded-t-full md:rounded-none md:rounded-l-full  justify-between overflow-hidden md:text-center `}
      data-aos="zoom-in"
      data-aos-duration="700"
    >
      {/* MEAL IMAGE  */}
      <div className="relative md:w-[40%] rounded-full group ">
        <img
          src={meal.strMealThumb}
          alt="mealImage"
          className="rounded-full group-hover:opacity-75 transition ease-in-out delay-50"
        />
        {/* FAVORITE TOGGLE BUTTON */}
        <div
          onClick={() => {
            !idPresent
              ? dispatch(addMeal(meal))
              : dispatch(removeMeal(meal.idMeal));
          }}
        >
          {idPresent ? (
            <FavoriteToggleButton favClass="activeFav" strokeColor="white" />
          ) : (
            <FavoriteToggleButton />
          )}
        </div>
      </div>

      <div className="meal-details flex flex-col mt-2 md:mt-0 md:w-[58%] ">
        {/* MEAL TITLE  */}
        <h1 className="mealTitle md:text-2xl text-center text-base ">
          {meal.strMeal}
        </h1>

        {/* MEAL INGREDIENTS AND ORIGIN  */}
        {pathname === "/search-meal" && (
          <div className="text-xs md:text-base">
            <p className="">
              <span className="text-[#8B4513]"> Origin: </span>
              {meal.strArea}
            </p>
            <p className="">
              <span className="text-[#8B4513]"> Ingredients: </span>
              {ingrAndMeas.ingredients &&
                ingrAndMeas.ingredients.map(
                  (ingredient) => ingredient + " , "
                )}{" "}
              ...
            </p>
          </div>
        )}

        {/* LINK TO MEAL PAGE  */}
        <Link to={`/meal/${meal.idMeal}`} className="detailBtn my-2 ">
          <div className="btn !p-1 !lg:px-4 !bg-[#8B4513]">
            <button className="text-xs md:text-base">
              {isMobile ? "Know more..." : "Know more about your meal..."}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MealCard;
