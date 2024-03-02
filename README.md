# Culinary Hub

Culinary Hub is a web application designed to explore a variety of meals with features such as searching for meals, filtering by ingredients, selecting meals by category and efficiently storing favorite meals.

## Features

### 1. Search Any Meal

Utilize the search functionality to find information about a specific meal. Enter the name of the meal you're looking for, and the app will provide details about it.

### 2. Search by Ingredients

Explore meals based on the ingredients you have on hand. Input the ingredients you want to use, and the app will display a variety of recipes that match your criteria.

### 3. Meal by Category

Categorize and discover meals based on different categories. Choose a category such as "Breakfast," "Lunch," or "Dessert," and explore a curated selection of meals within that category.

### 4. Store Favorite Meals

Save your favorite meals with a simple click on the heart icon. Now users can effortlessly store and manage their preferred meals.

## Technical Details

- This project was bootstrapped with [Create React App (CRA)](https://create-react-app.dev/).
- It utilizes the public API provided by [The Meal DB](https://www.themealdb.com/api.php) to fetch meal data.
- Styling is done using [Tailwind CSS](https://tailwindcss.com/) and [Material Tailwind](https://material-tailwind.com/).
- Animations are integrated using [AOS library](https://michalsnik.github.io/aos/).
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management, making favorites storage seamless.

## Running the App

To run the app locally, use the following command:

### `npm run start`

This will start the development server, and you can access the app at [http://localhost:3000] in your browser.

## Dependencies

This project relies on the following external libraries:

- [Axios](https://axios-http.com/): Axios is used for making HTTP requests in a simple and efficient manner.

- [Redux Toolkit](https://redux-toolkit.js.org/) : A package for efficient state management in React applications.

- [React Router DOM](https://reactrouter.com/): React Router DOM is utilized for navigation within the React application, enabling a seamless user experience.

- [React Device Detect](https://www.npmjs.com/package/react-device-detect): React Device Detect is employed to detect the device type, allowing for optimized rendering based on the user's device.

- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS provides a utility-first CSS framework, streamlining the styling process and enhancing the overall design of the application.

- [Material Tailwind](https://material-tailwind.com/): Material Tailwind offers Material Design components for Tailwind CSS, enhancing the visual appeal and user interface of the application.

- [AOS library](https://michalsnik.github.io/aos/): AOS (Animate On Scroll) library adds scroll-triggered animations to elements on a web page, enhancing user experience by animating elements as they come into view during scrolling.
