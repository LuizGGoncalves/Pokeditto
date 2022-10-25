import * as C from "./SearchBox.styled";
import { FiSearch, CgPokemon, IoCloseSharp } from "../../../utils/icons";
import { useState, useEffect } from "react";
import { api } from "../../../api/api";

const SearchBox = ({ setCloseAndOpen }) => {
  const [search, setSearch] = useState("");
  const [all, setAll] = useState(false);
  const [poke, setPoke] = useState(false);
  const [controlOption, setControlOption] = useState("");
  const [user, setUser] = useState();

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  async function handleGetPokemons() {
    const getToken = JSON.parse(localStorage.getItem("user"));
    const { token } = getToken;

    await api
      .get("/jogador/online", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleSetAllSearch = () => {
    setAll(true);
    setPoke(false);
    setControlOption("all");

    setTimeout(handleGetPokemons, 10000);
  };
  const handleSetPokeSearch = () => {
    setAll(false);
    setPoke(true);
    setControlOption("poke");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const handleGetUniquePokemonsUserOnline = async () => {
      const getToken = JSON.parse(localStorage.getItem("user"));
      const { token } = getToken;

      await api
        .get("/jogador/online", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    handleGetUniquePokemonsUserOnline();
  }, []);

  return (
    <C.Wrapper all={all} poke={poke}>
      <C.Form onSubmit={handleSubmit}>
        <header className="form__header">
          <div className="form__header-search">
            <FiSearch className="form__header__icon-search" />
            <input
              type="text"
              className="form__header-input-search"
              value={search}
              onChange={handleSearchInput}
            />
            <button
              className="form__button-clear"
              onClick={() => setSearch("")}
              style={search ? { display: "flex" } : { display: "none" }}
            >
              clear
            </button>
            <IoCloseSharp
              className="form__header-icon-close"
              onClick={() => setCloseAndOpen(false)}
            />
          </div>
          <ul className="form__header-options">
            <li
              className="options"
              id="all"
              onClick={handleSetAllSearch}
              value={all}
              style={
                all
                  ? { borderBottom: "2px solid #d8403c" }
                  : { borderBottom: "none" }
              }
            >
              all
              <span className="count">{user && user.pokemons.length}</span>
            </li>
            <li
              className="options"
              id="poke"
              onClick={handleSetPokeSearch}
              value={poke}
              style={
                poke
                  ? { borderBottom: "2px solid #d8403c" }
                  : { borderBottom: "none" }
              }
            >
              pokemons
              <CgPokemon className="pokeball" />
              <span className="count">{user && user.pokemons.length}</span>
            </li>
          </ul>
        </header>
        <div className="form__show-results">
          {user && controlOption === "poke"
            ? user.pokemons.map(
                (pokemons) => pokemons.name === search && <p>{pokemons.name}</p>
              )
            : user &&
              user.pokemons.map((all, index) => <p key={index}>{all.name}</p>)}
        </div>
      </C.Form>
    </C.Wrapper>
  );
};

export default SearchBox;
