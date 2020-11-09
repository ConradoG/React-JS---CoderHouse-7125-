import React from 'react';
import Title from './components/Title'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>  

      <NavBar/>

      <Route> <Title title="E-COMMERCE" author="CONRADO GASSA"/>  </Route> 

      <Route> <ItemListContainer />  </Route>  

      <Switch> 
        <Route exact path='/item/itemTitle:'> <ItemDetailContainer/> </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
