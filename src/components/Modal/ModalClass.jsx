import React, { useState, useEffect, Component, PureComponent } from 'react';
import '../Modal/Modal.scss';
import Portal from '../Portal/Portal';
import gender from '../../assets/img/gender.svg';
import homeword from '../../assets/img/homeword.svg';
import speciesIcon from '../../assets/img/species.svg';
import films from '../../assets/img/films.svg';
import birth_year from '../../assets/img/birth_year.svg';
import { API } from '../../API/api';
import { getDataFromArray } from '../../utils/objectsHelper';



class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            species: 'unknown',
            homeworld: null,
            films: null
        }
    }


    componentDidMount() {
        this.fetchData(this.props.data.species, 'name').then(data => {
            if (data.length > 0) {
                this.setState({ species: data[0] })
            }
        })
        this.fetchData(this.props.data.films, 'title').then(data => {
            this.setState({ films: data })
        })
        API.getInfo(this.props.data.homeworld).then(data => {
            this.setState({ homeworld: data.data.name })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.fetchData(this.props.data.species, 'name').then(data => {
                if (data.length > 0) {
                    this.setState({ species: data[0] })
                }
            })
            this.fetchData(this.props.data.films, 'title').then(data => {
                this.setState({ films: data })
            })
            API.getInfo(this.props.data.homeworld).then(data => {
                this.setState({ homeworld: data.data.name })
            })
        }
    }

    fetchData = async (urls, name) => {
        return await getDataFromArray(urls, name)
    }

    closeModal = (e) => {
            this.props.hideModal()
            document.querySelector('body').classList.remove('scrolling-stop')

    }

    render() {
        const { data, isShow } = this.props
        return (
            isShow && <Portal>
                <div className="modal-wrapper" >
                    <div className="modal-body">
                        <div className="modal-header">
                            <div className='card__avatar'>{data.name[0]}</div>
                            <p className="card__name">{data.name}</p>
                            <button className="modal_close" onClick={this.closeModal}>
                                <svg className="close" width="14" height="14" viewBox="0 0 14 14">
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
                                <span>{this.state.species}</span>
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

                                <span>{this.state.homeworld ? this.state.homeworld : "loading..."}</span>
                            </li>
                            <li className="modal__item">
                                <div className="modal__item-title">
                                    <img src={films} alt='icon' />
                                    <span>Films </span>
                                </div>

                                <span>
                                    {(this.state.films)
                                        ? this.state.films.map(film => <span key={film}>{film}</span>)
                                        : "loading..."}
                                </span>
                            </li>
                        </ul>

                    </div>

                </div>
            </Portal>

        )
    }


}



export default Modal;