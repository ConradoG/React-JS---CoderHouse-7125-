import React from 'react'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'

const task = new Promise ((resolve) => {

setTimeout(() => {
    resolve()
}, 2000);
})

export default function ItemList() {

task.then(resolve => {
   return <div className="row" style = {{justifyContent: "center" }}>
<Item1/>
<Item2/>
<Item3/>
</div>
})
}


/*
function ItemList(){

    return <div className="row" style = {{justifyContent: "center" }}>

<Item1/>

<Item2/>

<Item3/>

</div>
  
}

export default ItemList*/