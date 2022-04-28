import * as C from "./Dashboard.styled";
import {
  FiSearch,
  IoNotificationsOutline,
  GoHome,
  BsWindowSidebar,
  BiMedal,
  AiOutlineUser,
  IoExitOutline,
  IoMdArrowDroprightCircle,
  GoX,
  AiFillFire,
  MdDarkMode,
} from "../../utils/icons";

import SearchBox from "./searchBox/SearchBox";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { privates } from "../../contexts/private";

const Dashboard = () => {
  const [Option, setOption] = useState("home");
  const [closeAndOpenSearchBox, setCloseAndOpenSearchBox] = useState(false);
  const { setUser } = useContext(privates);
  const navigate = useNavigate();
  const User = localStorage.getItem("user");
  const parseUser = JSON.parse(User);

  const handlExitUser = () => {
    localStorage.removeItem("user");
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
            onClick={(event) => setOption("home")}
          />
          <BsWindowSidebar
            value="main"
            className="container__sidebar__icon-BsWindowSidebar"
            onClick={(event) => setOption("main")}
          />
          <BiMedal
            value="medal"
            className="container__sidebar__icon-BiMedal"
            onClick={(event) => setOption("medal")}
          />
          <AiOutlineUser
            value="user"
            className="container__sidebar__icon-AiOutlineUser"
            onClick={(event) => setOption("user")}
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
                  onClick={() => setCloseAndOpenSearchBox((prev) => true)}
                />
                <IoNotificationsOutline className="menu__icon-IoNotificationsOutline" />
              </span>
              <div className="menu__profile-user" onClick={handleRedirect}>
                {User ? parseUser.nickname : "..."}
                <img
                  className="menu__user-avatar"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.anatPcl_p0X4_qBigcUZHwHaHa%26pid%3DApi&f=1"
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
                <button
                  className="home__button-play"
          
                >
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
                    <p className="name__character">umbreon</p>
                    <div className="profile__player">
                      <img
                        src="https://i.pinimg.com/564x/83/2a/a6/832aa691c3b028308f4e145fdc246bb8.jpg"
                        alt="image profile"
                        className="image__user"
                      />
                      <p className="icon__profile">
                        <MdDarkMode className="icon" />
                      </p>
                    </div>
                  </div>
                  <div className="cpu">
                    <strong className="name__cpu">cpu</strong>
                    <p className="name__character">charmeleon</p>
                    <div className="profile__cpu">
                      <img
                        src="https://i.pinimg.com/564x/ca/c9/55/cac955ec7c57810951a12cddbda3aaa2.jpg"
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
              className="main__container-medal"
              style={
                Option === "medal" ? { display: "block" } : { display: "none" }
              }
            >
              {/* medal */}
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
                      {User ? parseUser.nickname : "..."}
                    </strong>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.anatPcl_p0X4_qBigcUZHwHaHa%26pid%3DApi&f=1" />
                    <p className="main__container__user-level">level 0</p>
                    <span className="main__container__progress-bar">
                      <span className="progress"></span>
                    </span>
                  </div>
                </div>

                <div className="main__container-card-last-pokemon">
                  <div className="card-last-pokemon">
                    <strong>snivy</strong>
                    <p>grass</p>
                    <span className="pokemon"></span>
                    <img src="https://i.pinimg.com/564x/e6/7d/a1/e67da16f1c0f1e092c39494827912783.jpg" />
                  </div>
                  <div className="card-last-pokemon">
                    <strong>lucario</strong>
                    <p>fighting/steel</p>
                    <span className="pokemon"></span>
                    <img src="https://i.pinimg.com/736x/67/2e/13/672e13dfd7d3e90d9482dccbc7d8298b.jpg" />
                  </div>
                  <div className="card-last-pokemon">
                    <strong>mew</strong>
                    <p>psychic</p>
                    <span className="pokemon"></span>
                    <img src="https://i.pinimg.com/564x/7b/58/c2/7b58c27a79bac67f85b06b0d92015b8b.jpg" />
                  </div>
                  <div className="card-last-pokemon">
                    <strong>alakazam</strong>
                    <p>psychic</p>
                    <span className="pokemon"></span>
                    <img src="https://i.pinimg.com/564x/7e/ea/a0/7eeaa02d0d935182fb16f1054d1ace10.jpg" />
                  </div>
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
