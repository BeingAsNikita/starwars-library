import React from 'react';
import '../Modal/Modal.scss';
import Portal from '../Portal/Portal';
import Modalbody from './Modalbody';
import Preloader from '../Preloader/Preloader';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



const Modal = ({ data, isShow, hideModal, isLoading }) => {


    const closeModal = (e) => {
        if (e.target.classList.contains('modal-wrapper') || e.target.classList.contains('modal_close')) {
            hideModal()
            document.querySelector('body').classList.remove('scrolling-stop')
        }
    }


    return (
        isShow && <TransitionGroup> <Portal>

                <div className="modal-wrapper" onClick={closeModal}>
                    {isLoading
                        ? <CSSTransition
                            in={isLoading}
                            timeout={{
                                enter: 500,
                                exit: 1000
                            }}
                            classNames="modalBody">
                            <Modalbody data={data} closeModal={closeModal} />
                        </CSSTransition>
                        : <Preloader />}


                </div>

            </Portal>
        </TransitionGroup>
    )
}



export default Modal;