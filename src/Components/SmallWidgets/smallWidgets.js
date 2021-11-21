import { Visibility } from "@material-ui/icons";
import { UserList } from "../UserList";
import "./smallWidgets.css";

const SmallWidgets = () => {
    return (
        <div className="widgetSm">
            <span className="widgetTitle">New Staff Members</span>
            <ul className="widgetsList">
                {UserList.map((staff,index) => {
                    return (
                        <li key={index} className="smallList">
                        <img src={staff.src} alt="" className="imgs" />
                        <div className="staffDetails">
                            <span className="staffname">{staff.name}</span>
                            <span className="stafftitle">{staff.job_title}</span>
                        </div>
                        <button className="display">
                            <Visibility className="eye" />
                            Display
                        </button>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SmallWidgets;
