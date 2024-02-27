const IngsAndMeasures = ({ ingrAndMeas }) => {
  return (
    //divide-x-2  divide-[#ee9b00]flex  text-center md:text-left
    <div
      className="my-2 lg:my-0 border-2 border-[#ee9b00] p-6 rounded-xl"
      data-aos="flip-right"
    >
      <table className="table-auto w-full text-xs md:text-base ">
        <thead>
          <tr className="underline font-bold text-lg text-[#ee9b00] lg:text-left">
            <th className="pr-3 border-r-2 border-[#ee9b00]">Ingredients</th>
            <th className="pl-4">Measures</th>
          </tr>
        </thead>
        <tbody className="text-center lg:text-left">
          {ingrAndMeas &&
            ingrAndMeas.ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td className="pr-3 border-r-2 border-[#ee9b00]">
                  {ingredient}
                </td>
                <td className="pl-4">{ingrAndMeas.measures[index]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngsAndMeasures;
