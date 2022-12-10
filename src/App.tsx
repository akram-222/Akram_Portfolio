import React from 'react';
import './App.scss';
import Logo from './Components/Logo/logo';
import { MouseCoordsContextProvider } from './Contexts/MousePostion';
import Aside from './Layouts/Aside/aside';
import Header from './Layouts/Header/header';
import Main from './Layouts/Main/main';

function App() {
  return (
    <MouseCoordsContextProvider>
      <div className="container dark-theme">
        <Logo />
        <Header />
        <Aside />
        <Main />
      </div>
    </MouseCoordsContextProvider>
    
  );
}

export default App;
