import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget (){
    return <button className="btn btn-outline-info btn-rounded waves-effect" style={{margin: '2 px'}}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
        </button>
}

export default CartWidget