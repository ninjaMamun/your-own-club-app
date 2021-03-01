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
    <div className="">
        
            <div className="card cart-div">
                <div className="card-header">
                    <h3>Total Players Selected: {props.cart.length}</h3>
                </div>
                <ul className="list-group list-group-flush">
                {
                    cart.map(cartItem => <CartItem cart={cartItem}></CartItem>)
                }
                </ul>
                <div className="card-footer">
                    <h4>Total Budget: ${budget}</h4>
                </div>
            </div>
    </div>
    );
};



export default Summary;
