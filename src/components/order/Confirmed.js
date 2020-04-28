import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';


function Confirmed(props) {
    const [ order, setOrder ] = useState([])
    const orderId = props.match.params.orderId;


    useEffect( () => {
        
        axios.get(`https://murmuring-depths-10666.herokuapp.com/api/orders/${orderId}`)
        // axios.get(`http://localhost:8000/api/orders/${orderId}`)
        .then(res => {
            console.log(res);
            setOrder(res.data)

        })
        .catch(() => {
        })
    }, [])

    
    const handleConfirm = () => {
        axios.post(`https://murmuring-depths-10666.herokuapp.com/api/orders/confirm/${orderId}`)
        // axios.post(`http://localhost:8000/api/orders/confirm/${orderId}`)
        .then(res => {
            console.log(res);
            console.log(res.data.message);
            setOrder(res.data)
        })
        .catch( (error) => {
        })
    }

    
    const toNum = (num) => num*0.01



    return(
        <div>
            {
                order.order && order.order[0].confirmed === 0 ? (
                    <div>
                    <h5>Please Confirm Your Order</h5>
                    <h6 className="amber-text">Please Note that only Confirmed Orders can and will be Delivered</h6>
                    </div>
                ) : (
                    <div>       
                        <p className="green-text">Your Order has been confirmed</p>
                        <p className="">We deliver orders within 20 minutes</p>
                        <p className="">Thank You for Patronizing Maggic Pizza</p>
                    </div>
                )
            }

            <hr />
            <div>
                {
                    order.order ? (
                        <div>
                            <div className="row">
                                <h5>Order Details<span>(Order ID: {order.order[0].orderId})</span></h5>
                                <div className="col s12 m6">
                                    <p>Name: <strong>{order.order[0].name}</strong></p>
                                    <p>Email: <strong>{order.order[0].email}</strong></p>
                                </div>
                                <div className="col s12 m6">
                                    <p>Phone: <strong>{order.order[0].phone}</strong></p>
                                    <p>City: <strong>{order.order[0].city}</strong></p>
                                </div>
                                <div className="col s12 m6">
                                    <p>House Number: <strong>{order.order[0].houseNumber}</strong></p>
                                    <p>Street: <strong>{order.order[0].streetName}</strong></p>
                                </div>
                                <div className="col s12 m6">
                                    <p>Price in EUR: <strong>€{(toNum(order.order[0].orderPriceEur)).toFixed(2)}</strong></p>
                                    <p>Price in USD: <strong>${(toNum(order.order[0].orderPriceUsd)).toFixed(2)}</strong></p>
                                </div>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price Per Unit (€)</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.order[0].orders.map( singleItem => {
                                        return (
                                            <Item singleItem = {singleItem}  key ={singleItem.id}/>
                                                
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                            {
                                order.order[0].confirmed === 0 ? (
                                    <div className="right">
                                        <br />
                                        <button onClick={handleConfirm} className="btn red darken-1">Confirm this order</button>
                                    </div>
                                ) : ''
                            }
                        </div>
                    ): ''
                }
            </div>
        </div>
    )
}

export default Confirmed