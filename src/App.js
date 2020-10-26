import React from 'react';
import Title from './components/Title'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import './App.css';




function App() {
  return (

    <div className="App">
        <NavBar/>
        <Title />
        <CartWidget/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
