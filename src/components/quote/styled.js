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
    user-select: none;
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
    width: 645px;
    padding: 28px 76px 70px 83px;
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
        box-sizing: border-box;
        padding: 10px 12px;
        font-weight: 500;
        font-size: 14px;
        ::placeholder {
          color: #f2f2f2;
        }
      }
    }

    .validation{
      font-size: 12px;
      list-style-type: disc;
      margin: 5px 0 45px;
    }

    .letters{
      text-align: right;
      margin-top: 7px;
      font-size: 12px;
      font-weight: 600;
    }

    .textarea {
      border: 1px solid white;
      min-height: 58px;
      textarea {
        all: unset;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        resize: vertical;
        background: transparent;
        color: #f2f2f2;
        padding: 10px 12px;
        font-weight: 500;
        font-size: 14px;
        ::placeholder {
          color: #f2f2f2;
        }
      }
    }
    p{
      font-weight: 700;
      font-size: 15px;
      margin-bottom: 5px;
    }

    .btn {
      margin-top: 35px;
      text-align: center;
      button {
        all: unset;
        box-sizing: border-box;
        width: 328px;
        height: 100%;
        background-color: var(--main-color);
        padding: 10px 0 9px;
        text-align: center;
        font-weight: 900;
        cursor: pointer;
      }
    }
    .content {
      text-align: center;
      margin-top: 11px;
      font-size: 11.5px;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 320px;
      }
    }
  }
`;
