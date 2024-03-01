import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favMeals: [],
};

export const favMealSlice = createSlice({
  name: "favMeal",
  initialState,
  reducers: {
    addMeal: (state, action) => {
      state.favMeals.push(action.payload);
    },
    removeMeal: (state, action) => {
      state.favMeals = state.favMeals.filter(
        (favMeal) => favMeal.idMeal !== action.payload
      );
    },
  },
});

export const { addMeal, removeMeal } = favMealSlice.actions;

export default favMealSlice.reducer;
