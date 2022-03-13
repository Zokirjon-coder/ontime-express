import React, { useState, useRef, useEffect } from "react";
import { Conatiner, Next, Prev, Slide, Slides } from "./styled";
import arrowLeft from "../../../assets/icons/Path 51.svg";
import arrowRight from "../../../assets/icons/Path 52.svg";

const Slider = ({ dataTestimonials }) => {
  const [data, setData] = useState([1, 2]);
  const slide = useRef(null)
  const line = useRef(null)
  useEffect(() => {
    line.current.classList.add('animate')
    setTimeout(() => {
      line.current.classList.remove('animate')
    }, 500);
  }, [data])
  const onChangeSlider = (type) => {
    if (type === 'next') {
      if (data[1] < dataTestimonials.length) {
        setData([++data[0], ++data[1]])
      }
    } else {
      if (data[0] > 1) {
        setData([--data[0], --data[1]])
      }
    }
    return
  }

  const innerSlide = (image, name, position, text) => <>
    <div className="header">
      <div className="avatar">
        <img src={image} alt="avatar" />
      </div>
      <div className="user_info">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
      </div>
    </div>
    <div className="text">{text}</div>
  </>

  return (
    <Conatiner>
      <Prev>
        <div className="btn" onClick={() => onChangeSlider('prev')}>
          <img src={arrowLeft} alt="preview" />
        </div>
      </Prev>
      <Slides>
        {dataTestimonials.map(({ id, name, image, position, testimonial: text }) => {
          if (data.includes(id)) return <Slide layout active={'true'} ref={slide} key={id}>
            {innerSlide(image, name, position, text)}
          </Slide>
          return <Slide layout active={'false'} ref={slide} key={id}></Slide>
        })}
        <div className="lines">
          <div className="line line-hr"></div>
          <div className="text">
            trused by
            <div ref={line} className="line line-vr"></div>
          </div>
          <div className="line line-hr"></div>
        </div>
      </Slides>
      <Next>
        <div className="btn" onClick={() => onChangeSlider('next')}>
          <img src={arrowRight} alt="next" />
        </div>
      </Next>
    </Conatiner>
  );
};

export default React.memo(Slider);
