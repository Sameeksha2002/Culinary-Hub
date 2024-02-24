import Features from "../Features";

const Home = () => {
  return (
    <div className="hero flex flex-col mx-5 lg:mx-16 lg:h-[100vh] lg:overflow-hidden ">
      <div className="heroContent mt-[1rem] lg:mt-9">
        <h1 className="heroTitle text-3xl lg:text-6xl ">
          Discover, Cook & Enjoy!
        </h1>
        <p className="heroTag text-[#D9534F] mt-4 font-bold text-[1rem] lg:text-[1.5rem] text-center">
          Your Ultimate Meal Hub...
        </p>
      </div>

      {/* FEATURES BUTTONS  */}
      <Features />
    </div>
  );
};

export default Home;
