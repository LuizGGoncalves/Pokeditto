import * as C from "./SearchBox.styled";
import { FiSearch, IoCloseSharp } from "../../../utils/icons";
import get from "../../../mock/pokemon.json";
import { useState } from "react";

const SearchBox = ({ setCloseAndOpen }) => {
  const [search, setSearch] = useState("");

  const handleSearchCharacterPokemon = (event) => {
    setSearch(event.target.value);
  };

  return (
    <C.Wrapper>
      <C.Form>
        <span className="form__wrapper-input">
          <FiSearch className="FiSearch" />
          <input
            value={search}
            type="text"
            className="form__input-search"
            placeholder="search"
            onChange={handleSearchCharacterPokemon}
          />
          <IoCloseSharp
            className="IoCloseSharp"
            onClick={() => setCloseAndOpen((prev) => false)}
          />
        </span>
      </C.Form>

      <div className="search-result">
        {get.pokemons.filter(
          (character) => character === search && <p>{character}</p>
        )}
      </div>
    </C.Wrapper>
  );
};

export default SearchBox;
