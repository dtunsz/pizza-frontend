import React, { useState, useContext } from 'react';

export const CartContext = React.createContext();

export const CartContextProvider = ( (props) => {
    const [cart, setCart] = useState([]);
    return(
        <CartContext.Provider value={[cart,setCart]}>
            {props.children}
        </CartContext.Provider>
    )
});

export const CartMaker = (() => {
    const [cart, setCart] = useState({name: "Chicken Puff pizza", price: 45, units: 2});
    return {cart};
})