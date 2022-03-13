import React from "react";
import { Conatiner, Prev, Slide, Next, SliderTruck } from "./styled";
import arrowLeft from "../../../assets/icons/Path 51.svg";
import arrowRight from "../../../assets/icons/Path 52.svg";

const Slider = ({ slides }) => {
  const [activeSlideId, setActiveSlideId] = React.useState(0);

  const slideCheck = (index) => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      return lastIndex;
    }
    if (index > lastIndex) {
      return 0;
    }
    return index;
  };

  const onChangeSlide = (change) => {
    let slideNum = activeSlideId;
    if (change === "next") {
      slideNum++;
    } else {
      slideNum--;
    }
    setActiveSlideId(slideCheck(slideNum));
  };

  return (
    <Conatiner>
      <SliderTruck>
        <Prev>
          <div className="params1">
            {slides[activeSlideId].param1.map(({ id, param }) => (
              <div key={id}>{param}</div>
            ))}
          </div>
          <div className="btn privBtn" onClick={() => onChangeSlide("priv")}>
            <img src={arrowLeft} alt="prev" />
          </div>
        </Prev>
        <Slide>
          <img src={slides[activeSlideId].image} alt="truck" />
        </Slide>
        <Next>
          <div className="btn nextBtn" onClick={() => onChangeSlide("next")}>
            <img src={arrowRight} alt="next" />
          </div>
          <div className="params2">
            {slides[activeSlideId].param2.map(({ id, param }) => (
              <div key={id}>{param}</div>
            ))}
          </div>
        </Next>
      </SliderTruck>
    </Conatiner>
  );
};

export default Slider;
