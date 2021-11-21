import { Link } from "react-router-dom";
import "./sidebar.css";
import { SidebarList, QuickMenu, Notifications, User } from "./sidebarList";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrap">
                <div className="sidebarMenu">
                    <div className="sidebarTitle"><h3>Dashboard</h3></div>
                    <ul className="list">
                        {SidebarList.map((items,index) => {
                            return (
                                <li key={index} className="items">
                                    <Link to={items.route} className="itemLink">
                                        <div className="icons">{items.icon}</div>
                                        {items.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="sidebarTitle"><h3>QuickMenu</h3></div>
                    <ul className="list">
                        {QuickMenu.map((items,index) => {
                            return (
                                <li key={index} className="items">
                                    <Link to={items.route} className="itemLink">
                                        <div className="icons">{items.icon}</div>
                                        {items.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="sidebarTitle"><h3>Notifications</h3></div>
                    <ul className="list">
                        {Notifications.map((items,index) => {
                            return (
                                <li key={index} className="items">
                                    <Link to={items.route} className="itemLink">
                                        <div className="icons">{items.icon}</div>
                                        {items.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="sidebarTitle"><h3>Staff</h3></div>
                    <ul className="list">
                        {User.map((items,index) => {
                            return (
                                <li key={index} className="items">
                                    <Link to={items.route} className="itemLink">
                                        <div className="icons">{items.icon}</div>
                                        {items.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
