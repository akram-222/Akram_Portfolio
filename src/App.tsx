import React from 'react';
import './App.css';
import Logo from './Components/Logo/logo';
import Header from './Layouts/Header/header';

function App() {
  return (
    <div className="container">
      <Logo />
     <Header />
      <aside>aside</aside>
      <main>main</main>
    </div>
  );
}

export default App;
