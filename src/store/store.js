import { configureStore } from "@reduxjs/toolkit";
import favMealsReducer from "../slices/favMealSlice";

export const store = configureStore({
  reducer: favMealsReducer,
});
