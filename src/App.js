import React from 'react';
import Title from './components/Title'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
      <div className="App">
      <NavBar/>
      <Title title="E-COMMERCE" author="CONRADO GASSA"/>
      <ItemListContainer />
      <ItemDetailContainer />
      </div>
  );
}

export default App;
