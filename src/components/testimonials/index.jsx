import React from "react";
import Slider from "./slider";
import { Conatiner } from "./styled";
import {dataTestimonials} from '../../mock/dataTestimonials'

const TestimonialsPage = ({action}) => {
  return (
    <Conatiner>
      <Conatiner.Watermark>
        <h1>ontime</h1>
        <h1>express</h1>
      </Conatiner.Watermark>
      {!action&&<Conatiner.Banner>
        <div className="container">
          <Slider dataTestimonials={dataTestimonials} />
        </div>
      </Conatiner.Banner>}
    </Conatiner>
  );
};

export default React.memo(TestimonialsPage);
