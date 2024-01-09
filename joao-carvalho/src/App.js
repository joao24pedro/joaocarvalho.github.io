import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './HomeScreen.tsx';
import TatScreen from './TatScreen.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/tattoo" element={<TatScreen />} />
        {/* Other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
