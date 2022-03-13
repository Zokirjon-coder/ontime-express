import styled from 'styled-components';

export const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #58595b;
`;

export const Collap = styled.div`
  width: 100%;
  padding: 32px 0;
  border-bottom: 1px solid #58595b;
  cursor: pointer;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      /* white-space: nowrap; */
      .arrow img {
        transform: ${({ active }) =>
          active ? "rotate(90deg)" : "rotate(0deg)"};
        transition: 0.5s;
      }
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      color: var(--bg-dark);
      font-size: 24px;
      color: #4d4d4d;
      text-transform: uppercase;
      font-weight: normal;
    }

    .btn {
      cursor: pointer;
      transition: 0.5s;
      color: var(--main-color);
      font-size: 2vw;
      font-weight: 300;
      padding: 0 10px;
      display: flex;
      user-select: none;
    }
  }
  .body {
    overflow: hidden;
    font-size: 16px;
    color: #4d4d4d;
    font-weight: 300;
    transition: ${({ active }) => (active ? ".5s" : ".2s")};
    height: ${({ active }) => (active ? "50px" : 0)};
    padding: ${({ active }) => (active ? "10px 30px 0" : 0)};
    cursor: text;
    overflow-y: scroll;
  }

  @media screen and (max-width: 2000px) {
    padding: 22px 0;
  }
  @media screen and (max-width: 1700px) {
    padding: 15px 0;
    .header {
      .title {
        .arrow img {
          height: 15px;
        }
        gap: 20px;
        font-size: 20px;
      }
    }
    .body {
      font-size: 16px;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 1500px) {
    padding: 10px 0;
    .header {
      .title {
        .arrow img {
          height: 15px;
        }
        gap: 15px;
        font-size: 15px;
      }
    }
    .body {
      font-size: 12px;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 8px 0;
    .header {
      .title {
        .arrow img {
          height: 12px;
        }
        gap: 15px;
        font-size: 14px;
      }
    }
    .body {
      font-size: 11px;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 900px) {
    padding: 8px 0;
    .header {
      .title {
        .arrow img {
          height: 11px;
        }
        gap: 15px;
        font-size: 13px;
      }
    }
    .body {
      font-size: 10px;
      font-weight: 300;
    }
  }
  
`;