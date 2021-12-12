import React, { useState } from 'react';
import "./mailnav.css";
import clsx from "clsx";
import { Adjust, AllInbox, Create, Delete, Drafts, DraftsOutlined, DraftsTwoTone, Filter, FilterList, FilterListOutlined, FilterListTwoTone, Label, LabelImportantOutlined, LocalOffer, Mail, Send, Star } from "@material-ui/icons";

const MailNav = () => {
    const [mailNavOpen, setIsMailNavOpen] = useState(false)

    const toggleMailNav = () => {
        setIsMailNavOpen(!mailNavOpen);
    };

    return (
        <div className={clsx({
            "mailNavClose": !mailNavOpen,
            "mailNav": mailNavOpen
        })}>
            <div className="comHeader">
                <button className="composeBtn">
                    <span><Create /></span>
                    <h4>COMPOSE</h4>
                </button>
                <div onClick={toggleMailNav}>
                    {   mailNavOpen &&
                        <span><DraftsTwoTone /></span>
                    }
                    {
                        !mailNavOpen &&
                        <span><Mail /></span>
                    }
                </div>
            </div>
            <div className="mailBox">
                <ul className="mailUl">
                    <li className="mailList">
                        <AllInbox />
                        <h4>Inbox</h4>
                    </li>
                    <li className="mailList">
                        <Send />
                        <h4>Send</h4>
                    </li>
                    <li className="mailList">
                        <Drafts />
                        <h4>Drafts</h4>
                    </li>
                    <li className="mailList">
                        <Adjust />
                        <h4>Spam</h4>
                    </li>
                    <li className="mailList">
                        <Delete />
                        <h4>Trash</h4>
                    </li>
                </ul>
            </div>
            <div className="filterWrap">
                {mailNavOpen && <h3>Filters</h3>}
                {!mailNavOpen && <FilterListOutlined />}
                <ul className="filterUl">
                    <li className="mailList">
                        <Star />
                        <h4>Starred</h4>
                    </li>
                    <li className="mailList">
                        <LocalOffer />
                        <h4>Important</h4>
                    </li>
                </ul>
            </div>
            <div className="labelWrap">
                {mailNavOpen && <h3>Labels</h3>}
                {!mailNavOpen && <Label />}
                <ul className="filterUl">
                    <li className="mailList">
                        <span className="labelDot"></span>
                        <h4>Social</h4>
                    </li>
                    <li className="mailList">
                        <span className="labelDot2"></span>
                        <h4>Clients</h4>
                    </li>
                    <li className="mailList">
                        <span className="labelDot3"></span>
                        <h4>Issues</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MailNav
