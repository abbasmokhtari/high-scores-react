import React from 'react';
import logo from './logo.svg';
import './App.css';
import allCountryScores from './scores';
import Heading from './heading'
import ScoreTable from './scoreTable'

function App() {
  return (
    <div className='App'>
      <Heading />
      <ScoreTable />
    </div>
  );
}

export default App;
