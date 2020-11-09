import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const getItems = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res([{itemTitle: "ITEM 1", price: "$100", img: "http://via.placeholder.com/700x450" },
            {itemTitle: "ITEM 2", price: "$200", img: "http://via.placeholder.com/700x450" },
            {itemTitle: "ITEM 3", price: "$500", img: "http://via.placeholder.com/700x450" }])
        },2000)
       });
}

export default function ItemListContainer() {

    const [items, setItems] = useState([])
    useEffect(() => {
        getItems().then(itemTitle => {
            setItems(itemTitle)
        })
    }, [])

    return <div className="row bg-light" style={{justifyContent:"center"}}>
        <ItemList listadoItems={items} />
        </div>   
    }
