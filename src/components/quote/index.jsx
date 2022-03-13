import React, { useState } from "react";
import { Conatiner } from "./styled";

const QuotePage = ({action}) => {

  const [checkEmail, setCheckEmail] = useState(null);

  const [letter, setLetters] = useState(0);

  const countLetters = (e) => {
    const text = e.target.value;
    const length = text.length;
    setLetters(length);
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkEmailAddress = (e) => {
    const email = e.target.value;
    const result = validateEmail(email);
    setCheckEmail(result);
  }

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
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input">
              <input type="text" required placeholder="Phone number" />
            </div>
            <div className="input">
              <input type="text" placeholder="Email" required onChange={(e) => checkEmailAddress(e)} />
            </div>
            <li className="validation">
              {!checkEmail ? 'Valide email address required' : 'It`s Ok'}
            </li>
            <p>How can we help you?</p>
            <div className="textarea">
              <textarea
                maxLength='1000'
                cols="30"
                placeholder="I was wondering about availability and rates. I need help with the following:"
                required
                minLength='50'
                onChange={(e) => countLetters(e)}>
              </textarea>
            </div>
            <div className="letters">{letter}/1,000</div>

            <div className="btn">
              <button disabled={!checkEmail}
                style={{
                  opacity: !checkEmail ? '0.5' : '1',
                }}
                title={!checkEmail && 'Your Email not valide'}
              >SUBMIT</button>
            </div>
            <div className="content">
              <div>
                Make sure to avoid including any sensitive information you don’t want to
                share with this business
              </div>
            </div>
          </form>
        </div>
      </Conatiner.Banner>}
    </Conatiner>
  );
};

export default React.memo(QuotePage);
