import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./pieChart.css";

const Piecard = ({
    title,
    rating,
    amount,
    colors,
}) => {
    return (
        <div className="cardWrapper">
            <div className="titleWrapper">
                <p>{title}</p>
                <span className="rating">{rating} {(rating<0) ? <ArrowDownward className="down" /> : <ArrowUpward className="up" />}</span>
            </div>
            <div className="amtWrap">
                <h3>US$ {amount}k</h3>
                <span className="dot" style={{backgroundColor:colors}}></span>
            </div>
        </div>
    )
}

export default Piecard;
