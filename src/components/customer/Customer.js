import React,{useState, useContext} from 'react';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';
import { OrderPriceContext } from '../../contexts/OrderPriceContext';
import { CurrencyContext } from '../../contexts/CurrencyContext';



function Customer(props){

    const [show] = useContext(CurrencyContext);

    const [err , setErr] = useState('');
    const [pass , setPass] = useState('');
    const rate = show.rate
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        phone: '',
        house: '',
        street: '',
        city: ''
    });

    const [cart, setCart] =useContext(CartContext);
    const [orderPrice, setOrderPrice] = useContext(OrderPriceContext)

    const emptyAllState = () => {
        setCustomer({});
        setCart([]);
        setOrderPrice(0);
    }

    const clearAllFields = () => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('house').value = '';
        document.getElementById('street').value = '';
        document.getElementById('city').value = '';
    }

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.id]: e.target.value
        })
    }

    const push = (orderId) => {
        setTimeout(() => {
            props.history.push('/confirm/'+orderId);
        }, 3000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (customer.city ==='' || customer.email ==='' || customer.house === '' || customer.name ==='' || customer.phone === '' || customer.street === '') {
            let err ="All fields are required"
            setErr(err)
        }
        if(cart.length < 1){
            let err ="Cart Cannot be Empty"
            setErr(err)
        }

        if (customer.city !=='' || customer.email !=='' || customer.house !== '' || customer.name !=='' || customer.phone !== '' || customer.street !== '') {
            if (cart.length > 0) {
                const orderPriceUsd = (orderPrice * rate).toFixed(2);
                const price = orderPrice * 100;
                const priceUsd = orderPriceUsd * 100
                
                axios.post(`https://murmuring-depths-10666.herokuapp.com/api/orders`, {
                // axios.post(`http://localhost:8000/api/orders`, {

                    ...customer, orderPriceEur: price, orderPriceUsd: priceUsd , cart:cart
                })
                .then(res => {
                    let pass ="Your Order has been Placed confirm your the Order on the next page";
                    setPass(pass);
                    emptyAllState();
                    clearAllFields();
                    console.log(res.data);
                    console.log(res.data.order[0].orderId)
                    push(res.data.order[0].orderId);
                })
                .catch( (err) => {
                    let msg = "Unable to place Order, Please Retry";
                    setErr(msg);
                })
            }
            
        }
    }

    return(
        <div>
            <h5>Please Enter Details</h5>
            <p className="red-text">{err}</p>
            <p className="green-text">{pass}</p>
            <form onSubmit={handleSubmit}>
                <h6>Contact Information</h6>
                <input type="text" id='name' onChange={handleChange} placeholder="name"/>
                <input type="email" id='email' onChange={handleChange} placeholder="email"/>
                <input type="text" id='phone' onChange={handleChange} placeholder="phone number"/>
                <br/>
                <h6>Delivery Information</h6>
                <input type="text" id='house' onChange={handleChange} placeholder="house number"/>
                <input type="text" id='street' onChange={handleChange}  placeholder="street name"/>
                <input type="text" id='city' onChange={handleChange} placeholder="city"/>

                <button className="btn red darken-1 right z-depth-0">Make Order</button>
            </form>
        </div>
    );
}

export default Customer