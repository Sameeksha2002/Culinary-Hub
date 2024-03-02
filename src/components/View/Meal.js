import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import useFetchIngr from "../../utils/useFetchIngr";
import FeaturesButton from "../Buttons/FeaturesButton";
import IngsAndMeasures from "../IngsAndMeasures";
import { isMobile, isTablet } from "react-device-detect";
import Loading from "../Loading";
import ItemNotFound from "../ErrorComponents/ItemNotFound";
import { useDispatch, useSelector } from "react-redux";
import { addMeal, removeMeal } from "../../slices/favMealSlice";
import FavoriteToggleButton from "../Buttons/FavoritesToggleButton";

const Meal = () => {
  let meal = null;
  const { id } = useParams();
  const favMeals = useSelector((state) => state.favMeals);
  const dispatch = useDispatch();

  //FETCHING MEAL
  let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
  const { data, loading, hasError } = useFetch(url);

  if (data) {
    meal = data.meals[0];
  }

  //FETCHING INGREDIENTS AND MEASURES
  const { ingrAndMeas } = useFetchIngr(meal);

  // CHECKING IF THE MEAL IS ALREADY PRESENT IN FAVORITES OR NOT
  let idPresent = false;
  if (meal) {
    idPresent = favMeals.some((me) => me.idMeal === meal.idMeal);
  }

  return (
    <div className="w-full min-h-[100vh] bg-[#0a9396]">
      {loading && (
        <div className="pt-6">
          <Loading />
        </div>
      )}
      {hasError && <ItemNotFound message="Something went wrong :(" />}

      {meal && (
        <div className="w-[80%] lg:w-[85%] mx-auto pb-5 text-[#e9e4e4]">
          {/* ----------MEAL NAME------------ */}
          <h1
            className="text-3xl lg:text-5xl pt-4 text-[#94d2bd] text-center font-bold"
            data-aos="fade-up"
          >
            {meal && meal.strMeal}
          </h1>

          {/* ---------------MEAL BODY--------------------- */}
          <div className="mt-4 flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[65%] lg:mr-12">
              <div className="lg:flex lg:items-center">
                {/* -------------MEAL IMAGE---------------- */}
                <img
                  src={meal && meal.strMealThumb}
                  alt=""
                  className="rounded-lg lg:w-[25%]"
                  data-aos="zoom-in"
                />
                {/* -----------------MEAL ORIGIN AND CATEGORY----------------  */}
                <div
                  className="my-3 text-center lg:text-left lg:ml-7 lg:my-0"
                  data-aos="fade-left"
                >
                  <p>
                    <span className="font-bold text-xl"> category: </span>{" "}
                    {meal && meal.strCategory}
                  </p>
                  <p>
                    <span className="font-bold text-xl"> origin: </span>
                    {meal && meal.strArea}
                  </p>

                  {/* ---------------FAVORITE TOGGLE BUTTON --------------------- */}
                  <div
                    className="relative pt-3 lg:pt-4 group"
                    onClick={() => {
                      !idPresent
                        ? dispatch(addMeal(meal))
                        : dispatch(removeMeal(meal.idMeal));
                    }}
                  >
                    {idPresent ? (
                      <FavoriteToggleButton
                        favClass="activeFav mobileFavClass"
                        strokeColor="white"
                      />
                    ) : (
                      <FavoriteToggleButton favClass="mobileFavClass" />
                    )}
                  </div>
                </div>
              </div>
              {/* -------------------INGREDIENTS AND MEASURES (if mobile)--------------------*/}
              {(isMobile || isTablet) && (
                <IngsAndMeasures ingrAndMeas={ingrAndMeas} />
              )}

              {/* ---------------MEAL INSTRUCTIONS---------------- */}
              <p
                className="mt-4 text-center lg:text-left"
                data-aos="fade-right"
              >
                <span className="font-bold text-xl block lg:inline ">
                  Instructions:
                </span>{" "}
                {meal && meal.strInstructions}
              </p>

              {/* ------------------MORE FEATURES BUTTON-------------------- */}
              <div className="w-[16rem] mx-auto lg:mx-0">
                <FeaturesButton />
              </div>
            </div>

            {/* -------------------INGREDIENTS AND MEASURES (if not mobile)-------------------- */}
            {!isMobile && (
              <div className="lg:w-[35%]">
                <IngsAndMeasures ingrAndMeas={ingrAndMeas} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meal;
