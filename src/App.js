import { useReducer } from 'react';
import './assets/scss/all.scss';
import { CartContext, CartReducer, CartInit } from './store/store';

import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {

    const reducer = useReducer(CartReducer, CartInit);

    return (
        <CartContext.Provider value={reducer}>
            <Navbar />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-7">
                        <Products />
                    </div>
                    <div className="col-md-5">
                        <Cart />
                    </div>
                </div>
            </div>
        </CartContext.Provider>
    );
}

export default App;
