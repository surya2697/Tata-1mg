import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  background-color: #ffffff;
  //Part - 1
  /* * {
    border: 1px solid black;
  } */
  .header_1Con {
    height: 48px;
    box-sizing: border-box;
    padding: 5px 0px;
    border-bottom: 1.5px solid var(--border);
    display: flex;

    & > div {
      /* border: 1px solid var(--border); */
    }

    //First div
    .firstPart {
      width: 65rem;
      box-sizing: border-box;
      display: flex;

      .logoCon {
        /* border: 1px solid red; */
        width: 18%;
        display: flex;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        /* padding: 15px; */

        img {
          height: 36px;
          width: 118px;
        }
      }
      .tabList {
        list-style: none;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        line-height: 16px;
        /* border: 1px solid red; */
        /* width: 100%; */
        gap: 20px;

        li {
          display: flex;
          align-items: center;

          a {
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            color: black;
          }

          .badge {
            /* display: flex;
            align-items: center; */
            background-color: #ff6f61;
            color: white;
            font-size: 11px;
            padding: 2px 4px;
            margin-left: 2px;
            border-radius: 1px;
            font-weight: bold;
          }

          &:hover {
            a {
              color: #ff6f61;
            }
          }
        }
      }
    }
    .secondPart {
      /* width: 37.5rem; */
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .list {
        width: auto;
        padding: 0 25px;
        list-style: none;
        line-height: 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
        font-weight: 500;
        gap: 30px;
        li {
          a {
            color: #212121;
            text-decoration: none;
          }
        }
      }
    }
  }

  //Part  - 2
  .header_2Con {
    height: 46px;
    border-bottom: 1.5px solid var(--border);
    box-sizing: border-box;
    width: 100%;
    padding: 6px 0;
    display: flex;
    & > div {
    }

    //First part
    .firstCon {
      width: 65%;
      display: flex;
      justify-content: center;

      //Con
      .container {
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        //Loaction Con
        .locationCon {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 280px;
          background-color: #f1f4f6;

          span {
            height: 100%;
            display: flex;
            width: 20px;
            align-items: center;
            font-size: 14px;
            color: #666666;
          }
          input {
            font-size: 16px;
            line-height: 22px;
            width: 210px;
            height: 94%;
            text-indent: 10px;
            font-weight: bold;
            background-color: inherit;
            border: 0;
            &:focus {
              outline: 0;
            }
          }
        }

        //Searchbar
        .searchbarCon {
          box-sizing: border-box;
          padding: 0 5px;
          margin-left: 5px;
          max-width: 80%;
          width: 825px;
          height: 100%;
          display: flex;
          align-items: center;
          /* border: 1px solid red; */
          background-color: #f1f4f6;
          input {
            flex-grow: 1;
            height: 94%;
            font-size: 14px;
            line-height: 21px;
            text-indent: 10px;
            color: #3e3e3e;
            background-color: inherit;
            border: 0;

            &:focus {
              outline: none;
            }
          }
          span {
            width: 20px;
            height: 100%;
            color: #666666;
            display: flex;
            align-items: center;
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }

    //Second Part
    .secondCon {
      width: 35%;
      height: 100%;
      padding: 0 20px;
      /* background-color: blue; */
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .container {
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        height: 100%;
        /* width: 450px; */
        max-width: 450px;
        /* flex-wrap: wrap; */

        p {
          margin-right: 15px;
          color: #212121;
          font-size: 14px;
        }
        span {
          height: 100%;
          width: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
          }
        }
      }
    }
  }

  //Part - 3
  .header_3Con {
    height: 36px;
    border-bottom: 1.5px solid var(--border);
    box-sizing: border-box;

    /* padding: 3px 6px; */
    .list {
      height: 100%;

      display: flex;
      align-items: center;
      /* max-width: 85%; */
      gap: 30px;
      margin: auto;
      justify-content: center;
      /* border: 1px solid red; */
      list-style: none;
      li {
        /* border: 1px solid red; */
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        a {
          font-size: 14px;
          color: #212121;

          text-decoration: none;
        }

        &:hover {
          .link {
            color: var(--hoverTextColor);
          }
        }
        span {
          height: 100%;
          padding: 0 2px;
          display: flex;
          align-items: center;
        }

        //submenu hidden
        //left
        .subMenu_left {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: 100%;

          height: auto;
          background-color: #ffffff;
          width: auto;
          display: flex;
          gap: 20px;
          padding: 15px;
          border-radius: 0 0 3px 3px;
          z-index: 10;
          box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);

          .vLine {
            border-left: 1px solid var(--border);
          }
          & > div {
            width: auto;

            ul {
              /* width: auto; */
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 160px;
              margin-bottom: 10px;

              li {
                line-height: 20px;
                a {
                  strong {
                    font-size: 13px;
                    color: #212121;
                  }

                  font-size: 13px;
                  color: #757575;
                }

                &:hover {
                  a {
                    strong {
                      color: var(--hoverTextColor);
                    }
                    color: var(--hoverTextColor);
                  }
                }
              }
            }
          }
        }

        //right
        .subMenu_right {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: 100%;
          right: 0;
          height: auto;
          background-color: #ffffff;
          width: auto;
          display: flex;
          gap: 20px;
          padding: 15px;
          border-radius: 0 0 3px 3px;
          z-index: 10;
          box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);

          .vLine {
            border-left: 1px solid var(--border);
          }
          & > div {
            width: auto;

            ul {
              /* width: auto; */
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 160px;
              margin-bottom: 10px;

              li {
                line-height: 20px;
                a {
                  strong {
                    font-size: 13px;
                    color: #212121;
                  }

                  font-size: 13px;
                  color: #757575;
                }

                &:hover {
                  a {
                    strong {
                      color: var(--hoverTextColor);
                    }
                    color: var(--hoverTextColor);
                  }
                }
              }
            }
          }
        }

        //on hover perent
        &:hover {
          .subMenu_left {
            visibility: visible;
            opacity: 1;
          }

          .subMenu_right {
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
  }

  //Media queries
  @media (max-width: 1500px) {
    //Part - 1
    .header_1Con {
      //First div
      .firstPart {
        width: 60rem;

        //Logo
        .logoCon {
          width: 12%;

          img {
            width: 90px;
          }
        }
      }
    }

    .header_3Con {
      .list {
        /* height: 36px; */
        gap: 20px;
      }
    }
  }

  @media (max-width: 1380px) {
    .header_3Con {
      padding: 3px 0;
      height: auto;
      .list {
        /* justify-content: space-between; */
        /* gap: 5px; */
        flex-wrap: wrap;
        /* border-bottom: 1px solid red; */
      }
    }
  }

  @media (max-width: 1320px) {
    //Part - 1

    .header_1Con {
      //First div
      //Second part
      .secondPart {
        justify-content: center;
        .list {
          padding: 0;
          gap: 15px;
          li {
            /* border: 1px solid red; */
          }
        }
      }
    }
  }
`;

export const HiddenHead = styled.div`
  position: absolute;
  top: 5%;
  right: 10%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background: white;
  z-index: 12;
  width: 250px;
  cursor: pointer;
  ${(props) => (props.val ? `display:block;` : `display:none;`)}

  ul {
    list-style: none;
  }
  li {
    height: 50px;
    font-size: 14px;
    margin-left: 5%;
    margin-top: 10px;
    font-weight: bold;
  }
  li:hover {
    color: #ff6f61;
  }
`;
export const Li = styled.li`
  .linkref1 {
    ${(props) => (props.val == "" ? `display:block` : `display:none`)}
  }

  .linkref2 {
    ${(props) => (props.val != "" ? `display:block` : `display:none`)}
  }
`;
