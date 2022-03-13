import styled from "styled-components";
import { motion } from "framer-motion";

export const Conatiner = styled.div`
  padding: 100px 80px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;
    user-select: none;
    cursor: pointer;
    :hover {
      background: rgba(255, 255, 225, 0.2);
    }
  }
`;

export const Prev = styled.div`
  flex-basis: 50px;
  height: 100%;
  display: grid;
  place-items: center;
`;
export const Slides = styled.div`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  .lines {
    width: 100%;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .text {
      align-items: center;
      text-transform: uppercase;
      font-size: 21px;
      font-weight: 900;
      color: var(--main-color);
      position: relative;
    }
    .line-hr {
      height: 3px;
      flex: 1;
    }

    .line-vr {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scaleY(1);
      width: 3px;
      height: 300px;
      bottom: 50px;
      transition: transform 0.5s;
      transform-origin: bottom;
    }

    .animate.line-vr {
      transform: translateX(-50%) scaleY(0);
      transition: transform 0.05s;
    }

    .line {
      background-color: #3d4452;
    }
  }
`;

export const Next = styled.div`
  flex-basis: 50px;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const Slide = styled(motion.div)`
  min-width: ${({ active }) => (active === "true" ? "50%" : 0)};
  padding: ${({ active }) => (active === "true" ? "50px" : 0)};
  min-height: 450px;
  color: #f4f4f4;
  font-size: 35px;
  overflow: hidden;
  height: auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid #707070;
      img {
        width: 100%;
        border-radius: 50%;
        height: 100%;
        object-fit: cover;
      }
    }
    .name {
      font-size: 25px;
      font-weight: 700;
    }
    .position {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .text {
    margin-top: 30px;
    font-size: 29px;
    font-style: italic;
    font-weight: 200;
    max-width: 500px;
    width: 100%;
  }
`;
