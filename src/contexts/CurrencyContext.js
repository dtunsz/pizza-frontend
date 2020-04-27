import React, { useState } from 'react';

export const CurrencyContext = React.createContext();

export const CurrencyContextProvider = ( (props) => {
    const [show, setShow] = useState({visible: false, currency: 'USD' ,rate: null});
    return(
        <CurrencyContext.Provider value={[show,setShow]}>
            {props.children}
        </CurrencyContext.Provider>
    )
}) ;