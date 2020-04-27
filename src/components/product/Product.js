import React, { useState ,useEffect ,useContext } from 'react'
import ProductDetail from './ProductDetail'
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { NavLink } from 'react-router-dom';


function Product(){
    const [cart] = useContext(CartContext);
    const [show, setShow] = useContext(CurrencyContext);
    const [err, setErr] = useState('');
    const rate = show.rate
    const [products , setProducts] = useState([]);
    const totalItemsInCart = cart.reduce((acc,item) => acc +item.units, 0)
    useEffect( () => {
        axios.get('http://murmuring-depths-10666.herokuapp.com/api/products')
        .then( res => {
            res = res.data.product;
            setProducts(
                res
            )
        })
        .catch( (err) => {
            err= 'Unable to fetch Products please reload';
            setErr(err)
        })

        axios.get('https://api.exchangeratesapi.io/latest')
        .then( res => {
            const rate = res.data.rates.USD
            setShow({ ...show ,rate});
        })
        .catch( () => {
            const rate = 1.18;
            setShow({ ...show ,rate});
        })
    }, []);
    return(
        <div>
            <div className="row">
                <h4>Your Choice: {totalItemsInCart}</h4>
                <hr />
                { products  && products.map( product => {
                    return ( <ProductDetail product={product} key={product.id} rate={rate}  />
                    )
                })
                }    

            </div>
            <div className="right space-bottom">
                <NavLink to='/cart' className="link shift">View Cart</NavLink>
            </div>
            <div>
                <p className="red-text">{err}</p>
            </div>
        </div>
    );
}

export default Product


