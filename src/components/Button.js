import React, { Component } from 'react'

export default class Button extends Component {
  render(){
    let { title, task } = this.props
    return(
      <button class="btn btn-lg btn-outline-info font-weight-bold" onClick = { task }>{ title }</button>
    )}
}