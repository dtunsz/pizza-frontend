import React, { useState} from 'react';
import axios from 'axios';

function Delivered(props){
    const [ order, setOrder ] = useState({err: '', msg: ''})

    const handleChange = (e) => {
        setOrder({

            [e.target.id]: e.target.value
        })
    }
    const push = () => {
        setTimeout(() => {
            props.history.push('/product');
        }, 5000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(order)
        console.log(order.order)
        
        axios.post(`https://murmuring-depths-10666.herokuapp.com/api/orders/deliver/${order.order}`, {
        // axios.post(`http://localhost:8000/api/orders/deliver/${order.order}`, {
        })
        .then(res => {
            console.log(res);
            console.log(res.data.message);
            let msg = res.data.message
            setOrder({...order, msg});
        })
        .catch( (error) => {
            console.log(error);
            let err = 'Order does not exist';
            setOrder({...order, err});
        })

    }

    return(
        <div>
            <h5>Confirm or Check Delivery Status</h5>
            <h6>Please Enter Your unique Order number</h6>
            <form onSubmit={handleSubmit}>
                <input type="text" id="order" onChange={handleChange} />
                <button className="btn red darken-1 right z-depth-0">Confirm Delivery</button>
            </form>
            <p className="red-text">{order.err}</p>
            <p className="green-text">{order.msg}</p>
        </div>
    )
}

export default Delivered