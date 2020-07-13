import React, { useState, useEffect } from 'react';
import '../Card/Card.scss';
import PropTypes from 'prop-types';
import { API } from '../../API/api';

const Card = ({ data, setModalData, setSpeciesThunk }) => {

    let [species, setSpecies] = useState('unknown')

    let openModal = () => {
        setModalData(data)
        document.querySelector('body').classList.add('scrolling-stop')

    }

    useEffect(() => {
        if (data.species.length > 0) {
            API.getInfo(data.species[0]).then(res => {
                setSpecies(res.data.name)
            })
        }
       

    }, [data])
    return (
        <li className="card" onClick={openModal} >
            <span className="card__avatar">{data.name[0]}</span>
            <span className="card__name">{data.name}</span>
            <span className="card__species">
                {
                    species
                }
            </span>
        </li>
    )
}

Card.propTypes = {
    data: PropTypes.object
};

export default Card;