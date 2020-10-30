import React from 'react'

export default function OnAdd(props){

return <button className="btn btn-info m-3" onClick ={props.action}> {props.title} </button>

}

