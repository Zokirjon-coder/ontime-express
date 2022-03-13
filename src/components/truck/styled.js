import styled from "styled-components";

export const Conatiner = styled.div`
  padding: 0 8vw;
  position: relative;
  @media screen and (max-width: 1650px) {
    padding: 0 10vw;
  }
  @media screen and (max-width: 450px) {
    padding: 0 50px;
  }
`;

Conatiner.Watermark = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
  h1 {
    font-size: 18.5vw;
    line-height: 0.9;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -0.2vw;
    user-select: none;
    color: rgba(204, 204, 204, 0.3);
  }
  @media screen and (max-width: 1650px) {
    h1 {
      line-height: 1;
    }
  }
  @media screen and (max-width: 850px) {
    top: 50%;
    h1 {
      line-height: 1.2;
    }
  }
`;

Conatiner.Banner = styled.div`
  position: relative;
  z-index: 2;

  top: 50%;
  transform: translateY(-50%);

  h1 {
    font-size: 50px;
    text-transform: uppercase;
    color: #58595b;
    text-align: center;
  }
`;
