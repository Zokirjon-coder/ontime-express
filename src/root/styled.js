import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Navigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;
  opacity: ${({ action }) => (action === "true" ? ".1" : "1")};
  .quote {
    ${({ action }) => (action !== "true" ? "cursor: pointer" : "")};
    position: absolute;
    bottom: 80px;
    right: 80px;
    pointer-events: all;
  }
`;

Navigation.Buttons = styled.div`
  position: absolute;
  left: 4vw;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  span {
    ${({ action }) => (!action === "true" ? "cursor: pointer" : "")};
    pointer-events: all;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: relative;
    border: 2px solid black;
    background: var(--bg-light);
  }
`;

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  position: relative;
  background: ${({ bg }) => bg};
  ${({ secName }) => (secName === "ontime" ? "background: white" : null)};
  background: ${({ action, bg }) => (action === "true" ? bg : null)};
  display: grid;
  grid-template-rows: ${({ secName }) =>
    secName === "ontime" ? "null" : "200px 1fr 150px"};

  > div.header {
    transition: 1s;
    ${({ secName }) =>
      secName === "ontime"
        ? "position: absolute; top: 0; left: 0; right: 0"
        : null};
    z-index: 2;
    opacity: ${({ weiwed }) => (weiwed ? "1" : "0")};
    span {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1700px) {
    grid-template-rows: ${({ secName }) =>
      secName === "ontime" ? "null" : "140px 1fr 100px"};
  }
  @media screen and (max-width: 1400px) {
    grid-template-rows: ${({ secName }) =>
      secName === "ontime" ? "null" : "100px 1fr 80px"};
  }
`;
