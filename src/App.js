import React from 'react';
import Title from './components/Title'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import './App.css';





function App() {
  return (

    <div className="App">
        <NavBar/>
        <Title title="E-COMMERCE" author="CONRADO GASSA"/>
        <ItemListContainer/>
        <ItemCount/>
    </div>
  );
}

export default App;
