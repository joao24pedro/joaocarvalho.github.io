import React from 'react';
import './App.css';
import ButtonX from './components/buttonX.tsx';

const TatScreen = () => {
  return (
    <div className="App" style={{flex: 1, alignContent: 'center'}}>
      <main>
        <div style={{alignContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
          <ButtonX text={'I enjoy tattoos'} link={'/'}/>
        </div>
      </main>
    </div>
  );
}

export default TatScreen;
