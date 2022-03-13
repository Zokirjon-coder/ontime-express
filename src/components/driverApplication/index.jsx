import React from "react";
import { Conatiner } from "./styled";

const ApplicationPage = ({action}) => {
  return (
    <Conatiner>
      <Conatiner.Watermark>
        <h1>ontime</h1>
        <h1>express</h1>
      </Conatiner.Watermark>
      {!action&&<Conatiner.Banner>
        <div className="form">
          <form action="">
            <div className="title">
              <h1>submit on yourapplication</h1>
              <h1>to join <b>ontime team</b></h1>
            </div>
            <div className="input">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input">
              <input type="text" placeholder="Lasst Name" />
            </div>
            <div className="input">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input">
              <input type="text" placeholder="Zip" />
            </div>
            <div className="input">
              <input type="text" placeholder="Cell Phone" />
            </div>
            <div className="input">
              <input type="text" placeholder="Job Position" />
            </div>
            <div className="input">
              <input type="text" placeholder="CDL-A experience" />
            </div>
            <div className="input">
              <input type="text" placeholder="Company name" />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">Let ONTIME contact you by phone or email</label>
            </div>
            <div className="btn">
              <button>APPLY NOW</button>
            </div>
            <div className="policy">
              By pushing the button, you agree to our <a href="#">Data Use Policy and our
                Terms and Conditions.</a>
            </div>
          </form>
        </div>
      </Conatiner.Banner>}
    </Conatiner>
  );
};

export default React.memo(ApplicationPage);
