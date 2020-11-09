import React from 'react'
import ItemCount from '../ItemCount/ItemCount';


export default function ItemDetail({img, itemTitle, price, descp}) {
   
    return      <div className="card w-50 h-50" style={{margin:"1rem"}}>
                    <img className="card-img-top" href="# " src={img} alt=" "/>
                    <div className="card-body  bg-dark">
                        <h4 className="card-title btn btn-info btn-rounded"> {itemTitle} </h4>
                        <h5 className="price text-white">{price}</h5>
                        <p className="text-white">{descp}</p>
                    </div>
                    <ItemCount/>
                </div>
            
}
   
   
   
   
 /*  OTRO TIPO DE CARD --->

   <div className="card">
   
            <div className="view view-cascade overlay">
                <img className="card-img-top" alt="foto-item">{img}</img>
                  <a href="# "><div className="mask rgba-white-slight"></div></a>
            </div>
   
            <div className="card-body card-body-cascade text-center">
                <h4 className="card-title"><strong>{title}</strong></h4>
                <h6 className="font-weight-bold indigo-text py-2">{price}</h6>
                <p className="card-text">{descp}</p>
            </div>

            <ItemCount/>
        </div>
*/