import React from 'react';
import Title from './components/Title'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListContainer'
import './App.css';

function App() {
  return (

    <div className="App">
        <Title/>
        <NavBar/>
        <br></br>
        <ItemListConteiner/>

    </div>
  );
}

export default App;
