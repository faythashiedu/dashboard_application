import "./infoCard.css"
import { ArrowDownward, ArrowUpward} from "@material-ui/icons";

const InfoCard = ({
    rate,
    title,
    fund,
    bgColor
}) => {
    return (
        <div className="infoMain" style={{backgroundColor:bgColor} }>
            <span className="infoTitle">{title}</span>
            <div className="fundMain">
                <span className="funds">{fund}</span>
                <span className="rate">{rate} {(rate<0) ? <ArrowDownward className="down" /> : <ArrowUpward className="up" />}</span>
            </div>
            <span className="extra">Compared to last month</span>
        </div>
    )
}

export default InfoCard;
