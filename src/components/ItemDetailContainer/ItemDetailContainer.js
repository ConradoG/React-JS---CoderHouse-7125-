import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'


const getItemDetail = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res([{title: "ITEM 1", price: "$100", img: "http://via.placeholder.com/700x450", descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat laborum ut beatae ullam suscipit veniam. " }])
        },3000)
       });
}

export default function ItemDetailContainer() {

    const [item, setItem] = useState([])
    useEffect(() => {
        getItemDetail().then(item => {
            setItem(item)
        })
    }, [])

    return <div>
        <ItemDetail title={item.title} price={item.price} img={item.img} descp={item.descp} />
        </div>   
    }
