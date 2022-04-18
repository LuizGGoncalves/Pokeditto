import * as C from "./SearchBox.styled";
import {FiSearch , IoCloseSharp} from "../../../utils/icons";

const SearchBox = () => {
  return (
    <C.Wrapper>
      <C.Form>
        <span className="form__wrapper-input">
          <FiSearch className="FiSearch"/>
          <input
            type="text"
            className="form__input-search"
            placeholder="search"
          />
          <IoCloseSharp className="IoCloseSharp"/>
        </span>
      </C.Form>

      <div className="search-result"></div>
    </C.Wrapper>
  );
};

export default SearchBox;
