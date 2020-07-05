import React from 'react';
import '../Modal/Modal.scss';
import Portal from '../Portal/Portal';


const Modal = ({ data, isShow, hideModal }) => {



    return (
        isShow && <Portal>
            <div className="modal-wrapper" onClick={hideModal}>
                <div className="modal-body">
                    <p>{data.name}</p>
                    <p>{data.height}</p>
                    <p>{data.mass}</p>
                </div>

            </div>
        </Portal>

    )
}



export default Modal;