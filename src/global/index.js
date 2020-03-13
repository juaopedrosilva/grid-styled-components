import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap');

  body {
    background: #fff;
    line-height: 1.4;
    color: rgba(0, 0, 0, .8);
    font-family: 'Dosis', sans-serif;

  }

  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, .1)
  }
  
`
