import React from 'react'
import { Link } from 'react-router-dom'



export default function Item({itemTitle, price, img}) {
   
   return   <div className="col-lg-3" style={{margin: "2rem"}}>
              <div className="card h-100" >
                <Link to={`/item/${itemTitle}`}><img className="card-img-top" href="# " src={img} alt=" "/></Link>
                <div className="card-body  bg-dark">
                  <Link to={`/item/${itemTitle}`}><h4 className="card-title btn btn-info btn-rounded"> {itemTitle} </h4></Link>
                  <h5 className="price text-white">{price}</h5>
                </div>
              </div>
            </div>
          
}
