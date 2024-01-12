import React, { useState } from 'react';
import './App.css';
import ButtonX from './components/buttonX.tsx';
import Canvas from './components/canvas.tsx';

const TatScreen = () => {
  const [showArm, setShowArm] = useState(false);
  return (
    <div className="App" style={{flex: 1, alignContent: 'center'}}>
      <main>
        <div style={{}}>
          <p>I like tattoos and tattoo art in general and have some myself.</p>
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
          <ButtonX text={'ENOUGH. TAKE ME BACK'} link={'/'} isLink/>
        </div>
      </main>
    </div>
  );
}

export default TatScreen;
