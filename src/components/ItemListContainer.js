import React from 'react'

function ItemListContainer(){

    return <div className="row">

    <div class="col-lg-3" style={{margin: "2rem"}}>
      <div class="card h-100">
        <img className="card-img-top" href="# " src="http://via.placeholder.com/700x450" alt=" "/>
        <div class="card-body  bg-dark">
          <h4 className="card-title btn btn-info btn-rounded">
            ITEM 1
          </h4>
          <h5 className="text-white">$100</h5>
          <p class="card-text text-white">Descripción item 1</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3" style={{margin: "2rem"}}>
      <div class="card h-100">
        <img className="card-img-top" src="http://via.placeholder.com/700x450" alt=" "/>
        <div class="card-body  bg-dark">
          <h4 className="card-title btn btn-info btn-rounded">
            ITEM 2
          </h4>
          <h5 className="text-white">$200</h5>
          <p class="card-text text-white">Descripción item 2</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3" style={{margin: "2rem"}}>
      <div class="card h-100">
        <img className="card-img-top" src="http://via.placeholder.com/700x450" alt=" "/>
        <div class="card-body  bg-dark">
          <h4 className="card-title btn btn-info btn-rounded">
            ITEM 3
          </h4>
          <h5 className="text-white">$500</h5>
          <p class="card-text text-white">Descripción item 3</p>
        </div>
      </div>
    </div>

</div>
  


}

export default ItemListContainer