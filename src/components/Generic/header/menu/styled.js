import styled from "styled-components";

export const Container = styled.div`
  a {
    all: unset;
    :hover {
      color: var(--main-color);
    }
  }

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
    action === "true" && type === "menu" ? "calc(100vh - 150px)" : 0};
  overflow: hidden;
  display: grid;
  place-items: center;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1100px;
    width: 100%;
    color: #fff;
    gap: 50px;
    font-size: 22px;
    button {
      all: unset;
      cursor: pointer;
    }

    .menus {
      margin-top: 80px;
      margin-bottom: 180px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;
      .menu1 {
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
        .menu_item {
          cursor: pointer;
          white-space: nowrap;
          :hover {
            color: var(--main-color);
          }
        }
      }
      .flex {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 7px;
        font-size: 20px;
        span {
          cursor: auto;
        }
        a {
          all: unset;
          cursor: pointer;
          &.email {
            margin-top: -5px;
            color: var(--main-color);
          }
        }
      }
      .contact {
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .container {
      font-size: 20px;
      .menus {
        margin-top: 40px;
        margin-bottom: 90px;
        .menu1 {
          gap: 10px;
        }
        .flex {
          gap: 5px;
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .container {
      font-size: 18px;
      .menus {
        margin-top: 20px;
        margin-bottom: 40px;
        .menu1 {
          gap: 7px;
        }
        .flex {
          gap: 5px;
          font-size: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .container {
      font-size: 15px;
      img {
        height: 25px;
      }
      .menus {
        margin-top: 15px;
        margin-bottom: 35px;
        .menu1 {
          gap: 5px;
        }
        .flex {
          gap: 2px;
          font-size: 13px;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      font-size: 13px;
      img {
        height: 20px;
      }
      .menus {
        margin-top: 10px;
        margin-bottom: 30px;
        .menu1 {
          gap: 5px;
        }
        .flex {
          gap: 2px;
          font-size: 11px;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    .container {
      font-size: 12px;
      img {
        height: 20px;
      }
      .menus {
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
        justify-content: space-between;
        row-gap: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        .menu1 {
          gap: 5px;
        }
        .flex {
          gap: 2px;
          font-size: 10px;
        }
      }
    }
  }
`;
