import { Link, useLocation } from "react-router-dom";
import useFetchIngr from "../../utils/useFetchIngr";
import { isMobile } from "react-device-detect";

const MealCard = ({ meal, widthClass = "[80%] " }) => {
  const { pathname } = useLocation();
  let { ingrAndMeas } = useFetchIngr(meal);

  // console.log(meal, "ingr", ingrAndMeas);
  if (ingrAndMeas.ingredients.length !== 0) {
    ingrAndMeas.ingredients = ingrAndMeas.ingredients.slice(0, 3);
  }

  return (
    <div
      className={`mealCard flex flex-col md:flex-row mx-auto items-center w-[45%] md:w-${widthClass} md:mb-9 p-2 md:py-3 md:pl-3 md:pr-4 bg-blue-gray-50 mt-7 rounded-t-full md:rounded-none md:rounded-l-full  justify-between overflow-hidden md:text-center `}
    >
      <div className="md:w-[40%] rounded-full">
        <img src={meal.strMealThumb} alt="mealImage" className="rounded-full" />
      </div>
      <div className="meal-details flex flex-col mt-2 md:mt-0 md:w-[58%] ">
        <h1 className="mealTitle md:text-2xl text-center text-base ">
          {meal.strMeal}
        </h1>

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
