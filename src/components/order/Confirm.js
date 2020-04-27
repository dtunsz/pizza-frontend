import React,{useState , useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Confirm(props){
    const [confirm, setConfirm] = useState('');
    const orderId = props.match.params.orderId;

    useEffect( () => {
        axios.post(`http://murmuring-depths-10666.herokuapp.com/api/orders/confirm/${orderId}`, {
        })
        .then(res => {
            const reply = res.data.message
            const msg = ( <div>
                <p className="green-text">{reply}</p>
                <p className="">We deliver your order within 20 minutes</p>
                <p className="">Thank You for Patronizing Maggic Pizza</p>
            </div>)
            setConfirm(msg)
        })
        .catch(() => {
            const msg =  ( <div>
                <p className="red-text">Order is not found</p>
                <p className="">Kindly place an Order <NavLink to='/product' className="">here</NavLink></p>
            </div>)
            setConfirm(msg)
        })
    }, [orderId])
    return(
        <div>
            {confirm}
        </div>
    );
}

export default Confirm
