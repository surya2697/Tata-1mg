import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: auto;
  border: 1.5px solid var(--border);
  box-sizing: border-box;
  background-color: #ffffff;

  /* * {
    border: 1px solid black;
  } */

  /* Divider */
  .divider {
    margin: 24px 95px;
    height: 2px;
    /* border: 1px solid var(--border); */
    background-color: var(--border);
  }
  .footerP1Con {
    border-bottom: 1.5px solid var(--border);
    height: 264px;

    .heading {
      height: 80px;
      /* border: 1px solid red; */
      box-sizing: border-box;
      /* padding: 24px 0; */
      display: flex;
      align-items: center;
      justify-content: center;
      /* text-align: center; */

      p {
        font-size: 24px;
        color: #1a1a1a;
        line-height: 34px;
      }
    }

    .downloads {
      height: 68px;
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000000;

        .strong {
          font-size: 32px;
          line-height: 45px;
        }

        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }

    .mailToUse {
      height: 64px;
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding-bottom: 24px;
      gap: 20px;

      p {
        font-size: 20px;
        line-height: 22px;
      }
      .emailInput {
        input {
          height: 40px;
          border: 0;
          width: 300px;
          text-indent: 14px;
          background-color: #f6f6f6;
          font-size: 14px;
          line-height: 20px;
          margin-right: 14px;

          /* Chrome, Safari, Edge, Opera */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          &[type="number"] {
            -moz-appearance: textfield;
          }

          &:focus {
            outline: 0;
          }
        }
      }
    }
  }

  /* Color After P2 */

  /* .footerP2Con,
  .footerP3Con {
  } */

  .footerP2Con {
    box-sizing: border-box;
    background-color: #fffcf8;
    //Part - 1
    .links {
      box-sizing: border-box;
      height: 305px;
      padding: 44px 17px;
      /* border: 1px solid red; */

      display: flex;
      justify-content: space-evenly;

      .listContainer {
        p {
          color: #1a1a1a;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 16px;
        }
        ul {
          list-style: none;

          li {
            a {
              text-decoration: none;
              color: #666666;
              font-size: 12px;
              line-height: 22px;
            }
          }
        }
      }

      .connectContainer {
        p {
          color: #1a1a1a;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 16px;
        }
        ul {
          list-style: none;

          li {
            a {
              text-decoration: none;
              font-size: 14px;
              color: #666666;
              /* line-height: 22px; */
            }
          }

          .socials {
            display: flex;
            margin-top: 10px;
            margin-bottom: 5px;
            /* border: 1px solid black; */
            span {
              margin-right: 12px;
              a {
                img {
                  width: 26px;
                }
              }
            }
          }
        }
      }

      .getAppContainer {
        h5 {
          margin-bottom: 16px;
        }
        ul {
          list-style: none;

          .getAppIcons {
            width: 136px;
            padding: 0;
            margin-bottom: 12px;
            /* border: 1px solid black; */
            a {
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }

    //Part - 2
    .footerP3Con {
      /* height: 167px; */
      max-height: 250px;
      border-top: 2px solid var(--border);
      border-bottom: 2px solid var(--border);
      margin: 0px 95px;
      box-sizing: border-box;
      padding: 26px 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .innierDiv {
        /* border: 1px solid black; */
        display: flex;
        width: 528px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        span {
          img {
            width: 98px;
          }
        }
        & > div {
          width: 250px;
          h5 {
            font-size: 26px;
            line-height: 31px;
          }
          p {
            font-size: 12px;
            line-height: 17px;
            color: #767676;
          }
        }
      }
    }

    //Part - 3
    .certificatesCon {
      height: 194px;
      border-bottom: 1.5px solid var(--border);
      display: flex;
      justify-content: center;
      flex-direction: column;
      box-sizing: border-box;
      align-items: center;
      /* flex-wrap: wrap; */
      gap: 20px;
      span {
        img {
          width: 110px;
        }
      }
      p {
        font-size: 16px;
        font-weight: bold;
      }
    }

    //Part - 4
    .subPart4 {
      height: 47px;
      box-sizing: border-box;
      padding: 12px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      h2 {
        font-size: 14px;
        line-height: 20px;
      }
    }

    .perentSubPart4 {
      box-sizing: border-box;
      padding: 12px 30px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 70%;

      & > div {
        h2 {
          font-size: 16px;
          line-height: 22px;
          color: #1a1a1a;
          margin-bottom: 5px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
          color: #666666;
        }
      }
    }

    //Part - 5
    .copytightCon {
      height: 71px;
      box-sizing: border-box;
      padding: 12px 30px;
      border-top: 1.5px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        color: #536971;
      }
      span {
        img {
          width: 157px;
          fill: #fffcf8;
        }
      }
    }
  }
`;
