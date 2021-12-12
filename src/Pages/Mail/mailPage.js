import MailNav from "../../Components/MailNav/mailNav";
import MainMail from "../../Components/MainMail/mainMail";
import "./mailPage.css";

const MailPage = () => {
    return (
        <div className="mailPage">
            <div className="mailPageWrap">
                <MailNav />
                <MainMail />
            </div>
        </div>
    )
}

export default MailPage
