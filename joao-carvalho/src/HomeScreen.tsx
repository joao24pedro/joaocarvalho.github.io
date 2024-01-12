import React from 'react';
import './App.css';
import ButtonX from './components/buttonX.tsx';
import RoundLogo from './components/roundLogo.tsx';
import github from './assets/images/github.png';
import linkedin from './assets/images/linkedin.png';

const linkedinLink = 'https://www.linkedin.com/in/joao24carvalho/'
const githubLink = 'https://github.com/joao24pedro'

const HomeScreen = () => {
  return (
    <div className="App" style={{flex: 1, alignContent: 'center'}}>
      <header className="App-header">
        <div className="header-content" style={{flex: 1, flexDirection: 'column', alignContent: 'center'}}>
          <div style={{flex: 1, display: 'flex'}}>
            <div style={{display: 'inline-block'}}><h1>João Carvalho</h1></div>
            <div style={{flex: 1, alignSelf: 'center', marginLeft: 25}}>
              <a href={linkedinLink} target='_blank' rel="noopener noreferrer">
                <RoundLogo path={linkedin} size={30} />
              </a>
            </div>
            <div style={{flex: 1, alignSelf: 'center', marginLeft: 25}}>
              <a href={githubLink} target='_blank' rel="noopener noreferrer">
                <RoundLogo path={github} size={30} />
              </a>
            </div>
          </div>
          <p>Front-End Dev</p>
        </div>
      </header>
      <main>
        <div style={{display: 'inline-block'}}>
          <ButtonX text={'INTERESTS'} link={'/tattoo'} isLink/>
        </div>
        <section className="intro">
          <h2>Building a Portfolio</h2>
          <p>---------------</p>
        </section>
        <section>
          <h3>Currently:</h3>
          <ul >
            <li>
              <p>
                - Learning <a style={{fontWeight: 'bold'}} href='https://en.wikipedia.org/wiki/Tufting' title="What in the world is TUFTING??" target="_blank" rel="noopener noreferrer">rug turfting</a>
              </p>
            </li>
            <li>
              <p>
                - Learning more about <a style={{fontWeight: 'bold'}} href='https://nextjs.org/learn' target="_blank" rel="noopener noreferrer">Next.js</a>
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default HomeScreen;
