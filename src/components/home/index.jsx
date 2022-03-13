import React from "react";
import { Conatiner } from "./styled";

const HomePage = ({ action, changeSection}) => {
  return (
    <Conatiner>
      <Conatiner.Watermark>
        <h1>ontime</h1>
        <h1>express</h1>
      </Conatiner.Watermark>
      {!action&&<Conatiner.Banner>
        <div className="content">
          <div className="title">
            <h1>drive</h1>
            <h1>for ontime</h1>
            <h1>express</h1>
          </div>
          <div className="btns">
            <button onClick={() => changeSection('join')}>Driver Applications</button>
            <button className="transparent"><a href="tel: +1(937) 360-8005">Call a Recruiter</a></button>
          </div>
        </div>
      </Conatiner.Banner>}
    </Conatiner>
  );
};

export default React.memo(HomePage);
