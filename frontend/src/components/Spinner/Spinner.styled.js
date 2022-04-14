import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(233, 26%, 24%);
  overflow: hidden;
  -webkit-box-reflect: below 1px #0001, #0004;

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: 0.7s linear 0.1s infinite animaSpinner;
    overflow: hidden;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    ::before {
      background-size: 100px 180px;
      background-repeat: no-repeat;
      background: linear-gradient(
        to bottom,
        transparent,
        hsl(136, 65%, 51%),
        hsl(192, 70%, 51%)
      );
      width: 50%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 100px 0px 0px 100px;
      content: "";
    }
    ::after {
      position: absolute;
      top: 0;
      right: 100px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: hsl(0, 0%, 100%);
      content: "";
      z-index: 1;
      box-shadow: 0, 0, 10px, hsl(0, 0%, 100%) 0, 0, 20px, hsl(0, 0%, 100%) 0, 0,
        30px, hsl(0, 0%, 100%) 0, 0, 40px, hsl(0, 0%, 100%) 0, 0, 50px,
        hsl(0, 0%, 100%) 0, 0, 60px, hsl(0, 0%, 100%) 0, 0, 70px,
        hsl(0, 0%, 100%) 0, 0, 80px, hsl(0, 0%, 100%) 0, 0, 90px,
        hsl(0, 0%, 100%) 0, 0, 100px, hsl(0, 0%, 100%);
    }
    span {
      position: absolute;
      left: 20px;
      top: 20px;
      bottom: 20px;
      z-index: 10;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: hsl(233, 26%, 24%);
    }
  }
  @keyframes animaSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// const Spinner = () => {
//   return (
//     <Wrapper>
//       <div className="loader">
//         <span></span>
//       </div>
//     </Wrapper>
//   );
// };

// export default Spinner;
