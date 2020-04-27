import React,{ useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CurrencyContext } from '../../contexts/CurrencyContext';



function CartItem(props){
    const { product } =props

    const [cart, setCart] = useContext(CartContext)
    const [show ] = useContext(CurrencyContext);
    const rate = show.rate;

    const handleAddOne= ( () => {
        const allItems = cart
        const indexToUse = allItems.findIndex( item => item.id === product.id );
        allItems[indexToUse].units++
        setCart([...allItems]);
    });

    const handleRemoveOne = ( () => {
        const allItems = cart
        const indexToUse = allItems.findIndex( item => item.id === product.id );
        allItems[indexToUse].units--
        setCart([...allItems]);
    });

    const handleCancel = ( () => {
        const nonExistingItems = cart.filter(item => item.id !== product.id);
        setCart(nonExistingItems);
    });
    let removeOneButton;
    if (product.units > 1) {
        removeOneButton =<button onClick={handleRemoveOne} className="amber cart-item-button">-1</button>
    }

    let converted;
    if (show.visible === true) {
        converted = `| $${(product.price * rate).toFixed(2)}`;
    }
    return(
        <div>
            <img src={`/images/${product.id}.png`} width={70} alt={product.name}/>
            <p>Name: {product.name}</p>
            <p>Price: €{product.price} {converted}</p>
            <p>Quantity: {product.units}</p>
            {
                product.units > 1 ? (
                    <p>Subtotal: €{product.price * product.units} {
                        show.visible === true ? (<span>| ${(product.price * product.units * rate).toFixed(2)}</span>  ) :''
                    }</p>
                ) : ''
            }
            <button onClick={handleCancel} className="red cart-item-button">x</button>
            {removeOneButton}
            <button onClick={handleAddOne} className="green cart-item-button">+1</button>
            <hr />
        </div>
    );
}

export default CartItem



