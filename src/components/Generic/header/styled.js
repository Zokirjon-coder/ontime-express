import styled from "styled-components";

export const Container = styled.div`
  user-select: none;
  padding-bottom: 50px;
  .container {
    padding: 78px 109px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  transition: 0;
  a {
    text-decoration: none;
  }
  .logo {
    cursor: pointer;
    img {
      height: 45.55px;
    }
  }
  .menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .item {
      display: flex;
      align-items: center;
      gap: 7px;
      cursor: pointer;

      .menuLogo img {
        height: 16px;
      }
      .menuName {
        transition: 0;
        white-space: nowrap;
        transition-delay: 0;
        color: ${({ color }) =>
          color === "var(--bg-dark)" ? "white" : "black"};
        color: ${({ name }) =>
          name === "ontime"
            ? "white"
            : ({ color }) => (color === "var(--bg-dark)" ? "white" : "black")};

        font-size: 18px;
        font-weight: bold;
        &.firstmenu {
          color: ${({ name, action }) =>
            name === "ontime" && !(action === "true")
              ? "black"
              : ({ color }) =>
                  color === "var(--bg-dark)" ? "white" : "black"};
        }
      }
    }
  }
  .contact {
    display: flex;
    gap: 7px;
    align-items: center;
    .link img {
      height: 18px;
      cursor: pointer;
      :hover {
        filter: brightness(1.2);
      }
    }
  }

  @media screen and (max-width: 1650px) {
    padding-bottom: 25px;
    .container {
      padding: 53px 80px 28px;
      .logo img {
        height: 30px;
      }
      .menu {
        gap: 30px;
        .menuName {
          font-size: 17px;
        }
      }
    }
  }
  @media screen and (max-width: 1450px) {
    padding-bottom: 25px;
    .container {
      padding: 53px 80px 28px;
      .logo img {
        height: 28px;
      }
      .menu {
        gap: 30px;
        .menuName {
          font-size: 14px;
        }
      }
      .link img {
        height: 15px;
      }
    }
  }
  @media screen and (max-width: 1350px) {
    padding-bottom: 20px;
    .container {
      padding: 45px 60px 25px;
      .logo img {
        height: 30px;
      }
      .menu {
        gap: 30px;
      }
    }
  }

  @media screen and (max-width: 1050px) {
    padding-bottom: 20px;
    .container {
      padding: 38px 50px 18px;
      .logo img {
        height: 30px;
      }
      .menu {
        gap: 30px;
        .menuName {
          font-size: 13px;
        }
      }
    }
  }
  @media screen and (max-width: 930px) {
    padding-bottom: 20px;
    .container {
      padding: 38px 50px 18px;
      .logo img {
        height: 30px;
      }
      .menu {
        gap: 30px;
        .item {
          position: relative;
          padding: 15px 0;
          :hover .menuName {
            display: block;
            opacity: 1;
            top: 45px;
          }
        }
        .menuName {
          display: none;
          opacity: 0;
          position: absolute;
          font-size: 15px;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px 15px;
          border-radius: 5px;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    padding-bottom: 10px;
    .container {
      padding: 18px 20px 8px;
      .logo img {
        height: 20px;
      }
      .menu {
        .menuLogo img {
          height: 13px;
        }
      }
      .link img {
        height: 13px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 10px;
    .container {
      padding: 18px 20px 8px;
      .menu {
        .item {
          display: none;
          &.humburgerMenu {
            display: block;
          }
        }
      }
      .link img {
        height: 13px;
      }
    }
  }
`;
