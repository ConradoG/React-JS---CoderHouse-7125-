import React from 'react'

const Title = (props) => {

return <div style={{margin: '1rem'}}>
    
    <h3> {props.title} </h3>
<footer> {props.author} </footer>

</div>
}

export default Title