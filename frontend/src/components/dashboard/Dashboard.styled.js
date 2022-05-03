import styled from "styled-components";

export const Wrapper = styled.section`
  background: #c3c3c3;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 765px) {
  }

  .container {
    background: #050505;
    width: 100%;
    max-width: 800px;
    height: 100%;
    max-height: 500px;
    border-radius: 33px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    @media (max-width: 765px) {
      display: grid;
      place-items: center;
      justify-content: center;
      background: #c3c3c3;
      height: 100vh;
      box-shadow: none;
      justify-content: center;
      margin: 0 20px;
    }

    .container__sidebar {
      width: 100%;
      max-width: 100px;
      display: grid;
      place-items: center;
      border-radius: 30px 0 0 30px;
      background: #050505;

      @media (max-width: 765px) {
        border-radius: 30px 30px 0 0;
        width: 100%;
        padding: 2rem;
        max-width: 100vw;
        display: flex;
        justify-content: space-between;
      }

      .container__sidebar__icon-GoHome,
      .container__sidebar__icon-BsWindowSidebar,
      .container__sidebar__icon-BiMedal,
      .container__sidebar__icon-AiOutlineUser,
      .container__sidebar__icon-notification,
      .container__sidebar__icon-IoExitOutline {
        width: 19px;
        height: 19px;
        cursor: pointer;
      }
      .container__sidebar__icon-GoHome {
        color: #d8403c;
      }
      .container__sidebar__icon-GoHome {
        color: ${(props) => (props.Option === "home" ? "#D8403C" : "#FDF7F2")};
      }
      .container__sidebar__icon-BsWindowSidebar {
        color: ${(props) => (props.Option === "main" ? "#D8403C" : "#FDF7F2")};
      }
      .container__sidebar__icon-BiMedal {
        color: ${(props) => (props.Option === "medal" ? "#D8403C" : "#FDF7F2")};
      }
      .container__sidebar__icon-AiOutlineUser {
        color: ${(props) => (props.Option === "user" ? "#D8403C" : "#FDF7F2")};
      }
      .container__sidebar__icon-notification {
        color: ${(props) =>
          props.Option === "notification" ? "#D8403C" : "#FDF7F2"};
      }
      .container__sidebar__icon-IoExitOutline {
        color: #fdf7f2;
      }
    }

    .container__main {
      flex: 1;
      background: #22334d;
      border-radius: 50px 30px 30px 50px;
      padding: 1rem 1.3rem;
      display: flex;
      flex-direction: column;

      @media (max-width: 765px) {
        border-radius: 0px;
        height: 100%;
        min-height: 1000px;
        align-items: center;
        justify-content: start;
      }

      .main__header__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 785px) {
          padding: 0 5rem;
        }

        .main__header__title {
          width: auto;

          h1 {
            font-size: 2rem;
            font-weight: bold;
            letter-spacing: 1px;
            color: #d8403c;

            @media (max-width: 765px) {
              font-size: 1.4rem;
              margin-right: 10px;
            }
          }
          p {
            color: #e9e9ea;
            font-size: 0.9rem;

            @media (max-width: 450px) {
              margin-right: 10px;
            }
          }
        }

        .menu__wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: end;
          padding: 1.3rem 0;
          gap: 10px;

          @media (max-width: 600px) {
            display: flex;
            flex-direction: row-reverse;
          }

          .menu__wrapper-icons {
            width: auto;

            display: flex;
            align-items: center;
            justify-content: end;
            padding: 3px;
            @media (max-width: 450px) {
            }
          }
          .menu__icon-FiSearch,
          .menu__icon-IoNotificationsOutline {
            width: 26px;
            height: 26px;
            background: #040507;
            color: #d8403c;
            padding: 3px;
            border-radius: 8px;
            box-shadow: 0 0 5px 1px #040507;
            cursor: pointer;
            :hover {
              opacity: 0.8;
            }
          }

          .menu__profile-user {
            width: 100%;
            max-width: 150px;
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 10px;
            background: #040507;
            color: #fff;
            padding: 2px 4px;
            box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.34);
            border-radius: 40px;
            font-size: 0.9rem;
            text-transform: capitalize;
            padding: 4px 7px;
            cursor: pointer;

            .menu__user-avatar {
              width: 35px;
              height: 35px;
              display: flex;
              object-fit: cover;
              clip-path: circle(50% at 50% 50%);
            }
          }
        }
      }
    }
  }
  .container__main {
    display: flex;

    @media (max-width: 764px) {
      height: 100vw;
    }

    .main__containers {
      height: 100%;
      padding: 10px;

      @media (max-width: 764px) {
        height: 100%;
        max-height: 650px;
      }

      .main__container-home {
        height: 40%;

        .home__header {
          width: 100%;
          padding: 1.2rem 1rem;
          border-radius: 20px;
          box-shadow: 0 5px 5px 2px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: start;
          justify-content: space-around;
          flex-direction: column;
          gap: 15px;
          background: linear-gradient(to bottom, #e9e9ea, transparent);

          .home__pharse {
            ::first-letter {
              text-transform: uppercase;
              color: #d8403c;
            }
            color: #040507;
            font-weight: 600;
            font-size: 1.1rem;
          }

          .home__title {
            font-style: italic;
            color: #040507;
            :first-letter {
              text-transform: uppercase;
            }
          }

          .home__button-play {
            border: none;
            outline: none;
            padding: 10px;
            border-radius: 15px;
            width: 100%;
            max-width: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            font-size: 1rem;
            font-weight: bold;
            color: #22334d;
            background: #e9e9ea;
            box-shadow: 0 0 5px 1px #080d3d;
            white-space: nowrap;
            cursor: pointer;

            :hover {
              opacity: 0.8;
            }
            .home__button-icon-IoMdArrowDroprightCircle {
              width: 25px;
              height: 25px;
              color: #d8403c;
            }
          }
          // home__header
        }
        // main__container-home
      }
      .main__container-user {
        display: flex;
        height: 100%;
        background: #010d19;
        border-radius: 0 0 30px 30px;
        padding: 10px 1rem;

        @media (max-width: 765px) {
          display: grid;
          padding: 0;
          height: 100%;
          height: 740px;
          border-radius: 0;
        }

        .main__container__wrapper-user {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: space-between;

          @media (max-width: 765px) {
            display: grid;
            place-items: center;
            justify-content: center;
            height: 100%;

            padding: 0 2rem;
            width: 100%;
            gap: 0;
          }

          .main__container__card-body {
            width: 100%;
            min-width: 200px;
            height: 320px;
            box-shadow: 0 0 3px 2px rgba(300, 300, 300, 0.35);
            background: #010d19;
            display: flex;
            flex-direction: column;
            padding: 10px;
            align-items: center;
            justify-content: space-between;
            border-radius: 10px;

            @media (max-width: 765px) {
              width: 80%;
              height: 200px;
            }

            .main__container__wrapper-card {
              width: 100%;
              height: 100%;
              display: flex;
              padding: 10px 1rem;
              align-items: center;
              justify-content: space-between;
              flex-direction: column;
              border: 1px solid #11624d;

              @media (max-width: 378px) {
                padding: 30px 50px;
              }

              p,
              span,
              strong {
                color: #e9e9ea;
              }
              p {
              }
              img {
                width: 50px;
                height: 50px;
                clip-path: circle(50% at 50% 50%);
              }
              .main__container__progress-bar {
                background: grey;
                width: 100%;
                border-radius: 10px;
                overflow: hidden;
                display: flex;

                .progress {
                  padding: 3px;
                  background: greenyellow;
                  height: 100%;
                  width: 1%;
                }
              }
            }
          }

          .main__container-card-last-pokemon {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 1rem;

            @media (max-width: 765px) {
              display: flex;
              width: 100%;
              align-items: start;
              justify-content: center;
              height: 100%;

              div:nth-child(1),
              div:nth-child(2),
              div:nth-child(3),
              div:nth-child(4) {
                padding: 0 3px;
              }

              div:nth-child(1),
              div:nth-child(2),
              div:nth-child(3),
              div:nth-child(4) {
                height: 80%;
                img {
                  height: 100px;
                  width: 70px;
                }
              }

              div:nth-child(1) {
                border-image: linear-gradient(
                    greenyellow,
                    rgba(300, 300, 300, 0.24)
                  )
                  27 / 2px;
              }

              div:nth-child(2) {
                border-image: linear-gradient(cyan, rgba(300, 300, 300, 0.24))
                  27 / 2px;
              }

              div:nth-child(3) {
                border-image: linear-gradient(
                    magenta,
                    rgba(300, 300, 300, 0.24)
                  )
                  27 / 2px;
              }

              div:nth-child(4) {
                border-image: linear-gradient(orange, rgba(300, 300, 300, 0.24))
                  27 / 2px;
                padding: 0 10px;
              }
            }

            @media (max-width: 378px) {
              padding: 0 100px;
            }

            .card-last-pokemon {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: start;
              padding: 1rem 0;
              height: 100%;
              gap: 10px;
              flex: 1;

              @media (max-width: 765px) {
                height: 200px;

                gap: 0;
              }

              strong {
                color: #e9e9ea;
              }
              p {
                color: #d8403c;
              }

              img {
                width: 100%;
                height: 100%;
                min-height: 200px;
                min-width: 60px;
                object-fit: cover;
                box-shadow: 0 0 3px 3px rgba(300, 300, 300, 0.25);
                border-radius: 10px;

                @media (max-width: 765px) {
                  object-fit: cover;
                  clip-path: circle(50% at 50% 50%);
                }
              }
            }
          }
        }
      }

      .main__container-main {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 1rem;
        border-radius: 0 0 30px 30px;

        .wrapper__batle {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-around;

          .menu__batle-characters {
            width: 100%;
            display: flex;
            height: 100%;
            min-height: 150px;
            height: auto;
            justify-content: space-around;
            align-items: center;
            gap: 2rem;
            color: #e9e9ea;

            .player {
              border: 3px solid cyan;
              padding: 1rem 10px;
              background: #010d19;
              box-shadow: 0px 7px 10px 0 #050505;
              gap: 10px;
              height: 100%;
              display: flex;
              width: 100%;
              max-width: 150px;
              align-items: center;
              justify-content: space-between;
              flex-direction: column;
              text-align: center;
              border-radius: 100px;

              .name__character {
                color: cyan;
                font-weight: 600;
              }
              .name__player {
                text-transform: uppercase;
              }

              .profile__player {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                .image__user {
                  object-fit: cover;
                  width: 100px;
                  height: 100px;
                  clip-path: circle(50% at 50% 50%);
                }

                .icon__profile {
                  .icon {
                    width: 20px;
                    height: 20px;
                    color: cyan;
                  }
                }
              }
            }
            .cpu {
              border: 3px solid #d8403c;
              padding: 1rem 10px;
              background: #010d19;
              box-shadow: 0px 7px 10px 0 #050505;
              width: 100%;
              max-width: 150px;
              gap: 10px;
              height: 100%;
              display: flex;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
              text-align: center;
              border-radius: 100px;

              .name__character {
                color: #d8403c;
                font-weight: 600;
              }

              .name__cpu {
                text-transform: uppercase;
              }

              .profile__cpu {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                .image__cpu {
                  object-fit: cover;
                  clip-path: circle(50% at 50% 50%);
                  width: 100px;
                  height: 100px;
                }
                .icon__profile {
                  .icon {
                    width: 20px;
                    height: 20px;
                    color: #d8403c;
                  }
                }
              }
            }
          }
          .versus {
            .versus__icon {
              width: 3rem;
              height: 3rem;
              color: yellow;
            }
          }
          .wrapper__buttons {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;

            .batle {
              width: 100%;
              max-width: 140px;
              padding: 10px;
              outline: none;
              border-radius: 15px;
              border: 2px solid red;
              font-size: 0.9rem;
              background: transparent;
              color: #fff;
              font-weight: 600;
              box-shadow: 0 3px 5px rgba(0, 0, 0, 0.53);
              cursor: pointer;

              :hover {
                transition: 0.4s linear;
                opacity: 0.7;
                background: red;
              }
            }
            .capture {
              width: 100%;
              max-width: 140px;
              padding: 10px;
              outline: none;
              border-radius: 15px;
              border: 2px solid cyan;
              font-size: 0.9rem;
              background: transparent;
              color: #fff;
              font-weight: 600;
              box-shadow: 0 3px 5px rgba(0, 0, 0, 0.53);
              cursor: pointer;

              :hover {
                transition: 0.4s linear;
                opacity: 0.7;
                color: #050505;
                background: cyan;
              }
            }
          }
        }
      }
      //main__containers
    }
    // container__main
  }
`;
