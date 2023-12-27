import React from 'react';
import './App.css';
import ButtonX from './components/buttonX.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>João Carvalho</h1>
          <p>Front-End Dev</p>
        </div>
      </header>
      <main>
        <section className="intro">
          <h2>Building a Portfolio of design-focused Businesses</h2>
          <p>asdafasdasdasdasd</p>
          <ButtonX/>
        </section>
        <section className="ventures">
          <h3>Ventures</h3>
          <ul>
            <li>LALALALAL</li>
            <li>LALALALALAL</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
