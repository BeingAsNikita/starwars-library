import React from 'react';

import gender from '../../assets/img/gender.svg';
import homeword from '../../assets/img/homeword.svg';
import speciesIcon from '../../assets/img/species.svg';
import films from '../../assets/img/films.svg';
import birth_year from '../../assets/img/birth_year.svg';



const Modalbody = ({ data, closeModal }) => {

    return (

                <div className="modal-body">
                    <div className="modal-header">
                        <div className='card__avatar'>{data.name[0]}</div>
                        <p className="card__name">{data.name}</p>
                        <button className="modal_close" onClick={closeModal}>
                        
                        </button>
                    </div>
                    <ul className="modal-footer">
                        <li className="modal__item">
                            <div className="modal__item-title">
                                <img src={birth_year} alt='icon' />
                                <span>Birth year </span>
                            </div>

                            <span>{data.birth_year}</span>
                        </li>

                        <li className="modal__item">
                            <div className="modal__item-title">
                                <img src={speciesIcon} alt='icon' />
                                <span>species</span>
                            </div>
                            <span>{data.species ? data.species : "loading..."}</span>
                        </li>
                        <li className="modal__item">
                            <div className="modal__item-title">
                                <img src={gender} alt='icon' />
                                <span>Gender </span>
                            </div>

                            <span>{data.gender}</span>
                        </li>
                        <li className="modal__item">
                            <div className="modal__item-title">
                                <img src={homeword} alt='icon' />
                                <span>Homeworld </span>
                            </div>

                            <span>{ data.homeworld ? data.homeword : "loading..." }</span>
                        </li>
                        <li className="modal__item">
                            <div className="modal__item-title">
                                <img src={films} alt='icon' />
                                <span>Films </span>
                            </div>

                            <span>
                                {(data.films)
                                    ? data.films.map(film => <span key={film}>{film}</span>)
                                    : "loading..."}
                            </span>
                        </li>
                    </ul>

                </div>

    )
}



export default Modalbody;