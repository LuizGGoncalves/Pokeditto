import { Wrapper } from "./imageEdit.styled";

const Popup = ({ children , edit}) => {
  return <Wrapper edit={edit}>{children}</Wrapper>;
};

export default Popup;
