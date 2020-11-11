import React, { useContext, useState } from 'react'



export const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children, defaultCart }) => {

    const [cart, setCart] = useState(defaultCart)
    // Almacen de estado de compra
    // Funciona como nuestra propia API

    function add(item) {
        //Agrega el item y actualiza el estado
    }
    
    function remove(item) {
        //Remueve el item y actualiza el estado
    }

    return <CartContext.Provider value={[cart, add, remove]}>
        { children }
    </CartContext.Provider>
}
