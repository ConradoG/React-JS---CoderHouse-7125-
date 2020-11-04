import React from 'react'
import Item from './Item'

export default function ItemList(props) {

const items = props.listadoItems

    return items.map((item) => (
        <Item title={item.title} price={item.price} img={item.img}/>
    ))
    }
