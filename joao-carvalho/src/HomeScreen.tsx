import React from 'react';
import './App.css';
import ButtonX from './components/buttonX.tsx';
import RoundLogo from './components/roundLogo.tsx';

const linkedin = 'https://raw.githubusercontent.com/joao24pedro/joaocarvalho.github.io/main/joao-carvalho/src/assets/images/linkedin.png';
const linkedinLink = 'https://www.linkedin.com/in/joao24carvalho/'

const HomeScreen = () => {
  return (
    <div className="App" style={{flex: 1, alignContent: 'center'}}>
      <header className="App-header">
        <div className="header-content" style={{flex: 1, flexDirection: 'column', alignContent: 'center'}}>
          <div style={{flex: 1, display: 'flex'}}>
            <div style={{flex: 1}}><h1>João Carvalho</h1></div>
            <div style={{flex: 1, alignSelf: 'center', marginLeft: 25}}>
              <a href={linkedinLink} target='_blank' rel="noopener noreferrer">
                <RoundLogo path={linkedin} size={40} />
              </a>
            </div>
          </div>
          <p>Front-End Dev</p>
        </div>
      </header>
      <main>
        <div style={{alignContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
          <ButtonX text={'something will go here'} link={'/tattoo'} />
        </div>
        <section className="intro">
          <h2>Building a Portfolio</h2>
          <p>---------------</p>
        </section>
        <section>
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

export default HomeScreen;
