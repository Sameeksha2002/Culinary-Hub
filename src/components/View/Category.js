import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import MealCard from "../DiscoverMeal/MealCard";
import Loading from "../Loading";
import ItemNotFound from "../ErrorComponents/ItemNotFound";

const Category = () => {
  const { category } = useParams();

  //FETCHING CATEGORIES
  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
  let { data: categoryData, loading, hasError } = useFetch(url);

  if (categoryData) {
    categoryData = categoryData.meals;
  }
  return (
    <div className="Category min-h-[100vh] bg-[#bb6c5d]">
      <div className="w-[90%] md:w-5/6 mx-auto">
        <h1 className="text-4xl text-[#f8cc9e] bg-[#d18374] tracking-wide rounded-b-full border-2 border-[#d18374]  text-center py-4 md:text-[3rem] font-bold">
          {category}
        </h1>

        {loading && <Loading />}
        {hasError && <ItemNotFound message="Something went wrong :(" />}

        <ul className="flex flex-wrap pb-5 w-full md:w-[80%] mx-auto ">
          {categoryData &&
            categoryData.map((cat, index) => (
              <MealCard key={index} meal={cat} widthClass="auto " />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
