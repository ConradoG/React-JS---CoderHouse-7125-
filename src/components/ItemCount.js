import React, { Component } from 'react'
import Button from "./Button"

export default class ItemCount extends Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
  
    incrementCount = () => {
      this.setState({
        count: this.state.count +1
      });
    };
  
    decrementCount = () => {
      this.setState({
        count: this.state.count -1
      });
    };
  
    render() {
      let { count } = this.state;
      return (
        <div className="app" >
          <div style={{margin: "1rem"}}>
            <div class="count">
              <h4 class="text-info">COUNTER</h4>
              <h1>{ count }</h1>
            </div>
            <div class="">
              <Button title={"-"} action={this.decrementCount} />
              <Button title={"+"} action={this.incrementCount} />
            </div>
          </div>
        </div>
      );
    }
  }
