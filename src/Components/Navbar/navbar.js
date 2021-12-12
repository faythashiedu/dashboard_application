import React, {useState} from 'react';
import "./navbar.css";
import { Notifications,Language,Settings } from '@material-ui/icons';
import profileImg from "../../Assets/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg"
import PopUp from '../../HOC/notificationModal';
import NotiPopup from './popups/notiPopup';
import LangPopup from './popups/LangPopup';
import { PieUserData } from '../PieChart/pieData';
// import {  NotificationsNoneIcon } from '@material-ui/icons';



const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [langPopop, setLangPopup] = useState(false);

    const openLang = () => {
        // setLangPopup(prev => !prev)
        if (showPopup) {
            setShowPopup(item => !item)
        } else {
            setLangPopup(prev => !prev)
        }
    }

    const openPopup = () => {
        if (langPopop) {
            setLangPopup(prev => !prev)
        } else {
            setShowPopup(item => !item)
        }
    }
    return (
        <div className="navbar">
            <div className="navbarWrap">
                <div className="logoWrap"><h1 className="logo">Simply</h1></div>
                <div className="profileMain">
                    <div className="profileIcon" onClick={openPopup}>
                        <Notifications />
                        <span className="notiNumber">{PieUserData.length}</span> 
                        <PopUp showPopup={showPopup} setShowPopup={setShowPopup}>
                            <NotiPopup />
                        </PopUp>
                    </div>
                    <div className="profileIcon" onClick={openLang}>
                        <Language />
                        <PopUp showPopup={langPopop} setShowPopup={setLangPopup}>
                            <LangPopup />
                        </PopUp>
                    </div>
                    <div className="profileIcon">
                        <Settings />
                    </div>
                    <img src={profileImg} alt="girl profile" className="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
