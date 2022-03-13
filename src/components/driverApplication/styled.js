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
  top: -40px;
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
  z-index: 2;
  display: grid;
  place-items: center;

  .form {
    width: 420px;
    padding: 56px 38px 56px 49px;
    background: rgba(29, 27, 27, 0.5);
    border-radius: 30px;
    font-family: "Poppins", sans-serif;
    color: #f2f2f2;

    .title {
      text-align: center;
      text-transform: uppercase;
      h1 {
        font-size: 22px;
        color: #f2f2f2;
        font-weight: 500;
        b {
          font-weight: 700;
        }
      }
    }

    .input {
      margin: 18px 0;
      border: 1px solid white;
      input {
        all: unset;
        background: transparent;
        color: #f2f2f2;
        width: 100%;
        height: 100%;
        padding: 10px 12px;
        font-weight: 500;
        font-size: 14px;
        ::placeholder {
          color: #f2f2f2;
        }
      }
    }
    .checkbox {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      input {
        appearance: none;
        width: 22px;
        height: 22px;
        border: 1px solid white;
        border-radius: 5px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #f2f2f2;
          width: 13px;
          height: 13px;
          border-radius: 2px;
          opacity: 0;
          transition: .5s;
        }
         &:checked::before{
           opacity: 1;
         }
      }
      label {
        font-size: 16px;
        cursor: pointer;
      }
    }

    .btn{
      margin-top: 13px;
      button{
        all: unset;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: var(--main-color);
        padding: 10px 0 9px;
        text-align: center;
        cursor: pointer;
      }
    }
    .policy{
      margin-top: 8px;
      font-size: 11.5px;
a{
  color: inherit;
}
    }
  }
`;
