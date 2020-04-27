import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Delivered from './../Delivered.js';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Delivered></Delivered>, div)
})