import { Close } from '@material-ui/icons';
import React from 'react';
import "./modal.css";

const ModalCom = ({showModal, setShowModal, children, close}) => {
    return (
        <>
            {showModal ? 
                <div className="background">
                    {children}
                    {close && <div className="closeBtn" onClick={() => setShowModal(prev => !prev)}><Close /></div>}
                </div> 
                : null
            }
        </>
    )
}

export default ModalCom;
