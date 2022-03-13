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
    color: #302f30;
    text-align: center;
  }
  @media screen and (max-width: 1650px) {
    /* top: 50%; */
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
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  h1 {
    color: white;
    font-size: 6vw;
    font-weight: 900;
    letter-spacing: -0.1vw;
    line-height: 1;
    text-transform: uppercase;
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    margin-top: 20px;
    button {
      all: unset;
      padding: 5px;
      background: rgba(241, 90, 36, 0.5);
      color: var(--bg-light);
      font-size: 1.8vw;
      cursor: pointer;
      :hover {
        color: var(--main-color);
      }
      &.transparent {
        background: transparent;
        a {
          color: inherit;
        }
      }
    }
  }
`;
