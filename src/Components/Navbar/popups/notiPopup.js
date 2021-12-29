import React from 'react';
import "./notiPopup.css";
import { Notify } from './popupData';

const NotiPopup = () => {
    return (
        <div className="notipop">
            <ul className="notiUl">
            {
                Notify.map((items) => {
                    return (
                       <li className="notiList">
                           <h3>{items.header}</h3>
                           <h5>{items.info}</h5>
                       </li>                         
                    )
                })
            }
            </ul>
        </div>
    )
}

export default NotiPopup;
