import tomato from "../assets/images/tomato.png";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="w-full mt-4 mb-7 lg:my-0 lg:flex lg:justify-between ">
      <img src={tomato} alt="tomato" className="lg:w-[50vw] text-center" />
      <div className="herofeatures lg:w-[30vw] flex flex-col mt-2 lg:mt-10 lg:mr-5">
        <Link to="/search-meal" className="btn mt-5">
          <button>Discover your next meal!</button>
        </Link>
        <Link to="/search-by-ingredient" className="btn !bg-[#8B4513] mt-5">
          <button>Search by Ingredients</button>{" "}
        </Link>
        <Link to="/all-categories" className="btn !bg-[#40480b] mt-5">
          <button>Endless Recipe Options</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Features;
