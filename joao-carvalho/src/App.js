import React from 'react';
import './App.css';
import ButtonX from './components/buttonX.tsx';
import RoundLogo from './components/roundLogo.tsx';

const linkedin = './assets/images/linkedin';

function App() {
  return (
    <div className="App" style={{flex: 1, alignContent: 'center'}}>
      <header className="App-header">
        <div className="header-content" style={{flex: 1, flexDirection: 'column', alignContent: 'center'}}>
          <div style={{flex: 1, display: 'flex'}}>
            <div style={{flex: 1}}><h1>João Carvalho</h1></div>
            <div style={{flex: 1, alignSelf: 'center', marginLeft: 25}}><RoundLogo path={linkedin} size={40} /></div>
          </div>
          <p>Front-End Dev</p>
        </div>
      </header>
      <main>
        <div style={{alignContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
          <ButtonX/>
        </div>
        <section className="intro">
          <h2>Building a Portfolio</h2>
          <p>---------------</p>
        </section>
        <section className="ventures">
          <h3>--------</h3>
          <ul>
            <li>-------</li>
            <li>---------</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
