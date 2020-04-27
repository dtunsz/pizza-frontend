import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { CartContext } from '../../contexts/CartContext';

function Navbar(){
    const [show, setShow] = useContext(CurrencyContext);
    const [cart] = useContext(CartContext);
    const totalItemsInCart = cart.reduce((acc,item) => acc +item.units, 0)

    const changeCurrency = () => {
        if (show.visible === false) {
            const visible = true
            const currency ='EUR'
            setShow({...show, visible, currency});
        } 
        else {
            const visible = false
            const currency ='USD'
            setShow({...show, visible, currency});
        }
    }
    return(

        <nav className="red darken-1">
            <div className="container">
            <Link to='/' className="brand-logo">Maggic Pizza</Link> 
                <ul className="right">
                    <li><button onClick={changeCurrency} className="btn red nav-button">{show.currency}</button></li>
                    <li><NavLink to='/cart'>Cart ({totalItemsInCart})</NavLink></li>
                    <li><NavLink to='/product'>Menu</NavLink></li>
                    <li><NavLink to='/deliver'>Check Order</NavLink></li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar