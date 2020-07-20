import React, { useEffect, useState } from 'react';
import starShip from '../../assets/img/preloader.svg';
import './Preloader.scss'

const Preloader = (props) => {
    return (
        <div className="preloader__wrapper">
            <div className="preloader">
                <div className="starship">
                    <img src={starShip}></img>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


            </div>
        </div>
    )
}

export default Preloader;