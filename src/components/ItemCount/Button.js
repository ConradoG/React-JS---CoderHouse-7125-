import React, { Component } from 'react'

export default class Button extends Component {
  render(){
    let { title, action } = this.props
    return(
      <button className="btn btn-lg btn-outline-info font-weight-bold" onClick = { action }>{ title }</button>
    )}
}