import "./infoCard.css"
import { ArrowDownward, ArrowUpward} from "@material-ui/icons";

const InfoCard = ({
    rate,
    title,
    fund,
    bgColor,
    extra,
}) => {
    return (
        <div className="infoMain" style={{backgroundColor:bgColor} }>
            <span className="infoTitle">{title}</span>
            <div className="fundMain">
                <span className="funds">{fund}</span>
                {rate && 
                    <span className="rate">{rate} {(rate<0) ? <ArrowDownward className="down" /> : <ArrowUpward className="up" />}</span>
                }
            </div>
            <span className="extra">{extra}</span>
        </div>
    )
}

export default InfoCard;
