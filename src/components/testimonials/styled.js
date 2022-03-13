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
  top: -25px;
  z-index: 1;
  pointer-events: none;
  h1 {
    font-size: 18.5vw;
    line-height: 0.9;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -0.2vw;
    color: rgba(204, 204, 204, 0.3);
  }
`;

Conatiner.Banner = styled.div`
  position: relative;
  height: 100%;
  z-index: 2;
  display: grid;
  place-items: center;

  .container {
    width: 100%;
    height: 100%;
    border-radius: 50px 50px 0 0;
    background: linear-gradient(
      to bottom,
      rgba(43, 41, 43, .9) 30%,
      rgba(43, 41, 43, .7) 70%,
      rgba(21, 20, 21, 1)
    );
  }
`;