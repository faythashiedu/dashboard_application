import "./editUser.css";
import {useState} from 'react';
import { useParams } from "react-router";
import { UserRows } from "../../Components/UserList";
import { LocationOn, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons";
import ModalCom from "../../HOC/modal";

const EditUser = () => {

    const { id } = useParams();

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <div className="editUser">
            <div className="userEditMain">
                <h1>Edit User</h1>
                <button className="editUserBtn" onClick={openModal}>Create</button>
                <ModalCom showModal={showModal} setShowModal={setShowModal} ><h1>Hello</h1></ModalCom>
            </div>
            <div className="userWrap">
                <div className="editShow">
                    {
                        UserRows
                        .filter((user) => user.id == id)
                        .map((user) => {
                            return (
                                <div key={user.id} className="editProfile">
                                    <div className="editcover">
                                        <img src={user.Avatar} alt="" className="editImg" />
                                        <div>
                                            <h4 className="editName">{user.Username}</h4>    
                                            <h6 className="editstats">{user.status}</h6>
                                        </div>     
                                    </div>          
                                    <div className="editDetails">
                                        <h3>Account details</h3>
                                        <div className="editInfo">
                                            <PermIdentity />
                                            <h4>{user.FirstName} {user.LastName}</h4>
                                        </div>
                                        <div className="editInfo">
                                            <LocationOn />
                                            <h4>100.100.225.1</h4>
                                        </div>
                                        <h3>User Details</h3>
                                        <div className="editInfo">
                                            <PhoneAndroid />
                                            <h4>+234 803 454 6782</h4>
                                        </div>
                                        <div className="editInfo">
                                            <MailOutline />
                                            <h4>{user.Email}</h4>
                                        </div>
                                        <div className="editInfo">
                                            <LocationSearching />
                                            <h4>Lagos | Nigeria</h4>
                                        </div>
                                    </div>                     
                                </div>
                            )
                        })
                    }
                </div>
                <div className="updateUser">
                    <h3>Edit</h3>
                    <form className="editForm">
                        <div className="formWrap">
                            <label className="formLabel">First Name: </label>
                            <input className="formInput" type="text" placeholder="Firstname" />
                        </div>
                        <div className="formWrap">
                            <label className="formLabel">Last Name: </label>
                            <input className="formInput" type="text" placeholder="Lastname" />
                        </div>
                        <div className="formWrap">
                            <label className="formLabel">E-mail: </label>
                            <input className="formInput" type="email" placeholder="Email" />
                        </div>
                        <div className="formWrap">
                            <label className="formLabel">Phone Number: </label>
                            <input className="formInput" type="tel" placeholder="Phone" />
                        </div>
                        <div className="formWrap">
                            <label className="formLabel">Address: </label>
                            <input className="formInput" type="text" placeholder="Home address" />
                        </div>
                    </form>
                    <div className="userUpdate">
                        <button className="updateBtn">Update</button>
                    </div>
                </div>
            </div>
            <div className="logOut">
                <button className="logoutBtn">Logout this user</button>
            </div>
        </div>
    )
}

export default EditUser;
