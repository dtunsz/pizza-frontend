import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Confirmed from '../Confirmed.js';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Confirmed></Confirmed>, div)
})