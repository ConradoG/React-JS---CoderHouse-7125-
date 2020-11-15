import React from 'react'

export default function Add({ onAdd, counter }){

return (<button className="btn btn-info m-3" onClick ={onAdd(counter)}> Agregar al carrito </button>)

}

