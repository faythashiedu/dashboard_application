import "./sidebar.css";
import { SidebarList, QuickMenu, Notifications, Users } from "./sidebarList";

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
                                    <div className="icons">{items.icon}</div>
                                    {items.title}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="sidebarTitle"><h3>QuickMenu</h3></div>
                    <ul className="list">
                        {QuickMenu.map((items,index) => {
                            return (
                                <li key={index} className="items">
                                    <div className="icons">{items.icon}</div>
                                    {items.title}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="sidebarTitle"><h3>Notifications</h3></div>
                    <ul className="list">
                        {Notifications.map((items,index) => {
                            return (
                                <li key={index} className="items">
                                    <div className="icons">{items.icon}</div>
                                    {items.title}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="sidebarTitle"><h3>Staff</h3></div>
                    <ul className="list">
                        {Users.map((items,index) => {
                            return (
                                <li key={index} className="items">
                                    <div className="icons">{items.icon}</div>
                                    {items.title}
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
