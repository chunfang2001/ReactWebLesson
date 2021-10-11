import React from 'react'

import './Chart.css'

function Chart(props){
    const percent = props.value/props.max*100 +"%";
    return <div className="chart">
        <div className="chartbar">
            <div ></div>
            <div className="chartbar-inner" style={{height:percent}}></div>
        </div>
        <div className="chart-label">{props.label}</div>
    </div>
}

export default Chart