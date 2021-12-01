import React from 'react';
import "./notiPopup.css";

const NotiPopup = () => {
    const Notify = [
        {
            header: "Black Friday Sales!",
            info: "It's time for our black friday awoof sales, get a discount for every item you purchase from Simply's products.\n Limited time only-Do not miss out!",
        },
        {
            header: "Black Friday Sales!",
            info: "It's time for our black friday awoof sales, get a discount for every item you purchase from Simply's products.\n Limited time only-Do not miss out!",
        },
        {
            header: "Black Friday Sales!",
            info: "It's time for our black friday awoof sales, get a discount for every item you purchase from Simply's products.\n Limited time only-Do not miss out!",
        },
    ]
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
