import React from "react";
import Router from "./routers/Router"
import GlobalState from "./global/GlobalState";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Press Start 2P', cursive;
    box-sizing: border-box;
  }
  @media (min-width: 375px) and (max-width: 667px) {
        width: 100vw;
        height: 100vh;
        background-color: black;
    }
`

function App() {
  return (
    <GlobalState>
      <Router />
      <GlobalStyle />
    </GlobalState>
  )
}

export default App;