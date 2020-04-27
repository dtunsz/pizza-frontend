import React from 'react';

function CartHeader(props){
    const { cart } = props

    const totalItemsInCart = cart.reduce((acc,item) => acc + item.units, 0)

    return(
        <div>
            <h6>No Of Items: {totalItemsInCart}</h6>
        </div>
    );
}

export default CartHeader


