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
  top: 50%;
  transform: translateY(-50%);
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
  top: 45%;
  transform: translateY(-50%);
  z-index: 2;
  display: grid;
  place-items: center;

  h2 {
    font-size: 2vw;
    text-transform: uppercase;
    margin-bottom: 45px;
    color: #333333;
    white-space: nowrap;
  }

  @media screen and (max-width: 1500px) {
    h2 {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 1400px) {
    h2 {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 900px) {
    h2 {
      font-size: 2.5vw;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size:  15px;
    }
  }

  .content {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 5vw;

    .collapse {
      min-width: 50%;
      flex-shrink: 1;
    }
    .lists {
      width: 50%;
      white-space: nowrap;
      h2 {
        position: relative;
        font-size: 24px;
        font-weight: 700;
        color: #4d4d4d;
        margin-bottom: 12px;
        span {
          position: absolute;
          left: -30px;
          width: 35px;
          height: 35px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
        }
      }
      .ul {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        gap: 7px;
        margin-bottom: 15px;
        font-weight: 500;
        font-size: 18px;
        color: #58595b;
        .li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 24px;
          &::before {
            content: "";
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: radial-gradient(#26191c 3.5px, #d1d0d0 4.5px);
          }
        }
      }
      .btn .outline {
        all: unset;
        width: 60%;
        border: 3px solid #f15a24;
        text-align: center;
        padding: 10px;
        font-size: 24px;
        font-weight: 700;
        color: #f15a24;
        border-radius: 5px;
        cursor: pointer;
        :hover {
          background: #f15a24;
          color: #d1d0d0;
          font-weight: 500;
        }
      }
    }

    @media screen and (max-width: 2000px) {
      .lists {
        width: 50%;
        h2 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          span {
            left: -30px;
            width: 35px;
            height: 35px;
          }
        }
        .ul {
          gap: 5px;
          margin-bottom: 15px;
          font-weight: 500;
          font-size: 17px;
          .li {
            gap: 15px;
            &::before {
              width: 26px;
              height: 26px;
            }
          }
        }

        .btn .outline {
          width: 60%;
          border: 3px solid #f15a24;
          padding: 8px;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
    @media screen and (max-width: 1700px) {
      .lists {
        width: 50%;
        h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          span {
            left: -30px;
            width: 35px;
            height: 35px;
          }
        }
        .ul {
          gap: 3px;
          margin-bottom: 10px;
          font-weight: 500;
          font-size: 15px;
          .li {
            gap: 13px;
            &::before {
              width: 22px;
              height: 22px;
              background: radial-gradient(#26191c 2.5px, #d1d0d0 3.5px);
            }
          }
        }

        .btn .outline {
          width: 60%;
          border: 3px solid #f15a24;
          padding: 6px;
          font-size: 15px;
          font-weight: 700;
        }
      }
    }
    @media screen and (max-width: 1500px) {
      .lists {
        width: 50%;
        h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          span {
            left: -20px;
            width: 35px;
            height: 35px;
          }
        }
        .ul {
          gap: 2px;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 13px;
          .li {
            gap: 10px;
            &::before {
              width: 18px;
              height: 18px;
              background: radial-gradient(#26191c 2.5px, #d1d0d0 3.5px);
            }
          }
        }

        .btn .outline {
          width: 60%;
          border: 3px solid #f15a24;
          padding: 6px;
          font-size: 13px;
          font-weight: 700;
        }
      }
    }
    @media screen and (max-width: 1024px) {
      .lists {
        width: 50%;
        flex-shrink: 1;
        h2 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 5px;
          span {
            left: -15px;
            width: 35px;
            height: 35px;
            img {
              height: 10px;
            }
          }
        }
        .ul {
          gap: 2px;
          margin-bottom: 5px;
          font-weight: 500;
          font-size: 11px;
          .li {
            gap: 10px;
            &::before {
              width: 13px;
              height: 13px;
              background: radial-gradient(#26191c 1.5px, #d1d0d0 2.5px);
            }
          }
        }

        .btn .outline {
          width: 50%;
          border: 2px solid #f15a24;
          padding: 5px;
          font-size: 13px;
          font-weight: 700;
        }
      }
    }
    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
      justify-content: flex-start;
      .collapse, .lists{
        width: 100%;
      }
    }
  }
`;
