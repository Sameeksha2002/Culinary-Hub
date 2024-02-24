import SearchMealInput from "../SearchMealInput";

const SearchByIngredients = () => {

    let baseurl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

    return ( 
        <div className="ingPage bg-[#036977] min-h-[100vh] md:h-[100vh]  md:overflow-hidden">
            <div className="ingrHeading text-2xl text-[#eaa44f] py-6 font-gideon font-bold tracking-wide text-center md:text-5xl">
                Search by Ingredients
            </div>

            <div className="inputCont w-[80%] md:w-[60%]  mx-auto pb-6">
                <SearchMealInput baseurl={baseurl} plcText="milk, bread, cheese...." />
            </div>
        </div>
     );
}
 
export default SearchByIngredients;