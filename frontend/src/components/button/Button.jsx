import * as C from "./Button.styled";

const Button = ({ children , onclick}) => {
  return <C.Button onClick={onclick}>{children}</C.Button>;
};

export default Button;
