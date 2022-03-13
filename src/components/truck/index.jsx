import React from "react";
import { Conatiner } from "./styled";
import Slider from "./Slider";
import { dataSlider } from "../../mock/dataSlider";


const TruckPage = ({ action}) => {
  return (
    <Conatiner>
      <Conatiner.Watermark>
        <h1>ontime</h1>
        <h1>express</h1>
      </Conatiner.Watermark>
      {!action&&<Conatiner.Banner>
        <h1>Our trucks</h1>
        <Slider slides={dataSlider} />
      </Conatiner.Banner>}
    </Conatiner>
  );
};

export default React.memo(TruckPage);