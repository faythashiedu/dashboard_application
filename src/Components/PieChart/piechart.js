import React from 'react';
import "./pieChart.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Piecard from './piecard';
import { RoundData } from './pieData';

const COLORS = ["#1C4E80","#00C49F","#A5D8DD","#EA6A47", ];
  
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy + radius * Math.sin(-midAngle * RADIAN);

return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    {`${(percent * 100).toFixed(0)}%`}
    </text>
);
};

const PieCharts = () => {
    return (
        <div className="pieChartMain">
            <h2>Analytics Overview</h2>
            <div className="mainContent">
                <div className="pieCardWrap">
                    {RoundData.map((item) => {
                        return (
                            <Piecard title={item.name} amount={item.value} colors={item.colors} rating={item.rating} />
                        )
                    })}
                </div>
                <PieChart width={200} height={200}>
                <Pie
                    data={RoundData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {RoundData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                </PieChart>
            </div>
        </div>
    )
}

export default PieCharts;
