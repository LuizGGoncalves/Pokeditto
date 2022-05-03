import * as C from "./SearchBox.styled";
import { FiSearch, CgPokemon, IoCloseSharp } from "../../../utils/icons";
import get from "../../../mock/pokemon.json";
import { useState } from "react";

const SearchBox = ({ setCloseAndOpen }) => {
  const [search, setSearch] = useState("");
  const [all, setAll] = useState(false);
  const [poke, setPoke] = useState(false);
  const [controlOption, setControlOption] = useState("");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };
  const handleSetAllSearch = () => {
    setAll(true);
    setPoke(false);
    setControlOption("all");
  };
  const handleSetPokeSearch = () => {
    setAll(false);
    setPoke(true);
    setControlOption("poke");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
              <span className="count">{get.pokemons.length}</span>
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
              <span className="count">{get.pokemons.length}</span>
            </li>
          </ul>
        </header>
        <div className="form__show-results">
          {controlOption === "poke"
            ? get.pokemons.filter((value) => value === search && <p key={value}>{value}</p>)
            : get.pokemons.map((all) => <p key={all}>{all}</p>)}
        </div>
      </C.Form>
    </C.Wrapper>
  );
};

export default SearchBox;
