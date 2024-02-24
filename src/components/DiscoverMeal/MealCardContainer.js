import { Carousel } from "@material-tailwind/react";
import MealCard from "./MealCard";
import { isMobile } from "react-device-detect";


const MealCardContainer = (props) => {
  console.log("container: ", props.children[1], isMobile);
  return (
    <div className="carousel">
      {isMobile ? (
        <div className="flex flex-wrap gap-3">{props.children[1].map((i, idx) => (
              <MealCard meal={i} key={idx} />
            ))} </div>
      ) : (
        <Carousel className="rounded-xl">
          {props.children[1].map((i, idx) => (
            <MealCard meal={i} key={idx} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MealCardContainer;
