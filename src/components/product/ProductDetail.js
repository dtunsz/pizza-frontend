import React, { useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CurrencyContext } from '../../contexts/CurrencyContext';


function ProductDetail(props){
    const [cart, setCart] = useContext(CartContext);
    const [show, setShow] = useContext(CurrencyContext);
    const {product} = props;
    const {rate} = props;

    let converted;

    if (show.visible === true) {
        converted = `| $${(product.price * rate).toFixed(2)}`;
    }

    const handleClick = ( () => {
        const existingItem = cart.filter(item => item.id === product.id);
        if (existingItem.length > 0 ) {
            const nonExistingItems = cart.filter(item => item.id !== product.id);
            const item = { ...existingItem[0], units: existingItem[0].units + 1};
            setCart(() => [...nonExistingItems, item]);
        } 
        else {
            const item = {name: product.name, price: product.price, id: product.id, units: 1};
            setCart(currentState => [...currentState, item]);
        }


        
    });

    return(
        <div className="col s12 m4 space">
            <h6>{product.id}. {product.name}</h6>
            <img src={`/images/${product.id}.png`} width={200} alt={product.name}/>
            <p>{product.summary}</p>
            <p>product price: €{product.price} {converted} </p>
            <button onClick={handleClick} className="cart-button">add to cart</button>
        </div>
    );
}

export default ProductDetail