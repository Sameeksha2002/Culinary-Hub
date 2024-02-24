import burger from "../../assets/images/burger.png";
import SearchMealInput from "../SearchMealInput";
import FeaturesButton from "../Buttons/FeaturesButton";

const SearchMeal = () => {
  const baseurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  return (
    <div className="bg-[#D9534F] min-h-full lg:h-[100vh] lg:w-[100vw]">
      <div className="cont min-h-[100vh] w-[90%] mx-auto pt-5">
        <div className="featurheader lg:flex lg:items-center lg:justify-between">
          <h1 className="heroContent text-2xl !leading-none !text-[#F5F5DC]">
            Discover your next meal !
          </h1>

          <FeaturesButton bgColor="[#3CB371]" hoverBgColor="amber-500" />
        </div>

        <div className="searchMeal flex flex-col justify-between min-h-[70%] items-center lg:items-start lg:flex-row mt-4 ">
          <div className="mealContainer w-full lg:w-[60%] xl:mt-7">
            <SearchMealInput
              baseurl={baseurl}
              plcText="Craving for the meal right??"
            />
          </div>
          <img
            src={burger}
            alt="burgerImage"
            className="mt-12 lg:mt-0 lg:w-[40%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMeal;
