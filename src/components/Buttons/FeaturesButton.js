import { Link } from "react-router-dom";

const FeaturesButton = ({ message = "More Features" }) => {
  return (
    <Link
      to="/"
      className={`mx-auto mt-2 mb-4 lg:px-8 lg:mr-8 lg:my-4 lg:py-2 rounded-lg text-[#F5F5DC] bg-[#3CB371] hover:bg-amber-600 w-4/5 lg:w-auto text-base xl:text-2xl font-semibold cursor-pointer flex items-center`}
    >
      <button className="mx-auto my-2 lg:my-0">{message}</button>
    </Link>
  );
};

export default FeaturesButton;
