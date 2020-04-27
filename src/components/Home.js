import React from 'react'
import {NavLink} from 'react-router-dom'

function Home() {
    return(
        <div>
            <h5>Welcome to Maggic Pizza</h5>
            <p>Maggic Pizza is the best choice for quick delivery of tasty Pizza to your doorstep</p>
            <p>Make your Choice from our <NavLink to='/product' className="">Menu</NavLink> and get
                your order delivered to your doorstep in 20 minutes
            </p>
        </div>
    );
}

export default Home