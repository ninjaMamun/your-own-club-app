import React, { useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Player.css';
import fakeData from '../../fakeData/playersData';
import { useState } from 'react';
import EachPlayer from '../Player/EachPlayer';
import Summary from '../Summary/Summary';

const Player = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(fakeData);
    }, [])

    const [cart, setCart] = useState([]);

    const handleAddCartPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (

        <div className="container">
            <div className="row ">
                <div className="col-8 ">
                    <div className="row d-flex justify-content-between">
                        {
                            players.map(player => <EachPlayer handleAddCartPlayer={handleAddCartPlayer} key={player.id} player={player}></EachPlayer>)
                        }

                    </div>

                </div>

                <div className="col-4">

                    <Summary cart={cart}></Summary>

                </div>

            </div>
        </div>


    );
};

export default Player;


