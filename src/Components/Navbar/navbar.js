import React from 'react';
import "./navbar.css";
import { Notifications,Language,Settings } from '@material-ui/icons';
import profileImg from "../../Assets/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg"
// import {  NotificationsNoneIcon } from '@material-ui/icons';



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarWrap">
                <div className="logoWrap"><h1 className="logo">Simply</h1></div>
                <div className="profileMain">
                    <div className="profileIcon">
                        <Notifications />
                        <span className="notiNumber">2</span> 
                    </div>
                    <div className="profileIcon">
                        <Language />
                        <span className="notiNumber">2</span> 
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
