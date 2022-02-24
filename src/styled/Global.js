import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
--fondo: #506D84;
--subMenu: #632ce4;
--btn-principal:#889EAF; 
--color-letra:white;
--color-modal:rgba(0, 0, 0, 0.5);
--gray-100: #16181D;
--gray-200: #22242C;
--gray-300: #2D303B;
--gray-400: #484B5C;
--gray-500: #878FA6;
--gray-600: #C7CDDF;
--gray-700: #DCDEE8;
--gray-800: #F0F1F7;
--gray-900: #FFFFFF;
--primary-100: #40290A;
--primary-200: #805213;
--primary-300: #E69523;
--primary-400: #FFA526;
--primary-500: #FFBD61;
--primary-600: #FFDAA5;
--primary-700: #F3E8C8;
--error-100: #691026;
--error-200: #A8193D;
--error-300: #CF1F4B;
--error-400: #E82354;
--error-500: #F52559;
--error-600: #FB4C78;
--error-700: #FBB3C5;
--success-100: #055C42;
--success-200: #07825D;
--success-300: #089C70;
--success-400: #08A878;
--success-500: #1AC391;
--success-600: #96D2C0;
--success-700: #B3FBE5;
}



* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  html {
  font-size: 62.5%;
  font-family: Poppins, system-ui;
  }

html, body {
height:100vh;
}

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  #app {
    //position:relative;
    //height:100%;
  }



@keyframes wave {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-80px 30px);
  }
  100% {
    transform: translate(160px, -60px);
  }
}


`;

export { GlobalStyle };
