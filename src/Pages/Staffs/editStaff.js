import "./editStaff.css";
import { StaffList } from "../../Components/UserList";
import { useParams } from "react-router";
import { AlternateEmail, DynamicFeed, LocationSearching, MailOutline, PhoneAndroid, Publish, WorkOutline } from "@material-ui/icons";

const EditStaff = () => {

    const { id } = useParams();

    return (
        <div className="staffWrap">
            <div className="editStaff">
                <h1>Edit Staff</h1>
                <button className="btnStaff">Create</button>
            </div>
            <div className="infoWrap">
                <div className="staffInfo">
                    {
                        StaffList
                        .filter((staff) => staff.id == id )
                        .map((staff) => {
                            return (
                                <div className="staffCover">
                                    <div className="profile">
                                        <img className="imgStaff" src={staff.src} alt="" />
                                        <div>
                                            <h4 className="nameStaff">{staff.name}</h4>
                                            <h6 className={`rank${staff.rank}`}>{staff.rank}</h6>
                                        </div>
                                    </div>
                                    <div className="detStaff">
                                        <h3>Work details</h3>
                                        <div className="infoStaff">
                                            <WorkOutline />
                                            <h4>{staff.job_title}</h4>
                                        </div>
                                        <div className="infoStaff">
                                            <DynamicFeed />
                                            <h4>Tech department</h4>
                                        </div>
                                        <h3>Staff Details</h3>
                                        <div className="infoStaff">
                                            <PhoneAndroid />
                                            <h4>+234 803 454 6782</h4>
                                        </div>
                                        <div className="infoStaff">
                                            <MailOutline />
                                            <h4>{staff.email}</h4>
                                        </div>
                                        <div className="infoStaff">
                                            <AlternateEmail />
                                            <h4>jondoe@simplyStaff.com</h4>
                                        </div>
                                        <div className="infoStaff">
                                            <LocationSearching />
                                            <h4>Lagos | Nigeria</h4>
                                        </div>
                                    </div> 
                                </div>
                            )
                        })
                    }
                </div>
                <div className="staffForm">
                    <h3>Edit</h3>
                    <form className="mainForm">
                        <div className="staffWrapper">
                            <div className="formWrapper">
                                <label className="staffLabel">Full Name: </label>
                                <input  className="staffInput" type="text" placeholder="full-name" />
                            </div>
                            <div className="formWrapper">
                                <label className="staffLabel">Department: </label>
                                <input  className="staffInput" type="text" placeholder="department" />
                            </div>
                            <div className="formWrapper">
                                <label className="staffLabel">Phone Number: </label>
                                <input  className="staffInput" type="tel" placeholder="phone"/>
                            </div>
                            <div className="formWrapper">
                                <label className="staffLabel">Email: </label>
                                <input  className="staffInput" type="email" placeholder="email" />
                            </div>
                            <div className="formWrapper">
                                <label className="staffLabel">Home Address: </label>
                                <input  className="staffInput" type="text" placeholder="address" />
                            </div>
                        </div>
                        {   StaffList.filter((data) => data.id == id)
                            .map((data) => {
                                return (
                                    <div className="publish">    
                                        <div className="imgWrap">                        
                                            <img src={data.src} alt="" className="formImg" />
                                            <label htmlFor="file"><Publish /></label>
                                            <input type="text" id="file" style={{display: "none"}} />
                                        </div>
                                        <button className="upload">Upload</button>
                                    </div>
                                )
                            })
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditStaff;
