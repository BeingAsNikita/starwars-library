import React from 'react';
import '../Card/Card.scss';


const Card = ({ data, setModalDataSuccess }) => {

    let openModal = () => {
        setModalDataSuccess(data)
    }

    return (
        <li className="card" onClick={openModal}>
            <span className="card__avatar">{data.name[0]}</span>
            <span className="card__name">{data.name}</span>
            <span className="card__species">
                {
                    data.species[0]
                }
            </span>
        </li>
    )
}

export default Card;