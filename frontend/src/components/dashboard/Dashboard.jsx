import * as C from "./Dashboard.styled";
import { api } from "../../api/api";
import {
  FiSearch,
  IoNotificationsOutline,
  GoHome,
  BsWindowSidebar,
  AiOutlineUser,
  IoExitOutline,
  IoMdArrowDroprightCircle,
  GoX,
  AiFillFire,
  BiWater,
} from "../../utils/icons";

import SearchBox from "./searchBox/SearchBox";

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { privates } from "../../contexts/private";
import { context } from "../../contexts/context.form";

const Dashboard = () => {
  const [Option, setOption] = useState("home");
  const [photoUserOn, setPhotoUserOn] = useState("");
  const [userAll, setUserAll] = useState();

  const [closeAndOpenSearchBox, setCloseAndOpenSearchBox] = useState(false);
  const { setUser, setUrlPhotoUserOnline } = useContext(privates);
  const navigate = useNavigate();
  const User = localStorage.getItem("user");
  const parseUser = JSON.parse(User);

  const { image } = useContext(context);

  useEffect(() => {
    async function handleGetPhotoUserOnline() {
      const getToken = JSON.parse(localStorage.getItem("user"));
      const { token } = getToken;
      const regex = /^\/./g;

      await api
        .get("/jogador/online", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setPhotoUserOn(
            regex.test(res.data.phothoUrl)
              ? `https://pokeditto-api.herokuapp.com${res.data.phothoUrl}`
              : `https://pokeditto-api.herokuapp.com/${res.data.phothoUrl}`
          );
          setUrlPhotoUserOnline(
            regex.test(res.data.phothoUrl)
              ? `https://pokeditto-api.herokuapp.com${res.data.phothoUrl}`
              : `https://pokeditto-api.herokuapp.com/${res.data.phothoUrl}`
          );
          setUserAll(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    handleGetPhotoUserOnline();
  }, []);

  const handlExitUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    const token = localStorage.getItem("token");

    if (token) localStorage.removeItem("token");
    setUser("");

    navigate("/");
  };

  const handleRedirect = () => {
    navigate("/home/account");
  };

  return (
    <C.Wrapper Option={Option}>
      {closeAndOpenSearchBox && (
        <SearchBox
          closeAndOpen={closeAndOpenSearchBox}
          setCloseAndOpen={setCloseAndOpenSearchBox}
        />
      )}
      <section className="container">
        <aside className="container__sidebar">
          <GoHome
            value="home"
            className="container__sidebar__icon-GoHome"
            onClick={() => setOption("home")}
          />
          <BsWindowSidebar
            value="main"
            className="container__sidebar__icon-BsWindowSidebar"
            onClick={() => setOption("main")}
          />

          <IoNotificationsOutline
            value="notification"
            className="container__sidebar__icon-notification"
            onClick={() => setOption("notification")}
          />
          <AiOutlineUser
            value="user"
            className="container__sidebar__icon-AiOutlineUser"
            onClick={() => setOption("user")}
          />
          <IoExitOutline
            className="container__sidebar__icon-IoExitOutline"
            onClick={handlExitUser}
          />
        </aside>
        <main className="container__main">
          <header className="main__header__wrapper">
            <span className="main__header__title">
              <h1 className="main__header__title">Pokeditto</h1>
              <p className="main__header__pharse">let's have fun</p>
            </span>
            <menu className="menu__wrapper">
              <span className="menu__wrapper-icons">
                <FiSearch
                  className="menu__icon-FiSearch"
                  onClick={() => setCloseAndOpenSearchBox(() => true)}
                />
              </span>
              <div className="menu__profile-user" onClick={handleRedirect}>
                {User ? parseUser.nickname : "anonimous"}
                <img
                  className="menu__user-avatar"
                  src={image.length > 0 ? image : photoUserOn}
                />
              </div>
            </menu>
          </header>
          {/*  */}
          <section className="main__containers">
            <section
              className="main__container-home"
              style={
                Option === "home" ? { display: "block" } : { display: "none" }
              }
            >
              <header className="home__header">
                <p className="home__pharse">pokeditto</p>
                <h1 className="home__title">
                  it's time for a tea house party!
                </h1>
                <button className="home__button-play">
                  play now
                  <IoMdArrowDroprightCircle className="home__button-icon-IoMdArrowDroprightCircle" />
                </button>
              </header>
            </section>
            {/*  */}
            <section
              className="main__container-main"
              style={
                Option === "main" ? { display: "block" } : { display: "none" }
              }
            >
              <section className="wrapper__batle">
                <div className="menu__batle-characters">
                  <div className="player">
                    <strong className="name__player">player</strong>
                    <p className="name__character">
                      {userAll && userAll.pokemons[0].name}
                    </p>
                    <div className="profile__player">
                      <img
                        src={`https://pokeditto-api.herokuapp.com${
                          userAll
                            ? userAll.pokemons[0].sprite
                            : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F51%2Fe8%2Fdc%2F51e8dcca06d60fb3997d8f0235ad720c.jpg&f=1&nofb=1"
                        }`}
                        alt="image profile"
                        className="image__user"
                      />
                      <p className="icon__profile">
                        <BiWater className="icon" />
                      </p>
                    </div>
                  </div>
                  <div className="cpu">
                    <strong className="name__cpu">cpu</strong>
                    <p className="name__character">charmeleon</p>
                    <div className="profile__cpu">
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F37%2F83%2Fb4%2F3783b47987aef2a15c1b24a10a8b434c.png&f=1&nofb=1"
                        alt="image cpu"
                        className="image__cpu"
                      />
                      <p className="icon__profile">
                        <AiFillFire className="icon" />
                      </p>
                    </div>
                  </div>
                </div>

                <p className="versus">
                  <GoX className="versus__icon" />
                </p>
                <span className="wrapper__buttons">
                  <button className="batle">batle</button>
                  <button className="capture">capture</button>
                </span>
              </section>
              {/* main */}
            </section>

            {/*  */}
            <section
              className="main__container-notification"
              style={
                Option === "notification"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {/* notifications */}
            </section>
            {/*  */}
            <section
              className="main__container-user"
              style={
                Option === "user" ? { display: "block" } : { display: "none" }
              }
            >
              <div className="main__container__wrapper-user">
                <div className="main__container__card-body">
                  <div className="main__container__wrapper-card">
                    <strong className="main__container__user-description">
                      {User ? parseUser.nickname : "anonimous"}
                    </strong>
                    <img src={image.length > 0 ? image : photoUserOn} />
                    <p className="main__container__user-level">level 0</p>
                    <span className="main__container__progress-bar">
                      <span className="progress"></span>
                    </span>
                  </div>
                </div>

                <div className="main__container-card-last-pokemon">
                  {userAll &&
                    userAll.pokemons.map((pokemon, index) =>
                      index >= 0 && index < 4 ? (
                        <C.Card key={pokemon.name}>
                          <strong>{pokemon.name}</strong>
                          <p>{pokemon.tipo}</p>
                          <span className="pokemon"></span>
                          <img
                            src={`https://pokeditto-api.herokuapp.com${pokemon.sprite}`}
                          />
                        </C.Card>
                      ) : (
                        ""
                      )
                    )}
                </div>
              </div>
            </section>
          </section>
        </main>
      </section>
    </C.Wrapper>
  );
};

export default Dashboard;
