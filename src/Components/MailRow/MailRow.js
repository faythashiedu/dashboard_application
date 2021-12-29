import React,{useState} from 'react';
import { Star, StarOutline } from '@material-ui/icons';
import "../MainMail/mainMail.css";
import Checkbox from '../Inputs/checkbox';

const MailRow = ({id,starred,subject,brief,mailImg,timeline,label}) => {
    const [starOpen, setStarOpen] = useState(starred)

    const toggleStar = () => {
        setStarOpen(!starOpen)
    }
    return (
        <div className="mailContent">
            <Checkbox />
            <div onClick={toggleStar} className="starWrap">
                {starOpen && <Star />}
                {!starOpen && <StarOutline />}
            </div>
            
            <div className="mailinfo">
                <div><img src={mailImg} className="mailPic" /></div>
                <div className="mailSubWrap">
                    <div className="mailSubject">
                        <h4>{subject}</h4>
                        <h4>{timeline}</h4>
                    </div>
                    <p className="mailText">{brief}</p>
                    <div className="labelTag">
                        {
                            label.map((labels) => {
                                return (
                                    <span className={labels}>{labels}</span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MailRow
