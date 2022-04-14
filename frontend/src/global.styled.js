import { createGlobalStyle } from "styled-components";
import back from "./assets/background.png";

export const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-image: url(${back});
    background-size:45vh;
    background-repeat: repeat;
    font-family: "Play", sans-serif;
}
`;
