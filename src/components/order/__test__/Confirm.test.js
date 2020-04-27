import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Confirm from './../Confirm.js';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Confirm></Confirm>, div)
})