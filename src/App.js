import React from "react";

import './styles/reset.css'

import AppDesktop from "./Components/app-desktop/App-desktop";
import AppMobile from "./Components/app-mobile/App-mobile";

import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 320 });

  return (
    <div>
      {isMobile ? <AppMobile/> : <AppDesktop />}
     </div>
  );
}

export default App;
