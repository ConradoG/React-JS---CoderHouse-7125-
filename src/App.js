import React from 'react';
import Img from './components/img'
import Title from './components/Title'
import ReactLink from './components/ReactLink'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <Title />
        <ReactLink />
      </header>
    </div>
  );
}

export default App;
