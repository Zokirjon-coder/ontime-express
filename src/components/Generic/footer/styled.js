import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: ${({ name }) => (name === "policy" ? "150px" : "50px")};
  left: 0;
  right: 0;
  z-index: 5;
  overflow: hidden;
  display: flex;
  @media screen and (max-width: 1440px) {
    bottom: ${({ name }) => (name === "policy" ? "150px" : "10px")};
  }
  .footerContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 100%;
    padding: 0 2%;
    gap: 5%;
    div[id="1"] {
      padding-top: 15px;
    }

    @media screen and (max-width: 1440px) {
      animation: marquee 10s linear infinite;
      img{
          height: 30px;
      }
    }

    @media screen and (max-width: 990px) {
      img{
          height: 25px;
      }
    }
    @media screen and (max-width: 810px) {
        min-width: 810px;
      img{
          height: 20px;
      }
    }
  }

  @keyframes marquee {
    to {
      transform: translate(-100%, 0);
    }
  }
`;