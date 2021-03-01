import React from 'react';

const CartItem = (props) => {
    console.log(props);
    return (
        <div>
            <li className="list-group-item">Name: {props.cart.name} <br></br>Salary: ${props.cart.Salary}</li> 
        </div>
    );
};

export default CartItem;