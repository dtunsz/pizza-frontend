import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from  'react-router-dom';
import { OrderPriceContext } from '../../contexts/OrderPriceContext';
import { CurrencyContext } from '../../contexts/CurrencyContext';

function CartFooter(props){
    const { cart } = props;
    const  [ show ] = useContext(CurrencyContext);
    const rate = show.rate
    const  [ orderPrice,setOrderPrice] = useContext(OrderPriceContext);

    let delivery = 15;

    if (cart.length<1) {
        delivery = 0;
    }
    const totalPriceOfItemsInCart = cart.reduce((acc,item) => acc + (item.units * item.price), delivery)
    useEffect( () => {
        setOrderPrice(totalPriceOfItemsInCart);
    })

    let converted;
    let convertedDelivery;

    if (show.visible === true) {
        convertedDelivery = `| $${(delivery * rate).toFixed(2)}`
        converted = `| $${(totalPriceOfItemsInCart * rate).toFixed(2)}`;
    }

    return(
        <div>
            <p>Delivery Cost: €{delivery} {convertedDelivery}</p>
            <p>Total Price: €{totalPriceOfItemsInCart} {converted}</p>
            <div className="right space-bottom">
                <NavLink to='/customer' className="link">Proceed to Checkout</NavLink>
            </div>
        </div>
    );
}

export default CartFooter