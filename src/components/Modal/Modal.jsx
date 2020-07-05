import React, { useState, useEffect } from 'react';
import '../Modal/Modal.scss';
import Portal from '../Portal/Portal';
import gender from '../../assets/img/gender.svg';
import homeword from '../../assets/img/homeword.svg';
import speciesIcon from '../../assets/img/species.svg';
import films from '../../assets/img/films.svg';
import birth_year from '../../assets/img/birth_year.svg';
import { API } from '../../API/api';



const Modal = ({ data, isShow, hideModal }) => {
    let [species, setSpecies] = useState(data.species)

  /*   useEffect(() => {
        let fetchData = async () => {
            let speciesData = await API.getInfo(species[0])
            setSpecies(speciesData.data.name)
        }
        console.log(species)
        console.log(data)
        fetchData()

        return () => {
            setSpecies(null)

          }

    }, [data.species]) */
 
    const closeModal = (e) => {
        if (e.target.classList.contains('modal-wrapper') || e.target.classList.contains('modal_close')) {
            hideModal()
        }
    }


    return (
        isShow && <Portal>
            <div className="modal-wrapper" onClick={closeModal}>
                <div className="modal-body">
                    <div className="modal-header">
                        <div className='card__avatar'>{data.name[0]}</div>
                        <p className="card__name">{data.name}</p>
                        <button className="modal_close" onClick={closeModal}>
                            <svg width="14" height="14" viewBox="0 0 14 14">
                                <path d="M1 13L13 1M13 13L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
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
                            <span>{/* data.species */ species ? species : "loading..."}</span>
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

                            <span>{/* data.homeworld */ "homeword"}</span>
                        </li>
                        <li className="modal__item">
                            <div className="modal__item-title">
                                <img src={films} alt='icon' />
                                <span>Films </span>
                            </div>

                            <span>{/* data.films */ "films"}</span>
                        </li>
                    </ul>

                </div>

            </div>
        </Portal>

    )
}



export default Modal;