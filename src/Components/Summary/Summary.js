import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Summary.css';
const Summary = (props) => {
    const cart = props.cart;

    let budget = 0;
    for (let i = 0; i < cart.length; i++) {
        const eachPlayer = cart[i];
        budget = budget + eachPlayer.Salary;
    }

    return (
        <div className="summary-div">

        <div className="d-flex justify-content-center hero-summary"></div>

            <div className="card cart-div">
                <div className="card-header">
                    <h5>Total Players Selected: {props.cart.length}</h5>
                </div>
                <ul className="list-group list-group-flush summary-ul">
                    {
                        cart.map(cartItem => <CartItem key={cartItem.id} cart={cartItem}></CartItem>)
                    }
                </ul>
                <div className="card-footer">
                    <h5>Total Budget: ${budget}</h5>
                    
                </div>
            </div>
        </div>
    );
};



export default Summary;
