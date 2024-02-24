import useFetch from "../../utils/useFetch";
import CategoryCard from "./CategoryCard";
import Loading from "../Loading";
import ItemNotFound from "../ErrorComponents/ItemNotFound";

const CategoriesCont = () => {
  let {
    data: category,
    loading,
    hasError,
  } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

  if (category) {
    category = category.categories;
  }

  return (
    <div className="bg-[#eaa44f] min-h-[100vh] overflow-hidden">
      <div className="catContent lg:w-[90vw] mx-auto">
        <div className="catHeader mt-4">
          <h1 className="text-2xl lg:text-4xl text-center font-bold mx-4 text-[#faf0d7]">
            Endless Tastes, One Destination: Explore the Culinary Tapestry
            Across All Categories!
          </h1>
        </div>
      </div>

      {loading && <Loading />}
      {hasError && <ItemNotFound message="Something went wrong :(" />}
      <div className="categoryCards flex flex-wrap w-[90%] mx-[5%] md:gap-2 justify-center lg:justify-between mt-9">
        {category &&
          category.map((cat, index) => (
            <CategoryCard category={cat} key={index} />
          ))}
      </div>
    </div>
  );
};

export default CategoriesCont;
