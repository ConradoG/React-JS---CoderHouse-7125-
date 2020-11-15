import React, { useState } from 'react'
import Button from './Button'
import Add from './Add'

export default function ItemCount({onAdd, initial, stock}) {
  
let [counter, setCounter] = useState(initial)
    

    const handleClick = (amount) => {
      return (
        ()=>{ 
          let total = (amount < 0) ? 0: amount;
          let limiter = (total > stock) ? stock: total
          setCounter(limiter)  
            }
             )
    }

    let prop = {counter, setCounter}

      return (
        
        <div className="border border-info w-25 mx-auto" style={{margin:"1rem"}}>
          <div className="text-center">
            <div className="cuenta">
              <h1>{ counter }</h1>
            </div>
            <div className="botones">
              <Button suma = {false} onClick={handleClick} {...prop} />
              <Button suma = {true} onClick={handleClick} {...prop}/>
            </div>
              <Add onAdd = {onAdd} {...{counter}} />
          </div>
        </div>
      );
    } 
