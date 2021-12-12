import "./charts.css";
import  { LineChart,Line, XAxis,CartesianAxis,ResponsiveContainer, Tooltip } from "recharts";

const Charts = ({
    data,
    dataKey,
    title,
    dataKey2,
    dataKey3,
    strokedash,
    aspect,
}) => {
    return (
        <div className="chartsMain">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <LineChart data={data}>
                    <XAxis dataKey="title" stroke="#7E909A" />
                    <Line type="monotone" dataKey={dataKey} stroke="#EA6A47" />
                    {dataKey2 && <Line type="monotone" dataKey={dataKey2} stroke="#0091D5" strokeDasharray={strokedash} />}
                    {dataKey3 && <Line type="monotone" dataKey={dataKey3} stroke="#A5D8DD"/>}
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts;
