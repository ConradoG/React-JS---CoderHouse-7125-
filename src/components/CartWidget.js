import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function CartWidget (){
    return <button class="btn btn-outline-primary btn-rounded waves-effect" style={{margin: '1rem'}}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
        </button>
}

export default CartWidget