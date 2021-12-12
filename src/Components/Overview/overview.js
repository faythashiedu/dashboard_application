import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./overview.css";

const Overview = ({
    viewTitle,
    viewTotal,
    viewRate,
    viewDesc,
}) => {
    return (
        <div className="overview">
            <h4>{viewTitle}</h4>
            <div  className="viewAmt">
                <h2>{viewTotal}k</h2>
                <span className={(viewRate<0) ? `viewrateDown` : `viewrateUp` }>{viewRate} {(viewRate<0) ? <ArrowDownward className="down" /> : <ArrowUpward className="up" />}</span>
            </div>
            <p>{viewDesc}</p>
        </div>
    )
}

export default Overview;
