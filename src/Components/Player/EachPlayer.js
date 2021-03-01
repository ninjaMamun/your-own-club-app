import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faMoneyBill, faInfo, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import './EachPlayer.css'
const EachPlayer = (props) => {
    const { Image, name, Salary, nationality, position, Age } = props.player;
    const [isSelected , setIsSelected] = useState(false);
    const addToClubLogo = <FontAwesomeIcon icon={faUserPlus} />;
    const addedLogo = <FontAwesomeIcon icon={faCheckSquare} />;
    return (
        <div className="col-md-4 col-sm-6 player-div">

            <div className="card player-card-div">
                <img src={Image} className="card-img-top player-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><FontAwesomeIcon icon={faInfo} /> {name} is an professional footballer who plays as a {position} from {nationality}. He is {Age} years old</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><FontAwesomeIcon icon={faMoneyBill} /> Salary : $ {Salary}</li>
                </ul>
                <div className="card-body">
                    <button disabled={isSelected} type="button" onClick={() => {
                        props.handleAddCartPlayer(props.player)
                        setIsSelected(true)
                    }} className="btn btn-outline-success">{
                        isSelected? <span>{addedLogo} Added</span> : <span>{addToClubLogo} Add To Club</span>
                    }</button>
                </div>
            </div>
        </div>
    );
};

export default EachPlayer; 
