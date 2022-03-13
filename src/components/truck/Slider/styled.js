import styled from 'styled-components';

export const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SliderTruck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 631px;
  width: 80%;
  .btn {
    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;
    cursor: pointer;
    z-index: 1;
    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Prev = styled.div`
  width: 10%;
  height: 100%;
position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  img {
    user-select: none;
  }
  .params1 {
    width: fit-content;
    color: #58595B;
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    top: 15%;
    left: -65px;
    div {
      text-align: right;
      white-space: nowrap;
      margin-bottom: 7px;
    }
  }
  
`;
export const Slide = styled.div`
width: 60%;
height: 100%;
user-select: none;
img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
`
export const Next = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    user-select: none;

  }
  .params2 {
    position: absolute;
    top: 53%;
    transform: translateY(-50%);
    left: 50px;
    width: fit-content;
    color: #58595B;
    font-size: 24px;
    font-weight: 400;
    z-index: 0;
    div {
      margin-bottom: 7px;
      text-align: right;
      white-space: nowrap;
    }
  }
`;