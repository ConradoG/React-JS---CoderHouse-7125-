import React from 'react';
import Title from './components/Title'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartContext } from './context/CartContext';


function App() {
  return (
    <CartContext.Provider value={[]}>
        <BrowserRouter>  
            <NavBar/>
            <Route exact path='/'> <Title title="E-COMMERCE" author="CONRADO GASSA"/>  </Route>
            <Switch>
                <Route exact path='/'> <ItemListContainer />  </Route>    
                <Route exact path='/item/:itemTitle/'> <ItemDetailContainer/> </Route>
                <Route exact path='/cart/'> <Cart /> </Route>
            </Switch>
        </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
