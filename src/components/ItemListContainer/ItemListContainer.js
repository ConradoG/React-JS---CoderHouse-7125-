import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const getItems = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res([{title: "ITEM 1", price: "$100", img: "http://via.placeholder.com/700x450" },
            {title: "ITEM 2", price: "$200", img: "http://via.placeholder.com/700x450" },
            {title: "ITEM 3", price: "$500", img: "http://via.placeholder.com/700x450" }])
        },2000)
       });
}

export default function ItemListContainer() {

    const [items, setItems] = useState([])
    useEffect(() => {
        getItems().then(items => {
            setItems(items)
        })
    }, [])

    return <div className="row" style={{justifyContent:"center"}}>
        <ItemList listadoItems={items} />
        </div>   
    }
