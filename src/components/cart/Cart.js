import React, { useContext, useState } from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import {CartContext} from '../../contexts/CartContext';


function Cart(){
    const [cart] = useContext(CartContext);
    return(
        <div>
            <h5>Order Cart</h5>
            <CartHeader cart = {cart}/>
            <hr />
            {
                cart && cart.map( (product) => {
                    return(
                        <CartItem product={product} key={product.id}  />
                    )
                })
            }
            <CartFooter cart ={cart}/>
        </div>
    );
}

export default Cart