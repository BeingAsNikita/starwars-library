import React from 'react';
import '../Modal/Modal.scss';
import Portal from '../Portal/Portal';
import Modalbody from './Modalbody';
import Preloader from '../Preloader/Preloader';



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

            {isLoading 
            ? <Modalbody data={data} closeModal={closeModal} /> 
            : <Preloader/>}
    

            </div>
        </Portal>

    )
}



export default Modal;