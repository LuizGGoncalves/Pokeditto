import { Wrapper } from "./spinner.styled";

const Spinner = () => {
  return (
    <Wrapper>
      <div className="loader">
        <span></span>
      </div>
    </Wrapper>
  );
};

export default Spinner;
