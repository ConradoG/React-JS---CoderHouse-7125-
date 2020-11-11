import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'



const getItemDetail = (itemTitle) => {
    return new Promise ((res) => {
        setTimeout(() => {
            const items = [ {itemTitle: "ITEM 1", price: "$100", img: "http://via.placeholder.com/700x450", descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat laborum ut beatae ullam suscipit veniam. " },
                            {itemTitle: "ITEM 2", price: "$200", img: "http://via.placeholder.com/700x450", descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat laborum ut beatae ullam suscipit veniam. " },
                            {itemTitle: "ITEM 3", price: "$500", img: "http://via.placeholder.com/700x450", descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perspiciatis voluptatum a, quo nobis, non commodi quia repellendus sequi nulla voluptatem dicta reprehenderit, placeat laborum ut beatae ullam suscipit veniam. " }]

            res(items.find(i => i.itemTitle === itemTitle))
        },3000)
       });
}

export default function ItemDetailContainer() {
     
    const [item, setItem] = useState([])
    const {itemTitle} = useParams()
    
    useEffect(() => {
        getItemDetail(itemTitle).then(res => {
            setItem(res)
        })
    }, [itemTitle])

    return <div><ItemDetail itemTitle={item.itemTitle} price={item.price} img={item.img} descp={item.descp} />
     </div>
    }
