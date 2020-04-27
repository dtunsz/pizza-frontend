import React, { useState } from 'react';

export const OrderPriceContext = React.createContext();

export const OrderPriceContextProvider = ( (props) => {
    const [orderPrice, setOrderPrice] = useState(0);
    return(
        <OrderPriceContext.Provider value={[orderPrice, setOrderPrice]}>
            {props.children}
        </OrderPriceContext.Provider>
    )
}) ;