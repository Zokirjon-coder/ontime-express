import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 80px 80px 0 0;
  width: 100%;
  position: absolute;
  z-index: 15;
  background: linear-gradient();
  background: linear-gradient(
    to bottom,
    rgba(43, 41, 43, 0.9) 30%,
    rgba(43, 41, 43, 0.7) 70%,
    rgba(21, 20, 21, 1)
  );
  height: ${({ action, type }) =>
    action === "true" && type === "about" ? "calc(100vh - 150px)" : 0};
  overflow: hidden;
  display: grid;
  place-items: center;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1100px;
    color: #fff;
    gap: 50px;
    h1 {
      font-size: 50px;
      font-weight: 800;
      text-transform: uppercase;
    }
    p {
      font-size: 24px;
      font-weight: 400;
    }
    button {
      all: unset;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1500px) {
    .container {
      gap: 30px;
      h1 {
        font-size: 40px;
        font-weight: 800;
        text-transform: uppercase;
      }
      p {
        font-size: 19px;
        font-weight: 400;
      }
      button {
        all: unset;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .container {
      gap: 20px;
      h1 {
        font-size: 30px;
        font-weight: 800;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      p {
        font-size: 15px;
        font-weight: 400;
      }
      button {
        all: unset;
        margin-top: 20px;
        cursor: pointer;
        img{
          height: 30px;
        }
      }
    }
  }
`;