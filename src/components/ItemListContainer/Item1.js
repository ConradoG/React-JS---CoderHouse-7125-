import React from 'react'

export default function Item1(){
   
   return <div className="col-lg-3" style={{margin: "2rem"}}>
      <div className="card h-100">
        <img className="card-img-top" href="# " src="http://via.placeholder.com/700x450" alt=" "/>
        <div className="card-body  bg-dark">
          <h4 className="card-title btn btn-info btn-rounded">
            ITEM 1
          </h4>
          <h5 className="price text-white">$100</h5>
          <p className="card-text text-white">Descripción item 1</p>
        </div>
      </div>
    </div>
}
