import React from 'react';
import './App.scss';
import Logo from './Components/Logo/logo';
import { MouseCoordsContextProvider } from './Contexts/MousePostion';
import Aside from './Layouts/Aside/aside';
import Header from './Layouts/Header/header';

function App() {
  return (
    <MouseCoordsContextProvider>
      <div className="container dark-theme">
        <Logo />
        <Header />
        <Aside />
        <main>main</main>
      </div>
    </MouseCoordsContextProvider>
    
  );
}

export default App;
