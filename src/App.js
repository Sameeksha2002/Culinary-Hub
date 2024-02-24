import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/View/Home";
import Meal from "./components/View/Meal";
import SearchMeal from "./components/DiscoverMeal/SearchMeal";
import CategoriesCont from "./components/AllCategories/CategoriesCont";
import Category from "./components/View/Category";
import SearchByIngredients from "./components/MealByIngredients/SearchByIngredients";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search-meal" element={<SearchMeal />} />
          <Route path="/meal/:id" element={<Meal />} />
          <Route path="/all-categories" element={<CategoriesCont />} />
          <Route path="/all-categories/:category" element={<Category />} />
          <Route
            path="/search-by-ingredient"
            element={<SearchByIngredients />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
