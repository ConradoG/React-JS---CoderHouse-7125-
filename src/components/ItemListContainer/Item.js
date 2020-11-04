import React from 'react'

export default function Item({title, price, img}) {
   
   return   <div className="col-lg-3" style={{margin: "2rem"}}>
              <div className="card h-100">
                <img className="card-img-top" href="# " src={img} alt=" "/>
                <div className="card-body  bg-dark">
                  <h4 className="card-title btn btn-info btn-rounded"> {title} </h4>
                  <h5 className="price text-white">{price}</h5>
                </div>
              </div>
            </div>
          
}
