import styled from "styled-components";

export const Conatiner = styled.div`
  padding-left: 8vw;
  position: relative;
  height: 100%;
  @media screen and (max-width: 1650px) {
    padding-left: 0 10vw;
  }
  @media screen and (max-width: 450px) {
    padding-left: 0 50px;
  }
`;

Conatiner.Banner = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .left {
    width: 43%;
    .content {
      width: 70%;
      h1 {
        color: #58595b;
        font-size: 42px;
        line-height: 1;
        font-weight: 600;
        margin-bottom: 16px;
      }
      p {
        color: #58595b;
        font-size: 21px;
        margin-bottom: 16px;
      }
    }
  }
  .right {
    top: 0;
    bottom: 0;
    height: 100%;
    background: #151415;
    width: 57%;
    border-radius: 100px 0 0 100px;
    padding: 150px 100px 150px 140px;
    color: #e6e6e6;
    .contents {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px 130px;

      .content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 21px;
        gap: 18px;
        .text{
          margin-top: 45px;
        }
        .number{
          font-size: 75px;
          -webkit-text-stroke: 1px var(--main-color);
          color: transparent;
          font-weight: 900;
          font-style: italic;
        }
      }
    }
  }
`;
