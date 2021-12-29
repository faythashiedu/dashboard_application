import React, {useState} from 'react';
import Checkbox from '../Inputs/checkbox';
import RefreshI from '../Inputs/refresh';
import SearchInput from '../Inputs/searchInput';
import Select from '../Inputs/select';
import "./mainMail.css";
import { MailData } from '../maildata';
import MailRow from '../MailRow/MailRow';

const MainMail = () => {
    return (
        <div className="mainMail">
            <div className="mailHeaderWrap">
                <div className="mailInput">
                    <span><Checkbox /></span>
                    <span><Select /></span>
                    <span><RefreshI /></span>
                </div>
                <SearchInput />
            </div>
            <div className="mailContentWrap">
                {MailData.map((items) => (
                    <MailRow
                        id={items.id}
                        starred={items.starred}
                        subject={items.subject}
                        brief={items.brief}
                        mailImg={items.mailImg}
                        timeline={items.timeline}
                        label={items.label}
                    />
                )
                )}
            </div>
            
        </div>
    )
}

export default MainMail
