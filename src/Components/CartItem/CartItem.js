import React from 'react';
import './CartItem.css';

const CartItem = (props) => {

    const {name, Salary, Image} = props.cart;
    return (
        <div>
            <li className="list-group-item">
            <div className="row">
                <div className="col-md-4">
                    <img className="item-image" src={Image} alt=""></img>
                </div>
                <div className="col-md-8 text-start">
                <p className="text-start">Name: {name}</p> <p className="text-start">Salary: ${Salary}</p>
                </div>
            </div>
        </li>
        </div>
    );
};

export default CartItem;