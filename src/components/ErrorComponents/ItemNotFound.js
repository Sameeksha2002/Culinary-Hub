import errorImg from "../../assets/images/hungryError.jpg";

const ItemNotFound = ({ message }) => {
  return (
    <div className="cardCont bg-white flex flex-col md:flex-row rounded-b-full md:rounded-full mt-5 w-[80%] pb-12 pt-5 md:py-0  mx-auto md:justify-center ">
      {/* ERROR IMAGE */}
      <img
        src={errorImg}
        alt=""
        className="mx-auto rounded-b-full w-[100%] md:mx-0 md:max-w-[40%] md:rounded-none md:rounded-l-3xl "
      />

      {/* ERROR MESSAGE  */}
      <div className="errorMessage md:w-[30%] flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:mb-2 lg:text-[3rem] font-semibold tracking-wide text-[#D9534F]">
          Sorry!
        </h1>
        <h3 className="md:text-xs lg:text-base">{message}</h3>
      </div>
    </div>
  );
};

export default ItemNotFound;
