import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './Cart/CartWidget'

function NavBar(){
   
return <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand text-info" to="/#">CODERHOUSE - React JS 7125</NavLink>
 

  <div className="collapse navbar-collapse" id="navbar-supported-content">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item active">
        <a className="nav-link" href="/#" border="5px">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/#">Contacto</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/#">Nosotros</a>
      </li>

{/* DROPDOWN:
      <div className="dropdown show">
  <a className="btn btn-secondary dropdown-toggle" href="# " role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Categorías
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="# ">Categ 1</a>
    <a className="dropdown-item" href="# ">Categ 2</a>
    <a className="dropdown-item" href="# ">Categ 3</a>
  </div> 
</div> */}
</ul>

<CartWidget/>

{/* SEARCH:
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Buscar"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"/>
  </form>
*/}

  </div>
</nav>

}

export default NavBar