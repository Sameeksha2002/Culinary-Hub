import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  // const words = category.strCategoryDescription.split(' ');
  // const first10Words = words.slice(0, 10).join(' ');

  return (
    <Link
      to={`/all-categories/${category.strCategory}`}
      className="group m-0 p-0"
    >
      <div className="categoryCard flex items-center h-4/5 w-[100%] bg-gradient-to-r from-[#eaa44f] to-[#e9d7c1] group-hover:to-[#f9f1e9] rounded-xl md:py-4">
        <img
          src={category.strCategoryThumb}
          alt=""
          className="h-[75%] md:h-[100%] rounded-full group-hover:scale-125 transition duration-500 cursor-pointer"
        />

        {/* <div className="text-center"> */}
        <h1 className="text-center text-[#72231c] ml-1 md:ml-6 md:text-lg  group-hover:scale-125 transition duration-500 group-hover:text-[#40480b] tracking-wide font-bold">
          {category.strCategory}
        </h1>
        {/* <p>{first10Words}...</p> */}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default CategoryCard;
