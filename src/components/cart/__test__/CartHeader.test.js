import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
// import Cart from './../Cart.js';
import CartHeader from './../CartHeader.js';
// import CartItem from './../CartItem.js';
// import CartFooter from './../CartFooter.js';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <CartHeader></CartHeader>, div)
})