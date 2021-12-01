import React from 'react';
import { Close } from '@material-ui/icons';
import './modal.css';

const PopUp = ({showPopup, setShowPopup, close, children}) => {
    return (
        <>
            {showPopup ? 
                <div className="popupMain">
                    {children}
                    {close && <div className="cloeBtn" onClick={() => setShowPopup(item => !item)}><Close /></div>}
                </div> 
                : null
            }     
        </>
    )
}

export default PopUp;
