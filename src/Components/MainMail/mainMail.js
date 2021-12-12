import { Refresh } from '@material-ui/icons';
import React from 'react';
import Checkbox from '../Inputs/checkbox';
import RefreshI from '../Inputs/refresh';
import SearchInput from '../Inputs/searchInput';
import Select from '../Inputs/select';
import "./mainMail.css";

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
            <div className="mailContent">
                <Checkbox />
            </div>
        </div>
    )
}

export default MainMail
