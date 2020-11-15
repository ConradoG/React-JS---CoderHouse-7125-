import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

let stock
const handleAdd = (counter) => {
  return () => {
    if(stock <= 0){
      alert("No hay stock disponible")
    }else{
      alert("Se han añadido "+ counter +" items al carrito")
    }
    }
  }

export default function ItemDetail({img, itemTitle, price, descp}) {

    return      <div className="card w-50 " style={{marginLeft:"22rem"}}>
                    <img className="card-img-top" href="# " src={img} alt=" "/>
                    <div className="card-body  bg-dark">
                        <h4 className="card-title btn btn-info btn-rounded"> {itemTitle} </h4>
                        <h5 className="price text-white"> {price} </h5>
                        <p className="text-white"> {descp} </p>
                    </div>
                    <ItemCount onAdd={handleAdd} stock={15} initial={1}/>
                </div>
                
} 

   
/*
<div className="jumbotron text-center">
 
  <h4 className="card-title h4 pb-2"><strong>{itemTitle}</strong></h4>

  <div className="view overlay my-4">
    <img src={img} className="img-fluid" alt=" ">
    <a href="/#">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

  <h5 className="indigo-text h5 mb-4">{price}</h5>

  <p className="card-text">{descp}</p>

</div>
*/
