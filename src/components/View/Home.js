import ShowFavoritesButton from "../Buttons/ShowFavoritesButton";
import Features from "../Features";

const Home = () => {
  return (
    <div className="hero flex flex-col mx-5 lg:mx-16 lg:h-[100vh] lg:overflow-hidden ">
      <div
        className="heroContent mt-[1rem] lg:mt-9 flex flex-col lg:flex-row justify-between"
        data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <div className="relative lg:w-[70%]">
          <h1 className="heroTitle pt-7 md:pt-0 text-4xl lg:text-6xl ">
            Discover, Cook & Enjoy!
          </h1>
          <p className="heroTag text-[#D9534F] mt-2 lg:mt-4 font-bold text-[1rem] lg:text-[1.5rem] text-center">
            Your Ultimate Meal Hub...
          </p>
        </div>

        {/* FAVOURITES BUTTON */}
        <div className="favBtn lg:w-[30%] mt-4 lg:mt-7 ">
          <ShowFavoritesButton />
        </div>
      </div>

      {/* FEATURES BUTTONS  */}
      <Features />
    </div>
  );
};

export default Home;
