import "./charts.css";
import  { LineChart,Line, XAxis,CartesianAxis,ResponsiveContainer, Tooltip } from "recharts";
import { ChartData } from "./chartData";

const Charts = ({
    data,
    dataKey,
    title,
    dataKey2,
    dataKey3,
}) => {
    return (
        <div className="chartsMain">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="title" stroke="#7E909A" />
                    <Line type="monotone" dataKey={dataKey} stroke="#EA6A47" />
                    {dataKey2 && <Line type="monotone" dataKey={dataKey2} stroke="#0091D5"/>}
                    {dataKey3 && <Line type="monotone" dataKey={dataKey3} stroke="#A5D8DD"/>}
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts;
