import React, { Component } from 'react'
import Button from './Button'
import OnAdd from './OnAdd'

export default class ItemCount extends Component {
    constructor() {
      super();
      this.state = {count: 0, stock:15, initial:0}
    }
    

    incrementCount = () => {
      if (this.state.count < this.state.stock){
      this.setState({
        count: this.state.count +1
      })};
    };
  
    decrementCount = () => {
      this.setState({
        count: this.state.count -1
      });
    };
  
    addCarrito = () => {
      alert("Añadiste " + this.state.count + " items al carrito!")
    }



    render() {
      let { count } = this.state;
      return (
        
        <div className="border border-info w-25 mx-auto" style={{margin:"1rem"}}>
          <div>
            <div className="cuenta">
              <h1>{ count }</h1>
            </div>
            <div className="botones">
              <Button title={"-"} action={this.decrementCount} />
              <Button title={"+"} action={this.incrementCount} />
            </div>
              <OnAdd title={"Agregar al carrito!"} action={this.addCarrito} />
          </div>
        </div>
      );
    }
  }
