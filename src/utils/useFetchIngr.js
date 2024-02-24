const useFetchIngr = (props) => {
  let meal = props;
  let ingrAndMeas = {
    ingredients: [],
    measures: [],
  };

  for (const key in meal) {
    if (
      key.startsWith("strIngredient") &&
      meal[key] !== "" &&
      meal[key] !== null
    ) {
      ingrAndMeas.ingredients.push(meal[key]);
    }

    if (
      key.startsWith("strMeasure") &&
      meal[key] !== "" &&
      meal[key] !== null
    ) {
      ingrAndMeas.measures.push(meal[key]);
    }
  }

  return { ingrAndMeas };
};

export default useFetchIngr;
