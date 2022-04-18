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
} from "../../utils/icons";

import SearchBox from "./searchBox/SearchBox";

import { useState } from "react";

const Dashboard = () => {
  const [Option, setOption] = useState("home");

  return (
    <C.Wrapper Option={Option}>
      <SearchBox />
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
          <IoExitOutline className="container__sidebar__icon-IoExitOutline" />
        </aside>
        <main className="container__main">
          <header className="main__header__wrapper">
            <span className="main__header__title">
              <h1 className="main__header__title">Pokeditto</h1>
              <p className="main__header__pharse">let's have fun</p>
            </span>
            <menu className="menu__wrapper">
              <span className="menu__wrapper-icons">
                <FiSearch className="menu__icon-FiSearch" />
                <IoNotificationsOutline className="menu__icon-IoNotificationsOutline" />
              </span>
              <div className="menu__profile-user">
            
                <img
                  className="menu__user-avatar"
                  src="https://i.pinimg.com/736x/7e/34/0c/7e340ccb96ccadeb115075a4ed0841af.jpg"
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
              <p>dsdfsfsd</p>
            </section>
            {/*  */}
            <section
              className="main__container-medal"
              style={
                Option === "medal" ? { display: "block" } : { display: "none" }
              }
            >
              <p>batata</p>
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
                    Bridget Satterlee
                    </strong>
                    <img src="https://i.pinimg.com/736x/7e/34/0c/7e340ccb96ccadeb115075a4ed0841af.jpg" />
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
