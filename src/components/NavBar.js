import React from 'react'

function NavBar(){
   
return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/#">Navbar : </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">

        <a className="nav-link" href="/#" border="5px">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/#">Contacto</a>
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