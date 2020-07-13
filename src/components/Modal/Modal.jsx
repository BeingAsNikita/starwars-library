import React from 'react';
import '../Modal/Modal.scss';
import Portal from '../Portal/Portal';
import Modalbody from './Modalbody';



const Modal = ({ data, isShow, hideModal, isLoading }) => {


    const closeModal = (e) => {
        if (e.target.classList.contains('modal-wrapper') || e.target.classList.contains('modal_close')) {
            hideModal()
            document.querySelector('body').classList.remove('scrolling-stop')
        }
    }


    return (
        isShow && <Portal>
            <div className="modal-wrapper" onClick={closeModal}>

            {isLoading ? <Modalbody data={data} closeModal={closeModal} /> : 'Loading...'}
               {/*  <div className="modal-body">
                    <div className="modal-header">
                        <div className='card__avatar'>{data.name[0]}</div>
                        <p className="card__name">{data.name}</p>
                        <button className="modal_close" onClick={closeModal}>
                            <svg  width="14" height="14" viewBox="0 0 14 14">
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

                </div> */}

            </div>
        </Portal>

    )
}



export default Modal;