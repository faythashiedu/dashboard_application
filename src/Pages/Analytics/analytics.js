import React from 'react';
import Charts from '../../Components/Charts/charts';
import Overview from '../../Components/Overview/overview';
import PieCharts from '../../Components/PieChart/piechart';
import { PieUserData } from '../../Components/PieChart/pieData';
import './analytics.css';

const Analytics = () => {
    return (
        <div className="analyticsMain">
            <div className="analyticsWrap">
                <h1>Analytics</h1>
                <Charts data={PieUserData} title="User Analytics" dataKey="Active" dataKey2="Inactive" strokedash="5 5" aspect={3 /1} />
                <PieCharts  />
            </div>
            <div className="overviewWrap">
                <h1>Overview</h1>
                <Overview viewTitle="Total Sales" viewRate="+2.3" viewTotal="$800.15" viewDesc="Total sales for simply products in a year, with increase or decrease ratings." />
                <Overview viewTitle="Expenses" viewRate={-2.3} viewTotal="890.2" viewDesc="Accumulated expenses with earned income." />
                <Overview viewTitle="Customers" viewRate="+2.3" viewTotal={455} viewDesc="Statistics of increase in customers purchasing simply's products." />
            </div>
        </div>
    )
}

export default Analytics
