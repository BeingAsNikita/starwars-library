import React from 'react';
import '../Content/Content.scss';
import './Transition.scss';
import Card from '../Card/Card';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const Content = ({ data, isLoading, setModalData, setSpeciesThunk }) => {
    return (
        <TransitionGroup>
            <ul className="content__card-list">

                {
                    isLoading
                        ? 'Please wait...'
                        : data.map((item) => {

                            return (
                                <CSSTransition
                                    in={true}
                                   
                                    key={item.name}
                                    timeout={500}
                                    classNames="card">
                                    <Card key={item.name}
                                        setModalData={setModalData}
                                        setSpeciesThunk={setSpeciesThunk}
                                        data={item}
                                    />
                                </CSSTransition>
                            )
                        })
                }

            </ul>

        </TransitionGroup>
    )
}



export default Content;