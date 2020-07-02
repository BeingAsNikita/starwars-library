import React, { useState, useEffect } from 'react';
import '../Card/Card.scss';
import { API } from '../../API/api';


const Card = (props) => {

    let [species, setSpecies] = useState('')
    let url = props.species


    useEffect(() => {
        if (url.length > 0 && url !== undefined) {
            let fetchData = async () => {
                let result = await API.getInfo(url);

                setSpecies(result.data.name);
            }
            fetchData();

        } else {
            setSpecies('Unknown')
        }

    }, [species, url])

    return (
        <li className="card">
            <span className="card__avatar">{props.name[0]}</span>
            <span className="card__name">{props.name}</span>
            <span className="card__species">
                {
                    species
                }
            </span>
        </li>
    )
}

export default Card;