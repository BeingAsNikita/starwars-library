import React, { useState, useEffect } from 'react';
import '../Card/Card.scss';
import { API } from '../../API/api';


const Card = (props) => {

    let [species, setSpecies] = useState(props.species)



/*     useEffect(() => {
        if (species.length > 0 && species !== undefined) {
            let fetchData = async () => {
                let result = await API.getInfo(species);
                
                setSpecies(result.data.name);
            }

            fetchData()

        } else {
            setSpecies('Unknown')
        }

    }, [species]) */

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