import * as C from "./Card.styled";

const Card = ({ children, colorOne, colorTwo }) => {
  return (
    <C.Card colorOne={colorOne} colorTwo={colorTwo}>
      {children}
    </C.Card>
  );
};

export default Card;
