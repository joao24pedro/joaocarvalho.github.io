import React, { useEffect, useState } from 'react';
import './App.css';
import ButtonX from './components/buttonX.tsx';
import RoundLogo from './components/roundLogo.tsx';
import github from './assets/images/github.png';
import linkedin from './assets/images/linkedin.png';
import Canvas from './components/canvas.tsx';

const linkedinLink = 'https://www.linkedin.com/in/joao24carvalho/'
const githubLink = 'https://github.com/joao24pedro'

const Section = ({ id, content }) => {
  return (
    <div id={id} className="section">
      {content}
    </div>
  );
};

const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchData();
  }, []);

  useEffect(() => {
    // Add event listener to detect scroll position
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check if the user has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // Load more data if not already loading
      if (!isLoading) {
        fetchData();
      }
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    // Fetch more data here, for example:
    // const newItems = await fetchMoreData();
    // Append new items to existing ones
    // setItems([...items, ...newItems]);
    setIsLoading(false);
  };

  

  return (
    <div className="portfolio-container">
      <Section id='section1' content={<Section1Content />} />
      <Section id='section2' content={<Section2Content />} />
      <Section id='section3' content={<Section3Content />} />
      {/* Add more sections as needed */}
    </div>
  );
};

const Section1Content = () => {
  const scrollToSection2 = () => {
    const section2 = document.getElementById('section2');
    if (section2) {
      section2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section">
      {/* Add content for each section */}
      <div className="App" style={{flex: 1, alignContent: 'center'}}>
      <div style={{display: 'inline-block'}}><h1>WORK IN PROGRESS</h1></div>
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
            <div style={{display: 'grid', placeContent: 'center', placeItems: 'center', maxWidth: '60vh'}}>
              <p style={{gridRow: 1, gridColumn: 1}}>Hi, my name is João Carvalho, a 29 year old from sunny Portugal and  I'm currently looking for new challenges as a frontend engineer.</p>
              <p style={{gridRow: 2, gridColumn: 1}}>My background in IT started while I was still in highschool, learning Pascal, HTML, .NET and PHP in a EQF level 3 professional course, did a EQF level 5 degree in Information Systems Programming and Technologies and finally a Bachelor’s Degree in Web Computing where I got my first contact with UX/UI and frontend technologies.</p>
              <p style={{gridRow: 3, gridColumn: 1}}>My professional experience is mainly on React/React Native, TypeScript, redux, HTML and CSS (3 years) but I also worked with Django/Python and PostgreSQL for some Backend work.</p>
              {/* <p style={{gridRow: 4, gridColumn: 1}}>My goal is to learn and adapt to new technologies and industry trends so I can deliver high-quality user experiences and continue my development in the frontend field. I'm also able to work collaboratively in a team environment and communicate effectively with colleagues and clients.</p> */}
            </div>
          </div>
        </header>
        <main>
          <div style={{display: 'inline-block'}}>
            <ButtonX text={'INTERESTS'} onClick={scrollToSection2} isLink/>
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
    </div>
  )
};

const Section2Content = () => {
  const [showArm, setShowArm] = useState(false);

  const scrollToSection1 = () => {
    const section2 = document.getElementById('section1');
    if (section2) {
      section2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Interests" style={{flex: 1, alignContent: 'center'}}>
      <main>
        <div style={{}}>
          <p style={{color: 'white'}}>I like tattoos and tattoo art in general and have some myself.</p>
          <div style={{display: 'inline-block'}}>
            <ButtonX text={'SHOW ME WHAT YOU GOT'} isLink={false} onClick={() => setShowArm(!showArm)} animation={false}/>
          </div>
          <div style={{display: ''}}>
            {showArm ? (
              <Canvas />
            ) : (
              <div/>
            )}
          </div>
        </div>
        <div style={{display: 'inline-block', marginTop: '20%'}}>
          <ButtonX text={'ENOUGH. TAKE ME BACK'} onClick={scrollToSection1} isLink/>
        </div>
      </main>
    </div>
  );
};

const Section3Content = () => {
  return (
    <div>
      {/* Content for Section 2 */}
    </div>
  );
};

export default HomeScreen;
