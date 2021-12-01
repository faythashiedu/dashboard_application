import Charts from "../../Components/Charts/charts";
import InfoCard from "../../Components/InfoCard/infoCard";
import "./home.css";
import { SalesData } from "../../Components/Charts/chartData"
import SmallWidgets from "../../Components/SmallWidgets/smallWidgets";
import LargeWidgets from "../../Components/LargeWidgets/largeWidgets";

const Home = () => {
    return (
        <div className="homePage">
            <div className="infoCard">
                <InfoCard rate="+12" fund="$2300" title="Revenue" bgColor="#EA6A47" extra="Compared to last month"/>
                <InfoCard rate="+12" fund="$2300" title="Revenue" bgColor="#0091D5" extra="Compared to last month"/>
                <InfoCard rate="-12" fund="$2300" title="Revenue" bgColor="#A5D8DD" extra="Compared to last month"/>
            </div>
            <Charts data={SalesData} title="Monthly Sales Analytics" dataKey="Bag_Sales" dataKey2="Shoe_Sales" dataKey3="Outfit_Sales"/>
            <div className="userWidgets">
                <LargeWidgets />
                <SmallWidgets />
            </div>
        </div>
    )
}

export default Home;

