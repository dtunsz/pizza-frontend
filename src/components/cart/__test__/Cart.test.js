import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CartContext, CartContextProvider, CartMaker } from '../../../contexts/CartContext';
import { CurrencyContext, CurrencyContextProvider } from '../../../contexts/CartContext';
import { OrderPriceContext, OrderPriceContextProvider } from '../../../contexts/CartContext';
import ReactDOM from 'react-dom';
import Cart from './../Cart.js';
import CartHeader from './../CartHeader.js';
import CartItem from './../CartItem.js';
import CartFooter from './../CartFooter.js';


it("Context state and useState", () => {

        const wrapper = ({children}) => 
        <CartContextProvider value = {[]}>
            {children}
        </CartContextProvider>
        
    const { result } = renderHook(() => CartMaker(), { wrapper })

    console.log(result.current)

    expect(result.current.cart.units).toBe(2)
    // expect(result.current.assigned.units).toBe(2)

})