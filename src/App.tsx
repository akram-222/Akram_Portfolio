import React from 'react';
import './App.scss';
import Logo from './Components/Logo/logo';
import Aside from './Layouts/Aside/aside';
import Header from './Layouts/Header/header';

function App() {
  return (
    <div className="container">
      <Logo />
     <Header />
      <Aside />
      <main>main</main>
    </div>
  );
}

export default App;
