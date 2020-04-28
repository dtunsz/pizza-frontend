import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { CartContextProvider } from './contexts/CartContext';
import { OrderPriceContextProvider } from './contexts/OrderPriceContext';
import { CurrencyContextProvider } from './contexts/CurrencyContext';
import Navbar from "./components/layout/Navbar";
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/cart/Cart';
import Product from './components/product/Product';
import Customer from './components/customer/Customer';
import Delivered from './components/order/Delivered';
import Confirmed from './components/order/Confirmed';


function PizzaApp(){
    return(
        <BrowserRouter>
            <CartContextProvider>
                <OrderPriceContextProvider>
                    <CurrencyContextProvider>
                        <div>
                            <Navbar />
                            <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/menu" component={Menu} />
                                <Route path="/product" component={Product} />
                                <Route path="/cart" component={Cart} />
                                <Route path="/confirm/:orderId" component={Confirmed} />
                                <Route path="/customer" component={Customer} />
                                <Route path="/deliver" component={Delivered} />
                            </Switch>
                            </div>
                        </div>
                    </CurrencyContextProvider>
                </OrderPriceContextProvider>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default PizzaApp



