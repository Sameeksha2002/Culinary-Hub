import { useState } from "react";
import useFetch from "../utils/useFetch";
import Loading from "./Loading";
import MealCardContainer from "./DiscoverMeal/MealCardContainer";
import search from "../assets/svg/Search.svg";
import ItemNotFound from "./ErrorComponents/ItemNotFound";

const SearchMealInput = ({ baseurl, plcText }) => {
  let [mealValue, setMealValue] = useState("");
  let [mealUrl, setMealUrl] = useState(null);

  let meal = null;

  const handleOnChange = (event) => {
    setMealValue(event.target.value);
    setMealUrl(null);
    meal = null;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (mealValue) {
      let modStr = mealValue[0].toUpperCase() + mealValue.slice(1);
      setMealUrl(modStr);
    }
  };

  const url = baseurl + mealUrl;

  // UNCOMMENT THE LINES BELOW TO REPRODUCE THE ERROR (comment line no.40)

  // let data, loading, hasError;
  // useEffect(() => {
  // const {
  //   data: data,
  //   loading: loading,
  //   hasError: hasError,
  // } = useFetch(mealUrl && url);
  // }, []);

  const { data, loading, hasError } = useFetch(mealUrl && url);

  if (mealUrl) {
    console.log("loading...", loading);

    meal = data;
    console.log("meals..", meal);
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="mealInput flex">
        <input
          type="text"
          placeholder={plcText}
          className="px-4 xl:py-2 text-xs lg:text-base rounded-l-lg focus:outline-[#D9534F] w-4/5 lg:w-[90%]"
          onChange={handleOnChange}
          value={mealValue}
        />
        <button
          type="submit"
          className="xl:px-4 py-1 xl:py-2 bg-amber-500 font-bold text-white hover:opacity-75 cursor-pointer rounded-r-lg w-1/5 lg:w-[10%]"
        >
          <img src={search} alt="" className="mx-auto h-6 lg:h-full" />
        </button>
      </form>

      {mealUrl && loading && <Loading />}
      {mealUrl && hasError && <ItemNotFound message="Meal not found :(" />}
      {meal && meal.meals && (
        <MealCardContainer> {meal.meals.map((i) => i)}</MealCardContainer>
      )}
    </div>
  );
};

export default SearchMealInput;
